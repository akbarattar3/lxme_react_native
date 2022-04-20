import {api_environments} from './api_environments';
let envi = 'API_DOMAIN_QA';
export function getBaseURL() {
  // envi = getEnv() || envi;  uncommen tfor multi Switch environment. i.e (prod, uat, qa) Environment
  return api_environments[envi];
}
const API_DOMAIN_QA = getBaseURL();
export const GET_CURRENCY = `${API_DOMAIN_QA}v1/utility/languages`;
// 401 error code for refereshToken expire   /admin/getadminconfiguration/
// export const GET_USER = (email) =>
//   `${API_DOMAIN_QA}/user/getuser/userid/${email}?cb=${Date.now()}`;
// export const GET_USER_ROLE_AFFLIATION = (oid) =>
//   `${API_DOMAIN_QA}/user/getuserroleaffiliation/useroid/${oid}?cb=${Date.now()}`;
// export const GET_LOGIN_LOGO_URL = (oid) =>
//   `${API_DOMAIN_QA}/dms/document/oid/${oid}?cb=${Date.now()}`;
// export const GET_BRANDING_URL = () =>
//   `${API_DOMAIN_QA}/admin/branding?cb=${Date.now()}`;
// export const GET_ROLE_PERMISSION = (roleName) =>
//   `${API_DOMAIN_QA}/role/getrolepermissionaffiliation/rolename/${roleName}?cb=${Date.now()}`;

// export const GET_ADMIN_CONFIG = () =>
//   `${API_DOMAIN_QA}/admin/getadminconfiguration/`;

// export const GET_JWT_TOKEN = () =>
//   `${API_DOMAIN_QA}/keystore/getkeystore/name/portal/`; // gives the private key

// export const GET_CLAIM_STATUS_SUMMERY = (memberType, memberOid) =>
//   `${API_DOMAIN_QA}/claim/claimsummary/membertype/${memberType}/oid/${memberOid}/family/true?cb=${Date.now()}`;
// export const GET_CLAIM_LIST = (url, pageNumber) => {
//   return `${getBaseURL()}/claim/searchclaims/membertype/${url}/pageNumber/${pageNumber}/AdminCenter/false?cb=${Date.now()}`;
// };
// export const GET_MEMBER_SUMMERY = (memberType, memberOid) => {
//   return `${API_DOMAIN_QA}/member/membersummary?cb=${Date.now()}`; ///oid/${memberOid}/membertype/${memberType}
// };
// export const GET_CLAIM_DETAILS = (claimOid) => {
//   return `${API_DOMAIN_QA}/claim/readclaims/claimoid/${claimOid}?cb=${Date.now()}`;
// };
// export const GET_DOWNLOAD_EOB = (claimNumber) => {
//   return `${API_DOMAIN_QA}/member/eob/claimnumber/${claimNumber}`;
// };
// export const GET_COVERAGE_DETAILS = (memberType, memberOid, date) => {
//   return `${API_DOMAIN_QA}/member/membercoveragesummary/membertype/${memberType}/oid/${memberOid}/covgeffectivedate/${date}?cb=${Date.now()}`;
// };
// //:https://a1m-qa.eldocomp.com/apigw/v1/member/memberaccumulators/membertype/Dependent/oid/123a9cc6-4678-4400-a8ae-653b48770562?cb=1638434362690
// export const GET_MEMBER_ACCUMULATOR = (memberType, memberOid) => {
//   return `${API_DOMAIN_QA}/member/memberaccumulators/membertype/${memberType}/oid/${memberOid}?cb=${Date.now()}`;
// };
// //S": "/member/memberdetail/membertype/",
// export const GET_MEMBER_DETAILS = (memberType, memberOid) => {
//   return `${API_DOMAIN_QA}/member/memberdetail/membertype/${memberType}/oid/${memberOid}?cb=${Date.now()}`;
// };
// export const UPDATE_USER = () => {
//   return `${API_DOMAIN_QA}/user/updateuser`;
// };
// export const GET_CONTACT_INFO = () => {
//   return `${API_DOMAIN_QA}/admin/contactinfo?cb=${Date.now()}`;
// };
// export const GET_BLOCK_LINK = () => {
//   return `${API_DOMAIN_QA}/admin/links?cb=${Date.now()}`;
// };
// export const GET_SOCIAL_LINK = () => {
//   return `${API_DOMAIN_QA}/admin/medialinks?cb=${Date.now()}`;
// };
// export const GET_PRIVACY_TERMS_URL = (oid) => {
//   return `${API_DOMAIN_QA}/admin/page/oid/${oid}`;
// };
// export const GET_DMS_API = (oid) => {
//   return `${API_DOMAIN_QA}/dms/document/oid/${oid}`;
// };
// export const ADD_USER = () => {
//   return `${API_DOMAIN_QA}/user/adduser`;
// };
// export const GENERATE_OTP = (email) => {
//   return `${API_DOMAIN_QA}/otp/generate/userid/${email}`;
// };
// export const VALIDATE_OTP = (otp, email) => {
//   return `${API_DOMAIN_QA}/otp/validate/otp/${otp}/userid/${email}`;
// };
// export const VALIDATE_MEMBER = `${API_DOMAIN_QA}/member/validatememberinfo`;

// //{{url}}/member/idcard/membertype/Employee/oid/37b5edd4-9531-4fb8-88b9-022e606fe1c8
// export const GET_ID_CARD = (memberType, memberId) => {
//   return `${API_DOMAIN_QA}/member/idcard/membertype/${memberType}/oid/${memberId}`;
// };
// export const GET_PROVIDER_NAME = (name, type, pageNumber) => {
//   return `${API_DOMAIN_QA}/provider/doctor/${type}/${name}/pagenumber/${pageNumber}/pagesize/${50}`;
// };
// export const GET_RESOURCES = (url) => {
//   return `${getBaseURL()}/admin/searchresources/${url}`;
// };
// export const GET_RESOURCE_GROUP = `${getBaseURL()}/admin/searchresources/resourcegroup/${true}`;
