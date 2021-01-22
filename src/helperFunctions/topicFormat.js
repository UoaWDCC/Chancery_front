/**
 * Format topic names
 * @param string<topics>
 */

function topicFormat(topic) {
  switch (topic) {
    case "Valuation":
      return "Valuation";
    case "EV_/_Equity Value":
      return "EV";
    case "Discounted_Cash_Flow":
      return "DCF";
    case "LBO":
      return "LBO";
    case "Merger_Model":
      return "MM";
    case "Accounting":
      return "Accounting";
    default:
      return "";
  }
}

export default topicFormat;
