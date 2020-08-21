import { CancelIngestionCommandInput, CancelIngestionCommandOutput } from "./commands/CancelIngestionCommand";
import {
  CreateAccountCustomizationCommandInput,
  CreateAccountCustomizationCommandOutput,
} from "./commands/CreateAccountCustomizationCommand";
import { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "./commands/CreateDashboardCommand";
import { CreateDataSetCommandInput, CreateDataSetCommandOutput } from "./commands/CreateDataSetCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateGroupMembershipCommandInput,
  CreateGroupMembershipCommandOutput,
} from "./commands/CreateGroupMembershipCommand";
import {
  CreateIAMPolicyAssignmentCommandInput,
  CreateIAMPolicyAssignmentCommandOutput,
} from "./commands/CreateIAMPolicyAssignmentCommand";
import { CreateIngestionCommandInput, CreateIngestionCommandOutput } from "./commands/CreateIngestionCommand";
import { CreateNamespaceCommandInput, CreateNamespaceCommandOutput } from "./commands/CreateNamespaceCommand";
import {
  CreateTemplateAliasCommandInput,
  CreateTemplateAliasCommandOutput,
} from "./commands/CreateTemplateAliasCommand";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "./commands/CreateTemplateCommand";
import { CreateThemeAliasCommandInput, CreateThemeAliasCommandOutput } from "./commands/CreateThemeAliasCommand";
import { CreateThemeCommandInput, CreateThemeCommandOutput } from "./commands/CreateThemeCommand";
import {
  DeleteAccountCustomizationCommandInput,
  DeleteAccountCustomizationCommandOutput,
} from "./commands/DeleteAccountCustomizationCommand";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "./commands/DeleteDashboardCommand";
import { DeleteDataSetCommandInput, DeleteDataSetCommandOutput } from "./commands/DeleteDataSetCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteGroupMembershipCommandInput,
  DeleteGroupMembershipCommandOutput,
} from "./commands/DeleteGroupMembershipCommand";
import {
  DeleteIAMPolicyAssignmentCommandInput,
  DeleteIAMPolicyAssignmentCommandOutput,
} from "./commands/DeleteIAMPolicyAssignmentCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand";
import {
  DeleteTemplateAliasCommandInput,
  DeleteTemplateAliasCommandOutput,
} from "./commands/DeleteTemplateAliasCommand";
import { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "./commands/DeleteTemplateCommand";
import { DeleteThemeAliasCommandInput, DeleteThemeAliasCommandOutput } from "./commands/DeleteThemeAliasCommand";
import { DeleteThemeCommandInput, DeleteThemeCommandOutput } from "./commands/DeleteThemeCommand";
import {
  DeleteUserByPrincipalIdCommandInput,
  DeleteUserByPrincipalIdCommandOutput,
} from "./commands/DeleteUserByPrincipalIdCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DescribeAccountCustomizationCommandInput,
  DescribeAccountCustomizationCommandOutput,
} from "./commands/DescribeAccountCustomizationCommand";
import {
  DescribeAccountSettingsCommandInput,
  DescribeAccountSettingsCommandOutput,
} from "./commands/DescribeAccountSettingsCommand";
import { DescribeDashboardCommandInput, DescribeDashboardCommandOutput } from "./commands/DescribeDashboardCommand";
import {
  DescribeDashboardPermissionsCommandInput,
  DescribeDashboardPermissionsCommandOutput,
} from "./commands/DescribeDashboardPermissionsCommand";
import { DescribeDataSetCommandInput, DescribeDataSetCommandOutput } from "./commands/DescribeDataSetCommand";
import {
  DescribeDataSetPermissionsCommandInput,
  DescribeDataSetPermissionsCommandOutput,
} from "./commands/DescribeDataSetPermissionsCommand";
import { DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput } from "./commands/DescribeDataSourceCommand";
import {
  DescribeDataSourcePermissionsCommandInput,
  DescribeDataSourcePermissionsCommandOutput,
} from "./commands/DescribeDataSourcePermissionsCommand";
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "./commands/DescribeGroupCommand";
import {
  DescribeIAMPolicyAssignmentCommandInput,
  DescribeIAMPolicyAssignmentCommandOutput,
} from "./commands/DescribeIAMPolicyAssignmentCommand";
import { DescribeIngestionCommandInput, DescribeIngestionCommandOutput } from "./commands/DescribeIngestionCommand";
import { DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput } from "./commands/DescribeNamespaceCommand";
import {
  DescribeTemplateAliasCommandInput,
  DescribeTemplateAliasCommandOutput,
} from "./commands/DescribeTemplateAliasCommand";
import { DescribeTemplateCommandInput, DescribeTemplateCommandOutput } from "./commands/DescribeTemplateCommand";
import {
  DescribeTemplatePermissionsCommandInput,
  DescribeTemplatePermissionsCommandOutput,
} from "./commands/DescribeTemplatePermissionsCommand";
import { DescribeThemeAliasCommandInput, DescribeThemeAliasCommandOutput } from "./commands/DescribeThemeAliasCommand";
import { DescribeThemeCommandInput, DescribeThemeCommandOutput } from "./commands/DescribeThemeCommand";
import {
  DescribeThemePermissionsCommandInput,
  DescribeThemePermissionsCommandOutput,
} from "./commands/DescribeThemePermissionsCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import {
  GetDashboardEmbedUrlCommandInput,
  GetDashboardEmbedUrlCommandOutput,
} from "./commands/GetDashboardEmbedUrlCommand";
import { GetSessionEmbedUrlCommandInput, GetSessionEmbedUrlCommandOutput } from "./commands/GetSessionEmbedUrlCommand";
import {
  ListDashboardVersionsCommandInput,
  ListDashboardVersionsCommandOutput,
} from "./commands/ListDashboardVersionsCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand";
import { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "./commands/ListDataSetsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import {
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput,
} from "./commands/ListGroupMembershipsCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListIAMPolicyAssignmentsCommandInput,
  ListIAMPolicyAssignmentsCommandOutput,
} from "./commands/ListIAMPolicyAssignmentsCommand";
import {
  ListIAMPolicyAssignmentsForUserCommandInput,
  ListIAMPolicyAssignmentsForUserCommandOutput,
} from "./commands/ListIAMPolicyAssignmentsForUserCommand";
import { ListIngestionsCommandInput, ListIngestionsCommandOutput } from "./commands/ListIngestionsCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "./commands/ListNamespacesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTemplateAliasesCommandInput,
  ListTemplateAliasesCommandOutput,
} from "./commands/ListTemplateAliasesCommand";
import {
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "./commands/ListTemplateVersionsCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "./commands/ListTemplatesCommand";
import { ListThemeAliasesCommandInput, ListThemeAliasesCommandOutput } from "./commands/ListThemeAliasesCommand";
import { ListThemeVersionsCommandInput, ListThemeVersionsCommandOutput } from "./commands/ListThemeVersionsCommand";
import { ListThemesCommandInput, ListThemesCommandOutput } from "./commands/ListThemesCommand";
import { ListUserGroupsCommandInput, ListUserGroupsCommandOutput } from "./commands/ListUserGroupsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { RegisterUserCommandInput, RegisterUserCommandOutput } from "./commands/RegisterUserCommand";
import { SearchDashboardsCommandInput, SearchDashboardsCommandOutput } from "./commands/SearchDashboardsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAccountCustomizationCommandInput,
  UpdateAccountCustomizationCommandOutput,
} from "./commands/UpdateAccountCustomizationCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "./commands/UpdateDashboardCommand";
import {
  UpdateDashboardPermissionsCommandInput,
  UpdateDashboardPermissionsCommandOutput,
} from "./commands/UpdateDashboardPermissionsCommand";
import {
  UpdateDashboardPublishedVersionCommandInput,
  UpdateDashboardPublishedVersionCommandOutput,
} from "./commands/UpdateDashboardPublishedVersionCommand";
import { UpdateDataSetCommandInput, UpdateDataSetCommandOutput } from "./commands/UpdateDataSetCommand";
import {
  UpdateDataSetPermissionsCommandInput,
  UpdateDataSetPermissionsCommandOutput,
} from "./commands/UpdateDataSetPermissionsCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import {
  UpdateDataSourcePermissionsCommandInput,
  UpdateDataSourcePermissionsCommandOutput,
} from "./commands/UpdateDataSourcePermissionsCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateIAMPolicyAssignmentCommandInput,
  UpdateIAMPolicyAssignmentCommandOutput,
} from "./commands/UpdateIAMPolicyAssignmentCommand";
import {
  UpdateTemplateAliasCommandInput,
  UpdateTemplateAliasCommandOutput,
} from "./commands/UpdateTemplateAliasCommand";
import { UpdateTemplateCommandInput, UpdateTemplateCommandOutput } from "./commands/UpdateTemplateCommand";
import {
  UpdateTemplatePermissionsCommandInput,
  UpdateTemplatePermissionsCommandOutput,
} from "./commands/UpdateTemplatePermissionsCommand";
import { UpdateThemeAliasCommandInput, UpdateThemeAliasCommandOutput } from "./commands/UpdateThemeAliasCommand";
import { UpdateThemeCommandInput, UpdateThemeCommandOutput } from "./commands/UpdateThemeCommand";
import {
  UpdateThemePermissionsCommandInput,
  UpdateThemePermissionsCommandOutput,
} from "./commands/UpdateThemePermissionsCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CancelIngestionCommandInput
  | CreateAccountCustomizationCommandInput
  | CreateDashboardCommandInput
  | CreateDataSetCommandInput
  | CreateDataSourceCommandInput
  | CreateGroupCommandInput
  | CreateGroupMembershipCommandInput
  | CreateIAMPolicyAssignmentCommandInput
  | CreateIngestionCommandInput
  | CreateNamespaceCommandInput
  | CreateTemplateAliasCommandInput
  | CreateTemplateCommandInput
  | CreateThemeAliasCommandInput
  | CreateThemeCommandInput
  | DeleteAccountCustomizationCommandInput
  | DeleteDashboardCommandInput
  | DeleteDataSetCommandInput
  | DeleteDataSourceCommandInput
  | DeleteGroupCommandInput
  | DeleteGroupMembershipCommandInput
  | DeleteIAMPolicyAssignmentCommandInput
  | DeleteNamespaceCommandInput
  | DeleteTemplateAliasCommandInput
  | DeleteTemplateCommandInput
  | DeleteThemeAliasCommandInput
  | DeleteThemeCommandInput
  | DeleteUserByPrincipalIdCommandInput
  | DeleteUserCommandInput
  | DescribeAccountCustomizationCommandInput
  | DescribeAccountSettingsCommandInput
  | DescribeDashboardCommandInput
  | DescribeDashboardPermissionsCommandInput
  | DescribeDataSetCommandInput
  | DescribeDataSetPermissionsCommandInput
  | DescribeDataSourceCommandInput
  | DescribeDataSourcePermissionsCommandInput
  | DescribeGroupCommandInput
  | DescribeIAMPolicyAssignmentCommandInput
  | DescribeIngestionCommandInput
  | DescribeNamespaceCommandInput
  | DescribeTemplateAliasCommandInput
  | DescribeTemplateCommandInput
  | DescribeTemplatePermissionsCommandInput
  | DescribeThemeAliasCommandInput
  | DescribeThemeCommandInput
  | DescribeThemePermissionsCommandInput
  | DescribeUserCommandInput
  | GetDashboardEmbedUrlCommandInput
  | GetSessionEmbedUrlCommandInput
  | ListDashboardVersionsCommandInput
  | ListDashboardsCommandInput
  | ListDataSetsCommandInput
  | ListDataSourcesCommandInput
  | ListGroupMembershipsCommandInput
  | ListGroupsCommandInput
  | ListIAMPolicyAssignmentsCommandInput
  | ListIAMPolicyAssignmentsForUserCommandInput
  | ListIngestionsCommandInput
  | ListNamespacesCommandInput
  | ListTagsForResourceCommandInput
  | ListTemplateAliasesCommandInput
  | ListTemplateVersionsCommandInput
  | ListTemplatesCommandInput
  | ListThemeAliasesCommandInput
  | ListThemeVersionsCommandInput
  | ListThemesCommandInput
  | ListUserGroupsCommandInput
  | ListUsersCommandInput
  | RegisterUserCommandInput
  | SearchDashboardsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccountCustomizationCommandInput
  | UpdateAccountSettingsCommandInput
  | UpdateDashboardCommandInput
  | UpdateDashboardPermissionsCommandInput
  | UpdateDashboardPublishedVersionCommandInput
  | UpdateDataSetCommandInput
  | UpdateDataSetPermissionsCommandInput
  | UpdateDataSourceCommandInput
  | UpdateDataSourcePermissionsCommandInput
  | UpdateGroupCommandInput
  | UpdateIAMPolicyAssignmentCommandInput
  | UpdateTemplateAliasCommandInput
  | UpdateTemplateCommandInput
  | UpdateTemplatePermissionsCommandInput
  | UpdateThemeAliasCommandInput
  | UpdateThemeCommandInput
  | UpdateThemePermissionsCommandInput
  | UpdateUserCommandInput;

export type ServiceOutputTypes =
  | CancelIngestionCommandOutput
  | CreateAccountCustomizationCommandOutput
  | CreateDashboardCommandOutput
  | CreateDataSetCommandOutput
  | CreateDataSourceCommandOutput
  | CreateGroupCommandOutput
  | CreateGroupMembershipCommandOutput
  | CreateIAMPolicyAssignmentCommandOutput
  | CreateIngestionCommandOutput
  | CreateNamespaceCommandOutput
  | CreateTemplateAliasCommandOutput
  | CreateTemplateCommandOutput
  | CreateThemeAliasCommandOutput
  | CreateThemeCommandOutput
  | DeleteAccountCustomizationCommandOutput
  | DeleteDashboardCommandOutput
  | DeleteDataSetCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteGroupCommandOutput
  | DeleteGroupMembershipCommandOutput
  | DeleteIAMPolicyAssignmentCommandOutput
  | DeleteNamespaceCommandOutput
  | DeleteTemplateAliasCommandOutput
  | DeleteTemplateCommandOutput
  | DeleteThemeAliasCommandOutput
  | DeleteThemeCommandOutput
  | DeleteUserByPrincipalIdCommandOutput
  | DeleteUserCommandOutput
  | DescribeAccountCustomizationCommandOutput
  | DescribeAccountSettingsCommandOutput
  | DescribeDashboardCommandOutput
  | DescribeDashboardPermissionsCommandOutput
  | DescribeDataSetCommandOutput
  | DescribeDataSetPermissionsCommandOutput
  | DescribeDataSourceCommandOutput
  | DescribeDataSourcePermissionsCommandOutput
  | DescribeGroupCommandOutput
  | DescribeIAMPolicyAssignmentCommandOutput
  | DescribeIngestionCommandOutput
  | DescribeNamespaceCommandOutput
  | DescribeTemplateAliasCommandOutput
  | DescribeTemplateCommandOutput
  | DescribeTemplatePermissionsCommandOutput
  | DescribeThemeAliasCommandOutput
  | DescribeThemeCommandOutput
  | DescribeThemePermissionsCommandOutput
  | DescribeUserCommandOutput
  | GetDashboardEmbedUrlCommandOutput
  | GetSessionEmbedUrlCommandOutput
  | ListDashboardVersionsCommandOutput
  | ListDashboardsCommandOutput
  | ListDataSetsCommandOutput
  | ListDataSourcesCommandOutput
  | ListGroupMembershipsCommandOutput
  | ListGroupsCommandOutput
  | ListIAMPolicyAssignmentsCommandOutput
  | ListIAMPolicyAssignmentsForUserCommandOutput
  | ListIngestionsCommandOutput
  | ListNamespacesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTemplateAliasesCommandOutput
  | ListTemplateVersionsCommandOutput
  | ListTemplatesCommandOutput
  | ListThemeAliasesCommandOutput
  | ListThemeVersionsCommandOutput
  | ListThemesCommandOutput
  | ListUserGroupsCommandOutput
  | ListUsersCommandOutput
  | RegisterUserCommandOutput
  | SearchDashboardsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountCustomizationCommandOutput
  | UpdateAccountSettingsCommandOutput
  | UpdateDashboardCommandOutput
  | UpdateDashboardPermissionsCommandOutput
  | UpdateDashboardPublishedVersionCommandOutput
  | UpdateDataSetCommandOutput
  | UpdateDataSetPermissionsCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateDataSourcePermissionsCommandOutput
  | UpdateGroupCommandOutput
  | UpdateIAMPolicyAssignmentCommandOutput
  | UpdateTemplateAliasCommandOutput
  | UpdateTemplateCommandOutput
  | UpdateTemplatePermissionsCommandOutput
  | UpdateThemeAliasCommandOutput
  | UpdateThemeCommandOutput
  | UpdateThemePermissionsCommandOutput
  | UpdateUserCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type QuickSightClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type QuickSightClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>Amazon QuickSight API Reference</fullname>
 * 		       <p>Amazon QuickSight is a fully managed, serverless business intelligence service for the AWS
 * 			Cloud that makes it easy to extend data and insights to every user in your organization.
 * 			This API reference contains documentation for a programming interface that you can use
 * 			to manage Amazon QuickSight. </p>
 */
export class QuickSightClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  QuickSightClientResolvedConfig
> {
  readonly config: QuickSightClientResolvedConfig;

  constructor(configuration: QuickSightClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
