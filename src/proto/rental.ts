import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RentalServiceClient as _rentalCarsPackage_RentalServiceClient, RentalServiceDefinition as _rentalCarsPackage_RentalServiceDefinition } from './rentalCarsPackage/RentalService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  rentalCarsPackage: {
    RentalRequest: MessageTypeDefinition
    RentalResponse: MessageTypeDefinition
    RentalService: SubtypeConstructor<typeof grpc.Client, _rentalCarsPackage_RentalServiceClient> & { service: _rentalCarsPackage_RentalServiceDefinition }
  }
}

