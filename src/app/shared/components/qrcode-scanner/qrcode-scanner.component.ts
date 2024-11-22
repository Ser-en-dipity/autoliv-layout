import { Component } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { BarcodeFormat } from '@zxing/library';
import { QrScannerService } from '../../services/qr-scanner.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-qrcode-scanner',
  templateUrl: './qrcode-scanner.component.html',
  styleUrls: ['./qrcode-scanner.component.less'],
})
export class QrcodeScannerComponent {
  constructor(private modal: NzModalRef, private msg: NzMessageService, private qrScannerService: QrScannerService) { }

  public ALLOWED_FORMATS = [BarcodeFormat.QR_CODE];

  private httpsPattern = new RegExp('^https://');


  public onCodeResult(result: string) {
    // if is dev mode, print msg
    if (!this.httpsPattern.test(result)) {
      this.msg.error('请扫描正确的二维码');
    } else {
      if (environment.production === false) {
        this.msg.info(result);
      }


      this.qrScannerService.kick(result);
    }
    // regex test if the result is a url
    this.modal.destroy(result);
  }
}
