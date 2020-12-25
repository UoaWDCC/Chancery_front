/**
 * Format topic names
 * @param string<topics>
 */

function topicFormat(topic) {
  switch (topic) {
    case "Valuation":
      return "Valuation";
      break;
    case "EV_/_Equity Value":
      return "EV";
      break;
    case "Discounted_Cash_Flow":
      return "DCF";
      break;
    case "LBO":
      return "LBO";
      break;
    case "Merger_Model":
      return "MM";
      break;
    case "Accounting":
      return "Accounting";
      break;
    default:
      return "";
  }
}

export default topicFormat;
