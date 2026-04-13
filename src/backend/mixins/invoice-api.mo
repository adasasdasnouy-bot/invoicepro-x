import List "mo:core/List";
import Types "../types/invoice";
import InvoiceLib "../lib/invoice";

mixin (invoices : List.List<Types.Invoice>) {
  var nextInvoiceId : Nat = 0;

  public func createInvoice(client : Text, amount : Nat, discount : Nat) : async Types.Invoice {
    let invoice = InvoiceLib.createInvoice(invoices, nextInvoiceId, client, amount, discount);
    nextInvoiceId += 1;
    invoice;
  };

  public query func listInvoices() : async [Types.Invoice] {
    InvoiceLib.listInvoices(invoices);
  };
};
