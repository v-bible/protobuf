// @generated by protoc-gen-es v2.2.4 with parameter "target=ts,import_extension=js"
// @generated from file account/v1/account.proto (package account.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../google/api/annotations_pb.js";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../../protoc-gen-openapiv2/options/annotations_pb.js";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file account/v1/account.proto.
 */
export const file_account_v1_account: GenFile = /*@__PURE__*/
  fileDesc("ChhhY2NvdW50L3YxL2FjY291bnQucHJvdG8SCmFjY291bnQudjEigwEKB0FjY291bnQSEgoKYWNjb3VudF9pZBgBIAEoCRINCgVlbWFpbBgCIAEoCRISCgpmaXJzdF9uYW1lGAMgASgJEhEKCWxhc3RfbmFtZRgEIAEoCRIuCgpjcmVhdGVkX2F0GAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCKUAQoOQWNjb3VudFNlc3Npb24SEgoKYWNjb3VudF9pZBgBIAEoCRIpCgVzdGFydBgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASLwoLbGFzdF9hY2Nlc3MYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhIKCmlwX2FkZHJlc3MYBCABKAkiKwoVR2V0QWNjb3VudEJ5SWRSZXF1ZXN0EhIKCmFjY291bnRfaWQYASABKAkiPgoWR2V0QWNjb3VudEJ5SWRSZXNwb25zZRIkCgdhY2NvdW50GAEgASgLMhMuYWNjb3VudC52MS5BY2NvdW50Ii4KGEdldEFjY291bnRTZXNzaW9uUmVxdWVzdBISCgphY2NvdW50X2lkGAEgASgJIkgKGUdldEFjY291bnRTZXNzaW9uUmVzcG9uc2USKwoHc2Vzc2lvbhgBIAMoCzIaLmFjY291bnQudjEuQWNjb3VudFNlc3Npb24itQEKFFVwZGF0ZUFjY291bnRSZXF1ZXN0EhIKCmFjY291bnRfaWQYASABKAkSMwoEYm9keRgCIAEoCzIlLmFjY291bnQudjEuVXBkYXRlQWNjb3VudFJlcXVlc3QuQm9keRpUCgRCb2R5EhcKCmZpcnN0X25hbWUYASABKAlIAIgBARIWCglsYXN0X25hbWUYAiABKAlIAYgBAUINCgtfZmlyc3RfbmFtZUIMCgpfbGFzdF9uYW1lIj0KFVVwZGF0ZUFjY291bnRSZXNwb25zZRIkCgdhY2NvdW50GAEgASgLMhMuYWNjb3VudC52MS5BY2NvdW50IokBChxVcGRhdGVBY2NvdW50UGFzc3dvcmRSZXF1ZXN0EhIKCmFjY291bnRfaWQYASABKAkSOwoEYm9keRgCIAEoCzItLmFjY291bnQudjEuVXBkYXRlQWNjb3VudFBhc3N3b3JkUmVxdWVzdC5Cb2R5GhgKBEJvZHkSEAoIcGFzc3dvcmQYASABKAkiRQodVXBkYXRlQWNjb3VudFBhc3N3b3JkUmVzcG9uc2USJAoHYWNjb3VudBgBIAEoCzITLmFjY291bnQudjEuQWNjb3VudCIqChREZWxldGVBY2NvdW50UmVxdWVzdBISCgphY2NvdW50X2lkGAEgASgJIj0KFURlbGV0ZUFjY291bnRSZXNwb25zZRIkCgdhY2NvdW50GAEgASgLMhMuYWNjb3VudC52MS5BY2NvdW50Mq4FCg5BY2NvdW50U2VydmljZRJ5Cg5HZXRBY2NvdW50QnlJZBIhLmFjY291bnQudjEuR2V0QWNjb3VudEJ5SWRSZXF1ZXN0GiIuYWNjb3VudC52MS5HZXRBY2NvdW50QnlJZFJlc3BvbnNlIiCC0+STAhoSGC92MS9hY2NvdW50L3thY2NvdW50X2lkfRKKAQoRR2V0QWNjb3VudFNlc3Npb24SJC5hY2NvdW50LnYxLkdldEFjY291bnRTZXNzaW9uUmVxdWVzdBolLmFjY291bnQudjEuR2V0QWNjb3VudFNlc3Npb25SZXNwb25zZSIogtPkkwIiEiAvdjEvYWNjb3VudC97YWNjb3VudF9pZH0vc2Vzc2lvbhJ8Cg1VcGRhdGVBY2NvdW50EiAuYWNjb3VudC52MS5VcGRhdGVBY2NvdW50UmVxdWVzdBohLmFjY291bnQudjEuVXBkYXRlQWNjb3VudFJlc3BvbnNlIiaC0+STAiA6BGJvZHkaGC92MS9hY2NvdW50L3thY2NvdW50X2lkfRKdAQoVVXBkYXRlQWNjb3VudFBhc3N3b3JkEiguYWNjb3VudC52MS5VcGRhdGVBY2NvdW50UGFzc3dvcmRSZXF1ZXN0GikuYWNjb3VudC52MS5VcGRhdGVBY2NvdW50UGFzc3dvcmRSZXNwb25zZSIvgtPkkwIpOgRib2R5GiEvdjEvYWNjb3VudC97YWNjb3VudF9pZH0vcGFzc3dvcmQSdgoNRGVsZXRlQWNjb3VudBIgLmFjY291bnQudjEuRGVsZXRlQWNjb3VudFJlcXVlc3QaIS5hY2NvdW50LnYxLkRlbGV0ZUFjY291bnRSZXNwb25zZSIggtPkkwIaKhgvdjEvYWNjb3VudC97YWNjb3VudF9pZH1CiAMKDmNvbS5hY2NvdW50LnYxQgxBY2NvdW50UHJvdG9QAVo6Z2l0aHViLmNvbS92LWJpYmxlL3Byb3RvYnVmL3BrZy9wcm90by9hY2NvdW50L3YxO2FjY291bnR2MaICA0FYWKoCCkFjY291bnQuVjHKAgpBY2NvdW50XFYx4gIWQWNjb3VudFxWMVxHUEJNZXRhZGF0YeoCC0FjY291bnQ6OlYxkkHhARJwChhCaWJsZSBBY2NvdW50IHNlcnZlciBBUEkSGEJpYmxlIEFjY291bnQgc2VydmVyIEFQSSIzCg5EdWNreU1vbW8yMDAxMhIhaHR0cHM6Ly9naXRodWIuY29tL0R1Y2t5TW9tbzIwMDEyMgUxLjAuMCIEL2FwaVpZClcKBmJlYXJlchJNCAISOEF1dGhlbnRpY2F0aW9uIHRva2VuLCBwcmVmaXhlZCBieSBCZWFyZXI6IEJlYXJlciA8dG9rZW4+Gg1BdXRob3JpemF0aW9uIAJiDAoKCgZiZWFyZXISAGIGcHJvdG8z", [file_google_api_annotations, file_google_protobuf_timestamp, file_protoc_gen_openapiv2_options_annotations]);

/**
 * @generated from message account.v1.Account
 */
export type Account = Message<"account.v1.Account"> & {
  /**
   * Account ID
   *
   * @generated from field: string account_id = 1;
   */
  accountId: string;

  /**
   * Account email
   *
   * @generated from field: string email = 2;
   */
  email: string;

  /**
   * Account first name
   *
   * @generated from field: string first_name = 3;
   */
  firstName: string;

  /**
   * Account last name
   *
   * @generated from field: string last_name = 4;
   */
  lastName: string;

  /**
   * Account creation time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp created_at = 5;
   */
  createdAt?: Timestamp;
};

/**
 * Describes the message account.v1.Account.
 * Use `create(AccountSchema)` to create a new message.
 */
export const AccountSchema: GenMessage<Account> = /*@__PURE__*/
  messageDesc(file_account_v1_account, 0);

/**
 * @generated from message account.v1.AccountSession
 */
export type AccountSession = Message<"account.v1.AccountSession"> & {
  /**
   * Account ID
   *
   * @generated from field: string account_id = 1;
   */
  accountId: string;

  /**
   * Account session start time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp start = 2;
   */
  start?: Timestamp;

  /**
   * Account session last access time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp last_access = 3;
   */
  lastAccess?: Timestamp;

  /**
   * Account session IP address
   *
   * @generated from field: string ip_address = 4;
   */
  ipAddress: string;
};

/**
 * Describes the message account.v1.AccountSession.
 * Use `create(AccountSessionSchema)` to create a new message.
 */
export const AccountSessionSchema: GenMessage<AccountSession> = /*@__PURE__*/
  messageDesc(file_account_v1_account, 1);

/**
 * @generated from message account.v1.GetAccountByIdRequest
 */
export type GetAccountByIdRequest = Message<"account.v1.GetAccountByIdRequest"> & {
  /**
   * Account ID
   *
   * @generated from field: string account_id = 1;
   */
  accountId: string;
};

/**
 * Describes the message account.v1.GetAccountByIdRequest.
 * Use `create(GetAccountByIdRequestSchema)` to create a new message.
 */
export const GetAccountByIdRequestSchema: GenMessage<GetAccountByIdRequest> = /*@__PURE__*/
  messageDesc(file_account_v1_account, 2);

/**
 * @generated from message account.v1.GetAccountByIdResponse
 */
export type GetAccountByIdResponse = Message<"account.v1.GetAccountByIdResponse"> & {
  /**
   * Account object
   *
   * @generated from field: account.v1.Account account = 1;
   */
  account?: Account;
};

/**
 * Describes the message account.v1.GetAccountByIdResponse.
 * Use `create(GetAccountByIdResponseSchema)` to create a new message.
 */
export const GetAccountByIdResponseSchema: GenMessage<GetAccountByIdResponse> = /*@__PURE__*/
  messageDesc(file_account_v1_account, 3);

/**
 * @generated from message account.v1.GetAccountSessionRequest
 */
export type GetAccountSessionRequest = Message<"account.v1.GetAccountSessionRequest"> & {
  /**
   * Account ID
   *
   * @generated from field: string account_id = 1;
   */
  accountId: string;
};

/**
 * Describes the message account.v1.GetAccountSessionRequest.
 * Use `create(GetAccountSessionRequestSchema)` to create a new message.
 */
export const GetAccountSessionRequestSchema: GenMessage<GetAccountSessionRequest> = /*@__PURE__*/
  messageDesc(file_account_v1_account, 4);

/**
 * @generated from message account.v1.GetAccountSessionResponse
 */
export type GetAccountSessionResponse = Message<"account.v1.GetAccountSessionResponse"> & {
  /**
   * Account session object
   *
   * @generated from field: repeated account.v1.AccountSession session = 1;
   */
  session: AccountSession[];
};

/**
 * Describes the message account.v1.GetAccountSessionResponse.
 * Use `create(GetAccountSessionResponseSchema)` to create a new message.
 */
export const GetAccountSessionResponseSchema: GenMessage<GetAccountSessionResponse> = /*@__PURE__*/
  messageDesc(file_account_v1_account, 5);

/**
 * @generated from message account.v1.UpdateAccountRequest
 */
export type UpdateAccountRequest = Message<"account.v1.UpdateAccountRequest"> & {
  /**
   * Account ID
   *
   * @generated from field: string account_id = 1;
   */
  accountId: string;

  /**
   * Request body
   *
   * @generated from field: account.v1.UpdateAccountRequest.Body body = 2;
   */
  body?: UpdateAccountRequest_Body;
};

/**
 * Describes the message account.v1.UpdateAccountRequest.
 * Use `create(UpdateAccountRequestSchema)` to create a new message.
 */
export const UpdateAccountRequestSchema: GenMessage<UpdateAccountRequest> = /*@__PURE__*/
  messageDesc(file_account_v1_account, 6);

/**
 * Request body message
 *
 * @generated from message account.v1.UpdateAccountRequest.Body
 */
export type UpdateAccountRequest_Body = Message<"account.v1.UpdateAccountRequest.Body"> & {
  /**
   * Account first name
   *
   * @generated from field: optional string first_name = 1;
   */
  firstName?: string;

  /**
   * Account last name
   *
   * @generated from field: optional string last_name = 2;
   */
  lastName?: string;
};

/**
 * Describes the message account.v1.UpdateAccountRequest.Body.
 * Use `create(UpdateAccountRequest_BodySchema)` to create a new message.
 */
export const UpdateAccountRequest_BodySchema: GenMessage<UpdateAccountRequest_Body> = /*@__PURE__*/
  messageDesc(file_account_v1_account, 6, 0);

/**
 * @generated from message account.v1.UpdateAccountResponse
 */
export type UpdateAccountResponse = Message<"account.v1.UpdateAccountResponse"> & {
  /**
   * Account object
   *
   * @generated from field: account.v1.Account account = 1;
   */
  account?: Account;
};

/**
 * Describes the message account.v1.UpdateAccountResponse.
 * Use `create(UpdateAccountResponseSchema)` to create a new message.
 */
export const UpdateAccountResponseSchema: GenMessage<UpdateAccountResponse> = /*@__PURE__*/
  messageDesc(file_account_v1_account, 7);

/**
 * @generated from message account.v1.UpdateAccountPasswordRequest
 */
export type UpdateAccountPasswordRequest = Message<"account.v1.UpdateAccountPasswordRequest"> & {
  /**
   * Account ID
   *
   * @generated from field: string account_id = 1;
   */
  accountId: string;

  /**
   * Request body
   *
   * @generated from field: account.v1.UpdateAccountPasswordRequest.Body body = 2;
   */
  body?: UpdateAccountPasswordRequest_Body;
};

/**
 * Describes the message account.v1.UpdateAccountPasswordRequest.
 * Use `create(UpdateAccountPasswordRequestSchema)` to create a new message.
 */
export const UpdateAccountPasswordRequestSchema: GenMessage<UpdateAccountPasswordRequest> = /*@__PURE__*/
  messageDesc(file_account_v1_account, 8);

/**
 * Request body message
 *
 * @generated from message account.v1.UpdateAccountPasswordRequest.Body
 */
export type UpdateAccountPasswordRequest_Body = Message<"account.v1.UpdateAccountPasswordRequest.Body"> & {
  /**
   * Account password
   *
   * @generated from field: string password = 1;
   */
  password: string;
};

/**
 * Describes the message account.v1.UpdateAccountPasswordRequest.Body.
 * Use `create(UpdateAccountPasswordRequest_BodySchema)` to create a new message.
 */
export const UpdateAccountPasswordRequest_BodySchema: GenMessage<UpdateAccountPasswordRequest_Body> = /*@__PURE__*/
  messageDesc(file_account_v1_account, 8, 0);

/**
 * @generated from message account.v1.UpdateAccountPasswordResponse
 */
export type UpdateAccountPasswordResponse = Message<"account.v1.UpdateAccountPasswordResponse"> & {
  /**
   * Account object
   *
   * @generated from field: account.v1.Account account = 1;
   */
  account?: Account;
};

/**
 * Describes the message account.v1.UpdateAccountPasswordResponse.
 * Use `create(UpdateAccountPasswordResponseSchema)` to create a new message.
 */
export const UpdateAccountPasswordResponseSchema: GenMessage<UpdateAccountPasswordResponse> = /*@__PURE__*/
  messageDesc(file_account_v1_account, 9);

/**
 * @generated from message account.v1.DeleteAccountRequest
 */
export type DeleteAccountRequest = Message<"account.v1.DeleteAccountRequest"> & {
  /**
   * Account ID
   *
   * @generated from field: string account_id = 1;
   */
  accountId: string;
};

/**
 * Describes the message account.v1.DeleteAccountRequest.
 * Use `create(DeleteAccountRequestSchema)` to create a new message.
 */
export const DeleteAccountRequestSchema: GenMessage<DeleteAccountRequest> = /*@__PURE__*/
  messageDesc(file_account_v1_account, 10);

/**
 * @generated from message account.v1.DeleteAccountResponse
 */
export type DeleteAccountResponse = Message<"account.v1.DeleteAccountResponse"> & {
  /**
   * Account object
   *
   * @generated from field: account.v1.Account account = 1;
   */
  account?: Account;
};

/**
 * Describes the message account.v1.DeleteAccountResponse.
 * Use `create(DeleteAccountResponseSchema)` to create a new message.
 */
export const DeleteAccountResponseSchema: GenMessage<DeleteAccountResponse> = /*@__PURE__*/
  messageDesc(file_account_v1_account, 11);

/**
 * Account service definition
 *
 * @generated from service account.v1.AccountService
 */
export const AccountService: GenService<{
  /**
   * Retrieve account by ID
   *
   * @generated from rpc account.v1.AccountService.GetAccountById
   */
  getAccountById: {
    methodKind: "unary";
    input: typeof GetAccountByIdRequestSchema;
    output: typeof GetAccountByIdResponseSchema;
  },
  /**
   * Retrieve account session by ID
   *
   * @generated from rpc account.v1.AccountService.GetAccountSession
   */
  getAccountSession: {
    methodKind: "unary";
    input: typeof GetAccountSessionRequestSchema;
    output: typeof GetAccountSessionResponseSchema;
  },
  /**
   * Update account by ID
   *
   * @generated from rpc account.v1.AccountService.UpdateAccount
   */
  updateAccount: {
    methodKind: "unary";
    input: typeof UpdateAccountRequestSchema;
    output: typeof UpdateAccountResponseSchema;
  },
  /**
   * Update account password by ID
   *
   * @generated from rpc account.v1.AccountService.UpdateAccountPassword
   */
  updateAccountPassword: {
    methodKind: "unary";
    input: typeof UpdateAccountPasswordRequestSchema;
    output: typeof UpdateAccountPasswordResponseSchema;
  },
  /**
   * Delete account by ID
   *
   * @generated from rpc account.v1.AccountService.DeleteAccount
   */
  deleteAccount: {
    methodKind: "unary";
    input: typeof DeleteAccountRequestSchema;
    output: typeof DeleteAccountResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_account_v1_account, 0);

