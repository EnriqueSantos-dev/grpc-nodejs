import path from "node:path";
import { credentials, loadPackageDefinition } from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/rental";
import { RentalRequest } from "./proto/rentalCarsPackage";
import { env } from "./env";

const packageDef = protoLoader.loadSync(
	path.resolve(__dirname, "proto", "rental.proto")
);
const grpcObj = loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;
const rentalPackage = grpcObj.rentalCarsPackage;

function main() {
	const client = new rentalPackage.RentalService(
		`0.0.0.0:${env.port}`,
		credentials.createInsecure()
	);

	const request = {
		dataInicial: "2021-01-01T10:30:00.000Z",
		dataFinal: "2021-01-01T20:30:00.000Z",
		modelo: "Volkswagen Golf GTI",
		cpf: "123.456.789-00",
	} satisfies RentalRequest;

	client.CheckAvailability(request, (err, response) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(response);
	});
}

main();
