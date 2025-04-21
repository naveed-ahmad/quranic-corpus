export abstract class ApiBase {
    private readonly baseUrl = 'http://localhost:6382';
    //'https://qurancorpus.app/api';

    protected url = (relativePath: string) => this.baseUrl + relativePath;
}