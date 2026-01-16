I used Context API in this project because I needed to use the same data and state in multiple files. Without Context, I would have to pass data using props, which is not the best approach. The Admin / Agent role in the header and role-based sidebar logic would also be difficult to manage without Context.

setData(tenants[org]) means taking the selected organization’s data from the tenants object. I used switchTenant inside onChange because the user is selecting the organization, and the selected value is passed to Context as a parameter.

While updating leads, I used:
const updated = [...data.leads];
updated[index].status = status;
setData({ ...data, leads: updated });

This same update logic was already used in my Todo List project, so I reused the same safe React pattern here.