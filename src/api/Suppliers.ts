import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Supplier } from '../models/Supplier';
import { SupplierBuyer } from '../models/SupplierBuyer';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import http from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class Suppliers {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.List = this.List.bind(this);
        this.Create = this.Create.bind(this);
        this.Get = this.Get.bind(this);
        this.Save = this.Save.bind(this);
        this.Delete = this.Delete.bind(this);
        this.Patch = this.Patch.bind(this);
        this.ListBuyers = this.ListBuyers.bind(this);
        this.SaveBuyer = this.SaveBuyer.bind(this);
        this.DeleteBuyer = this.DeleteBuyer.bind(this);
    }

   /**
    * Get a list of suppliers. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async List<TSupplier extends Supplier>(listOptions: { search?: string, searchOn?: Searchable<'Suppliers.List'>, sortBy?: Sortable<'Suppliers.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSupplier>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/suppliers`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new supplier. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/create|api docs} for more info 
    * 
    * @param supplier Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Create<TSupplier extends Supplier>(supplier: Supplier,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSupplier>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.post(`/suppliers`, { ...requestOptions, data: supplier, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single supplier. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/get|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Get<TSupplier extends Supplier>(supplierID: string, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSupplier>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/suppliers/${supplierID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a supplier. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/save|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param supplier Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Save<TSupplier extends Supplier>(supplierID: string, supplier: Supplier,requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSupplier>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/suppliers/${supplierID}`, { ...requestOptions, data: supplier, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a supplier. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/delete|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Delete(supplierID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/suppliers/${supplierID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a supplier. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/patch|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param supplier 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async Patch<TSupplier extends Supplier>(supplierID: string, supplier: PartialDeep<Supplier>, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TSupplier>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.patch(`/suppliers/${supplierID}`, { ...requestOptions, data: supplier, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a list of supplier buyers. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/list-buyers|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async ListBuyers<TSupplierBuyer extends SupplierBuyer>(supplierID: string, listOptions: { search?: string, searchOn?: Searchable<'Suppliers.ListBuyers'>, sortBy?: Sortable<'Suppliers.ListBuyers'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TSupplierBuyer>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.get(`/suppliers/${supplierID}/buyers`, { ...requestOptions, impersonating, params: listOptions  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a supplier buyer. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/save-buyer|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param buyerID ID of the buyer.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async SaveBuyer(supplierID: string, buyerID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.put(`/suppliers/${supplierID}/buyers/${buyerID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a supplier buyer. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/delete-buyer|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param buyerID ID of the buyer.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    * @param requestOptions.requestType Provide a value that can be used to identify the type of request. Useful for error logs.
    */
    public async DeleteBuyer(supplierID: string, buyerID: string, requestOptions: RequestOptions = {} ): Promise<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await http.delete(`/suppliers/${supplierID}/buyers/${buyerID}`, { ...requestOptions, impersonating,  } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Suppliers.As().List() // lists Suppliers using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Suppliers();