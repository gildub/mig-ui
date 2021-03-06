import {
  clusterExample1,
  clusterExample2,
} from '../app/home/pages/PlansPage/components/Wizard/__mocks__/fixturesCluster';

export const initialStore = {
  router: {
    location: {
      hash: '',
      key: 'jznh4g',
      pathname: '/clusters',
      query: {},
      search: '',
      state: undefined,
    },
    action: 'REPLACE',
  },
  auth: {
    certError: null,
    isAdmin: true,
    isHideWelcomeScreen: true,
    migMeta: {
      clusterApi: 'https://api.cluster-v4312.com:6443',
      configNamespace: 'openshift-config',
      discoveryApi: 'https://discovery-openshift-migration.apps.cluster-v413.com',
      namespace: 'openshift-migration',
    },
    oauth: {
      clientId: 'mig-ui',
      clientSecret: 'bWlncmF0aW9ucy5',
      redirectUri: 'http://localhost:9000/login/callback',
      userScope: 'user:full',
    },
    oauthMeta: null,
    tenantNamespaceList: '[]',
    user: {
      access_token: 'GFfmNdlZaU_H2uzLm99hjiY-YxsXuD5MC5R',
      expires_in: 86400,
      expiry_time: 1596206007,
      login_time: 1596119607,
      scope: 'user:full',
      token_type: 'Bearer',
    },
  },
  common: {
    successText: null,
    errorText: null,
    progressText: null,
    errorModalObject: null,
  },
  cluster: {
    currentCluster: null,
    isFetchingInitialClusters: false,
    isPolling: true,
    isError: false,
    isFetching: false,
    clusterList: [clusterExample1, clusterExample2],
    searchTerm: '',
    addEditStatus: { mode: 'add', state: 'pending' },
  },
  storage: {
    isPolling: true,
    isFetching: false,
    isError: false,
    isLoadingStorage: false,
    migStorageList: [],
    searchTerm: '',
    addEditStatus: '{mode: "add", state: "pending"}',
    isFetchingInitialStorages: false,
  },
  plan: {
    isPVError: false,
    isFetchingPVList: false,
    isPVPolling: false,
    isFetchingPVResources: false,
    isCheckingPlanStatus: false,
    isError: false,
    isFetching: false,
    migPlanList: [],
    planSearchText: '',
    isFetchingNamespaceList: false,
    sourceClusterNamespaces: [],
    currentPlan: null,
    isPollingStatus: false,
    isPolling: true,
    pvResourceList: [],
    currentPlanStatus: '{errorMessage: "", state: "Pending"}',
    lockedPlanList: [],
    isFetchingHookList: false,
    migHookList: [],
    hookAddEditStatus: '{mode: "add", state: "pending"}',
    isFetchingInitialPlans: false,
  },
  token: {
    isPolling: false,
    isError: false,
    isFetching: false,
    tokenList: [],
    isFetchingInitialTokens: true,
    tokenAddEditStatus: '{mode: "add", state: "pending"}',
    currentToken: null,
    isAddEditTokenModalOpen: false,
    associatedCluster: null,
  },
  logs: {
    isFetchingLogs: true,
    logErrorMsg: null,
    report: {},
    log: [],
    archive: '',
  },
  debug: {
    isLoading: true,
    tree: null,
    objJson: null,
    errMsg: null,
  },
  _persist: {
    version: -1,
    rehydrated: true,
  },
};
