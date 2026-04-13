import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/invoice";

module {
  public func createInvoice(
    invoices : List.List<Types.Invoice>,
    nextId : Nat,
    client : Text,
    amount : Nat,
    discount : Nat,
  ) : Types.Invoice {
    let total = if (discount < amount) { amount - discount } else { 0 };
    let invoice : Types.Invoice = {
      id = nextId;
      createdAt = Time.now();
      client;
      amount;
      discount;
      total;
    };
    invoices.add(invoice);
    invoice;
  };

  public func listInvoices(invoices : List.List<Types.Invoice>) : [Types.Invoice] {
    invoices.toArray();
  };
};
