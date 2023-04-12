import path from "node:path";
import {
	Server,
	ServerCredentials,
	ServerUnaryCall,
	loadPackageDefinition,
	sendUnaryData,
} from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as dateFns from "date-fns";
import { ProtoGrpcType } from "./proto/rental";
import { RentalRequest, RentalResponse } from "./proto/rentalCarsPackage";
import { carsModels, rentalList } from "./data/db";
import { env } from "./env";

const packageDef = protoLoader.loadSync(
	path.resolve(__dirname, "proto", "rental.proto")
);
const grpcObj = loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;
const rentalPackage = grpcObj.rentalCarsPackage;

const checkAvailability = (
	call: ServerUnaryCall<RentalRequest, RentalResponse>,
	callback: sendUnaryData<RentalResponse>
) => {
	const { cpf, modelo, dataInicial, dataFinal } = call.request;

	if (!cpf || !modelo || !dataInicial || !dataFinal) {
		callback(null, { disponibilidade: false, valor: 0 });
		return;
	}

	const requestStartDate = dateFns.parseISO(dataInicial);
	const requestEndDate = dateFns.parseISO(dataFinal);

	const areOverlappingDate = rentalList.some((rental) => {
		return dateFns.areIntervalsOverlapping(
			{
				start: rental.startDate,
				end: rental.endDate,
			},
			{
				start: requestStartDate,
				end: requestEndDate,
			},
			{
				inclusive: true,
			}
		);
	});

	if (areOverlappingDate) {
		callback(null, { disponibilidade: false, valor: 0 });
		return;
	}

	const car = carsModels.find(
		(car) => car.model.toLowerCase().trim() === modelo.toLowerCase().trim()
	);

	if (!car) {
		callback(null, { disponibilidade: false, valor: 0 });
		return;
	}

	const value = dateFns.differenceInHours(requestEndDate, requestStartDate);

	rentalList.push({
		model: car,
		cpf: cpf,
		startDate: requestStartDate,
		endDate: requestEndDate,
	});

	callback(null, { disponibilidade: true, valor: car.value * value });
	return;
};

function main() {
	const server = getServer();

	server.bindAsync(
		`0.0.0.0:${env.port}`,
		ServerCredentials.createInsecure(),
		(err, port) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log(`Server running at http://localhost:${port}`);
			server.start();
		}
	);
}

function getServer() {
	const server = new Server();
	server.addService(rentalPackage.RentalService.service, {
		CheckAvailability: checkAvailability,
	});

	return server;
}

main();
