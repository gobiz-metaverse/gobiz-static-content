# Triển khai khách hàng mới cho Poseidon

### Tạo app bên Authen.Me
* Chúng ta **Nhờ a Định** tạo, cái này và config redirect url
```
client_id: 3ca07ad1-----4efa2aa3950d
client_secret: 9c13ea53-----85bb4468a
```

### Tạo tenant

* Tạo Id cho tenant và thêm pd_tenant

```
Tenant ID: b273ecdb-7df7-44c8-8985-ee18bce90643
Tenant code: thanhtoanviettrung
Domain: thanhtoanviettrung.vn
```

```sql
INSERT INTO public.pd_tenant (id, domain, name, description, contact, client_id, client_secret, code_seed, client_whitelist, numeric_seed, general_sequence, customer_sequence, created_at, created_by, modified_at, modified_by, version, code, iris_secret, facebook_app_id, facebook_app_secret, package_sequence, daily_sequence, status, last_update_level, delivery_sequence) 
VALUES ('b273ecdb-7df7-44c8-8985-ee18bce90643', 'thanhtoanviettrung', 'thanhtoanviettrung', null, null, '3ca07ad1-----4efa2aa3950d', '9c13ea53-----85bb4468a', null, '["https://thanhtoanviettrung.mygobiz.net/#/authentication", "https://thanhtoanviettrung.mygobiz.net/m/#/authentication", "https://thanhtoanviettrung.admin.mygobiz.net/#/authentication", "https://admin.thanhtoanviettrung.com/#/authentication"]', null, null, null, '2024-05-09 08:57:59.802976 +00:00', 'ducmami', '2024-03-03 00:00:00.000000 +00:00', null, 0, 'thanhtoanviettrung', null, null, null, null, null, 'ACTIVE', '2024-05-09 08:57:59.802976 +00:00', null);

```

* Chạy lệnh tạo data mẫu

```sql
select gobiz_seed_data('b273ecdb-7df7-44c8-8985-ee18bce90643','ducmami')
```

* Thêm pd_tenant_mapping:
```sql
INSERT INTO pd_tenant_mapping (tenant_id, domain, created_at, created_by, modified_at, modified_by, version, primary_domain) VALUES ('b273ecdb-7df7-44c8-8985-ee18bce90643', 'Tenant code: thanhtoanviettrung
.mygobiz.net', now(), 'ducmami', null, null, 0, true);  
INSERT INTO pd_tenant_mapping (tenant_id, domain, created_at, created_by, modified_at, modified_by, version, primary_domain) VALUES ('b273ecdb-7df7-44c8-8985-ee18bce90643', 'Tenant code: thanhtoanviettrung
.admin.mygobiz.net', now(), 'ducmami', null, null, 0, false);  

```

* Thêm pd_tenant_config:

```sql
INSERT INTO public.pd_tenant_config (tenant_id, default_currency, max_sku_by_merchant, default_permissions, order_code_prefix, ibizan_url, ibizan_detail_url, iris_credential, iris_url, iris_sender, rounding_strategy, initial_balance, logo_standard, logo_lite, order_auto_archive_period, order_auto_confirm_period, custom_script, custom_external_scripts, custom_css, custom_favicon, m6_activated, m5_activated, m5_order_url, m6_package_url, emd_percent, dingtalk_token, caresoft_domain, caresoft_token, caresoft_config, module_url, shipment_config, language, general_config, package_auto_confirm_period, internal_link, order_threshold, order_config, extension_config, old_reward_system, terms_of_service, terms_of_service_link, m3_activated, zalo_config, telegram_config, peer_payment_config, external_integration_config, credit_limit, canines_config, gtm_config, avenger_config, dior_config, m24_config, taiyi_config, donkey_config, komodo_config) VALUES ('b273ecdb-7df7-44c8-8985-ee18bce90643', 'VND', 100, '[]', 'VT', 'https://canines.gobiz.dev', 'https://khieunai.thanhtoanviettrung.vn/#/tickets/{code}', null, null, null, 'FLOOR', 0.0000, 'https://s3.ap-southeast-1.amazonaws.com/gobiz-poseidon/%2F9cc0bb11-aa12-43e1-a633-226352845b17/logo_image_1674962335573_Ava%20Fanpage.png', 'https://s3.ap-southeast-1.amazonaws.com/gobiz-poseidon/%2F9cc0bb11-aa12-43e1-a633-226352845b17/logo_image_1674962335013_Ava%20Fanpage.png', 1296000, 1209600, null, '[]', null, null, true, true, 'https://mua.thanhtoanviettrung.vn/purchase-buying/{code}', 'https://kho.thanhtoanviettrung.vn/packages/detail/{code}', 50.00, null, null, null, '{"token": null, "domain": null, "groupId": null, "customId": null, "priority": null, "serviceId": null, "assigneeId": null, "customFields": []}', '{"https://kho.thanhtoanviettrung.vn": "Kho", "https://mua.thanhtoanviettrung.vn": "Mua hàng", "https://chromewebstore.google.com/": "Công cụ đặt hàng", "https://quy.thanhtoanviettrung.vn/": "Quỹ/Kế Toán", "https://khieunai.thanhtoanviettrung.vn/#/configurations/finance/shipment": "Khiếu nại"}', '{"enable": true, "taxFreeThreshHold": null, "enableProductInformation": true}', 'vi-VN', '{"isVendor": false, "isSupplier": false, "themeColor": null, "bankAccount": "Stk ACB : 33015577. Nguyễn Việt Anh ", "showMidMile": false, "emailContact": "thaiordering.cskh@gmail.com", "fromCurrency": null, "showCurrency": false, "depositWizard": false, "phoneContacts": ["0984924896", "0329510557"], "addressContact": "Văn phòng: Tòa nhà VCCI, Số 9 Đào Duy Anh, Đống Đa, Hà Nội", "targetCurrency": null, "timeZoneOffset": 7, "showPackageNote": false, "enableRewardPoint": true, "shopkeeperEnabled": false, "peerPaymentEnabled": true, "customFooterEnabled": false, "enableCustomerLevel": false, "serviceAgreementUrl": "<p>Tôi đã hiểu các quy định và hướng dẫn sử dụng dịch vụ tai website của Thái Ordering&nbsp;<a href=\"https://thaiordering.com/\" rel=\"noopener noreferrer\" target=\"_blank\">https://thaiordering.com/</a></p>", "packageDamageEnabled": false, "sequenceCustomerCode": false, "shopkeeperEmdPercent": null, "showPackageIoHistory": false, "defaultCustomerStatus": "ACTIVE", "enableTransactionSlip": false, "shopkeeperRedirectUri": null, "orderWithoutPrepayment": false, "otherMarketplaceEnabled": true, "publicTrackingInterface": false, "registerBackgroundImage": "https://s3.ap-southeast-1.amazonaws.com/gobiz-poseidon/%2F9cc0bb11-aa12-43e1-a633-226352845b17/logo_image_1674962349939_Ava%20Fanpage.png", "customerWarehouseEnabled": false, "disableCustomerOrderNote": false, "orderProductToCartEnable": true, "restrictCustomerLocation": false, "shipmentWaybillThreshold": 69, "autoSetPreferredWarehouse": false, "customerWithdrawalEnabled": true, "customerRegisterPhoneRequired": true, "customerRegisterAddressEnabled": false, "packageCodeAutoGenerateDisabled": false, "deliveryRequestShippingMethodRequired": false}', 864000, '{"donkey": {"packageUrl": "https://kho.thanhtoanviettrung.vn/packages/detail/{code}"}, "komodo": {"orderUrl": "https://mua.thanhtoanviettrung.vn/purchase-buying/{code}", "complaintUrl": "http://mua.thanhtoanviettrung.vn/complaint-seller-detail/{id}", "createComplaintUrl": "http://mua.thanhtoanviettrung.vn/complaint-seller?orderCode={code}&showCreateForm=1"}, "poseidon": {"m1Home": "https://order.thanhtoanviettrung.vn", "landing": "https://thanhtoanviettrung.vn/"}}', 3000, '{"disable": false, "depositOnDemand": false, "guaranteePercent": null, "depositPercentage": [], "chargeFeeWhenDeposit": false, "productRemarkEnabled": true, "settlementToEmdAmount": true, "productTranslateEnabled": false, "chargeMerchantShippingCostWhenDeposit": false}', '{"warningMessage": null, "recipientPattern": "", "marketplacesEnabled": ["1688", "taobao", "shopee_th", "lazada_th", "makro", "bigc", "tmall"]}', true, false, null, true, '{"name": "Sabai Vietnam", "cover": "https://cover.talk.zdn.vn/a/4/7/b/2/6efb4006260c4b33ed871a7c86e5566c.jpg", "avatar": "https://s160-ava-talk.zadn.vn/a/5/d/7/1/160/6efb4006260c4b33ed871a7c86e5566c.jpg", "verified": true, "zaloOaId": "2817866411340655168", "zaloAppId": "3730502123181089535", "description": "Thái Ordering - Dự án của Sabai Việt Nam là nền tảng công nghệ giúp người tiêu dùng tự đặt mua hàng Thái Lan tại tất cả các website. Là đơn vị duy nhất có hệ thống tự lên đơn hàng, thanh toán và kiểm tra tình trạng đơn mua hàng Thái tự động. Với 9 năm hoạt động liên tục trên thị trường với các đối tác vận chuyển uy tín nhất, chúng tôi có kinh nghiệm lâu năm trong lĩnh vực order hàng Thái Lan chính hãng, mua hộ, ship từ các website TMĐT Thái Lan về Việt Nam.", "zaloOaSecretKey": "6sAOTQgQUmPFH3bxFPeH", "zaloAppSecretKey": "l7pT2iLDU4VyBOUJX3mZ"}', '{}', '{"enabled": true, "needPayOnRequest": true, "exchangeRateBoardLayout": "", "manualExchangeRateBoard": false}', '{"wasp": null, "sendy": null, "enabled": null, "shopkeeper": null, "alibabaConfig": null, "telegramConfig": {"url": "", "enabled": false, "apiToken": "", "supportedChannel": ""}}', 0.0000, '{"uri": "https://canines.gobiz.dev", "tenant": "thaiordering", "enabled": true, "detailUrl": "https://khieunai.thaiordering.com/"}', '{"auth": null, "gtmId": null, "events": null, "preview": null, "dataLayer": null, "dataLayerName": null}', '{"url": null, "tenant": null, "activated": null}', '{"enabled": false, "password": "iSbpYAH6hOIPyLvqNm52B31YzGOG4rVo", "username": "thaiordering", "showHermes": true, "defaultLedger": "thaiordering::VND"}', '{"tenant": null, "enabled": false, "clientId": null, "username": null, "magicPhrase": null, "clientSecret": null, "defaultCredentialAccount": null}', '{"enabled": false, "updateToNewCommentTime": null}', '{"url": null, "agencyCurrency": null, "agencyAccessToken": null}', '{}');

```
### Cấu hình Authen.Me
* Nhờ anh Định tạo App trên Authen.Me
* Import quyền mới nhứt vào
* Gán quyền cho user để vào admin M2 config  

* Thêm redirect URL bên AuthenMe
```
https://thanhtoanviettrung.admin.mygobiz.net/login/oauth2/code/thanhtoanviettrung.admin.mygobiz.net
https://admin.thanhtoanviettrung.vn/login/oauth2/code/admin.thanhtoanviettrung.vn
```
