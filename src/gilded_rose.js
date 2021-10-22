class Item {
  // rules = null;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;

    //// possible use of factory pattern to help cleanup the code
    // switch (name) {
    //   case "Sulfuras, Hand of Ragnaros":
    //     this.rules = {
    //       quality=1,
    //       sellIn=1
    //     }
    //     break;

    //   default:
    //     break;
    // }
  }

  increaseQuality() {
    this.quality = this.quality + 1;
  }

  decreaseQuality() {
    this.quality = this.quality - 1;
  }

  updateQualityForNegativeSellIn() {
    if (this.name !== "Aged Brie") {
      if (this.name !== "Backstage passes to a TAFKAL80ETC concert") {
        if (this.quality > 0) {
          if (this.name !== "Sulfuras, Hand of Ragnaros") {
            this.decreaseQuality();
          }
        }
      } else {
        this.quality = 0;
      }
    } else {
      if (this.quality < 50) {
        this.increaseQuality();
      }
    }
  }

  updateItemQuality() {
    if (
      this.name !== "Aged Brie" &&
      this.name !== "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (this.quality > 0 && this.name !== "Sulfuras, Hand of Ragnaros") {
        if (this.name === "Conjured Mana Cake") this.decreaseQuality();

        this.decreaseQuality();
      }
    } else if (this.quality < 50) {
      this.increaseQuality();
      if (this.name === "Backstage passes to a TAFKAL80ETC concert") {
        if (this.sellIn < 11 && this.quality < 50) {
          this.increaseQuality();
        }

        if (this.sellIn < 6 && this.quality < 50) {
          this.increaseQuality();
        }
      }
    }
  }

  udpateItemSellIn() {
    if (this.name !== "Sulfuras, Hand of Ragnaros") {
      this.sellIn = this.sellIn - 1;
    }

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
      this.items[i].udpateItemSellIn();
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
