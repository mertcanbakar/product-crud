import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources ={
    tr: {
        translation: {
            productList: 'Ürün Listesi',
            adminPanel: 'Yönetci Paneli',
            light: 'Açık',
            dark: 'Koyu',
            newProduct: 'Yeni Ürün',
            copyright: 'Tüm hakları saklıdır',
            createProduct: 'Ürün Oluştur',
            editProduct: 'Ürünü Düzenle',
            smartphones: "Akıllı Telefonlar",
            laptops: "Dizüstü Bilgisayarlar",
            fragrances: "Parfümler",
            skincare: "Cilt Bakımı",
            groceries: "Market Alışverişi",
            homeDecoration: "Ev Dekorasyonu",
            furniture: "Mobilya",
            tops: "Üst Giyim",
            womensDresses: "Bayan Elbiseleri",
            womensShoes: "Bayan Ayakkabıları",
            mensShirts: "Erkek Gömlekleri",
            mensShoes: "Erkek Ayakkabıları",
            mensWatches: "Erkek Saatleri",
            womensWatches: "Bayan Saatleri",
            womensBags: "Bayan Çantaları",
            womensJewellery: "Bayan Takıları",
            sunglasses: "Güneş Gözlükleri",
            automotive: "Otomotiv",
            motorcycle: "Motosiklet",
            lighting: "Aydınlatma",
            save: 'Kaydet',
            update: 'Güncelle',
            cancel: 'İptal',
            brand: 'Marka',
            title: 'Ürün Adı',
            category: "Kategori",
            stock: 'Stok',
            price: 'Fiyat',
            description: 'Ürün Açıklaması',
            messagev1: 'Ürünü silmek istediğinizden emin misiniz?',
            yes: 'Evet',
            no: 'Hayır'
        }
    },
    en: {
        translation: {
            productList: 'Product List',
            adminPanel: 'Admin Panel',
            light: 'Light',
            dark: 'Dark',
            newProduct: 'New Product',
            copyright: 'All rights reserved',
            createProduct: 'Create Product',
            editProduct: 'Edit Product',
            smartphones: "Smartphones",
            laptops: "Laptops",
            fragrances: "Fragrances",
            skincare: "Skincare",
            groceries: "Groceries",
            homeDecoration: "Home Decoration",
            furniture: "Furniture",
            tops: "Tops",
            womensDresses: "Women Dresses",
            womensShoes: "Women Shoes",
            mensShirts: "Men Shirts",
            mensShoes: "Men Shoes",
            mensWatches: "Men Watches",
            womensWatches: "Women Watches",
            womensBags: "Women Bags",
            womensJewellery: "Women Jewellery",
            sunglasses: "Sunglasses",
            automotive: "Automotive",
            motorcycle: "Motorcycle",
            lighting: "Lighting",
            save: 'Save',
            update: 'Update',
            cancel: 'Cancel',
            brand: 'Brand',
            title: 'Title',
            category: "Category",
            stock: 'Stock',
            price: 'Price',
            description: 'Description',
            messagev1: 'Are you sure you want to delete the product?',
            yes: 'Yes',
            no: 'No'
        }
    }
}

i18n
  .use(initReactI18next)
  .init({
    lng: 'tr',
    resources
  })

  export default i18n;