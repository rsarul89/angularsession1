import { Component, OnInit, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './item';

@Component({
  selector: 'app-facet-filter2',
  templateUrl: './facet-filter2.component.html',
  styleUrls: ['./facet-filter2.component.css']
})
export class FacetFilter2Component implements OnInit {

  selected_brands: string[] = [];
  selected_products: Item[];
  name: string;
  searchText: string = "";
  selected_brand_count: number = 0;
  brandsGroup: any[];
  useBrands = {};

  // Data Object to List Games
  products: Item[] = [{
    Category: ["g122", "Side by Side Refrigerators"],
    Brand: "LG",
    ModelNo: "GC-P197DPSL",
    Sku: "50001129",
    Heading: "567L Side by Side Refrigerator",
    ShortDesc: "The LG 567L Side-by-Side Platinum Refrigerator with One Touch Home Bar offers a huge amount of storage capacity making it perfect for family sized homes!",
    Labels: ["New", "As Advertised"],
    Callout: ["Bonus Offer", "Sale"],
    Price: 1399,
    WasPrice: 1650,
    DeliveryTier: "4",
    Image: "50001129_62296",
    Checked: false
  }, {
    Category: ["g186", "LED TVs"],
    Brand: "LG",
    ModelNo: "55LA6620",
    Sku: "50017349",
    Heading: "55\"(139cm) FHD LED LCD 100Hz 3D Smart TV",
    ShortDesc: "The LG 55\" FHD LED LCD is a Smart TV for smart people. The LG Smart TV is a class above with dual core processor, virtual surround, LED plus and magic remote control with voice recognition.",
    Labels: ["New", "As Advertised"],
    Callout: ["Bonus Offer", "Sale"],
    Price: 1389,
    WasPrice: 1599,
    DeliveryTier: "4",
    Image: "50017349_87400",
    Checked: false
  }, {
    Category: ["g186", "LED TVs"],
    Brand: "Samsung",
    ModelNo: "UA50F6400AM",
    Sku: "50017426",
    Heading: "50\" (127cm) FHD LED LCD 100Hz 3D Smart TV",
    Labels: ["As Advertised"],
    Callout: ["Cashback Offer"],
    Price: 1249,
    WasPrice: 1299,
    DeliveryTier: "4",
    Image: "50017426_82802",
    Checked: false
  }, {
    Category: ["g186", "LED TVs"],
    Brand: "Samsung",
    ModelNo: "UA55F6400AM",
    Sku: "50017428",
    Heading: "55\"(140cm) FHD LED LCD 100Hz 3D Smart TV",
    Labels: ["As Advertised"],
    Callout: ["Clearance"],
    Price: 1396,
    WasPrice: 1429,
    DeliveryTier: "4",
    Image: "50017428_82797",
    Checked: false
  }, {
    Category: ["g186", "LED TVs"],
    Brand: "Samsung",
    ModelNo: "UA50F6400AM",
    Sku: "50017431",
    Heading: "60\"(152cm) FHD LED LCD 100Hz 3D Smart TV",
    Labels: ["New", "As Advertised"],
    Callout: ["Bonus Offer", "Sale"],
    Price: 1787,
    WasPrice: 1899,
    DeliveryTier: "4",
    Image: "50017431_82777",
    Checked: false
  }, {
    Category: [],
    Brand: "Samsung",
    ModelNo: "UA65F6400AM",
    Sku: "50017434",
    Heading: "65\"(165cm) FHD LED LCD 100Hz 3D Smart TV",
    Labels: [],
    Callout: ["Cashback Offer"],
    Price: 1787,
    WasPrice: 1899,
    DeliveryTier: "4",
    Image: "50017434_82866",
    Checked: false
  }, {
    Category: [],
    Brand: "Samsung",
    ModelNo: "UA75F6400AM",
    Sku: "50017436",
    Heading: "75\"(190cm) FHD LED LCD 100Hz 3D Smart TV",
    Labels: [],
    Callout: ["Cashback Offer"],
    Price: 4799,
    WasPrice: 4999,
    DeliveryTier: "4",
    Image: "50017436_82877",
    Checked: false
  }, {
    Category: [],
    Brand: "Samsung",
    ModelNo: "SRF579DLS",
    Sku: "50010550",
    Heading: "579L French Door Refrigerator",
    Labels: [],
    Callout: ["Cashback Offer"],
    Price: 1829,
    WasPrice: 2199,
    DeliveryTier: "4",
    Image: "50010550_87218",
    Checked: false
  }, {
    Category: [],
    Brand: "LG",
    ModelNo: "WT-H8006",
    Sku: "50005108",
    Heading: "8kg Top Load Washer",
    Labels: ['New'],
    Callout: [],
    Price: 829,
    WasPrice: 0,
    DeliveryTier: "4",
    Image: "50005108_73618",
    Checked: false
  }, {
    Category: [],
    Brand: "Kobo",
    ModelNo: "2075372",
    Sku: "50016279",
    Heading: "eReader Touch Black",
    Labels: [],
    Callout: [],
    Price: 149,
    WasPrice: 0,
    DeliveryTier: "1",
    Image: "50016279_79711",
    Checked: false
  }, {
    Category: [],
    Brand: "Breville",
    ModelNo: "BJE410",
    Sku: "10163246",
    Heading: "Juice Fountain Plus 1200W",
    Labels: [],
    Callout: [],
    Price: 169,
    WasPrice: 0,
    DeliveryTier: "1",
    Image: "10163246_74450",
    Checked: false
  }, {
    Category: [],
    Brand: "Breville",
    ModelNo: "800ES",
    Sku: "10116167",
    Heading: "Professional 800 Espresso Coffee Machine",
    Labels: [],
    Callout: [],
    Price: 299,
    WasPrice: 0,
    DeliveryTier: "1",
    Image: "10116167_21295",
    Checked: false
  },

  {
    Category: [],
    Brand: "Canon",
    ModelNo: "1100DTKB",
    Sku: "50004065",
    Heading: "1100D Twin Lens Kit (18-55 & 75-300mm)",
    Labels: [],
    Callout: [],
    Price: 579,
    WasPrice: 0,
    DeliveryTier: "1",
    Image: "50004065_64999",
    Checked: false
  }];

  // Getting Selected Brands and Count
  getSelected(brand?: string) {
    this.selected_products = [];
    let filterAfterBrands = new Array<Item>();
    let selected = false;
    this.products.forEach((val, index) => {
      let p = this.products[index];
      p.Checked = true;
      for (var i in this.useBrands) {
        if (this.useBrands[i]) {
          selected = true;
          if (i === p.Brand) {
            filterAfterBrands.push(p);
            break;
          }
        }
        else {
          let index = this.selected_brands.indexOf(brand);
          this.selected_brands.splice(index, 1);
          this.selected_brand_count = this.selected_brand_count > 0 ? this.selected_brand_count - 1 : this.selected_brand_count;
        }
      }
    });
    if (!selected) {
      filterAfterBrands = this.products;
    }
    this.selected_products = filterAfterBrands;
    if (brand != undefined && brand != '') {
      if (this.selected_brands && this.selected_brands.length > 0) {
        if (this.selected_brands.indexOf(brand) == -1)
          this.selected_brands.push(brand);
      }
      else {
        this.selected_brands.push(brand);
      }
      this.selected_brand_count = this.selected_brands.length;
    }

    // if (brand && brand != '') {
    //   this.products = this.products.filter(p => {
    //     if (p.Brand.toLowerCase() == brand.toLowerCase()) {
    //       p.Checked = true;
    //       if (this.selected_products.indexOf(p) == -1)
    //         this.selected_products.push(p);
    //       else
    //         this.selected_products.filter(p => { p.Checked = true; return true; });
    //     }
    //     return true;
    //   });
    // }
    // else {
    //   this.selected_products = this.products;
    // }
  }

  // Clearing All Selections
  clearSelection() {
    this.searchText = "";
    this.selected_brands = [];
    this.selected_brand_count = 0;
    this.useBrands = {};
    this.products = this.products.filter(g => {
      g.Checked = false;
      return true;
    });
    this.getSelected();
  }

  //Delete Single Listed Brand
  deleteBrand(brand: string) {
    this.searchText = "";
    this.useBrands[brand] = false;
    let index = this.selected_brands.indexOf(brand);
    this.selected_brands.splice(index, 1);
    this.selected_brand_count = this.selected_brand_count > 0 ? this.selected_brand_count - 1 : this.selected_brand_count;
    this.products = this.products.filter(p => {
      if (p.Brand.toLowerCase() == brand.toLowerCase())
        p.Checked = false;
      return true;
    });
    this.getSelected();
  }

  clearFilter() {
    this.searchText = "";
  }

  uniqueItems(data, key) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
      var value = data[i][key];
      if (result.indexOf(value) === -1) {
        result.push(value);
      }
    }
    return result;
  }
  constructor() {
    this.name = `Angular! v${VERSION.full}`;
  }

  ngOnInit() {
    this.brandsGroup = this.uniqueItems(this.products, 'Brand');
    this.getSelected();
  }
}
