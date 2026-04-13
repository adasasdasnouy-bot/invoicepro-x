import List "mo:core/List";
import InvoiceTypes "types/invoice";
import InvoiceApi "mixins/invoice-api";
import CalculatorApi "mixins/calculator-api";

actor {
  let invoices = List.empty<InvoiceTypes.Invoice>();

  include InvoiceApi(invoices);
  include CalculatorApi();
};
