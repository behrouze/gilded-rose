class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQualityForNegativeSellIn() {
    if (this.name !== "Aged Brie") {
      if (this.name !== "Backstage passes to a TAFKAL80ETC concert") {
        if (this.quality > 0) {
          if (this.name !== "Sulfuras, Hand of Ragnaros") {
            this.quality = this.quality - 1;
          }
        }
      } else {
        this.quality = this.quality - this.quality;
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
      }
    }
  }

  updateItemSellIn() {
    if (this.name !== "Sulfuras, Hand of Ragnaros") {
      this.sellIn = this.sellIn - 1;
    }
  }

  updateItemQuality() {
    if (
      this.name !== "Aged Brie" &&
      this.name !== "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (this.quality > 0) {
        if (this.name !== "Sulfuras, Hand of Ragnaros") {
          this.quality = this.quality - 1;
        }
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
        if (this.name === "Backstage passes to a TAFKAL80ETC concert") {
          if (this.sellIn < 11) {
            if (this.quality < 50) {
              this.quality = this.quality + 1;
            }
          }
          if (this.sellIn < 6) {
            if (this.quality < 50) {
              this.quality = this.quality + 1;
            }
          }
        }
      }
    }

    this.updateItemSellIn();

    if (this.sellIn < 0) {
      this.updateQualityForNegativeSellIn();
    }
  }
}

class Shop {
  constructor(items = []) {
    this.items = items.map((i) => new Item(i.name, i.sellIn, i.quality));
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].updateItemQuality();
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
