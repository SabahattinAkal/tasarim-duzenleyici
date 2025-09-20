<Invoice xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:xades="http://uri.etsi.org/01903/v1.3.2#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xsi:schemaLocation="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2 UBL-Invoice-2.1.xsd" xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2">
	<cbc:UBLVersionID>2.1</cbc:UBLVersionID>
	<cbc:CustomizationID>TR1.2</cbc:CustomizationID>
	<cbc:ProfileID>TEMELFATURA</cbc:ProfileID>
	<cbc:ID>EDM2024000000001</cbc:ID>
	<cbc:CopyIndicator>false</cbc:CopyIndicator>
	<cbc:UUID>ec7dacab-60e7-409e-a7dc-e496e2e97245</cbc:UUID>
	<cbc:IssueDate>2024-01-01</cbc:IssueDate>
	<cbc:IssueTime>23:59:01</cbc:IssueTime>
	<cbc:InvoiceTypeCode>SATIS</cbc:InvoiceTypeCode>
	<cbc:Note>Yalnız, OnİkiBinTürkLirasıSıfırKuruş</cbc:Note>
	<cbc:DocumentCurrencyCode>USD</cbc:DocumentCurrencyCode>
	<cbc:LineCountNumeric>2</cbc:LineCountNumeric>
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
				<cbc:ID schemeID="MERSISNO">1234</cbc:ID>
			</cac:PartyIdentification>
			<cac:PartyIdentification>
				<cbc:ID schemeID="HIZMETNO"/>
			</cac:PartyIdentification>
			<cac:PartyIdentification>
				<cbc:ID schemeID="TICARETSICILNO">03230512384012345</cbc:ID>
			</cac:PartyIdentification>
			<cac:PartyName>
				<cbc:Name>EDM BİLİŞİM SİSTEMLERİ VE DANIŞMANLIK HİZMETLERİ ANONİM ŞİRKETİ</cbc:Name>
			</cac:PartyName>
			<cac:PostalAddress>
				<cbc:BuildingName>Bomonti Business Center Cumhuriyet Mah. Yeni Yol 1 Sok. No:8 Kat:7</cbc:BuildingName>
				<cbc:CitySubdivisionName>Şişli</cbc:CitySubdivisionName>
				<cbc:CityName>İstanbul</cbc:CityName>
				<cac:Country>
					<cbc:IdentificationCode>TR</cbc:IdentificationCode>
					<cbc:Name>Türkiye</cbc:Name>
				</cac:Country>
			</cac:PostalAddress>
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
	</cac:AccountingSupplierParty>
	<cac:AccountingCustomerParty>
		<cac:Party>
			<cbc:WebsiteURI>www.abcyazilim.com.tr</cbc:WebsiteURI>
			<cac:PartyIdentification>
				<cbc:ID schemeID="VKN">1902486842</cbc:ID>
			</cac:PartyIdentification>
			<cac:PartyIdentification>
				<cbc:ID schemeID="SUBENO"/>
			</cac:PartyIdentification>
			<cac:PartyIdentification>
				<cbc:ID schemeID="MUSTERINO"/>
			</cac:PartyIdentification>
			<cac:PartyName>
				<cbc:Name>ABC YAZILIM VE BİLİŞİM SİSTEMLERİ LTD. ŞTİ.</cbc:Name>
			</cac:PartyName>
			<cac:PostalAddress>
				<cbc:BuildingName>Sevindik Mah. Kalender Sok. No:92 Kat:4</cbc:BuildingName>
				<cbc:CitySubdivisionName>Kağıthane</cbc:CitySubdivisionName>
				<cbc:CityName>İstanbul</cbc:CityName>
				<cac:Country>
					<cbc:IdentificationCode>TR</cbc:IdentificationCode>
					<cbc:Name>Türkiye</cbc:Name>
				</cac:Country>
			</cac:PostalAddress>
			<cac:PartyTaxScheme>
				<cac:TaxScheme>
					<cbc:Name>Kağıthane</cbc:Name>
				</cac:TaxScheme>
			</cac:PartyTaxScheme>
			<cac:Contact>
				<cbc:Telephone/>
				<cbc:ElectronicMail>abc@abcyazilim.com.tr</cbc:ElectronicMail>
			</cac:Contact>
		</cac:Party>
	</cac:AccountingCustomerParty>
	<cac:PaymentTerms>
		<cbc:PaymentDueDate>2024-01-01</cbc:PaymentDueDate>
	</cac:PaymentTerms>
	<cac:PricingExchangeRate>
		<cbc:SourceCurrencyCode>USD</cbc:SourceCurrencyCode>
		<cbc:TargetCurrencyCode>TRY</cbc:TargetCurrencyCode>
		<cbc:CalculationRate>30</cbc:CalculationRate>
	</cac:PricingExchangeRate>
	<cac:TaxTotal>
		<cbc:TaxAmount currencyID="USD">2000</cbc:TaxAmount>
		<cac:TaxSubtotal>
			<cbc:TaxableAmount currencyID="USD">10000</cbc:TaxableAmount>
			<cbc:TaxAmount currencyID="USD">2000</cbc:TaxAmount>
			<cbc:CalculationSequenceNumeric>1</cbc:CalculationSequenceNumeric>
			<cbc:Percent>20</cbc:Percent>
			<cac:TaxCategory>
				<cac:TaxScheme>
					<cbc:Name>KDV GERCEK</cbc:Name>
					<cbc:TaxTypeCode>0015</cbc:TaxTypeCode>
				</cac:TaxScheme>
			</cac:TaxCategory>
		</cac:TaxSubtotal>
	</cac:TaxTotal>
	<cac:LegalMonetaryTotal>
		<cbc:LineExtensionAmount currencyID="USD">10000</cbc:LineExtensionAmount>
		<cbc:TaxExclusiveAmount currencyID="USD">10000</cbc:TaxExclusiveAmount>
		<cbc:TaxInclusiveAmount currencyID="USD">12000</cbc:TaxInclusiveAmount>
		<cbc:AllowanceTotalAmount currencyID="USD">0</cbc:AllowanceTotalAmount>
		<cbc:PayableAmount currencyID="USD">12000</cbc:PayableAmount>
	</cac:LegalMonetaryTotal>
	<cac:InvoiceLine>
		<cbc:ID>1</cbc:ID>
		<cbc:InvoicedQuantity unitCode="C62">5</cbc:InvoicedQuantity>
		<cbc:LineExtensionAmount currencyID="USD">5000</cbc:LineExtensionAmount>
		<cac:TaxTotal>
			<cbc:TaxAmount currencyID="USD">1000</cbc:TaxAmount>
			<cac:TaxSubtotal>
				<cbc:TaxableAmount currencyID="USD">5000</cbc:TaxableAmount>
				<cbc:TaxAmount currencyID="USD">1000</cbc:TaxAmount>
				<cbc:CalculationSequenceNumeric>1</cbc:CalculationSequenceNumeric>
				<cbc:Percent>20</cbc:Percent>
				<cac:TaxCategory>
					<cac:TaxScheme>
						<cbc:Name>GERÇEK USULDE KATMA DEĞER VERGİSİ</cbc:Name>
						<cbc:TaxTypeCode>0015</cbc:TaxTypeCode>
					</cac:TaxScheme>
				</cac:TaxCategory>
			</cac:TaxSubtotal>
		</cac:TaxTotal>
		<cac:Item>
			<cbc:Name>test1</cbc:Name>
			<cbc:BrandName/>
		</cac:Item>
		<cac:Price>
			<cbc:PriceAmount currencyID="USD">1000</cbc:PriceAmount>
		</cac:Price>
	</cac:InvoiceLine>
	<cac:InvoiceLine>
		<cbc:ID>2</cbc:ID>
		<cbc:InvoicedQuantity unitCode="C62">10</cbc:InvoicedQuantity>
		<cbc:LineExtensionAmount currencyID="USD">5000</cbc:LineExtensionAmount>
		<cac:TaxTotal>
			<cbc:TaxAmount currencyID="USD">1000</cbc:TaxAmount>
			<cac:TaxSubtotal>
				<cbc:TaxableAmount currencyID="USD">5000</cbc:TaxableAmount>
				<cbc:TaxAmount currencyID="USD">1000</cbc:TaxAmount>
				<cbc:CalculationSequenceNumeric>1</cbc:CalculationSequenceNumeric>
				<cbc:Percent>20</cbc:Percent>
				<cac:TaxCategory>
					<cac:TaxScheme>
						<cbc:Name>GERÇEK USULDE KATMA DEĞER VERGİSİ</cbc:Name>
						<cbc:TaxTypeCode>0015</cbc:TaxTypeCode>
					</cac:TaxScheme>
				</cac:TaxCategory>
			</cac:TaxSubtotal>
		</cac:TaxTotal>
		<cac:Item>
			<cbc:Name>test2</cbc:Name>
			<cbc:BrandName/>
		</cac:Item>
		<cac:Price>
			<cbc:PriceAmount currencyID="USD">500</cbc:PriceAmount>
		</cac:Price>
	</cac:InvoiceLine>
</Invoice>