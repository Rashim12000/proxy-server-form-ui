import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class UserSettingService {


    constructor(private http: HttpClient) { }

    submitPayment(payment) {

        return this.http.post<Response>(
            "http://localhost:9090/proxy/payment",
            payment
        );
    }

    getMerchant() {
        return this.http.get<any>(
            "http://localhost:9090/proxy/merchants"
        );
    }
}
