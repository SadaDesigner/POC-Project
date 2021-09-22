import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
export class IntercepterService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
      console.log('calling http interceptor')

    //   let changeurl = req.clone({
    //       url: 'https://testurl'
    //   }) 

    //   if(req.url == "https://jsonplaceholder.typicode.com/posts") {
    //       return next.handle(changeurl)
          
    //   }

      let sendingheaders = req.clone({
          headers: req.headers.append('interceptor-header', 'myheader'),
          params: req.params.append('name intercept', 'sada')
        //   url: "https://mysecondproject-a78bd-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
      })
     
      return next.handle(sendingheaders).pipe(
          tap((event) => {
              console.log(event)
     
              if(event.type === HttpEventType.Sent) {
                  console.log('sending data...')
              }

              if(event.type === HttpEventType.Response) {
                console.log('recieved data...')
            }


            })
      )
    }
    
}