# TODO

- State managment kullanilmali. (zustand veya Redux)
- Api service klasorunun altinda toplanmali. (her servis kendi klasor basligi altinda.)
- Api Instance kullanilmali. Tum api sorgulari tek bir api instance uszerinden gitmeli.

```

const apiInstance = axios.create({
    baseUrl: xxx
})

const resp = await apiInstance.post(url)
```

- appConfig objesini olusture, .env ile calissin.
  Production ve Development config yapisi ayni ama icerigi farkli olmali.

- **React Query** Paket Api Requestlerinde Cache yapmak icin.

- Next JS SSR ve CSR dikkat edilmeli.
- Auth islemleri icin NextAuth kullanilmali.
- middledware daha dikkatli ve effectif olarak kullanilmali.
- Form Validationlarini yap.
  - **Formik** ve **yup** paketlerini arastir

# Folder/Component Structure

- Kod tekrarlarindan kurtulmak icin Layout componentlerini yaz. (Ortak tasarim)

# Clean Code

- eslint mutlaka kullan
- priettier mutlaka kullan.
- husky kullan
