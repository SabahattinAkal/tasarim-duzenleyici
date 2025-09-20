<Invoice xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:xades="http://uri.etsi.org/01903/v1.3.2#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xsi:schemaLocation="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2 UBL-Invoice-2.1.xsd" xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2">
	<cbc:UBLVersionID>2.1</cbc:UBLVersionID>
	<cbc:CustomizationID>TR1.2</cbc:CustomizationID>
	<cbc:ProfileID>ESMM</cbc:ProfileID>
	<cbc:ID>SMM2024000000001</cbc:ID>
	<cbc:CopyIndicator>false</cbc:CopyIndicator>
	<cbc:UUID>f72807f0-fa4c-4fd3-ab3d-0ce9c5750f8c</cbc:UUID>
	<cbc:IssueDate>2024-01-01</cbc:IssueDate>
	<cbc:IssueTime>23:59:01</cbc:IssueTime>
	<cbc:InvoiceTypeCode>SATIS</cbc:InvoiceTypeCode>
	<cbc:Note>Yalnız SEKSENSEKİZ Kr.</cbc:Note>
	<cbc:DocumentCurrencyCode>TRY</cbc:DocumentCurrencyCode>
	<cbc:LineCountNumeric>1</cbc:LineCountNumeric>
	<cac:AccountingSupplierParty>
		<cac:Party>
			<cac:PartyIdentification>
				<cbc:ID schemeID="TCKN">35000189028</cbc:ID>
			</cac:PartyIdentification>
			<cac:PartyIdentification>
				<cbc:ID schemeID="MERSISNO"/>
			</cac:PartyIdentification>
			<cac:PartyIdentification>
				<cbc:ID schemeID="HIZMETNO"/>
			</cac:PartyIdentification>
			<cac:PartyIdentification>
				<cbc:ID schemeID="TICARETSICILNO"/>
			</cac:PartyIdentification>
			<cac:PartyName>
				<cbc:Name>ORHAN KARAKUS</cbc:Name>
			</cac:PartyName>
			<cac:PostalAddress>
				<cbc:BuildingName>Kordonboyu Mah. Hükümet Cad. Meltem Apt. No:3 İç Kapı No:21</cbc:BuildingName>
				<cbc:CitySubdivisionName>Kartal</cbc:CitySubdivisionName>
				<cbc:CityName>İstanbul</cbc:CityName>
				<cac:Country>
					<cbc:IdentificationCode>TR</cbc:IdentificationCode>
					<cbc:Name>Türkiye</cbc:Name>
				</cac:Country>
			</cac:PostalAddress>
			<cac:PartyTaxScheme>
				<cac:TaxScheme>
					<cbc:Name>Kartal</cbc:Name>
				</cac:TaxScheme>
			</cac:PartyTaxScheme>
			<cac:Person>
				<cbc:FirstName>ORHAN</cbc:FirstName>
				<cbc:FamilyName>KARAKUS</cbc:FamilyName>
			</cac:Person>
		</cac:Party>
	</cac:AccountingSupplierParty>
	<cac:AccountingCustomerParty>
		<cac:Party>
			<cac:PartyIdentification>
				<cbc:ID schemeID="VKN">0991247059</cbc:ID>
			</cac:PartyIdentification>
			<cac:PartyName>
				<cbc:Name>ATELYE DİZAYN YAPI UYGULAMALARI SANAYİ TİCARET LİMİTED ŞİRKETİ</cbc:Name>
			</cac:PartyName>
			<cac:PostalAddress>
				<cbc:BuildingName>Mimar Sinan Mah. Üsküdar Cad. Yedpa 1/C No:166</cbc:BuildingName>
				<cbc:CitySubdivisionName>Ataşehir</cbc:CitySubdivisionName>
				<cbc:CityName>İstanbul</cbc:CityName>
				<cac:Country>
					<cbc:IdentificationCode>TR</cbc:IdentificationCode>
					<cbc:Name>Türkiye</cbc:Name>
				</cac:Country>
			</cac:PostalAddress>
			<cac:PartyTaxScheme>
				<cac:TaxScheme>
					<cbc:Name>Kozyatağı</cbc:Name>
				</cac:TaxScheme>
			</cac:PartyTaxScheme>
		</cac:Party>
	</cac:AccountingCustomerParty>
	<cac:TaxTotal>
		<cbc:TaxAmount currencyID="TRY">0.08</cbc:TaxAmount>
		<cac:TaxSubtotal>
			<cbc:TaxableAmount currencyID="TRY">0</cbc:TaxableAmount>
			<cbc:TaxAmount currencyID="TRY">0.2</cbc:TaxAmount>
			<cbc:CalculationSequenceNumeric>1</cbc:CalculationSequenceNumeric>
			<cbc:Percent>20</cbc:Percent>
			<cac:TaxCategory>
				<cac:TaxScheme>
					<cbc:Name>STPJ</cbc:Name>
					<cbc:TaxTypeCode>0003</cbc:TaxTypeCode>
				</cac:TaxScheme>
			</cac:TaxCategory>
		</cac:TaxSubtotal>
		<cac:TaxSubtotal>
			<cbc:TaxableAmount currencyID="TRY">0</cbc:TaxableAmount>
			<cbc:TaxAmount currencyID="TRY">0.08</cbc:TaxAmount>
			<cbc:CalculationSequenceNumeric>2</cbc:CalculationSequenceNumeric>
			<cbc:Percent>8</cbc:Percent>
			<cac:TaxCategory>
				<cac:TaxScheme>
					<cbc:Name>KDV GERCEK</cbc:Name>
					<cbc:TaxTypeCode>0015</cbc:TaxTypeCode>
				</cac:TaxScheme>
			</cac:TaxCategory>
		</cac:TaxSubtotal>
	</cac:TaxTotal>
	<cac:LegalMonetaryTotal>
		<cbc:LineExtensionAmount currencyID="TRY">1</cbc:LineExtensionAmount>
		<cbc:TaxExclusiveAmount currencyID="TRY">0.8</cbc:TaxExclusiveAmount>
		<cbc:TaxInclusiveAmount currencyID="TRY">0.08</cbc:TaxInclusiveAmount>
		<cbc:PayableAmount currencyID="TRY">0.88</cbc:PayableAmount>
	</cac:LegalMonetaryTotal>
	<cac:InvoiceLine>
		<cbc:ID>1</cbc:ID>
		<cbc:InvoicedQuantity unitCode="NIU">0.8</cbc:InvoicedQuantity>
		<cbc:LineExtensionAmount currencyID="TRY">1</cbc:LineExtensionAmount>
		<cac:TaxTotal>
			<cbc:TaxAmount currencyID="TRY">0.08</cbc:TaxAmount>
			<cac:TaxSubtotal>
				<cbc:TaxableAmount currencyID="TRY">0</cbc:TaxableAmount>
				<cbc:TaxAmount currencyID="TRY">0.2</cbc:TaxAmount>
				<cbc:CalculationSequenceNumeric>1</cbc:CalculationSequenceNumeric>
				<cbc:Percent>20</cbc:Percent>
				<cac:TaxCategory>
					<cac:TaxScheme>
						<cbc:Name>GELİR VERGİSİ STOPAJI</cbc:Name>
						<cbc:TaxTypeCode>0003</cbc:TaxTypeCode>
					</cac:TaxScheme>
				</cac:TaxCategory>
			</cac:TaxSubtotal>
			<cac:TaxSubtotal>
				<cbc:TaxableAmount currencyID="TRY">0</cbc:TaxableAmount>
				<cbc:TaxAmount currencyID="TRY">0.08</cbc:TaxAmount>
				<cbc:CalculationSequenceNumeric>2</cbc:CalculationSequenceNumeric>
				<cbc:Percent>8</cbc:Percent>
				<cac:TaxCategory>
					<cbc:TaxExemptionReasonCode/>
					<cbc:TaxExemptionReason/>
					<cac:TaxScheme>
						<cbc:Name>GERÇEK USULDE KATMA DEĞER VERGİSİ</cbc:Name>
						<cbc:TaxTypeCode>0015</cbc:TaxTypeCode>
					</cac:TaxScheme>
				</cac:TaxCategory>
			</cac:TaxSubtotal>
		</cac:TaxTotal>
		<cac:Item>
			<cbc:Name>test1</cbc:Name>
		</cac:Item>
		<cac:Price>
			<cbc:PriceAmount currencyID="TRY">0.88</cbc:PriceAmount>
		</cac:Price>
	</cac:InvoiceLine>
</Invoice>