/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as models from "../models";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export class CheckoutSessions {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Retrieve all checkout sessions for the current organization and livemode.
     */
    async findAll(config?: AxiosRequestConfig): Promise<models.FindAllCheckoutSessionsResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/checkout-sessions";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new models.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: models.FindAllCheckoutSessionsResponse =
            new models.FindAllCheckoutSessionsResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.badRequestResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        models.BadRequestResponse
                    );
                } else {
                    throw new models.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.unauthorizedException = utils.objectToClass(
                        JSON.parse(decodedRes),
                        models.UnauthorizedException
                    );
                } else {
                    throw new models.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 404:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), models.ErrorT);
                } else {
                    throw new models.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                throw new models.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
        }

        return res;
    }

    /**
     * Create a new checkout session.
     */
    async create(
        req: models.CreateCheckoutSessionDto,
        config?: AxiosRequestConfig
    ): Promise<models.CreateCheckoutResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new models.CreateCheckoutSessionDto(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/checkout-sessions";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new models.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        if (reqBody == null) throw new Error("request body is required");
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: models.CreateCheckoutResponse = new models.CreateCheckoutResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 201:
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.badRequestResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        models.BadRequestResponse
                    );
                } else {
                    throw new models.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.unauthorizedException = utils.objectToClass(
                        JSON.parse(decodedRes),
                        models.UnauthorizedException
                    );
                } else {
                    throw new models.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 404:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.notFoundException = utils.objectToClass(
                        JSON.parse(decodedRes),
                        models.NotFoundException
                    );
                } else {
                    throw new models.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                throw new models.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
        }

        return res;
    }

    /**
     * Retrieve a checkout session by ID for the current organization and livemode.
     */
    async findOne(
        id: string,
        config?: AxiosRequestConfig
    ): Promise<models.FindOneCheckoutSessionResponse> {
        const req = new models.FindOneCheckoutSessionRequest({
            id: id,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(baseURL, "/checkout-sessions/{id}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new models.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: models.FindOneCheckoutSessionResponse =
            new models.FindOneCheckoutSessionResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.unauthorizedException = utils.objectToClass(
                        JSON.parse(decodedRes),
                        models.UnauthorizedException
                    );
                } else {
                    throw new models.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 404:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.notFoundException = utils.objectToClass(
                        JSON.parse(decodedRes),
                        models.NotFoundException
                    );
                } else {
                    throw new models.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                throw new models.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
        }

        return res;
    }

    /**
     * Expire a checkout session by ID for the current organization and livemode.
     */
    async expire(
        id: string,
        config?: AxiosRequestConfig
    ): Promise<models.ExpireCheckoutSessionResponse> {
        const req = new models.ExpireCheckoutSessionRequest({
            id: id,
        });
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/checkout-sessions/{id}/expire",
            req
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new models.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "patch",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: models.ExpireCheckoutSessionResponse = new models.ExpireCheckoutSessionResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.unauthorizedException = utils.objectToClass(
                        JSON.parse(decodedRes),
                        models.UnauthorizedException
                    );
                } else {
                    throw new models.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 404:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.badRequestResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        models.BadRequestResponse
                    );
                } else {
                    throw new models.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                throw new models.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
        }

        return res;
    }
}
