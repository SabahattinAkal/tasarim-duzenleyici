<DespatchAdvice xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:xades="http://uri.etsi.org/01903/v1.3.2#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xsi:schemaLocation="urn:oasis:names:specification:ubl:schema:xsd:DespatchAdvice-2 UBL-DespatchAdvice-2.1.xsd" xmlns="urn:oasis:names:specification:ubl:schema:xsd:DespatchAdvice-2">
	<ext:UBLExtensions>
		<ext:UBLExtension>
			<ext:ExtensionContent>
				<ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="Signature_f18507c0-4e2c-49d4-a63f-3313b1d9e763">
					<ds:SignedInfo>
						<ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
						<ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"/>
						<ds:Reference Id="Reference-Id-f97fa0c5-7045-4e54-9489-5a73948a3eb2" URI="#Signed-Properties-Id-007b1ae1-03a9-4719-9eaf-bc1e811b5afa" Type="http://uri.etsi.org/01903#SignedProperties">
							<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>
							<ds:DigestValue>sZkB4bdqow5czXH9sjh9p/dXxpEcTwFiqB1SqXmMS6Y=</ds:DigestValue>
						</ds:Reference>
						<ds:Reference Id="Reference-Id-165d0b76-a250-480d-b3e5-ddcf4db560fd" URI="">
							<ds:Transforms>
								<ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
							</ds:Transforms>
							<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>
							<ds:DigestValue>saLI3jdOjQv3IaRMnt8JVZK8IW7QtjRduGKpMM1Cubk=</ds:DigestValue>
						</ds:Reference>
					</ds:SignedInfo>
					<ds:SignatureValue Id="Signature-Value-Id-e43f9280-a564-4ddf-aaa3-8252d3344ca0">M05Lbi05FKd4AFp9jSndMyEWdOLqXSn1nzyzN89e9s6+zlOta5V34YAVHIiho1Eo2GqY6tDtzcfXKypX0iXhQwlhWspk5IFTOMDSi/Rqvk+klEs8SZ54IBwahjdcnl3VZdCOoHrIS8S9Zt0508dlKxjuZ6Yq0bP56pn6M/kfUunkrlyGzXX9aDTL00tpoVSyHyAHjFNhjX7UoChNhbmq2/ujrYVE91ZXWfy6AIg8n/xdOX2pKHM4yRFLnZ3wDo7aomRBHkMPXLmclX0eoYsuQ8Ohp3s0tftloP+t13bbHYeOwzptzeUu8J+LWaGTrlqWr/tWJZNOkY6u+GODhsz6iA==</ds:SignatureValue>
					<ds:KeyInfo>
						<ds:KeyValue>
							<ds:RSAKeyValue>
								<ds:Modulus>2jWf7UXFwXgwJcVHQSkIHzwxzDEAZToDc5jSDMAo/bkvj5we2XRhJQ2LfU8MwT3dem+XXyzV5bqUmTQpYAuvjNkCBjOC+XG/Oo6GQhlz0U528eRkyXT8iPTdEg6ybB1aBEDGENbASPWaFSbaEn2DqpZZ8+sBQio8MWN1lMeiM0nkBI19s74ivd76mZRRhLDx2IYpHSdw4nkltWw6DJwuO3quJrs0L4zTCVb0k6i7tfm0mISdhTl8Q+DNxW2rSmzzNT2jTUy2KJGqwj4lbJWSyx23RQIzjvlb99IK0SFxYOn8Pvoe8GpTCGMcP0DIH3Uysi+LUxZ4Yb2cKVjXMkGbXQ==</ds:Modulus>
								<ds:Exponent>AQAB</ds:Exponent>
							</ds:RSAKeyValue>
						</ds:KeyValue>
						<ds:X509Data>
							<ds:X509Certificate>MIIFxTCCBK2gAwIBAgIIAMpyuyMQQPkwDQYJKoZIhvcNAQELBQAwXDELMAkGA1UEBhMCVFIxTTBLBgNVBAMMRE1hbGkgTcO8aMO8ciBFbGVrdHJvbmlrIFNlcnRpZmlrYSBIaXptZXQgU2HEn2xhecSxY8Sxc8SxIC0gU8O8csO8bSAyMB4XDTIxMDMyMjEyNDcyOFoXDTI0MDMyMTEyNDcyOFowbDETMBEGA1UEBRMKMzIzMDUxMjM4NDFVMFMGA1UEAwxMRURNIELEsEzEsMWexLBNIFPEsFNURU1MRVLEsCBWRSBEQU5JxZ5NQU5MSUsgSMSwWk1FVExFUsSwIEFOT07EsE0gxZ7EsFJLRVTEsDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANo1n+1FxcF4MCXFR0EpCB88McwxAGU6A3OY0gzAKP25L4+cHtl0YSUNi31PDME93Xpvl18s1eW6lJk0KWALr4zZAgYzgvlxvzqOhkIZc9FOdvHkZMl0/Ij03RIOsmwdWgRAxhDWwEj1mhUm2hJ9g6qWWfPrAUIqPDFjdZTHojNJ5ASNfbO+Ir3e+pmUUYSw8diGKR0ncOJ5JbVsOgycLjt6ria7NC+M0wlW9JOou7X5tJiEnYU5fEPgzcVtq0ps8zU9o01MtiiRqsI+JWyVkssdt0UCM475W/fSCtEhcWDp/D76HvBqUwhjHD9AyB91MrIvi1MWeGG9nClY1zJBm10CAwEAAaOCAnkwggJ1MB8GA1UdIwQYMBaAFAOE+pcx5/SHGS9lK+G0G2Onr3W+MB0GA1UdDgQWBBQWg9vswimkooSvPnJWRw50r+q/PDAOBgNVHQ8BAf8EBAMCB4AwggEzBgNVHSAEggEqMIIBJjCCASIGC2CGGAECAQEFBwQBMIIBETAqBggrBgEFBQcCARYeaHR0cDovL2RlcG8ua2FtdXNtLmdvdi50ci9pbGtlMIHiBggrBgEFBQcCAjCB1R6B0gBCAHUAIABzAGUAcgB0AGkAZgBpAGsAYQAgAGkAbABlACAAaQBsAGcAaQBsAGkAIABzAGUAcgB0AGkAZgBpAGsAYQAgAHUAeQBnAHUAbABhAG0AYQAgAGUAcwBhAHMAbABhAHIBMQBuATEAIABvAGsAdQBtAGEAawAgAGkA5wBpAG4AIABiAGUAbABpAHIAdABpAGwAZQBuACAAdwBlAGIAIABzAGkAdABlAHMAaQBuAGkAIAB6AGkAeQBhAHIAZQB0ACAAZQBkAGkAbgBpAHoALjAMBgNVHRMBAf8EAjAAMBYGA1UdJQQPMA0GC2CGGAECAQEFBzIBMEEGA1UdHwQ6MDgwNqA0oDKGMGh0dHA6Ly9kZXBvLmthbXVzbS5nb3YudHIva3VydW1zYWwvbW1lc2hzLXMyLmNybDCBggYIKwYBBQUHAQEEdjB0MDwGCCsGAQUFBzAChjBodHRwOi8vZGVwby5rYW11c20uZ292LnRyL2t1cnVtc2FsL21tZXNocy1zMi5jcnQwNAYIKwYBBQUHMAGGKGh0dHA6Ly9jaXNkdXBtbXMyLmt1cnVtc2FsLmthbXVzbS5nb3YudHIwDQYJKoZIhvcNAQELBQADggEBALZA0yioQIvCknLN5XpN3m2bWSFajcYX9EE51xCkgX89zmgg+Tzz8ctgexO0ypoeaZ9dpgLVK7URoWf5E4jiPWZxXex9LGlgkNlcBIicbGJaqYR1Ef+WRv1zurlrISnqLRn5cz03D4OiI5phMtH9cQoPNBGHE7ig8RsOm1av912QCT6S/Z+Vwq5pj66xpNkiEw+lMdVgRAyNq1Enxmw4aNbniqigoeyEBbzAbUIRMAE8rKGEvH9+fcs54VoWthLkOvNtC2IWxVb9reLA4M5fA/RPjYqkAUY11IL9yU2aS+DKACawVpQd4gkKHBU+TgJGF5/fm5FiOm4n5iuyTQyQnsU=</ds:X509Certificate>
							<ds:X509SubjectName>CN=EDM BİLİŞİM SİSTEMLERİ VE DANIŞMANLIK HİZMETLERİ ANONİM ŞİRKETİ,SERIALNUMBER=3230512384</ds:X509SubjectName>
						</ds:X509Data>
					</ds:KeyInfo>
					<ds:Object Id="Object-Id-9486deb9-6097-4fa8-a0c2-87ddb9323721">
						<xades:QualifyingProperties xmlns:xades="http://uri.etsi.org/01903/v1.3.2#" Target="#Signature-Id-34924b27-dccd-4253-85e6-92171c37047c">
							<xades:SignedProperties Id="Signed-Properties-Id-007b1ae1-03a9-4719-9eaf-bc1e811b5afa">
								<xades:SignedSignatureProperties>
									<xades:SigningTime>2021-06-08T13:16:48.2538946+03:00</xades:SigningTime>
									<xades:SigningCertificate>
										<xades:Cert>
											<xades:CertDigest>
												<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>
												<ds:DigestValue>7SltKQ8DzK++5YThHVykhwtA8mN7rsZp8+bSU4baGHQ=</ds:DigestValue>
											</xades:CertDigest>
											<xades:IssuerSerial>
												<ds:X509IssuerName>CN=Mali Mühür Elektronik Sertifika Hizmet Sağlayıcısı - Sürüm 2,C=TR</ds:X509IssuerName>
												<ds:X509SerialNumber>56984093368271097</ds:X509SerialNumber>
											</xades:IssuerSerial>
										</xades:Cert>
									</xades:SigningCertificate>
									<xades:SignerRole>
										<xades:ClaimedRoles>
											<xades:ClaimedRole>Tedarikçi</xades:ClaimedRole>
										</xades:ClaimedRoles>
									</xades:SignerRole>
								</xades:SignedSignatureProperties>
								<xades:SignedDataObjectProperties>
									<xades:DataObjectFormat ObjectReference="#Reference-Id-165d0b76-a250-480d-b3e5-ddcf4db560fd">
										<xades:MimeType>text/xml</xades:MimeType>
									</xades:DataObjectFormat>
								</xades:SignedDataObjectProperties>
							</xades:SignedProperties>
						</xades:QualifyingProperties>
					</ds:Object>
				</ds:Signature>
			</ext:ExtensionContent>
		</ext:UBLExtension>
	</ext:UBLExtensions>
	<cbc:UBLVersionID>2.1</cbc:UBLVersionID>
	<cbc:CustomizationID>TR1.2.1</cbc:CustomizationID>
	<cbc:ProfileID>TEMELIRSALIYE</cbc:ProfileID>
	<cbc:ID>EDM2024000000001</cbc:ID>
	<cbc:CopyIndicator>false</cbc:CopyIndicator>
	<cbc:UUID>bfb7970b-92c7-46ef-9572-207edb91efc1</cbc:UUID>
	<cbc:IssueDate>2024-01-01</cbc:IssueDate>
	<cbc:IssueTime>23:59:01</cbc:IssueTime>
	<cbc:DespatchAdviceTypeCode>SEVK</cbc:DespatchAdviceTypeCode>
	<cbc:Note>Yalnız, OnİkiBinTürkLirasıSıfırKuruş</cbc:Note>
	<cbc:Note>Güncel Bakiye:</cbc:Note>
	<cbc:Note>Ödeme Şekli:Açık Hesap</cbc:Note>
	<cbc:LineCountNumeric>10</cbc:LineCountNumeric>
	<cac:Signature>
		<cbc:ID schemeID="VKN_TCKN">3230512384</cbc:ID>
		<cac:SignatoryParty>
			<cac:PartyIdentification>
				<cbc:ID schemeID="VKN">3230512384</cbc:ID>
			</cac:PartyIdentification>
			<cac:PartyName>
				<cbc:Name>EDM BİLİŞİM DANIŞMANLIK HİZMETLERİ A.Ş.</cbc:Name>
			</cac:PartyName>
			<cac:PostalAddress>
				<cbc:StreetName>Cumhuriyet Mah. Yeni Yol 1 Sok. Bomonti Business Center Kat:7 D:36</cbc:StreetName>
				<cbc:CitySubdivisionName>Şişli</cbc:CitySubdivisionName>
				<cbc:CityName>İstanbul</cbc:CityName>
				<cac:Country>
					<cbc:Name>Türkiye</cbc:Name>
				</cac:Country>
			</cac:PostalAddress>
		</cac:SignatoryParty>
		<cac:DigitalSignatureAttachment>
			<cac:ExternalReference>
				<cbc:URI>#Signature_EDM2024000000001</cbc:URI>
			</cac:ExternalReference>
		</cac:DigitalSignatureAttachment>
	</cac:Signature>
	<cac:DespatchSupplierParty>
		<cac:Party>
			<cac:PartyIdentification>
				<cbc:ID schemeID="VKN">3230512384</cbc:ID>
			</cac:PartyIdentification>
			<cac:PartyName>
				<cbc:Name>EDM BİLİŞİM SİSTEMLERİ VE DANIŞMANLIK HİZMETLERİ ANONİM ŞİRKETİ</cbc:Name>
			</cac:PartyName>
			<cac:PostalAddress>
				<cbc:StreetName>Bomonti Business Center Cumhuriyet Mah. Yeni Yol 1 Sok. No:8 Kat:7</cbc:StreetName>
				<cbc:CitySubdivisionName>Şişli</cbc:CitySubdivisionName>
				<cbc:CityName>İstanbul</cbc:CityName>
				<cbc:Region>Bomonti Business Center Cumhuriyet Mah. Yeni Yol 1 Sok. No:8 Kat:7</cbc:Region>
				<cbc:District>Cumhuriyet</cbc:District>
				<cac:Country>
					<cbc:Name>TR</cbc:Name>
				</cac:Country>
			</cac:PostalAddress>
			<cac:PhysicalLocation>
				<cac:Address>
					<cbc:StreetName>Bomonti Business Center Cumhuriyet Mah. Yeni Yol 1 Sok. No:8 Kat:7</cbc:StreetName>
					<cbc:CitySubdivisionName>Şişli</cbc:CitySubdivisionName>
					<cbc:CityName>İstanbul</cbc:CityName>
					<cbc:Region>Bomonti Business Center Cumhuriyet Mah. Yeni Yol 1 Sok. No:8 Kat:7</cbc:Region>
					<cbc:District>Cumhuriyet</cbc:District>
					<cac:Country>
						<cbc:Name>TR</cbc:Name>
					</cac:Country>
				</cac:Address>
			</cac:PhysicalLocation>
			<cac:PartyTaxScheme>
				<cac:TaxScheme>
					<cbc:Name>Mecidiyeköy</cbc:Name>
				</cac:TaxScheme>
			</cac:PartyTaxScheme>
			<cac:Contact>
				<cbc:Telephone>8507236336</cbc:Telephone>
				<cbc:ElectronicMail>bilgi@edmbilisim.com.tr</cbc:ElectronicMail>
			</cac:Contact>
		</cac:Party>
		<cac:DespatchContact>
			<cbc:Name>ÖZGÜR GÜNAYDIN</cbc:Name>
		</cac:DespatchContact>
	</cac:DespatchSupplierParty>
	<cac:DeliveryCustomerParty>
		<cac:Party>
			<cac:PartyIdentification>
				<cbc:ID schemeID="VKN">2030017071</cbc:ID>
			</cac:PartyIdentification>
			<cac:PartyIdentification>
				<cbc:ID schemeID="MUSTERINO">36163</cbc:ID>
			</cac:PartyIdentification>
			<cac:PartyName>
				<cbc:Name>KOFTECI YUSUF (YLV-CIFTLIKKOY)</cbc:Name>
			</cac:PartyName>
			<cac:PostalAddress>
				<cbc:StreetName>Siteler Mah. İzmit Karayolu No:173</cbc:StreetName>
				<cbc:CitySubdivisionName>Çiftlikköy</cbc:CitySubdivisionName>
				<cbc:CityName>Yalova</cbc:CityName>
				<cbc:Region>Siteler Mah. İzmit Karayolu No:173</cbc:Region>
				<cbc:District>Siteler</cbc:District>
				<cac:Country>
					<cbc:Name>TR</cbc:Name>
				</cac:Country>
			</cac:PostalAddress>
			<cac:PartyTaxScheme>
				<cac:TaxScheme>
					<cbc:Name>İznik</cbc:Name>
				</cac:TaxScheme>
			</cac:PartyTaxScheme>
			<cac:Contact>
				<cbc:Telephone>5468854115</cbc:Telephone>
				<cbc:ElectronicMail>fatma.kirazci@kofteciyusuf.com.tr</cbc:ElectronicMail>
			</cac:Contact>
		</cac:Party>
	</cac:DeliveryCustomerParty>
	<cac:Shipment>
		<cbc:ID>77ACS141</cbc:ID>
		<cac:GoodsItem>
			<cbc:ValueAmount currencyID="TRY">0</cbc:ValueAmount>
		</cac:GoodsItem>
		<cac:ShipmentStage>
			<cac:TransportMeans>
				<cac:RoadTransport>
					<cbc:LicensePlateID schemeID="PLAKA">77ACS141</cbc:LicensePlateID>
				</cac:RoadTransport>
			</cac:TransportMeans>
			<cac:DriverPerson>
				<cbc:FirstName>Mustafa</cbc:FirstName>
				<cbc:FamilyName>Babadalı</cbc:FamilyName>
				<cbc:Title>Şoför</cbc:Title>
				<cbc:NationalityID schemeID="TCKN">66448303486</cbc:NationalityID>
			</cac:DriverPerson>
		</cac:ShipmentStage>
		<cac:Delivery>
			<cac:DeliveryAddress>
				<cbc:BuildingName>Siteler Mah. İzmit Karayolu No:173</cbc:BuildingName>
				<cbc:CitySubdivisionName>Çiftlikköy</cbc:CitySubdivisionName>
				<cbc:CityName>Yalova</cbc:CityName>
				<cbc:PostalZone>77560</cbc:PostalZone>
				<cac:Country>
					<cbc:IdentificationCode>TR</cbc:IdentificationCode>
					<cbc:Name>Türkiye</cbc:Name>
				</cac:Country>
			</cac:DeliveryAddress>
			<cac:CarrierParty>
				<cac:PartyIdentification>
					<cbc:ID schemeID="VKN">6010737702</cbc:ID>
				</cac:PartyIdentification>
				<cac:PartyName>
					<cbc:Name>EDM BİLİŞİM SİSTEMLERİ VE DANIŞMANLIK HİZMETLERİ ANONİM ŞİRKETİ</cbc:Name>
				</cac:PartyName>
				<cac:PostalAddress>
					<cbc:CitySubdivisionName>Çiftlikköy</cbc:CitySubdivisionName>
					<cbc:CityName>Yalova</cbc:CityName>
					<cac:Country>
						<cbc:Name>Türkiye</cbc:Name>
					</cac:Country>
				</cac:PostalAddress>
			</cac:CarrierParty>
			<cac:Despatch>
				<cbc:ActualDespatchDate>2024-01-01</cbc:ActualDespatchDate>
				<cbc:ActualDespatchTime>08:00:00</cbc:ActualDespatchTime>
			</cac:Despatch>
		</cac:Delivery>
		<cac:TransportHandlingUnit>
			<cac:TransportEquipment>
				<cbc:ID schemeID="DORSE">77ACS141</cbc:ID>
			</cac:TransportEquipment>
		</cac:TransportHandlingUnit>
	</cac:Shipment>
	<cac:DespatchLine>
		<cbc:ID>1</cbc:ID>
		<cbc:Note>GTIP No: 200819950013</cbc:Note>
		<cbc:Note>Alkol Orani: 0,00000000</cbc:Note>
		<cbc:DeliveredQuantity unitCode="C62">6.00000000</cbc:DeliveredQuantity>
		<cac:OrderLineReference>
			<cbc:LineID>2</cbc:LineID>
		</cac:OrderLineReference>
		<cac:Item>
			<cbc:Name>TADIM KAVRULMUŞ FINDIK İÇİ 90 GR</cbc:Name>
			<cac:BuyersItemIdentification>
				<cbc:ID>30054321</cbc:ID>
			</cac:BuyersItemIdentification>
			<cac:SellersItemIdentification>
				<cbc:ID>63000010</cbc:ID>
			</cac:SellersItemIdentification>
		</cac:Item>
		<cac:Shipment>
			<cbc:ID/>
			<cac:GoodsItem>
				<cac:InvoiceLine>
					<cbc:ID/>
					<cbc:InvoicedQuantity>0</cbc:InvoicedQuantity>
					<cbc:LineExtensionAmount currencyID="TRY">58.5000000000000000</cbc:LineExtensionAmount>
					<cac:Item>
						<cbc:Name>TADIM KAVRULMUŞ FINDIK İÇİ 90 GR</cbc:Name>
					</cac:Item>
					<cac:Price>
						<cbc:PriceAmount currencyID="TRY">9.75000000</cbc:PriceAmount>
					</cac:Price>
				</cac:InvoiceLine>
			</cac:GoodsItem>
		</cac:Shipment>
	</cac:DespatchLine>
	<cac:DespatchLine>
		<cbc:ID>2</cbc:ID>
		<cbc:Note>GTIP No: 200819990019</cbc:Note>
		<cbc:Note>Alkol Orani: 0,00000000</cbc:Note>
		<cbc:DeliveredQuantity unitCode="C62">6.00000000</cbc:DeliveredQuantity>
		<cac:OrderLineReference>
			<cbc:LineID>3</cbc:LineID>
		</cac:OrderLineReference>
		<cac:Item>
			<cbc:Name>TADIM TUZSUZ KABAK ÇEKİRDEK 180 GR</cbc:Name>
			<cac:BuyersItemIdentification>
				<cbc:ID>30240410</cbc:ID>
			</cac:BuyersItemIdentification>
			<cac:SellersItemIdentification>
				<cbc:ID>63000417</cbc:ID>
			</cac:SellersItemIdentification>
		</cac:Item>
		<cac:Shipment>
			<cbc:ID/>
			<cac:GoodsItem>
				<cac:InvoiceLine>
					<cbc:ID/>
					<cbc:InvoicedQuantity>0</cbc:InvoicedQuantity>
					<cbc:LineExtensionAmount currencyID="TRY">76.5000000000000000</cbc:LineExtensionAmount>
					<cac:Item>
						<cbc:Name>TADIM TUZSUZ KABAK ÇEKİRDEK 180 GR</cbc:Name>
					</cac:Item>
					<cac:Price>
						<cbc:PriceAmount currencyID="TRY">12.75000000</cbc:PriceAmount>
					</cac:Price>
				</cac:InvoiceLine>
			</cac:GoodsItem>
		</cac:Shipment>
	</cac:DespatchLine>
	<cac:DespatchLine>
		<cbc:ID>3</cbc:ID>
		<cbc:Note>GTIP No: 200811960010</cbc:Note>
		<cbc:Note>Alkol Orani: 0,00000000</cbc:Note>
		<cbc:DeliveredQuantity unitCode="C62">12.00000000</cbc:DeliveredQuantity>
		<cac:OrderLineReference>
			<cbc:LineID>4</cbc:LineID>
		</cac:OrderLineReference>
		<cac:Item>
			<cbc:Name>TADIM TUZLU YER FISTIĞI 180 GR</cbc:Name>
			<cac:BuyersItemIdentification>
				<cbc:ID>30304096</cbc:ID>
			</cac:BuyersItemIdentification>
			<cac:SellersItemIdentification>
				<cbc:ID>63000928</cbc:ID>
			</cac:SellersItemIdentification>
		</cac:Item>
		<cac:Shipment>
			<cbc:ID/>
			<cac:GoodsItem>
				<cac:InvoiceLine>
					<cbc:ID/>
					<cbc:InvoicedQuantity>0</cbc:InvoicedQuantity>
					<cbc:LineExtensionAmount currencyID="TRY">84.1200000000000000</cbc:LineExtensionAmount>
					<cac:Item>
						<cbc:Name>TADIM TUZLU YER FISTIĞI 180 GR</cbc:Name>
					</cac:Item>
					<cac:Price>
						<cbc:PriceAmount currencyID="TRY">7.01000000</cbc:PriceAmount>
					</cac:Price>
				</cac:InvoiceLine>
			</cac:GoodsItem>
		</cac:Shipment>
	</cac:DespatchLine>
	<cac:DespatchLine>
		<cbc:ID>4</cbc:ID>
		<cbc:Note>GTIP No: 200811960010</cbc:Note>
		<cbc:Note>Alkol Orani: 0,00000000</cbc:Note>
		<cbc:DeliveredQuantity unitCode="C62">6.00000000</cbc:DeliveredQuantity>
		<cac:OrderLineReference>
			<cbc:LineID>5</cbc:LineID>
		</cac:OrderLineReference>
		<cac:Item>
			<cbc:Name>TADIM KABUKLU YER FISTIĞI 250 GR</cbc:Name>
			<cac:BuyersItemIdentification>
				<cbc:ID>30099592</cbc:ID>
			</cac:BuyersItemIdentification>
			<cac:SellersItemIdentification>
				<cbc:ID>63000068</cbc:ID>
			</cac:SellersItemIdentification>
		</cac:Item>
		<cac:Shipment>
			<cbc:ID/>
			<cac:GoodsItem>
				<cac:InvoiceLine>
					<cbc:ID/>
					<cbc:InvoicedQuantity>0</cbc:InvoicedQuantity>
					<cbc:LineExtensionAmount currencyID="TRY">67.5000000000000000</cbc:LineExtensionAmount>
					<cac:Item>
						<cbc:Name>TADIM KABUKLU YER FISTIĞI 250 GR</cbc:Name>
					</cac:Item>
					<cac:Price>
						<cbc:PriceAmount currencyID="TRY">11.25000000</cbc:PriceAmount>
					</cac:Price>
				</cac:InvoiceLine>
			</cac:GoodsItem>
		</cac:Shipment>
	</cac:DespatchLine>
</DespatchAdvice>