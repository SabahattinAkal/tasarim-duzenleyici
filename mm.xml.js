<CreditNote xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:xades="http://uri.etsi.org/01903/v1.3.2#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xsi:schemaLocation="urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2 UBL-CreditNote-2.1.xsd" xmlns="urn:oasis:names:specification:ubl:schema:xsd:CreditNote-2">
	<cbc:UBLVersionID>2.1</cbc:UBLVersionID>
	<cbc:CustomizationID>TR1.2</cbc:CustomizationID>
	<cbc:ProfileID>e-Arşiv Belge</cbc:ProfileID>
	<cbc:ID>EMM2024000000001</cbc:ID>
	<cbc:CopyIndicator>false</cbc:CopyIndicator>
	<cbc:UUID>e8b0bec1-c625-4c17-94bf-2bf67fee351b</cbc:UUID>
	<cbc:IssueDate>2024-01-01</cbc:IssueDate>
	<cbc:IssueTime>23:59:01</cbc:IssueTime>
	<cbc:DocumentCurrencyCode>TRY</cbc:DocumentCurrencyCode>
	<cbc:LineCountNumeric>1</cbc:LineCountNumeric>
	<cac:AccountingSupplierParty>
		<cac:Party>
			<cac:PartyIdentification>
				<cbc:ID schemeID="VKN">4200260856</cbc:ID>
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
				<cbc:Name>GÜLHAN TARIM TEKSTİL PETROL NAKLİYAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ</cbc:Name>
			</cac:PartyName>
			<cac:PostalAddress>
				<cbc:BuildingName>Ersoylu Mah. Semt İpek Yolu Cad. No:546</cbc:BuildingName>
				<cbc:CitySubdivisionName>Kızıltepe</cbc:CitySubdivisionName>
				<cbc:CityName>Mardin</cbc:CityName>
				<cac:Country>
					<cbc:IdentificationCode>TR</cbc:IdentificationCode>
					<cbc:Name>Türkiye</cbc:Name>
				</cac:Country>
			</cac:PostalAddress>
			<cac:PartyTaxScheme>
				<cac:TaxScheme>
					<cbc:Name>Kızıltepe Vergi Dairesi Müd.</cbc:Name>
				</cac:TaxScheme>
			</cac:PartyTaxScheme>
			<cac:Contact>
				<cbc:ElectronicMail>aaa@aaa.com.tr</cbc:ElectronicMail>
			</cac:Contact>
		</cac:Party>
	</cac:AccountingSupplierParty>
	<cac:AccountingCustomerParty>
		<cac:Party>
			<cac:PartyIdentification>
				<cbc:ID schemeID="TCKN">67840232732</cbc:ID>
			</cac:PartyIdentification>
			<cac:PartyName>
				<cbc:Name>MUSTAFA GÜNEŞ</cbc:Name>
			</cac:PartyName>
			<cac:PostalAddress>
				<cbc:BuildingName>Tılsım Mah.</cbc:BuildingName>
				<cbc:CitySubdivisionName>Merkez</cbc:CitySubdivisionName>
				<cbc:CityName>Batman</cbc:CityName>
				<cac:Country>
					<cbc:IdentificationCode>TR</cbc:IdentificationCode>
					<cbc:Name>Türkiye</cbc:Name>
				</cac:Country>
			</cac:PostalAddress>
			<cac:PartyTaxScheme>
				<cac:TaxScheme>
					<cbc:Name>Batman</cbc:Name>
				</cac:TaxScheme>
			</cac:PartyTaxScheme>
			<cac:Person>
				<cbc:FirstName>MUSTAFA</cbc:FirstName>
				<cbc:FamilyName>GÜNEŞ</cbc:FamilyName>
			</cac:Person>
		</cac:Party>
	</cac:AccountingCustomerParty>
	<cac:TaxTotal>
		<cbc:TaxAmount currencyID="TRY">2940</cbc:TaxAmount>
		<cac:TaxSubtotal>
			<cbc:TaxableAmount currencyID="TRY">147000</cbc:TaxableAmount>
			<cbc:TaxAmount currencyID="TRY">2940</cbc:TaxAmount>
			<cbc:CalculationSequenceNumeric>1</cbc:CalculationSequenceNumeric>
			<cbc:Percent>2</cbc:Percent>
			<cac:TaxCategory>
				<cac:TaxScheme>
					<cbc:Name>STPJ</cbc:Name>
					<cbc:TaxTypeCode>0003</cbc:TaxTypeCode>
				</cac:TaxScheme>
			</cac:TaxCategory>
		</cac:TaxSubtotal>
	</cac:TaxTotal>
	<cac:LegalMonetaryTotal>
		<cbc:LineExtensionAmount currencyID="TRY">147000</cbc:LineExtensionAmount>
		<cbc:TaxExclusiveAmount currencyID="TRY">147000</cbc:TaxExclusiveAmount>
		<cbc:TaxInclusiveAmount currencyID="TRY">147000</cbc:TaxInclusiveAmount>
		<cbc:PayableAmount currencyID="TRY">144060</cbc:PayableAmount>
	</cac:LegalMonetaryTotal>
	<cac:CreditNoteLine>
		<cbc:ID>1</cbc:ID>
		<cbc:CreditedQuantity unitCode="KGM">7000</cbc:CreditedQuantity>
		<cbc:LineExtensionAmount currencyID="TRY">147000</cbc:LineExtensionAmount>
		<cac:TaxTotal>
			<cbc:TaxAmount currencyID="TRY">2940</cbc:TaxAmount>
			<cac:TaxSubtotal>
				<cbc:TaxableAmount currencyID="TRY">147000</cbc:TaxableAmount>
				<cbc:TaxAmount currencyID="TRY">2940</cbc:TaxAmount>
				<cbc:CalculationSequenceNumeric>1</cbc:CalculationSequenceNumeric>
				<cbc:Percent>2</cbc:Percent>
				<cac:TaxCategory>
					<cac:TaxScheme>
						<cbc:Name>GELİR VERGİSİ STOPAJI</cbc:Name>
						<cbc:TaxTypeCode>0003</cbc:TaxTypeCode>
					</cac:TaxScheme>
				</cac:TaxCategory>
			</cac:TaxSubtotal>
		</cac:TaxTotal>
		<cac:Item>
			<cbc:Name>KÜTLÜ PAMUK ST-1 BEYAZ</cbc:Name>
		</cac:Item>
		<cac:Price>
			<cbc:PriceAmount currencyID="TRY">21</cbc:PriceAmount>
		</cac:Price>
	</cac:CreditNoteLine>
</CreditNote>