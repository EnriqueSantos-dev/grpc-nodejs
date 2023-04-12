// Original file: src/proto/rental.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { RentalRequest as _rentalCarsPackage_RentalRequest, RentalRequest__Output as _rentalCarsPackage_RentalRequest__Output } from '../rentalCarsPackage/RentalRequest';
import type { RentalResponse as _rentalCarsPackage_RentalResponse, RentalResponse__Output as _rentalCarsPackage_RentalResponse__Output } from '../rentalCarsPackage/RentalResponse';

export interface RentalServiceClient extends grpc.Client {
  CheckAvailability(argument: _rentalCarsPackage_RentalRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rentalCarsPackage_RentalResponse__Output>): grpc.ClientUnaryCall;
  CheckAvailability(argument: _rentalCarsPackage_RentalRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rentalCarsPackage_RentalResponse__Output>): grpc.ClientUnaryCall;
  CheckAvailability(argument: _rentalCarsPackage_RentalRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rentalCarsPackage_RentalResponse__Output>): grpc.ClientUnaryCall;
  CheckAvailability(argument: _rentalCarsPackage_RentalRequest, callback: grpc.requestCallback<_rentalCarsPackage_RentalResponse__Output>): grpc.ClientUnaryCall;
  checkAvailability(argument: _rentalCarsPackage_RentalRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_rentalCarsPackage_RentalResponse__Output>): grpc.ClientUnaryCall;
  checkAvailability(argument: _rentalCarsPackage_RentalRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_rentalCarsPackage_RentalResponse__Output>): grpc.ClientUnaryCall;
  checkAvailability(argument: _rentalCarsPackage_RentalRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_rentalCarsPackage_RentalResponse__Output>): grpc.ClientUnaryCall;
  checkAvailability(argument: _rentalCarsPackage_RentalRequest, callback: grpc.requestCallback<_rentalCarsPackage_RentalResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface RentalServiceHandlers extends grpc.UntypedServiceImplementation {
  CheckAvailability: grpc.handleUnaryCall<_rentalCarsPackage_RentalRequest__Output, _rentalCarsPackage_RentalResponse>;
  
}

export interface RentalServiceDefinition extends grpc.ServiceDefinition {
  CheckAvailability: MethodDefinition<_rentalCarsPackage_RentalRequest, _rentalCarsPackage_RentalResponse, _rentalCarsPackage_RentalRequest__Output, _rentalCarsPackage_RentalResponse__Output>
}
