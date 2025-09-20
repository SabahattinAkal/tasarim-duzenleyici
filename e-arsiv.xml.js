<Invoice xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:xades="http://uri.etsi.org/01903/v1.3.2#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xsi:schemaLocation="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2 ../xsdrt/maindoc/UBL-Invoice-2.1.xsd" xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2">
	<cbc:UBLVersionID>2.1</cbc:UBLVersionID>
	<cbc:CustomizationID>TR1.2</cbc:CustomizationID>
	<cbc:ProfileID>EARSIVFATURA</cbc:ProfileID>
	<cbc:ID/>
	<cbc:CopyIndicator>false</cbc:CopyIndicator>
	<cbc:UUID>5556a0ac-2f51-46d6-ac36-0ea410ebf3e0</cbc:UUID>
	<cbc:IssueDate>2025-09-12</cbc:IssueDate>
	<cbc:IssueTime>09:31:28</cbc:IssueTime>
	<cbc:InvoiceTypeCode>SATIS</cbc:InvoiceTypeCode>
	<cbc:Note/>
	<cbc:Note>Yazı ile: # İki Bin Üç Yüz Doksan Türk Lirası #</cbc:Note>
	<cbc:DocumentCurrencyCode>TRY</cbc:DocumentCurrencyCode>
	<cbc:LineCountNumeric>1</cbc:LineCountNumeric>
	<cac:AccountingSupplierParty>
		<cac:Party>
			<cbc:WebsiteURI>www.edmbilisim.com.tr</cbc:WebsiteURI>
			<cac:PartyIdentification>
				<cbc:ID schemeID="VKN">3230512384</cbc:ID>
			</cac:PartyIdentification>
			<cac:PartyIdentification>
				<cbc:ID schemeID="SUBENO"/>
			</cac:PartyIdentification>
			<cac:PartyIdentification>
				<cbc:ID schemeID="MERSISNO"/>
			</cac:PartyIdentification>
			<cac:PartyIdentification>
				<cbc:ID schemeID="HIZMETNO">İstanbul</cbc:ID>
			</cac:PartyIdentification>
			<cac:PartyIdentification>
				<cbc:ID schemeID="TICARETSICILNO"/>
			</cac:PartyIdentification>
			<cac:PartyName>
				<cbc:Name>EDM BİLİŞİM SİSTEMLERİ VE DANIŞMANLIK HİZMETLERİ ANONİM ŞİRKETİ</cbc:Name>
			</cac:PartyName>
			<cac:PostalAddress>
				<cbc:BuildingName>Cumhuriyet Mah. Yeni Yol 1 Sok. Bomonti Business Center Kat:7/ D:36</cbc:BuildingName>
				<cbc:CitySubdivisionName>Şişli</cbc:CitySubdivisionName>
				<cbc:CityName>İstanbul</cbc:CityName>
				<cac:Country>
					<cbc:IdentificationCode>TR</cbc:IdentificationCode>
					<cbc:Name>Türkiye</cbc:Name>
				</cac:Country>
			</cac:PostalAddress>
			<cac:PartyTaxScheme>
				<cac:TaxScheme>
					<cbc:Name>ŞİŞLİ</cbc:Name>
				</cac:TaxScheme>
			</cac:PartyTaxScheme>
			<cac:Contact>
				<cbc:Telephone>8508236336</cbc:Telephone>
				<cbc:ElectronicMail>bilgi@edmbilisim.com.tr</cbc:ElectronicMail>
			</cac:Contact>
		</cac:Party>
	</cac:AccountingSupplierParty>
	<cac:AccountingCustomerParty>
		<cac:Party>
			<cac:PartyIdentification>
				<cbc:ID schemeID="TCKN">19306989780</cbc:ID>
			</cac:PartyIdentification>
			<cac:PartyName>
				<cbc:Name>Onur Deniz Güvenilir</cbc:Name>
			</cac:PartyName>
			<cac:PostalAddress>
				<cbc:BuildingName>Atatürk Mahallesi Abdülkadir Göksel Caddesi No 12 B Şehitkamil Gaziantep </cbc:BuildingName>
				<cbc:CitySubdivisionName>Şehitkamil</cbc:CitySubdivisionName>
				<cbc:CityName>Gaziantep</cbc:CityName>
				<cac:Country>
					<cbc:IdentificationCode>TR</cbc:IdentificationCode>
					<cbc:Name>Türkiye</cbc:Name>
				</cac:Country>
			</cac:PostalAddress>
			<cac:PartyTaxScheme>
				<cac:TaxScheme>
					<cbc:Name/>
				</cac:TaxScheme>
			</cac:PartyTaxScheme>
			<cac:Contact>
				<cbc:Telephone>05348812622</cbc:Telephone>
				<cbc:ElectronicMail>onurdenizguvenilir@gmail.com</cbc:ElectronicMail>
			</cac:Contact>
			<cac:Person>
				<cbc:FirstName>Onur Deniz</cbc:FirstName>
				<cbc:FamilyName>Güvenilir</cbc:FamilyName>
			</cac:Person>
		</cac:Party>
	</cac:AccountingCustomerParty>
	<cac:PaymentTerms>
		<cbc:PaymentDueDate>2025-09-12</cbc:PaymentDueDate>
	</cac:PaymentTerms>
	<cac:TaxTotal>
		<cbc:TaxAmount currencyID="TRY">398.33</cbc:TaxAmount>
		<cac:TaxSubtotal>
			<cbc:TaxableAmount currencyID="TRY">1991.67</cbc:TaxableAmount>
			<cbc:TaxAmount currencyID="TRY">398.33</cbc:TaxAmount>
			<cbc:CalculationSequenceNumeric>1</cbc:CalculationSequenceNumeric>
			<cbc:Percent>20.00</cbc:Percent>
			<cac:TaxCategory>
				<cac:TaxScheme>
					<cbc:Name>KDV GERCEK</cbc:Name>
					<cbc:TaxTypeCode>0015</cbc:TaxTypeCode>
				</cac:TaxScheme>
			</cac:TaxCategory>
		</cac:TaxSubtotal>
	</cac:TaxTotal>
	<cac:LegalMonetaryTotal>
		<cbc:LineExtensionAmount currencyID="TRY">1991.67</cbc:LineExtensionAmount>
		<cbc:TaxExclusiveAmount currencyID="TRY">1991.67</cbc:TaxExclusiveAmount>
		<cbc:TaxInclusiveAmount currencyID="TRY">2390.00</cbc:TaxInclusiveAmount>
		<cbc:AllowanceTotalAmount currencyID="TRY">0</cbc:AllowanceTotalAmount>
		<cbc:PayableAmount currencyID="TRY">2390.00</cbc:PayableAmount>
	</cac:LegalMonetaryTotal>
	<cac:InvoiceLine>
		<cbc:ID>1</cbc:ID>
		<cbc:InvoicedQuantity unitCode="C62">1.00</cbc:InvoicedQuantity>
		<cbc:LineExtensionAmount currencyID="TRY">1991.67</cbc:LineExtensionAmount>
		<cac:TaxTotal>
			<cbc:TaxAmount currencyID="TRY">398.33</cbc:TaxAmount>
			<cac:TaxSubtotal>
				<cbc:TaxableAmount currencyID="TRY">1991.67</cbc:TaxableAmount>
				<cbc:TaxAmount currencyID="TRY">398.33</cbc:TaxAmount>
				<cbc:CalculationSequenceNumeric>1</cbc:CalculationSequenceNumeric>
				<cbc:Percent>20.00</cbc:Percent>
				<cac:TaxCategory>
					<cac:TaxScheme>
						<cbc:Name>GERÇEK USULDE KATMA DEĞER VERGİSİ</cbc:Name>
						<cbc:TaxTypeCode>0015</cbc:TaxTypeCode>
					</cac:TaxScheme>
				</cac:TaxCategory>
			</cac:TaxSubtotal>
		</cac:TaxTotal>
		<cac:Item>
			<cbc:Name>Trendyol KEP Adresi Gönder Al (50 KONTÖR) (3 Yıl) + E-İmza (3 Yıl)</cbc:Name>
			<cbc:BrandName/>
		</cac:Item>
		<cac:Price>
			<cbc:PriceAmount currencyID="TRY">1991.67</cbc:PriceAmount>
		</cac:Price>
	</cac:InvoiceLine>
</Invoice>