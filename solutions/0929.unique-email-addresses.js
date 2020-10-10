/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const uniqueEmails = new Set();

  for (let i = 0; i < emails.length; i++) {
    const [local, domain] = emails[i].split("@");

    const noDots = local.replace(/[.]*/gi, "");
    const noFilter = noDots.split("+")[0];

    uniqueEmails.add(noFilter + "@" + domain);
  }

  return uniqueEmails.size;
};
