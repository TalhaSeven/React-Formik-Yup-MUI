# Login Form Using Formik and Material-UI

This repository contains a simple login form implementation using Formik and Material-UI components. The form includes email and password fields with validation, and it demonstrates how to handle form submission and validation using Formik and Yup schemas.

#### Features

- User-friendly login form with email and password fields.
- Form validation for email and password using Yup schema.
- Integration of Formik for handling form values, submission, and validation.
- Material-UI components for styling the form elements.

#### Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. The login form will be displayed with email and password fields.
3. Enter your credentials and click the "Submit" button.
4. Formik and Yup will handle form submission and validation.
5. If there are errors, they will be displayed below the respective fields.

#### Code Explanation

The project consists of two main components: `Login` and `LoginForm`.

- `Login`: This component creates the overall layout of the login form using Material-UI's `Container`, `Typography`, and other components. It integrates the Formik form using the `Formik` component and applies the `loginSchema` for form validation.

- `LoginForm`: This is a separate component that represents the actual login form fields. It receives props like `values`, `handleChange`, `errors`, `touched`, and `handleBlur` from Formik. It uses Material-UI's `TextField` and `Button` components to create the input fields and submit button.

#### Schema Validation

The form validation is implemented using Yup schema validation. The validation rules for the email and password fields are defined in the `loginSchema` in the `loginSchema.js` file. The schema ensures that the email is in the correct format and the password meets specific complexity requirements.

---
# Formik ve Material-UI Kullanarak Giriş Formu

Bu depo, Formik ve Material-UI bileşenlerini kullanarak basit bir giriş formu uygulaması içerir. Form, e-posta ve şifre alanlarını içerir, doğrulama işlemlerini yapmayı ve Formik ve Yup şemalarını kullanarak form gönderimini ve doğrulamayı nasıl yöneteceğinizi gösterir.

#### Özellikler

- Kullanıcı dostu giriş formu, e-posta ve şifre alanlarıyla.
- Yup şemasını kullanarak e-posta ve şifre için form doğrulama.
- Formik entegrasyonu ile form değerlerini, gönderimini ve doğrulamayı yönetme.
- Form elemanlarını biçimlendirmek için Material-UI bileşenleri.

#### Kullanım

1. Tarayıcınızı açın ve `http://localhost:3000` adresine gidin.
2. Giriş formu, e-posta ve şifre alanlarıyla birlikte görüntülenecektir.
3. Kimlik bilgilerinizi girin ve "Gönder" düğmesine tıklayın.
4. Formik ve Yup, form gönderimini ve doğrulamayı yönetecektir.
5. Hatalar varsa, ilgili alanların altında görüntülenecektir.

#### Kod Açıklaması

Proje, `Login` ve `LoginForm` olmak üzere iki ana bileşenden oluşur.

- `Login`: Bu bileşen, giriş formunun genel düzenini Material-UI'nin `Container`, `Typography` ve diğer bileşenlerini kullanarak oluşturur. Formik formunu `Formik` bileşeni kullanarak entegre eder ve form doğrulaması için `loginSchema`'yı uygular.

- `LoginForm`: Bu, gerçek giriş formu alanlarını temsil eden ayrı bir bileşendir. Formik'ten `values`, `handleChange`, `errors`, `touched` ve `handleBlur` gibi özellikleri alır. Giriş alanlarını ve gönder düğmesini oluşturmak için Material-UI'nin `TextField` ve `Button` bileşenlerini kullanır.

#### Şema Doğrulaması

Form doğrulaması, Yup şema doğrulamasını kullanılarak uygulanır. E-posta ve şifre alanları için doğrulama kuralları, `loginSchema.js` dosyasındaki `loginSchema` içinde tanımlanır. Şema, e-postanın doğru formatta olduğunu ve şifrenin belirli karmaşıklık gereksinimlerini karşıladığını sağlar.
