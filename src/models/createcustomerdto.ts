/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { CreateAddressDto } from "./createaddressdto";
import { Expose, Type } from "class-transformer";

/**
 * Additional metadata for the  customer.
 */
export class CreateCustomerDtoMetadata extends SpeakeasyBase {}

export class CreateCustomerDto extends SpeakeasyBase {
    /**
     * The primary email address of the user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "emailAddress" })
    emailAddress: string;

    /**
     * The first name of the customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "firstName" })
    firstName?: string;

    /**
     * The last name of the customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lastName" })
    lastName?: string;

    /**
     * The phone number of the customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phoneNumber" })
    phoneNumber?: string;

    /**
     * The address of the customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    @Type(() => CreateAddressDto)
    address?: CreateAddressDto;

    /**
     * The shipping address of the customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shippingAddress" })
    @Type(() => CreateAddressDto)
    shippingAddress?: CreateAddressDto;

    /**
     * Additional metadata for the  customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => CreateCustomerDtoMetadata)
    metadata?: CreateCustomerDtoMetadata;
}
