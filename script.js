const icons = {
  plus: '<path d="M12 5v14M5 12h14"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  boxes:
    '<path d="m12 2 7 4v8l-7 4-7-4V6l7-4Z"/><path d="m5 6 7 4 7-4M12 10v8"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  trash:
    '<path d="M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6"/><path d="M10 11v5M14 11v5"/>',
  more: '<circle cx="12" cy="5" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="19" r="1" fill="currentColor"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
};
Object.assign(icons, {
  grid: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
  hexagon:
    '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><circle cx="12" cy="12" r="3"/>',
  "share-2":
    '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
  flame:
    '<path d="M12 22c4 0 7-3 7-7 0-3-1.5-5.5-4-7 .2 2-1 3-2 3-1.5-2-1-5-1-7-4 2-7 6-7 11 0 4 3 7 7 7Z"/>',
  "refresh-cw":
    '<path d="M21 12a9 9 0 0 0-15-6.7L3 8M3 3v5h5M3 12a9 9 0 0 0 15 6.7l3-2.7M21 21v-5h-5"/>',
  shield:
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  "log-in":
    '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>',
  "git-branch":
    '<circle cx="6" cy="3" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="21" r="2"/><path d="M6 5v14M18 8a9 9 0 0 1-9 9H6"/>',
  database:
    '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  "book-open":
    '<path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2ZM22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7Z"/>',
  "log-out":
    '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
});
document
  .querySelectorAll("[data-icon]")
  .forEach(
    (e) =>
      (e.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">' +
        (icons[e.dataset.icon] || "") +
        "</svg>"),
  );
const galaxy = {
  "MARS PhyServer":
    "name device_gnezdo_id ci_category_lu_description ci_id server_managed_ip device_ip_list server_cpu_core server_ram device_vendor device_model device_serial_number device_res_pool_lu_description device_standard_lu_description server_type_lu_description ci_owner_group_ref_description ci_resp_group_ref_description ci_status_lu_description ci_perimeter_lu_description ci_env_type_lu_description device_rack_ref_description device_dc_ref_description",
  "MARS Storage": "name device_serial_number ci_env_type",
  "MARS UABD":
    "name sftciconfiguration sftcistatus sftcienvtype sftsoftname sftsoftversion sftsofthostname sftciresponsiblegroup sftisboxedproduct sftciowner sftcidomain sftsoftdistributiverelease sftsoftrole sftciconfiguration4 itsmname itsmsyscriticalitycategory hstname hstcistatus hsthostipaddress hsthostosname hsthostosversion hstcienvtype hstciresponsiblegroup dbmsname dbmsdbmsdbname dbmsdbuniqname dbmsciid dbmsdbmsmainis dbmsalias dbmsdbmsenvtype dbmsciresponsiblegroup appplatformtype security_zone fqdn itsmcistatus hsthostiscloud hsthostnetworksegment sftcicreatetime sftsoftinstalltype dbmsdbmsrole",
  "MARS USP":
    "id name sftciconfiguration sftcistatus sftcienvtype sftsoftname sftsoftversion sftsofthostname sftciresponsiblegroup sftisboxedproduct sftciowner sftcidomain sftsoftdistributiverelease sftsoftrole sftciconfiguration4 itsmname itsmsyscriticalitycategory hstname hstcistatus hsthostipaddress hsthostosname hsthostosversion hstcienvtype hstciresponsiblegroup appplatformtype security_zone fqdn itsmcistatus hsthostiscloud hsthostnetworksegment sftcicreatetime sftsoftinstalltype dbmsdbmsrole",
  "MARS HOSTOS":
    "name domain_name fqdn altname ip hostcienvtype hostgroup hoststatus osver vendor model sn osname hosthostnetworksegment owner smid host_cld_service_id host_app_func_grp host_datacenter itsmname itsmsyscriticalitycategory smitenv itsysrisid smitgroup cluster_name cluster_type hostisappliance hostisblackbox hostnotneedmars hostcienvironment",
  "MARS SANSW": "name device_alt_serial ci_env_type",
  "ИТ-Система":
    "name okii apdid risid number status contour ctowner itstype mircode category systemid direction number_is rpotarget rtotarget etlversion ssfullname ssitleader drpcomments environment businessline certnextdate certrequired sscontactname respfordevdept supportmanager publicshortname replacingowners softwarepackage criticalitystatus supportstreamname configitemcategory criticalitycategory responsiblegroupname continuitycoordinator respfordevsubdivisionname deputycontinuitycoordinator",
  "КЕ - ИС":
    "name okii type apdId risId number ctOwner itsType category mirCodes systemId architect shortCode targetIts createDate archiveUsing sourceSystem configItemType respForDevDept alternativeName publicShortName replacingOwners criticalityStatus isLifecycleStatus configItemCategory outOfServiceMethod criticalityCategory respForDevStreamName previousTargetIsStatus respForDevStreamNumber respForDevSubdivisionName respForDevSubdivisionNumber respForDevStreamExternalNumber respForDevSubdivisionExternalNumber",
};
const $ = (id) => document.getElementById(id),
  labels = {
    objects: ["Объекты", "объект"],
    types: ["Типы объектов", "тип объекта"],
    relations: ["Связи", "связь"],
  },
  routes = new Set(["objects", "types", "relations"]);
let active = "objects",
  db,
  editingAttributeId = null,
  deletingAttributeId = null,
  editingTypeId = null,
  editingRelationId = null,
  pendingDeleteAction = null,
  editingMonitoringObjectId = null,
  duplicateMonitoringObject = null,
  expandedObjectTypeIds = new Set(),
  pinnedTableActions = new WeakMap(),
  popupActionOwners = new WeakMap();
function dbOpen() {
  return new Promise((ok, no) => {
    const databaseName = "mars-object-registry-clean",
      stores = ["attributes", "types", "monitoringObjects", "relations"],
      configureUpgrade = (request) => {
        request.onupgradeneeded = () => {
          let database = request.result;
          stores.forEach((name) => {
            if (!database.objectStoreNames.contains(name))
              database.createObjectStore(name, {
                keyPath: "id",
                autoIncrement: true,
              });
          });
        };
      },
      finishOpen = (request) => {
        request.onerror = () => no(request.error);
        request.onblocked = () =>
          no(new Error("Обновление локальной базы заблокировано"));
        request.onsuccess = () => {
          let database = request.result,
            missingStore = stores.some(
              (name) => !database.objectStoreNames.contains(name),
            );
          if (!missingStore) {
            db = database;
            ok();
            return;
          }
          let nextVersion = database.version + 1;
          database.close();
          let upgradeRequest = indexedDB.open(databaseName, nextVersion);
          configureUpgrade(upgradeRequest);
          finishOpen(upgradeRequest);
        };
      },
      request = indexedDB.open(databaseName);
    configureUpgrade(request);
    finishOpen(request);
  });
}
function deletePreviousDatabase() {
  return new Promise((ok, no) => {
    try {
      localStorage.removeItem("mars-object-registry-relations");
    } catch {}
    let request = indexedDB.deleteDatabase("mars-object-registry");
    request.onsuccess = () => ok();
    request.onerror = () => no(request.error);
    request.onblocked = () => ok();
  });
}
function storeRequest(store, method, value) {
  return new Promise((ok, no) => {
    let request = db
      .transaction(store, method === "getAll" ? "readonly" : "readwrite")
      .objectStore(store)
      [method](...(method === "getAll" ? [] : [value]));
    request.onsuccess = () => ok(request.result);
    request.onerror = () => no(request.error);
  });
}
async function getStoreItems(store) {
  return (await storeRequest(store, "getAll")).reverse();
}
const getAll = () => getStoreItems("attributes"),
  save = (x) => storeRequest("attributes", "add", x),
  updateAttribute = (x) => storeRequest("attributes", "put", x),
  deleteAttribute = (id) => storeRequest("attributes", "delete", id),
  getTypes = () => getStoreItems("types"),
  saveType = (x) => storeRequest("types", "add", x),
  updateType = (x) => storeRequest("types", "put", x),
  getMonitoringObjects = () => getStoreItems("monitoringObjects"),
  saveMonitoringObject = (x) =>
    storeRequest("monitoringObjects", x.id ? "put" : "add", x);
async function ensureRelationsStore() {
  if (db?.objectStoreNames.contains("relations")) return;
  if (db) db.close();
  db = null;
  await dbOpen();
  if (!db.objectStoreNames.contains("relations"))
    throw new Error("Хранилище связей не создано");
}
async function getRelations() {
  await ensureRelationsStore();
  return getStoreItems("relations");
}
async function saveRelation(item) {
  await ensureRelationsStore();
  return storeRequest("relations", "add", item);
}
async function updateRelation(item) {
  await ensureRelationsStore();
  return storeRequest("relations", "put", item);
}
async function deleteRelation(id) {
  await ensureRelationsStore();
  return storeRequest("relations", "delete", id);
}
function normalizeCollectionName(name = "") {
  return name
    .replace(/\bIntegration\s*/gi, "")
    .replace(/[()]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
async function migrateCollectionNames() {
  let types = await getTypes(),
    attributes = await getAll();
  await Promise.all([
    ...types
      .filter(
        (type) =>
          type.cmdbCollection &&
          normalizeCollectionName(type.cmdbCollection) !== type.cmdbCollection,
      )
      .map((type) =>
        updateType({
          ...type,
          cmdbCollection: normalizeCollectionName(type.cmdbCollection),
        }),
      ),
    ...attributes
      .filter(
        (attribute) =>
          attribute.collection &&
          normalizeCollectionName(attribute.collection) !==
            attribute.collection,
      )
      .map((attribute) =>
        updateAttribute({
          ...attribute,
          collection: normalizeCollectionName(attribute.collection),
        }),
      ),
  ]);
}
function esc(v) {
  return String(v).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}
function toast(s) {
  $("toast").querySelector("span").textContent = s;
  $("toast").classList.add("show");
  setTimeout(() => $("toast").classList.remove("show"), 3000);
}
function setModalOpen(id, open) {
  $(id).classList.toggle("open", open);
  $(id).setAttribute("aria-hidden", String(!open));
}
function openActionDelete(title, text, action) {
  $("actionDeleteTitle").textContent = title;
  $("actionDeleteText").textContent = text;
  pendingDeleteAction = action;
  setModalOpen("actionDeleteModal", true);
}
function closeActionDelete() {
  pendingDeleteAction = null;
  setModalOpen("actionDeleteModal", false);
}
function setErrors(entries) {
  entries.forEach(([id, visible]) =>
    $(id).classList.toggle("visible", visible),
  );
}
function submitForm(id) {
  $(id).dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
}
function getSelectedOptionText(select) {
  let option = select.options[select.selectedIndex];
  return option ? option.textContent.trim() : "";
}
function closeRowActions() {
  document.querySelectorAll(".actions-popup").forEach((item) => {
    item.hidden = true;
    item.classList.remove("fixed-actions-popup");
    item.style.removeProperty("left");
    item.style.removeProperty("top");
    let owner = popupActionOwners.get(item);
    if (owner?.isConnected) owner.append(item);
    popupActionOwners.delete(item);
  });
  document
    .querySelectorAll(".more-button")
    .forEach((item) => item.setAttribute("aria-expanded", "false"));
}
function toggleRowActions(button, popup, event) {
  event.stopPropagation();
  let opening = popup.hidden;
  closeRowActions();
  if (!opening) return;
  popup.hidden = false;
  button.setAttribute("aria-expanded", "true");
  let owner = popup.parentElement;
  popupActionOwners.set(popup, owner);
  document.body.append(popup);
  popup.classList.add("fixed-actions-popup");
  let rect = button.getBoundingClientRect(),
    popupWidth = popup.offsetWidth,
    popupHeight = popup.offsetHeight,
    top = rect.bottom + 4;
  if (top + popupHeight > window.innerHeight - 8)
    top = Math.max(8, rect.top - popupHeight - 4);
  popup.style.left = Math.max(8, rect.right - popupWidth) + "px";
  popup.style.top = top + "px";
}
function setupResizableGrid(header, rows, storageKey, minimums) {
  if (!header) return;
  header
    .querySelectorAll(".column-resizer")
    .forEach((handle) => handle.remove());
  let cells = [...header.children],
    rowList = [...rows],
    stored;
  try {
    stored = JSON.parse(localStorage.getItem("table-widths:" + storageKey));
  } catch (_) {
    stored = null;
  }
  let hasStoredWidths =
    Array.isArray(stored) && stored.length === cells.length;
  let computed = getComputedStyle(header).gridTemplateColumns
      .split(" ")
      .map((value) => parseFloat(value)),
    widths = cells.map((_, index) =>
      Math.max(
        minimums[index] || 160,
        Number(hasStoredWidths && stored[index]) ||
          computed[index] ||
          minimums[index] ||
          160,
      ),
    );
  widths[widths.length - 1] = 32;
  let scrollHost = header.parentElement;
  const pinActionColumn = () => {
    let hostRect = scrollHost.getBoundingClientRect(),
      desiredRight = Math.min(hostRect.right, window.innerWidth) - 8;
    rowList.forEach((grid) => {
      let action = grid.lastElementChild;
      if (!action) return;
      action.style.transform = "none";
      action.style.left = "0px";
      let actionRect = action.getBoundingClientRect();
      action.style.left = desiredRight - actionRect.right + "px";
    });
  };
  let pinnedState = pinnedTableActions.get(scrollHost);
  if (!pinnedState) {
    pinnedState = { update: pinActionColumn };
    pinnedTableActions.set(scrollHost, pinnedState);
    scrollHost.addEventListener("scroll", () => pinnedState.update(), {
      passive: true,
    });
    new ResizeObserver(() => pinnedState.update()).observe(scrollHost);
  } else pinnedState.update = pinActionColumn;
  let hostWidth =
      header.parentElement?.clientWidth ||
      header.closest(".object-type-group")?.clientWidth ||
      0,
    occupied =
      widths.reduce((sum, width) => sum + width, 0) +
      16 * (widths.length - 1) +
      32;
  if (!hasStoredWidths && cells.length - 1 <= 5 && hostWidth) {
    let dataBudget =
        hostWidth - 32 - 16 * (widths.length - 1) - widths.at(-1),
      minimumTotal = minimums
        .slice(0, -1)
        .reduce((sum, width) => sum + width, 0),
      extra = Math.max(0, dataBudget - minimumTotal),
      dataColumns = widths.length - 1;
    widths = widths.map((width, index) =>
      index === widths.length - 1
        ? 32
        : (minimums[index] || 160) + extra / dataColumns,
    );
    occupied =
      widths.reduce((sum, width) => sum + width, 0) +
      16 * (widths.length - 1) +
      32;
  }
  if (!hasStoredWidths && hostWidth > occupied)
    widths[widths.length - 2] += hostWidth - occupied;
  const applyWidths = () => {
    let template = widths.map((width) => Math.round(width) + "px").join(" "),
      total = widths.reduce((sum, width) => sum + width, 0) + 16 * (widths.length - 1) + 32;
    [header, ...rowList].forEach((element) => {
      element.style.setProperty("grid-template-columns", template, "important");
      element.style.width = "max-content";
      element.style.minWidth = "max(100%, " + total + "px)";
    });
    pinActionColumn();
  };
  applyWidths();
  cells.slice(0, -2).forEach((cell, index) => {
    let handle = document.createElement("button");
    handle.type = "button";
    handle.className = "column-resizer";
    handle.setAttribute("aria-label", "Изменить ширину колонки");
    handle.onpointerdown = (event) => {
      event.preventDefault();
      handle.setPointerCapture(event.pointerId);
      let startX = event.clientX,
        startWidth = widths[index];
      handle.classList.add("is-resizing");
      handle.onpointermove = (moveEvent) => {
        widths[index] = Math.max(
          minimums[index] || 160,
          startWidth + moveEvent.clientX - startX,
        );
        applyWidths();
      };
      handle.onpointerup = () => {
        handle.classList.remove("is-resizing");
        handle.onpointermove = null;
        handle.onpointerup = null;
        localStorage.setItem("table-widths:" + storageKey, JSON.stringify(widths));
      };
    };
    cell.append(handle);
  });
}
async function updateCounts() {
  let [objects, types, relations] = await Promise.all([
    getMonitoringObjects(),
    getTypes(),
    getRelations(),
  ]);
  document.querySelector('[data-tab="objects"] .count').textContent =
    objects.length;
  document.querySelector('[data-tab="types"] .count').textContent =
    types.length;
  document.querySelector('[data-tab="relations"] .count').textContent =
    relations.length;
}
function icon(name) {
  return (
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">' +
    icons[name] +
    "</svg>"
  );
}
function renderRowActions(extraClass = "") {
  return (
    '<div class="row-actions' +
    (extraClass ? " " + extraClass : "") +
    '"><button type="button" class="more-button" aria-label="Действия" aria-expanded="false">' +
    icon("more") +
    '</button><div class="actions-popup" hidden><button type="button" data-action="edit">' +
    icon("edit") +
    '<span>Изменить</span></button><button type="button" class="danger-action" data-action="delete">' +
    icon("trash") +
    "<span>Удалить</span></button></div></div>"
  );
}
function bindRowActions(rows, resolveEntity, onEdit, onDelete) {
  [...rows].forEach((row) => {
    let entity = resolveEntity(row),
      moreButton = row.querySelector(".more-button"),
      popup = row.querySelector(".actions-popup");
    moreButton.onclick = (event) =>
      toggleRowActions(moreButton, popup, event);
    row.querySelector('[data-action="edit"]').onclick = (event) => {
      event.stopPropagation();
      closeRowActions();
      onEdit(entity, row);
    };
    row.querySelector('[data-action="delete"]').onclick = (event) => {
      event.stopPropagation();
      closeRowActions();
      onDelete(entity, row);
    };
  });
}
async function renderTypes() {
  let all = await getTypes(),
    t = all.filter((x) =>
      x.name.toLowerCase().includes($("searchInput").value.toLowerCase()),
    );
  $("typesRows").innerHTML = t
    .map(
      (x) =>
        '<div class="type-row" data-id="' +
        x.id +
        '"><strong class="type-name">' +
        esc(x.name) +
        "</strong><span>" +
        esc(
          getTypeObjectFields(x)
            .map((field) => field.label)
            .join(", ") || "Атрибуты не выбраны",
        ) +
        "</span><span>" +
        esc(x.cmdbCollection || "—") +
        "</span>" +
        renderRowActions() +
        "</div>",
    )
    .join("");
  $("emptyState").hidden = !!t.length;
  $("typesList").hidden = !t.length;
  document.querySelector('[data-tab="types"] .count').textContent = all.length;
  setupResizableGrid(
    document.querySelector(".type-list-head"),
    document.querySelectorAll("#typesRows .type-row"),
    "types",
    [180, 220, 220, 32],
  );
  bindRowActions(
    document.querySelectorAll("#typesRows .type-row"),
    (row) => all.find((type) => String(type.id) === row.dataset.id),
    (type) => openEditType(type.id),
    (type) =>
      openActionDelete(
        "Удалить тип объекта?",
        'Тип «' + type.name + '» будет удалён без возможности восстановления.',
        async () => {
          await storeRequest("types", "delete", type.id);
          await renderTypes();
          await updateCounts();
          toast("Тип удалён");
        },
      ),
  );
}
async function renderObjects() {
  let [all, types] = await Promise.all([getMonitoringObjects(), getTypes()]),
    query = $("searchInput").value.toLowerCase(),
    objects = all.filter((object) =>
      (object.name + " " + object.typeName).toLowerCase().includes(query),
    ),
    typeMap = new Map(types.map((type) => [type.id, type])),
    groups = new Map();
  objects.forEach((object) => {
    let key = String(object.typeId || object.typeName || "unknown");
    if (!groups.has(key))
      groups.set(key, {
        key,
        type: typeMap.get(object.typeId),
        name: object.typeName || "Без типа",
        objects: [],
      });
    groups.get(key).objects.push(object);
  });
  $("objectsRows").innerHTML = [...groups.values()]
    .map((group) => {
      let fields = getTypeObjectFields(group.type || {}),
        expanded = expandedObjectTypeIds.has(group.key),
        columns =
          "minmax(190px,1.2fr)" +
          fields.map(() => " minmax(150px,1fr)").join("") +
          " 32px";
      return (
        '<section class="object-type-group ' +
        (expanded ? "expanded" : "") +
        '" data-type-key="' +
        esc(group.key) +
        '"><button type="button" class="object-type-toggle" aria-expanded="' +
        expanded +
        '"><span class="object-type-chevron">›</span><strong>' +
        esc(group.name) +
        '</strong><span class="object-type-count">' +
        group.objects.length +
        '</span></button><div class="object-type-table" ' +
        (expanded ? "" : "hidden") +
        '><div class="object-type-table-head" style="grid-template-columns:' +
        columns +
        '"><span>Название объекта</span>' +
        fields
          .map((field) => "<span>" + esc(field.label) + "</span>")
          .join("") +
        "<span></span>" +
        "</div>" +
        group.objects
          .map(
            (object) =>
              '<div class="object-type-table-row" data-object-id="' +
              esc(object.id) +
              '" style="grid-template-columns:' +
              columns +
              '"><strong>' +
              esc(object.name) +
              "</strong>" +
              fields
                .map(
                  (field) =>
                    "<span>" +
                    esc(object.values?.[field.key] || "—") +
                    "</span>",
                )
                .join("") +
              renderRowActions("object-row-actions") +
              "</div>",
          )
          .join("") +
        "</div></section>"
      );
    })
    .join("");
  $("objectsRows").querySelectorAll(".object-type-group").forEach((group) => {
    let head = group.querySelector(".object-type-table-head"),
      rows = group.querySelectorAll(".object-type-table-row"),
      columnCount = head?.children.length || 0;
    setupResizableGrid(
      head,
      rows,
      "objects:" + group.dataset.typeKey,
      Array.from({ length: columnCount }, (_, index) =>
        index === columnCount - 1 ? 32 : index === 0 ? 190 : 180,
      ),
    );
  });
  $("objectsRows")
    .querySelectorAll(".object-type-toggle")
    .forEach(
      (button) =>
        (button.onclick = () => {
          let group = button.closest(".object-type-group"),
            key = group.dataset.typeKey,
            expanded = !expandedObjectTypeIds.has(key);
          if (expanded) expandedObjectTypeIds.add(key);
          else expandedObjectTypeIds.delete(key);
          group.classList.toggle("expanded", expanded);
          button.setAttribute("aria-expanded", String(expanded));
          let table = group.querySelector(".object-type-table");
          table.hidden = !expanded;
          if (expanded)
            requestAnimationFrame(() => pinnedTableActions.get(table)?.update());
        }),
    );
  bindRowActions(
    $("objectsRows").querySelectorAll(".object-type-table-row"),
    (row) => all.find((item) => String(item.id) === row.dataset.objectId),
    openEditMonitoringObject,
    (object) =>
      openActionDelete(
        "Удалить объект мониторинга?",
        'Объект «' + object.name + '» будет удалён без возможности восстановления.',
        async () => {
          await storeRequest("monitoringObjects", "delete", object.id);
          await renderObjects();
          await updateCounts();
          toast("Объект мониторинга удалён");
        },
      ),
  );
  $("emptyState").hidden = !!objects.length;
  $("objectsList").hidden = !objects.length;
  document.querySelector('[data-tab="objects"] .count').textContent =
    all.length;
  $("emptyAddButton").hidden = all.length > 0;
}
function renderRelationSummary(items = []) {
  return items.length
    ? items
        .map(
          (item) =>
            '<span title="' +
            esc(
              item.typeFromName +
                " · " +
                item.attributeFromName +
                " " +
                item.operator +
                " " +
                item.typeToName +
                " · " +
                item.attributeToName,
            ) +
            '">' +
            esc(item.typeFromName) +
            " · " +
            esc(item.attributeFromName) +
            " " +
            esc(item.operator) +
            " " +
            esc(item.typeToName) +
            " · " +
            esc(item.attributeToName) +
            "</span>",
        )
        .join("")
    : '<span class="relation-summary-empty">—</span>';
}
async function renderRelations() {
  let all = await getRelations(),
    query = $("searchInput").value.toLowerCase(),
    relations = all.filter((x) =>
      ((x.name || "") + " " + JSON.stringify(x.parentRelations || []) + " " + JSON.stringify(x.childRelations || []))
        .toLowerCase()
        .includes(query),
    );
  $("relationsRows").innerHTML = relations
    .map(
      (x) =>
        '<div class="relation-row" data-id="' +
        esc(x.id) +
        '"><strong>' +
        esc(x.name || "—") +
        '</strong><div class="relation-summary">' +
        renderRelationSummary(x.parentRelations) +
        '</div><div class="relation-summary">' +
        renderRelationSummary(x.childRelations) +
        "</div>" +
        renderRowActions("relation-row-actions") +
        "</div>",
    )
    .join("");
  $("emptyState").hidden = !!relations.length;
  $("relationsList").hidden = !relations.length;
  setupResizableGrid(
    document.querySelector(".relation-list-head"),
    document.querySelectorAll("#relationsRows .relation-row"),
    "relations",
    [180, 240, 220, 32],
  );
  bindRowActions(
    $("relationsRows").querySelectorAll(".relation-row"),
    (row) => all.find((item) => String(item.id) === row.dataset.id),
    openEditRelation,
    (relation) =>
      openActionDelete(
        "Удалить связь?",
        'Связь «' + relation.name + '» будет удалена без возможности восстановления.',
        async () => {
          await deleteRelation(relation.id);
          await renderRelations();
          await updateCounts();
          toast("Связь удалена");
        },
      ),
  );
  document.querySelector('[data-tab="relations"] .count').textContent =
    all.length;
}
function tab(id, updateRoute = true) {
  if (!routes.has(id)) id = "objects";
  if (updateRoute && location.hash !== "#" + id) {
    location.hash = id;
    return;
  }
  active = id;
  let [p, s] = labels[id],
    typeFilter = $("objectTypeFilter"),
    typeFilterWrap = $("objectTypeFilterWrap");
  document.querySelector(".content-card").classList.remove("attributes-view");
  typeFilterWrap.classList.add("is-inactive");
  typeFilter.disabled = true;
  typeFilterWrap.setAttribute("aria-hidden", "true");
  document.querySelectorAll(".tab").forEach((b) => {
    let selected = b.dataset.tab === id;
    b.classList.toggle("active", selected);
    b.setAttribute("aria-selected", String(selected));
  });
  $("emptyTitle").textContent = p + " ещё не добавлены";
  $("emptyText").textContent =
    "Создайте " +
    (id === "relations" ? "первую" : "первый") +
    " " +
    s +
    ", чтобы начать вести реестр.";
  [$("addButton"), $("emptyAddButton")].forEach((b) => {
    b.hidden = false;
    b.querySelector("span").textContent = "Добавить " + s;
  });
  $("objectsList").hidden = true;
  $("typesList").hidden = true;
  $("relationsList").hidden = true;
  $("emptyState").hidden = false;
  if (id === "objects") renderObjects();
  if (id === "types") renderTypes();
  if (id === "relations") renderRelations();
  syncTabActionButtons(id);
}
function syncMappingFields() {
  const enabled = $("mappingToggle").getAttribute("aria-checked") === "true";
  $("mappingFields").hidden = !enabled;
  $("mappingToggle").setAttribute("aria-expanded", String(enabled));
}
function isValidCmdbCustomName(value) {
  return /^[\x20-\x7E]*$/.test(value);
}
function syncTypeSaveButton() {
  let cmdbEnabled =
      $("cmdbMappingToggle").getAttribute("aria-checked") === "true",
    manualInputs = [
      ...$("manualAttributeRows").querySelectorAll("input"),
    ],
    manualAttributesValid = manualInputs.every(
      (input) => input.value.trim() && isValidCmdbCustomName(input.value),
    ),
    hasValidManualAttributes =
      manualInputs.length > 0 && manualAttributesValid,
    selectedCmdbRows = [
      ...$("cmdbAttributes").querySelectorAll(
        '.cmdb-attribute-row:has(input[type="checkbox"]:checked)',
      ),
    ],
    hasCmdbAttributes =
      selectedCmdbRows.length > 0 &&
      selectedCmdbRows.every((row) =>
        isValidCmdbCustomName(row.querySelector(".cmdb-custom-name").value),
      );
  $("saveTypeButton").disabled =
    cmdbEnabled
      ? !hasCmdbAttributes || !manualAttributesValid
      : !hasValidManualAttributes;
}
function validateCmdbCustomNames() {
  let valid = true;
  $("cmdbAttributes")
    .querySelectorAll(".cmdb-attribute-row")
    .forEach((row) => {
      let checkbox = row.querySelector('input[type="checkbox"]'),
        input = row.querySelector(".cmdb-custom-name"),
        invalid = checkbox.checked && !isValidCmdbCustomName(input.value);
      row.classList.toggle("invalid", invalid);
      if (invalid) valid = false;
    });
  return valid;
}
function syncCmdbSelectAll() {
  let checkboxes = [
      ...$("cmdbAttributes").querySelectorAll('input[type="checkbox"]'),
    ],
    checked = checkboxes.filter((input) => input.checked).length;
  $("cmdbSelectAll").checked =
    checkboxes.length > 0 && checked === checkboxes.length;
  $("cmdbSelectAll").indeterminate = checked > 0 && checked < checkboxes.length;
  $("cmdbSelectedCount").textContent = "Выбрано: " + checked;
  $("cmdbSelectedCount").hidden = checked === 0;
}
function renderCmdbAttributes(collection, selected = []) {
  let selectedMap = new Map(
      selected.map((item) =>
        typeof item === "string"
          ? [item, ""]
          : [item.name, item.customName || ""],
      ),
    ),
    attributes = (galaxy[collection] || "").split(" ").filter(Boolean);
  $("cmdbAttributes").innerHTML = attributes
    .map((name) => {
      let checked = selectedMap.has(name),
        customName = selectedMap.get(name) || "";
      return (
        '<div class="cmdb-attribute-row"><label><input type="checkbox" value="' +
        esc(name) +
        '" ' +
        (checked ? "checked" : "") +
        "><span>" +
        esc(name) +
        '</span></label><div><input class="cmdb-custom-name" type="text" maxlength="120" value="' +
        esc(customName) +
        '" placeholder="Название атрибута в MARS" ' +
        (checked ? "" : "disabled") +
        '><small class="cmdb-name-error">Только латиница, цифры и спецсимволы</small></div></div>'
      );
    })
    .join("");
  $("cmdbAttributes")
    .querySelectorAll(".cmdb-attribute-row")
    .forEach((row) => {
      let checkbox = row.querySelector('input[type="checkbox"]'),
        customName = row.querySelector(".cmdb-custom-name");
      checkbox.onclick = (e) => e.stopPropagation();
      checkbox.onchange = () => {
        customName.disabled = !checkbox.checked;
        row.classList.remove("invalid");
        syncCmdbSelectAll();
        syncTypeSaveButton();
      };
      customName.oninput = () => {
        row.classList.toggle(
          "invalid",
          checkbox.checked && !isValidCmdbCustomName(customName.value),
        );
        syncTypeSaveButton();
      };
    });
  $("cmdbAttributesBlock").hidden = !collection;
  document
    .querySelector(".type-form-modal")
    .classList.toggle("has-attributes", !!collection);
  syncCmdbSelectAll();
  syncTypeSaveButton();
}
function hideCmdbCollectionOptions() {
  $("cmdbCollectionOptions").hidden = true;
  $("cmdbCollectionInput").setAttribute("aria-expanded", "false");
}
function positionCmdbCollectionOptions() {
  let dropdown = document.querySelector(".cmdb-collection-dropdown"),
    inputRect = $("cmdbCollectionInput").getBoundingClientRect(),
    menu = $("cmdbCollectionOptions"),
    menuHeight = Math.min(menu.scrollHeight, 280),
    spaceBelow = window.innerHeight - inputRect.bottom - 12,
    spaceAbove = inputRect.top - 12;
  dropdown.classList.toggle(
    "open-up",
    spaceBelow < menuHeight && spaceAbove > spaceBelow,
  );
}
async function renderCmdbCollectionOptions(query = "") {
  let normalized = query.trim().toLowerCase(),
    selected = $("cmdbCollectionInput").value,
    types = await getTypes(),
    occupied = new Set(
      types
        .filter((type) => type.id !== editingTypeId && type.cmdbCollection)
        .map((type) => type.cmdbCollection),
    ),
    collections = Object.keys(galaxy).filter((name) =>
      name.toLowerCase().includes(normalized),
    );
  $("cmdbCollectionOptions").innerHTML =
    collections
      .map(
        (name) =>
          '<button type="button" data-value="' +
          esc(name) +
          '" class="' +
          (name === selected ? "is-selected" : "") +
          '" ' +
          (occupied.has(name)
            ? 'disabled title="Коллекция уже связана с другим типом объектов"'
            : "") +
          ">" +
          esc(name) +
          "</button>",
      )
      .join("") || "<p>Коллекции не найдены</p>";
  $("cmdbCollectionOptions")
    .querySelectorAll("button:not(:disabled)")
    .forEach(
      (button) =>
        (button.onclick = () => selectCmdbCollection(button.dataset.value)),
    );
  $("cmdbCollectionOptions").hidden = false;
  positionCmdbCollectionOptions();
  $("cmdbCollectionInput").setAttribute("aria-expanded", "true");
  if (!query) {
    let selectedOption = $("cmdbCollectionOptions").querySelector(
      ".is-selected:not(:disabled)",
    );
    if (selectedOption) selectedOption.focus({ preventScroll: true });
  }
}
function selectCmdbCollection(collection, selectedAttributes = []) {
  $("cmdbCollectionInput").value = collection;
  hideCmdbCollectionOptions();
  renderCmdbAttributes(collection, selectedAttributes);
  $("cmdbCollectionError").classList.remove("visible");
}
function renderCmdbCollections(
  selectedCollection = "",
  selectedAttributes = [],
) {
  $("cmdbCollectionInput").value = selectedCollection;
  $("cmdbCollectionInput").onfocus = () => renderCmdbCollectionOptions("");
  $("cmdbCollectionInput").onclick = (e) => {
    e.stopPropagation();
    renderCmdbCollectionOptions("");
  };
  $("cmdbCollectionInput").oninput = () => {
    let collection = $("cmdbCollectionInput").value;
    renderCmdbCollectionOptions(collection);
    if (Object.hasOwn(galaxy, collection)) renderCmdbAttributes(collection);
    else {
      $("cmdbAttributesBlock").hidden = true;
      $("cmdbAttributes").innerHTML = "";
    }
  };
  renderCmdbAttributes(selectedCollection, selectedAttributes);
}
function resetCmdbMapping(collection = "", attributes = []) {
  $("cmdbCollectionError").classList.remove("visible");
  document
    .querySelector(".cmdb-collection-dropdown")
    .classList.remove("open-up");
  if (collection) renderCmdbCollections(collection, attributes);
  else {
    $("cmdbCollectionInput").value = "";
    $("cmdbCollectionOptions").innerHTML = "";
    hideCmdbCollectionOptions();
    $("cmdbAttributes").innerHTML = "";
    $("cmdbAttributesBlock").hidden = true;
    document
      .querySelector(".type-form-modal")
      .classList.remove("has-attributes");
  }
}
let manualAttributeCounter = 0;
function syncManualAttributeButton() {
  let inputs = [...$("manualAttributeRows").querySelectorAll("input")],
    blocked = inputs.some(
      (input) => !input.value.trim() || !isValidCmdbCustomName(input.value),
    );
  $("addTypeAttribute").disabled = blocked;
  syncTypeSaveButton();
}
function addManualAttribute(attribute = {}) {
  let id =
      attribute.id || "manual-" + Date.now() + "-" + ++manualAttributeCounter,
    row = document.createElement("div");
  row.className = "manual-attribute-row";
  row.dataset.id = id;
  row.innerHTML =
    '<input type="text" maxlength="120" value="' +
    esc(attribute.name || "") +
    '" placeholder="Название атрибута в MARS"><button type="button" class="manual-attribute-delete" aria-label="Удалить атрибут" title="Удалить атрибут">' +
    icon("trash") +
    "</button><small>Только латиница, цифры и спецсимволы</small>";
  $("manualAttributeRows").append(row);
  let input = row.querySelector("input"),
    deleteButton = row.querySelector(".manual-attribute-delete");
  input.oninput = () => {
    row.classList.toggle(
      "invalid",
      !!input.value && !isValidCmdbCustomName(input.value),
    );
    syncManualAttributeButton();
  };
  deleteButton.onclick = () => {
    row.remove();
    syncManualAttributeButton();
  };
  syncManualAttributeButton();
  if (!attribute.name) input.focus();
}
function renderManualAttributes(attributes = []) {
  $("manualAttributeRows").innerHTML = "";
  attributes.forEach(addManualAttribute);
  syncManualAttributeButton();
}
function validateManualAttributes() {
  let valid = true;
  $("manualAttributeRows")
    .querySelectorAll(".manual-attribute-row")
    .forEach((row) => {
      let input = row.querySelector("input"),
        invalid = !input.value.trim() || !isValidCmdbCustomName(input.value);
      row.classList.toggle("invalid", invalid);
      if (invalid) valid = false;
    });
  return valid;
}
function getManualAttributes() {
  return [
    ...$("manualAttributeRows").querySelectorAll(".manual-attribute-row"),
  ].map((row) => ({
    id: row.dataset.id,
    name: row.querySelector("input").value.trim(),
  }));
}
function setAttributeMode(mode) {
  let cmdbEnabled = mode === "cmdb";
  $("cmdbMappingToggle").setAttribute("aria-checked", String(cmdbEnabled));
  $("cmdbMappingToggle").setAttribute("aria-expanded", String(cmdbEnabled));
  $("manualAttributesSection").hidden = false;
  $("manualAttributesTitle").textContent =
    cmdbEnabled
      ? "Дополнительные атрибуты"
      : "Ручное добавление атрибутов";
  $("cmdbFields").hidden = !cmdbEnabled;
  if (cmdbEnabled && !$("cmdbCollectionInput").onfocus)
    renderCmdbCollections();
  syncTypeSaveButton();
}
function closeDeleteAttribute() {
  setModalOpen("deleteAttributeModal", false);
  deletingAttributeId = null;
}
async function repairAttributeTypeLinks() {
  let [types, attributes] = await Promise.all([getTypes(), getAll()]),
    typeByAttribute = new Map();
  types.forEach((type) =>
    (type.attributes || []).forEach((attribute) => {
      if (!typeByAttribute.has(attribute.id))
        typeByAttribute.set(attribute.id, type.name);
    }),
  );
  await Promise.all(
    attributes
      .filter(
        (attribute) =>
          typeByAttribute.has(attribute.id) &&
          attribute.objectType !== typeByAttribute.get(attribute.id),
      )
      .map((attribute) =>
        updateAttribute({
          ...attribute,
          objectType: typeByAttribute.get(attribute.id),
        }),
      ),
  );
}
async function syncAttributeTypeMembership(attribute) {
  let types = await getTypes();
  await Promise.all(
    types.map((type) => {
      let without = (type.attributes || []).filter(
          (item) => item.id !== attribute.id,
        ),
        shouldContain = type.name === attribute.objectType,
        next = shouldContain ? [...without, attribute] : without;
      if (
        next.length === (type.attributes || []).length &&
        next.every(
          (item, index) =>
            item.id === (type.attributes || [])[index]?.id &&
            item.name === (type.attributes || [])[index]?.name,
        )
      )
        return Promise.resolve();
      return updateType({ ...type, attributes: next });
    }),
  );
}
async function syncCmdbAttributesToRegistry(type) {
  let all = await getAll(),
    existing = all.filter(
      (attribute) =>
        attribute.source === "cmdb-type" && attribute.sourceTypeId === type.id,
    ),
    selected = type.cmdbAttributes || [],
    selectedNames = new Set(
      selected.map((attribute) =>
        typeof attribute === "string" ? attribute : attribute.name,
      ),
    );
  await Promise.all(
    selected.map(async (attribute) => {
      let cmdbName = typeof attribute === "string" ? attribute : attribute.name,
        customName =
          typeof attribute === "string" ? "" : attribute.customName || "",
        current = existing.find((item) => item.galaxyAttribute === cmdbName),
        item = {
          ...(current || {}),
          name: customName || cmdbName,
          objectType: type.name,
          collection: type.cmdbCollection,
          galaxyAttribute: cmdbName,
          source: "cmdb-type",
          sourceTypeId: type.id,
        };
      if (current) await updateAttribute(item);
      else await save(item);
    }),
  );
  await Promise.all(
    existing
      .filter((attribute) => !selectedNames.has(attribute.galaxyAttribute))
      .map((attribute) => deleteAttribute(attribute.id)),
  );
}
async function syncManualAttributesToRegistry(type) {
  let all = await getAll(),
    existing = all.filter(
      (attribute) =>
        attribute.source === "manual-type" &&
        attribute.sourceTypeId === type.id,
    ),
    selected = type.manualAttributes || [],
    selectedIds = new Set(selected.map((attribute) => attribute.id));
  await Promise.all(
    selected.map(async (attribute) => {
      let current = existing.find(
          (item) => item.sourceAttributeId === attribute.id,
        ),
        item = {
          ...(current || {}),
          name: attribute.name,
          objectType: type.name,
          collection: "",
          galaxyAttribute: "",
          source: "manual-type",
          sourceTypeId: type.id,
          sourceAttributeId: attribute.id,
        };
      if (current) await updateAttribute(item);
      else await save(item);
    }),
  );
  await Promise.all(
    existing
      .filter((attribute) => !selectedIds.has(attribute.sourceAttributeId))
      .map((attribute) => deleteAttribute(attribute.id)),
  );
}
async function syncTypeAttributesToRegistry(type) {
  await syncManualAttributesToRegistry(type);
  await syncCmdbAttributesToRegistry(type);
}
async function syncAllTypeAttributesToRegistry() {
  for (let type of await getTypes()) await syncTypeAttributesToRegistry(type);
}
function getTypeObjectFields(type) {
  let local = (type.attributes || []).map((attribute) => ({
      key: String(attribute.id),
      label: attribute.nameRu || attribute.name,
    })),
    manual = (type.manualAttributes || []).map((attribute) => ({
      key: String(attribute.id),
      label: attribute.name,
    })),
    cmdb = (type.cmdbAttributes || []).map((attribute) =>
      typeof attribute === "string"
        ? { key: "cmdb:" + attribute, label: attribute }
        : {
            key: "cmdb:" + attribute.name,
            label: attribute.customName || attribute.name,
          },
    );
  return [...local, ...manual, ...cmdb];
}
function renderRelationAttributeOptions(type) {
  let fields = type ? getTypeObjectFields(type) : [];
  return (
    '<option value="">' +
    (fields.length ? "Выберите атрибут" : "У выбранного типа нет атрибутов") +
    "</option>" +
    fields
      .map(
        (field) =>
          '<option value="' +
          esc(field.key) +
          '">' +
          esc(field.label) +
          "</option>",
      )
      .join("")
  );
}
async function openEditType(id) {
  let type = (await getTypes()).find((x) => x.id === id);
  if (!type) return;
  editingTypeId = id;
  $("typeModalTitle").textContent = "Изменить тип объекта";
  $("typeName").value = type.name;
  renderManualAttributes(type.manualAttributes || []);
  resetCmdbMapping(type.cmdbCollection || "", type.cmdbAttributes || []);
  setAttributeMode(type.cmdbCollection ? "cmdb" : "manual");
  setModalOpen("typeModal", true);
}
function closeTypeDetails() {
  setModalOpen("typeDetailsModal", false);
}
async function openMonitoringObject() {
  let types = await getTypes();
  $("monitoringObjectTitle").textContent = "Добавить объект мониторинга";
  editingMonitoringObjectId = null;
  duplicateMonitoringObject = null;
  $("monitoringObjectForm").reset();
  $("monitoringObjectType").innerHTML =
    '<option value="">Выберите тип</option>' +
    types
      .map((x) => '<option value="' + x.id + '">' + esc(x.name) + "</option>")
      .join("");
  $("monitoringObjectIdentity").hidden = false;
  $("monitoringObjectCard").hidden = true;
  $("duplicateNotice").hidden = true;
  $("continueMonitoringObject").textContent = "Продолжить";
  setModalOpen("monitoringObjectModal", true);
  $("monitoringObjectName").focus();
}
async function openEditMonitoringObject(object) {
  if (!object) return;
  await openMonitoringObject();
  $("monitoringObjectTitle").textContent = "Изменить объект мониторинга";
  $("monitoringObjectName").value = object.name || "";
  $("monitoringObjectType").value = String(object.typeId || "");
  await showMonitoringCard(object);
}
function closeMonitoringObject() {
  setModalOpen("monitoringObjectModal", false);
  editingMonitoringObjectId = null;
  duplicateMonitoringObject = null;
  $("monitoringObjectTitle").textContent = "Добавить объект мониторинга";
}
async function showMonitoringCard(object = null) {
  let typeId = +$("monitoringObjectType").value,
    type = (await getTypes()).find((x) => x.id === typeId);
  if (!type) return;
  let fields = getTypeObjectFields(type);
  editingMonitoringObjectId = object?.id || null;
  $("monitoringObjectIdentity").hidden = true;
  $("duplicateNotice").hidden = true;
  $("monitoringObjectCard").hidden = false;
  $("monitoringObjectCardTitle").textContent =
    $("monitoringObjectName").value.trim() + " · " + type.name;
  $("monitoringAttributeFields").innerHTML =
    fields
      .map(
        (field) =>
          '<label class="form-label">' +
          esc(field.label) +
          '<input data-attribute-id="' +
          esc(field.key) +
          '" value="' +
          esc(object?.values?.[field.key] || "") +
          '" placeholder="Введите значение" /></label>',
      )
      .join("") || '<p class="details-empty">У этого типа нет атрибутов.</p>';
  $("continueMonitoringObject").textContent = "Сохранить";
}
function relationTypeOptions(types, excludedId = "") {
  return (
    '<option value="">Выберите тип</option>' +
    types
      .filter((type) => String(type.id) !== excludedId)
      .map(
        (type) =>
          '<option value="' +
          esc(type.id) +
          '">' +
          esc(type.name) +
          "</option>",
      )
      .join("")
  );
}
async function addRelationRule(containerId, initial = {}) {
  let types = await getTypes(),
    row = document.createElement("div");
  row.className = "relation-rule";
  row.innerHTML =
    '<label><span>Тип объекта</span><select class="relation-rule-type-from">' +
    relationTypeOptions(types) +
    '</select></label><label><span>Атрибут</span><select class="relation-rule-attribute-from" disabled><option value="">Сначала выберите тип</option></select></label>' +
    '<label><span>Оператор</span><select class="relation-rule-operator"><option value="=" selected>=</option><option value="IN">IN</option></select></label>' +
    '<label><span>Второй тип объекта</span><select class="relation-rule-type-to" disabled><option value="">Сначала выберите первый тип</option></select></label>' +
    '<label><span>Атрибут</span><select class="relation-rule-attribute-to" disabled><option value="">Сначала выберите тип</option></select></label>' +
    '<button type="button" class="relation-rule-delete" aria-label="Удалить связь" title="Удалить связь">' +
    icon("trash") +
    "</button>";
  $(containerId).append(row);
  let typeFrom = row.querySelector(".relation-rule-type-from"),
    attributeFrom = row.querySelector(".relation-rule-attribute-from"),
    typeTo = row.querySelector(".relation-rule-type-to"),
    attributeTo = row.querySelector(".relation-rule-attribute-to");
  typeFrom.onchange = () => {
    let type = types.find((item) => String(item.id) === typeFrom.value);
    attributeFrom.innerHTML = renderRelationAttributeOptions(type);
    attributeFrom.disabled = !type || !getTypeObjectFields(type).length;
    typeTo.innerHTML = type
      ? relationTypeOptions(types, typeFrom.value)
      : '<option value="">Сначала выберите первый тип</option>';
    typeTo.disabled = !type;
    attributeTo.innerHTML = '<option value="">Сначала выберите тип</option>';
    attributeTo.disabled = true;
    row.classList.remove("invalid");
  };
  typeTo.onchange = () => {
    let type = types.find((item) => String(item.id) === typeTo.value);
    attributeTo.innerHTML = renderRelationAttributeOptions(type);
    attributeTo.disabled = !type || !getTypeObjectFields(type).length;
    row.classList.remove("invalid");
  };
  row.querySelector(".relation-rule-delete").onclick = () => row.remove();
  if (initial.typeFrom) {
    typeFrom.value = String(initial.typeFrom);
    typeFrom.onchange();
    attributeFrom.value = String(initial.attributeFrom || "");
    row.querySelector(".relation-rule-operator").value =
      initial.operator || "=";
    typeTo.value = String(initial.typeTo || "");
    typeTo.onchange();
    attributeTo.value = String(initial.attributeTo || "");
  } else typeFrom.focus();
}
async function openRelationModal() {
  editingRelationId = null;
  $("relationModalTitle").textContent = "Добавить связь";
  $("relationForm").reset();
  $("parentRelationRules").innerHTML = "";
  $("childRelationRules").innerHTML = "";
  setModalOpen("relationModal", true);
  $("relationName").focus();
}
async function openEditRelation(relation) {
  if (!relation) return;
  editingRelationId = relation.id;
  $("relationForm").reset();
  $("parentRelationRules").innerHTML = "";
  $("childRelationRules").innerHTML = "";
  $("relationModalTitle").textContent = "Изменить связь";
  $("relationName").value = relation.name || "";
  for (let item of relation.parentRelations || [])
    await addRelationRule("parentRelationRules", item);
  for (let item of relation.childRelations || [])
    await addRelationRule("childRelationRules", item);
  setModalOpen("relationModal", true);
  $("relationName").focus();
}
function closeRelationModal() {
  setModalOpen("relationModal", false);
  $("relationForm").reset();
  $("parentRelationRules").innerHTML = "";
  $("childRelationRules").innerHTML = "";
  editingRelationId = null;
  $("relationModalTitle").textContent = "Добавить связь";
  $("relationForm")
    .querySelectorAll(".error")
    .forEach((x) => x.classList.remove("visible"));
}
async function openModal() {
  if (active === "types") {
    editingTypeId = null;
    $("typeModalTitle").textContent = "Добавить тип объекта";
    renderManualAttributes();
    resetCmdbMapping();
    setAttributeMode("manual");
    setModalOpen("typeModal", true);
    $("typeName").focus();
    return;
  }
  if (active === "relations") {
    await openRelationModal();
    return;
  }
}
function closeModal() {
  setModalOpen("attributeModal", false);
  $("attributeForm").reset();
  editingAttributeId = null;
  $("modalTitle").textContent = "Добавить атрибут";
  $("mappingToggle").setAttribute("aria-checked", "false");
  syncMappingFields();
  document
    .querySelectorAll(".error")
    .forEach((x) => x.classList.remove("visible"));
}
function closeTypeModal() {
  setModalOpen("typeModal", false);
  $("typeForm").reset();
  editingTypeId = null;
  $("typeModalTitle").textContent = "Добавить тип объекта";
  $("typeNameError").classList.remove("visible");
  renderManualAttributes();
  resetCmdbMapping();
  setAttributeMode("manual");
}
Object.keys(galaxy).forEach((x) => $("galaxyCollection").add(new Option(x, x)));
$("galaxyCollection").onchange = (e) => {
  $("galaxyAttribute").innerHTML = '<option value="">Выберите атрибут</option>';
  (galaxy[e.target.value] || "")
    .split(" ")
    .filter(Boolean)
    .forEach((x) => $("galaxyAttribute").add(new Option(x, x)));
  $("galaxyAttribute").disabled = !e.target.value;
};
$("mappingToggle").onclick = () => {
  $("mappingToggle").setAttribute(
    "aria-checked",
    String($("mappingToggle").getAttribute("aria-checked") !== "true"),
  );
  syncMappingFields();
};
syncMappingFields();
$("cmdbMappingToggle").onclick = () => {
  let enabled =
    $("cmdbMappingToggle").getAttribute("aria-checked") === "true";
  setAttributeMode(enabled ? "manual" : "cmdb");
};
$("cmdbSelectAll").onchange = () => {
  $("cmdbAttributes")
    .querySelectorAll(".cmdb-attribute-row")
    .forEach((row) => {
      let checkbox = row.querySelector('input[type="checkbox"]'),
        customName = row.querySelector(".cmdb-custom-name");
      checkbox.checked = $("cmdbSelectAll").checked;
      customName.disabled = !checkbox.checked;
      row.classList.remove("invalid");
    });
  syncCmdbSelectAll();
  syncTypeSaveButton();
};
$("cmdbSelectAll").onclick = (e) => e.stopPropagation();
document.querySelector(".cmdb-collection-dropdown").onclick = (e) =>
  e.stopPropagation();
$("addButton").onclick = openModal;
$("closeModal").onclick = closeModal;
$("cancelModal").onclick = closeModal;
$("attributeModal").onclick = (e) =>
  e.target === $("attributeModal") && closeModal();
$("searchInput").oninput = () => {
  document
    .querySelector(".search-field")
    .classList.toggle("has-value", !!$("searchInput").value);
  if (active === "objects") renderObjects();
  if (active === "types") renderTypes();
  if (active === "relations") renderRelations();
};
$("clearSearch").onclick = () => {
  $("searchInput").value = "";
  $("searchInput").dispatchEvent(new Event("input"));
};
$("menuToggle").onclick = () => $("sidebar").classList.toggle("open");
$("objectTypeFilter").onclick = (e) => {
  e.stopPropagation();
  let opening = $("objectTypeFilterMenu").hidden;
  $("objectTypeFilterMenu").hidden = !opening;
  $("objectTypeFilter").setAttribute("aria-expanded", String(opening));
};
document.addEventListener("click", () => {
  hideCmdbCollectionOptions();
  $("objectTypeFilterMenu").hidden = true;
  $("objectTypeFilter").setAttribute("aria-expanded", "false");
  closeRowActions();
});
$("closeTypeModal").onclick = closeTypeModal;
$("cancelTypeModal").onclick = () => {
  closeTypeModal();
  tab("types");
};
$("typeModal").onclick = (e) => e.target === $("typeModal") && closeTypeModal();
$("closeDeleteAttributeModal").onclick = closeDeleteAttribute;
$("cancelDeleteAttribute").onclick = closeDeleteAttribute;
$("deleteAttributeModal").onclick = (e) =>
  e.target === $("deleteAttributeModal") && closeDeleteAttribute();
$("confirmDeleteAttribute").onclick = async () => {
  if (deletingAttributeId === null) return;
  let id = deletingAttributeId;
  try {
    await deleteAttribute(id);
    closeDeleteAttribute();
    await render();
    toast("Атрибут удалён");
  } catch (err) {
    console.error(err);
    toast("Не удалось удалить атрибут");
  }
};
$("addTypeAttribute").onclick = () => addManualAttribute();
$("attributeForm").onsubmit = async (e) => {
  e.preventDefault();
  let n = $("attributeName").value.trim(),
    m = $("mappingToggle").getAttribute("aria-checked") === "true",
    c = $("galaxyCollection").value,
    a = $("galaxyAttribute").value;
  setErrors([
    ["nameError", !n],
    ["collectionError", m && !c],
    ["galaxyAttributeError", m && !a],
  ]);
  if (!n || (m && (!c || !a))) return;
  try {
    let isEdit = editingAttributeId !== null,
      previous = isEdit
        ? (await getAll()).find(
            (attribute) => attribute.id === editingAttributeId,
          )
        : null,
      item = {
        ...(previous || {}),
        name: n,
        objectType: $("objectType").value,
        collection: m ? c : "",
        galaxyAttribute: m ? a : "",
      };
    if (isEdit) {
      item.id = editingAttributeId;
      await updateAttribute(item);
    } else item.id = await save(item);
    await syncAttributeTypeMembership(item);
    closeModal();
    await render();
    await updateCounts();
    toast(isEdit ? "Атрибут изменён" : "Атрибут сохранён в локальной базе");
  } catch (err) {
    console.error(err);
    toast("Не удалось сохранить атрибут");
  }
};
$("typeForm").onsubmit = async (e) => {
  e.preventDefault();
  let n = $("typeName").value.trim(),
    manualMode =
      $("cmdbMappingToggle").getAttribute("aria-checked") !== "true",
    manualValid = validateManualAttributes(),
    manualAttributes = getManualAttributes(),
    cmdbCollection = $("cmdbCollectionInput").value,
    cmdbCollectionValid = Object.hasOwn(galaxy, cmdbCollection),
    cmdbCollectionAvailable =
      manualMode ||
      !(await getTypes()).some(
        (type) =>
          type.id !== editingTypeId && type.cmdbCollection === cmdbCollection,
      ),
    cmdbNamesValid = manualMode || validateCmdbCustomNames(),
    cmdbAttributes = [
      ...$("cmdbAttributes").querySelectorAll(".cmdb-attribute-row"),
    ]
      .filter((row) => row.querySelector('input[type="checkbox"]').checked)
      .map((row) => ({
        name: row.querySelector('input[type="checkbox"]').value,
        customName: row.querySelector(".cmdb-custom-name").value.trim(),
      }));
  let hasAttributes = manualMode
    ? manualAttributes.length > 0 && manualValid
    : cmdbAttributes.length > 0;
  $("typeNameError").classList.toggle("visible", !n);
  $("cmdbCollectionError").textContent = !cmdbCollectionAvailable
    ? "Эта коллекция уже связана с другим типом объектов"
    : "Выберите коллекцию в CMDB";
  $("cmdbCollectionError").classList.toggle(
    "visible",
    !manualMode && (!cmdbCollectionValid || !cmdbCollectionAvailable),
  );
  if (
    !n ||
    !manualValid ||
    !hasAttributes ||
    (!manualMode &&
      (!cmdbCollectionValid || !cmdbCollectionAvailable || !cmdbNamesValid))
  )
    return;
  try {
    let isEdit = editingTypeId !== null,
      previousType = isEdit
        ? (await getTypes()).find((x) => x.id === editingTypeId)
        : null,
      item = {
        name: n,
        attributes: previousType?.attributes || [],
        manualAttributes,
        cmdbCollection: manualMode ? "" : cmdbCollection,
        cmdbAttributes: manualMode ? [] : cmdbAttributes,
      };
    if (isEdit) {
      item.id = editingTypeId;
      await updateType(item);
    } else item.id = await saveType(item);
    await syncTypeAttributesToRegistry(item);
    closeTypeModal();
    await renderTypes();
    await updateCounts();
    toast(isEdit ? "Тип изменён" : "Тип объекта сохранён");
  } catch (err) {
    console.error(err);
    toast("Не удалось сохранить тип объекта");
  }
};
$("saveAttributeButton").onclick = () => submitForm("attributeForm");
$("saveTypeButton").onclick = () => submitForm("typeForm");
function syncTabActionButtons(id) {
  let isTypes = id === "types",
    isObjects = id === "objects";
  $("addTypeButton").classList.toggle("is-inactive", !isTypes);
  $("addMonitoringObject").classList.toggle("is-inactive", !isObjects);
  $("addButton").hidden = isTypes || isObjects;
}
document.querySelectorAll(".tab").forEach(
  (b) =>
    (b.onclick = () => {
      $("searchInput").value = "";
      document.querySelector(".search-field").classList.remove("has-value");
      tab(b.dataset.tab);
    }),
);
window.addEventListener("hashchange", () => {
  let route = location.hash.slice(1);
  if (!routes.has(route)) {
    history.replaceState(null, "", "#objects");
    route = "objects";
  }
  $("searchInput").value = "";
  document.querySelector(".search-field").classList.remove("has-value");
  tab(route, false);
});
$("addTypeButton").onclick = openModal;
$("addMonitoringObject").onclick = openMonitoringObject;
$("emptyAddButton").onclick = () =>
  active === "objects" ? openMonitoringObject() : openModal();
$("closeMonitoringObject").onclick = closeMonitoringObject;
$("cancelMonitoringObject").onclick = closeMonitoringObject;
$("monitoringObjectModal").onclick = (e) =>
  e.target === $("monitoringObjectModal") && closeMonitoringObject();
$("closeTypeDetails").onclick = closeTypeDetails;
$("typeDetailsModal").onclick = (e) =>
  e.target === $("typeDetailsModal") && closeTypeDetails();
$("editExistingObject").onclick = () =>
  duplicateMonitoringObject && showMonitoringCard(duplicateMonitoringObject);
$("monitoringObjectForm").onsubmit = async (e) => {
  e.preventDefault();
  let name = $("monitoringObjectName").value.trim(),
    typeId = +$("monitoringObjectType").value;
  setErrors([
    ["monitoringObjectNameError", !name],
    ["monitoringObjectTypeError", !typeId],
  ]);
  if (!name || !typeId) return;
  if ($("monitoringObjectCard").hidden) {
    let objects = await getMonitoringObjects(),
      duplicate = objects.find(
        (x) =>
          x.typeId === typeId && x.name.toLowerCase() === name.toLowerCase(),
      );
    if (duplicate) {
      duplicateMonitoringObject = duplicate;
      $("duplicateNotice").hidden = false;
      return;
    }
    await showMonitoringCard();
    return;
  }
  let type = (await getTypes()).find((x) => x.id === typeId),
    values = {};
  $("monitoringAttributeFields")
    .querySelectorAll("[data-attribute-id]")
    .forEach(
      (input) => (values[input.dataset.attributeId] = input.value.trim()),
    );
  let item = { name, typeId, typeName: type.name, values },
    isEdit = editingMonitoringObjectId !== null;
  if (isEdit) item.id = editingMonitoringObjectId;
  try {
    await saveMonitoringObject(item);
    closeMonitoringObject();
    await renderObjects();
    await updateCounts();
    toast(isEdit ? "Объект изменён" : "Объект мониторинга добавлен");
  } catch (err) {
    console.error(err);
    toast("Не удалось сохранить объект");
  }
};
$("continueMonitoringObject").onclick = async (e) => {
  e.preventDefault();
  try {
    await $("monitoringObjectForm").onsubmit(
      new Event("submit", { cancelable: true }),
    );
  } catch (err) {
    console.error(err);
    toast("Не удалось открыть карточку объекта");
  }
};
$("closeRelationModal").onclick = closeRelationModal;
$("cancelRelationModal").onclick = () => {
  closeRelationModal();
  tab("relations");
};
$("relationModal").onclick = (e) =>
  e.target === $("relationModal") && closeRelationModal();
function collectRelationRules(containerId) {
  let valid = true,
    items = [...$(containerId).querySelectorAll(".relation-rule")].map(
      (row) => {
        let typeFrom = row.querySelector(".relation-rule-type-from"),
          attributeFrom = row.querySelector(".relation-rule-attribute-from"),
          operator = row.querySelector(".relation-rule-operator"),
          typeTo = row.querySelector(".relation-rule-type-to"),
          attributeTo = row.querySelector(".relation-rule-attribute-to"),
          rowValid =
            !!typeFrom.value &&
            !!attributeFrom.value &&
            !!typeTo.value &&
            typeFrom.value !== typeTo.value &&
            !!attributeTo.value;
        row.classList.toggle("invalid", !rowValid);
        if (!rowValid) valid = false;
        return {
          typeFrom: typeFrom.value,
          typeFromName: getSelectedOptionText(typeFrom),
          attributeFrom: attributeFrom.value,
          attributeFromName: getSelectedOptionText(attributeFrom),
          operator: operator.value,
          typeTo: typeTo.value,
          typeToName: getSelectedOptionText(typeTo),
          attributeTo: attributeTo.value,
          attributeToName: getSelectedOptionText(attributeTo),
        };
      },
    );
  return { valid, items };
}
async function submitRelationForm(e) {
  if (e) e.preventDefault();
  let name = $("relationName").value.trim(),
    parent = collectRelationRules("parentRelationRules"),
    child = collectRelationRules("childRelationRules"),
    hasRules = parent.items.length + child.items.length > 0;
  setErrors([["relationNameError", !name]]);
  if (!name || !hasRules || !parent.valid || !child.valid) {
    toast(
      !hasRules
        ? "Добавьте хотя бы одну родительскую или дочернюю связь"
        : "Заполните все поля добавленных связей",
    );
    return;
  }
  try {
    let isEdit = editingRelationId !== null,
      record = {
        name,
        parentRelations: parent.items,
        childRelations: child.items,
      },
      savedId;
    if (isEdit) {
      record.id = editingRelationId;
      savedId = await updateRelation(record);
    } else savedId = await saveRelation(record);
    let saved = (await getRelations()).find(
      (relation) => String(relation.id) === String(savedId),
    );
    if (!saved) throw new Error("Запись не найдена после сохранения");
    if (
      saved.name !== record.name ||
      JSON.stringify(saved.parentRelations || []) !==
        JSON.stringify(record.parentRelations) ||
      JSON.stringify(saved.childRelations || []) !==
        JSON.stringify(record.childRelations)
    )
      throw new Error("Структура связи записана в базу не полностью");
    closeRelationModal();
    await renderRelations();
    await updateCounts();
    toast(isEdit ? "Связь изменена" : "Связь сохранена");
  } catch (err) {
    console.error(err);
    toast(
      "Не удалось сохранить связь: " +
        (err?.message || err?.name || "ошибка локальной базы"),
    );
  }
}
$("addParentRelation").onclick = () =>
  addRelationRule("parentRelationRules");
$("addChildRelation").onclick = () => addRelationRule("childRelationRules");
$("relationForm").onsubmit = submitRelationForm;
$("saveRelationButton").onclick = submitRelationForm;
$("closeActionDelete").onclick = closeActionDelete;
$("cancelActionDelete").onclick = closeActionDelete;
$("actionDeleteModal").onclick = (e) =>
  e.target === $("actionDeleteModal") && closeActionDelete();
$("confirmActionDelete").onclick = async () => {
  let action = pendingDeleteAction;
  closeActionDelete();
  if (!action) return;
  try {
    await action();
  } catch (err) {
    console.error(err);
    toast("Не удалось удалить запись");
  }
};
deletePreviousDatabase()
  .then(dbOpen)
  .then(async () => {
    await migrateCollectionNames();
    await repairAttributeTypeLinks();
    await syncAllTypeAttributesToRegistry();
    await updateCounts();
    let route = location.hash.slice(1);
    if (!routes.has(route)) {
      route = "objects";
      history.replaceState(null, "", "#objects");
    }
    tab(route, false);
  })
  .catch((err) => {
    console.error(err);
    toast("Не удалось открыть локальную базу");
  });
