import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { PRODUCTS } from '../../data/products.data';
import {
  ProductCardComponent,
  ShareChannel,
  ShareEvent,
} from '../../components/product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  products: Product[] = PRODUCTS;
  lastShareMessage = '';

  onShare(event: ShareEvent): void {
    const shareUrl = this.buildShareUrl(event.channel, event.product);

    if (typeof window !== 'undefined') {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }

    this.lastShareMessage = `${
      event.channel === 'whatsapp' ? 'WhatsApp' : 'Telegram'
    } арқылы бөлісу ашылды: ${event.product.name}`;
  }

  private buildShareUrl(channel: ShareChannel, product: Product): string {
    const encodedLink = encodeURIComponent(product.link);
    const encodedName = encodeURIComponent(product.name);

    if (channel === 'whatsapp') {
      const message = encodeURIComponent(
        `Check out this product: ${product.link}`
      );
      return `https://wa.me/?text=${message}`;
    }

    return `https://t.me/share/url?url=${encodedLink}&text=${encodedName}`;
  }
}