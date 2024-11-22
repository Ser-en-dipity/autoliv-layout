import { Injectable } from '@angular/core';
import { Observable, Subject, filter, map, switchMap } from 'rxjs';
import { ContentType, ResolveUrlResult, UrlResolverService } from 'src/openapi';


@Injectable({
  providedIn: 'root'
})
export class QrScannerService {
  private qr_str$: Subject<string> = new Subject<string>();

  /**
   *
   */
  constructor(private urlResolver: UrlResolverService) { }

  private get qr_content$(): Observable<ResolveUrlResult> {
    return this.qr_str$.pipe(
      switchMap(x => this.urlResolver.apiUrlResolverPost({ url: x })
      )
    );


  }

  public get batchId$(): Observable<string> {
    return this.qr_content$.pipe(
      filter(x => x.type === ContentType.Batch),
      map(x => x.id));
  }

  public get manufactureOrderId$(): Observable<string> {
    return this.qr_content$.pipe(
      filter(x => x.type === ContentType.ManufactureOrder),
      map(x => x.id));
  }

  public kick(str: string): void {
    const url = new URL(str);
    if (url.protocol !== 'https:') {
      return;
    }

    this.qr_str$.next(str);
  }


}
