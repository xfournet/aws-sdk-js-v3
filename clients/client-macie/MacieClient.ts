import {
  AssociateMemberAccountCommandInput,
  AssociateMemberAccountCommandOutput,
} from "./commands/AssociateMemberAccountCommand";
import {
  AssociateS3ResourcesCommandInput,
  AssociateS3ResourcesCommandOutput,
} from "./commands/AssociateS3ResourcesCommand";
import {
  DisassociateMemberAccountCommandInput,
  DisassociateMemberAccountCommandOutput,
} from "./commands/DisassociateMemberAccountCommand";
import {
  DisassociateS3ResourcesCommandInput,
  DisassociateS3ResourcesCommandOutput,
} from "./commands/DisassociateS3ResourcesCommand";
import { ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput } from "./commands/ListMemberAccountsCommand";
import { ListS3ResourcesCommandInput, ListS3ResourcesCommandOutput } from "./commands/ListS3ResourcesCommand";
import { UpdateS3ResourcesCommandInput, UpdateS3ResourcesCommandOutput } from "./commands/UpdateS3ResourcesCommand";
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
  | AssociateMemberAccountCommandInput
  | AssociateS3ResourcesCommandInput
  | DisassociateMemberAccountCommandInput
  | DisassociateS3ResourcesCommandInput
  | ListMemberAccountsCommandInput
  | ListS3ResourcesCommandInput
  | UpdateS3ResourcesCommandInput;

export type ServiceOutputTypes =
  | AssociateMemberAccountCommandOutput
  | AssociateS3ResourcesCommandOutput
  | DisassociateMemberAccountCommandOutput
  | DisassociateS3ResourcesCommandOutput
  | ListMemberAccountsCommandOutput
  | ListS3ResourcesCommandOutput
  | UpdateS3ResourcesCommandOutput;

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

export type MacieClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type MacieClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>Amazon Macie Classic</fullname>
 *          <p>Amazon Macie Classic is a security service that uses machine learning to automatically
 *       discover, classify, and protect sensitive data in AWS. Macie Classic recognizes sensitive data
 *       such as personally identifiable information (PII) or intellectual property, and provides you
 *       with dashboards and alerts that give visibility into how this data is being accessed or moved.
 *       For more information, see the <a href="https://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html">Amazon Macie
 *         Classic User Guide</a>. </p>
 *          <p>A new Amazon Macie is now available with significant design improvements and additional
 *       features, at a lower price and in most AWS Regions. We encourage you to explore and use
 *       the new and improved features, and benefit from the reduced cost. To learn about features and
 *       pricing for the new Amazon Macie, see <a href="https://aws.amazon.com/macie/">Amazon Macie</a>.</p>
 */
export class MacieClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MacieClientResolvedConfig
> {
  readonly config: MacieClientResolvedConfig;

  constructor(configuration: MacieClientConfig) {
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
