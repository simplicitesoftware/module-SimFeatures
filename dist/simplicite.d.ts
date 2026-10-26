import { EventClickArg, DateSelectArg, EventDropArg, Calendar } from '@fullcalendar/core';
import { EventResizeDoneArg } from '@fullcalendar/interaction';
import L$1, { LatLngTuple } from 'leaflet';
import Chart from 'chart.js/auto';
import { ChartConfiguration, InteractionItem, TitleOptions, ChartType } from 'chart.js';
import * as BootstrapLib from 'bootstrap';
import flatpickr from 'flatpickr';
import { Options } from 'flatpickr/dist/types/options';
import { Instance } from 'flatpickr/dist/types/instance';
import moment from 'moment';
import hljs from 'highlight.js';
import { marked } from 'marked';
import { Calendar as Calendar$1 } from '@fullcalendar/core/index.js';
import Quill, { QuillOptions } from 'quill';
import { Html5Qrcode } from 'html5-qrcode';
import SignaturePad from 'signature_pad';
import { GridStackOptions, GridStack } from 'gridstack';
import js_beautify from 'js-beautify';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import mermaid from 'mermaid';
import mustache from 'mustache';
import Terminal from 'xterm';

/**
 * Service gateways
 * @enum
 */
declare const Gateway: {
    /** UI gateway */
    readonly UI: "ui";
    /** Public UI gateway */
    readonly UI_PUBLIC: "uipublic";
    /** API gateway */
    readonly API: "api";
};
/**
 * Contexts of a business object
 * @enum
 */
declare const Context: {
    /** No context */
    readonly NONE: 0;
    /** Search context */
    readonly SEARCH: 1;
    /** List context */
    readonly LIST: 2;
    /** Creation context */
    readonly CREATE: 3;
    /** Copy context */
    readonly COPY: 4;
    /** Update context */
    readonly UPDATE: 5;
    /** Delete context */
    readonly DELETE: 6;
    /** Cross table context */
    readonly CROSSTAB: 8;
    /** Publication template context */
    readonly PRINTTMPL: 9;
    /** Bulk update context */
    readonly UPDATEALL: 10;
    /** Reference selection context */
    readonly REFSELECT: 11;
    /** Data mapping selection context */
    readonly DATAMAPSELECT: 12;
    /** Pre-validate context */
    readonly PREVALIDATE: 13;
    /** Post validate context */
    readonly POSTVALIDATE: 14;
    /** State transition context */
    readonly STATETRANSITION: 15;
    /** Export context */
    readonly EXPORT: 16;
    /** Import context */
    readonly IMPORT: 17;
    /** Association context */
    readonly ASSOCIATE: 18;
    /** Panel list context */
    readonly PANELLIST: 19;
    /** Action context */
    readonly ACTION: 20;
    /** Agenda context */
    readonly AGENDA: 21;
    /** Place map context */
    readonly PLACEMAP: 22;
    /** Widget context */
    readonly WIDGET: 23;
};
/**
 * Types of a field
 * @enum
 */
declare const FieldType: {
    /** Internal ID (foreign key) type */
    readonly ID: 0;
    /** Integer type */
    readonly INT: 1;
    /** Float type */
    readonly FLOAT: 2;
    /** String type */
    readonly STRING: 3;
    /** Date type */
    readonly DATE: 4;
    /** Date and time type */
    readonly DATETIME: 5;
    /** Time type */
    readonly TIME: 6;
    /** Single enumerated (list of values) type */
    readonly ENUM: 7;
    /** Boolean type */
    readonly BOOLEAN: 8;
    /** Password type */
    readonly PASSWORD: 9;
    /** URL type */
    readonly URL: 10;
    /** HTML content type */
    readonly HTML: 11;
    /** Email type */
    readonly EMAIL: 12;
    /** Long string (unlimited) type */
    readonly LONG_STRING: 13;
    /** Multiple enumerated (list of values) type */
    readonly ENUM_MULTI: 14;
    /** Regular expression type */
    readonly REGEXP: 15;
    /** Document type */
    readonly DOC: 17;
    /** External file reference type */
    readonly EXTFILE: 19;
    /** Image type */
    readonly IMAGE: 20;
    /** Notepad (incremental long text) type */
    readonly NOTEPAD: 21;
    /** Phone number type */
    readonly PHONENUM: 22;
    /** Color type */
    readonly COLOR: 23;
    /** Object type */
    readonly OBJECT: 24;
    /** Geo coordinates type */
    readonly GEOCOORDS: 25;
    /** Big decimal type */
    readonly BIGDECIMAL: 26;
};
/**
 * Visibility of a field
 * @enum
 */
declare const Visibility: {
    /** Not visible */
    readonly HIDDEN: 0;
    /** Not visible (alias to VIS_HIDDEN) */
    readonly NOT: 0;
    /** Visible in lists */
    readonly LIST: 1;
    /** Visible in forms */
    readonly FORM: 2;
    /** Visible in lists and forms */
    readonly BOTH: 3;
    /** Forbidden on UI */
    readonly FORBIDDEN: 4;
};
/**
 * Updatability of a field
 * @enum
 */
declare const Updatable: {
    /** Not updatable */
    readonly READ_ONLY: 0;
    /** Updatable in lists and forms */
    readonly ALWAYS: 1;
    /** Updatable in forms only */
    readonly FORM_ONLY: 2;
    /** Updatable in lists only */
    readonly LIST_ONLY: 3;
};
/**
 * Search modes of a field
 * @enum
 */
declare const SearchMode: {
    /** Not searchable */
    readonly NONE: 0;
    /** Searchable */
    readonly MONO: 1;
    /** Searchable using check boxes */
    readonly MULTI_CHECK: 2;
    /** Searchable using list box */
    readonly MULTI_LIST: 3;
    /** Searchable using period */
    readonly PERIOD: 4;
};
/**
 * Renderings of an enumeration field
 * @enum
 */
declare const Rendering: {
    /** Default rendering */
    readonly DEFAULT: "";
    /** Select box rendering (single or multiple select) */
    readonly SELECTBOX: "SB";
    /** Rendering horizontal checkbox(es) */
    readonly HORIZCHECKBOX: "HCB";
    /** Rendering vertical checkbox(es) */
    readonly VERTCHECKBOX: "VCB";
    /** Rendering horizontal radio button(s) */
    readonly HORIZRADIOBUTTON: "HRB";
    /** Rendering vertical radio button(s) */
    readonly VERTRADIOBUTTON: "VRB";
};
/**
 * Error levels (numeric)
 * @enum
 */
declare const ErrorLevel: {
    /** Fatal error value */
    readonly FATAL: 1;
    /** Error error value */
    readonly ERROR: 2;
    /** Minor error value */
    readonly WARNING: 3;
};
/**
 * Message levels (code)
 * @enum
 */
declare const MessageLevel: {
    /** Fatal error value */
    readonly FATAL: "F";
    /** Error error value */
    readonly ERROR: "E";
    /** Minor error value */
    readonly WARNING: "W";
};
/**
 * View item types
 * @enum
 */
declare const ViewType: {
    /** Login */
    readonly LOGIN: "L";
    /** Date */
    readonly DATE: "D";
    /** Time */
    readonly TIME: "T";
    /** Enumeration code */
    readonly LOV_CODE: "C";
    /** Search list */
    readonly SEARCH: "S";
    /** Filters */
    readonly FILTERS: "F";
    /** External object */
    readonly EXTERN: "E";
    /** Image */
    readonly IMAGE: "I";
    /** Graph chart */
    readonly GRAPH: "G";
    /** Crosstab */
    readonly CROSSTAB: "X";
    /** Link */
    readonly LINK: "P";
    /** Print template */
    readonly PRINTTMPL: "Z";
    /** Fulltext index search */
    readonly INDEX: "N";
    /** News */
    readonly NEWS: "W";
    /** Shortcuts */
    readonly SHORTCUTS: "U";
    /** Tree view */
    readonly TREEVIEW: "V";
    /** Sub-view */
    readonly SUBVIEW: "B";
};
/** Field types labels (indexed by FieldType values) */
declare const FieldTypeLabels: readonly ["ID", "integer", "decimal", "string", "date", "datetime", "time", "enum", "boolean", "password", "url", "html", "email", "text", "multienum", "regexp", "undefined", "document", "simpledecimal", "extfile", "picture", "notepad", "phonenum", "color", "object", "geocoords", "bigdecimal"];
/** Keys of a group prefixed with the family name: `{ NONE: 0 }` with `CONTEXT_` gives `{ CONTEXT_NONE: 0 }` */
type Prefixed<P extends string, T> = {
    readonly [K in keyof T & string as `${P}${K}`]: T[K];
};
/** Type of AppConstants: the groups with their family prefix, plus the standalone constants */
type AppConstantsType = Prefixed<"GATEWAY_", typeof Gateway> & Prefixed<"CONTEXT_", typeof Context> & Prefixed<"TYPE_", typeof FieldType> & Prefixed<"VIS_", typeof Visibility> & Prefixed<"UPD_", typeof Updatable> & Prefixed<"SEARCH_", typeof SearchMode> & Prefixed<"RENDERING_", typeof Rendering> & Prefixed<"ERRLEVEL_", typeof ErrorLevel> & Prefixed<"LEVEL_", typeof MessageLevel> & {
    /** @ignore */
    readonly DEFAULT_INSTANCE_PREFIX: "the_ajax_";
    /** Default row ID value (for creation) */
    readonly DEFAULT_ROW_ID: "0";
    /** Types labels (indexed by TYPE_* constants) */
    readonly TYPES: typeof FieldTypeLabels;
    /** View item types */
    readonly VIEW_TYPE: typeof ViewType;
    /** True value */
    readonly TRUE: string;
    /** False value */
    readonly FALSE: string;
};
/**
 * Flat constants of the Session, kept for backward compatibility: `$app.CONTEXT_CREATE` or `Simplicite.Ajax.CONTEXT_CREATE`.
 *
 * Each one is a group value with the family prefix, see the groups for their documentation:
 *
 * | Prefix       | Group                | Example                                       |
 * | ------------ | -------------------- | --------------------------------------------- |
 * | `GATEWAY_`   | {@link Gateway}      | `GATEWAY_API` = `Gateway.API`                 |
 * | `CONTEXT_`   | {@link Context}      | `CONTEXT_CREATE` = `Context.CREATE`           |
 * | `TYPE_`      | {@link FieldType}    | `TYPE_DATE` = `FieldType.DATE`                |
 * | `VIS_`       | {@link Visibility}   | `VIS_BOTH` = `Visibility.BOTH`                |
 * | `UPD_`       | {@link Updatable}    | `UPD_READ_ONLY` = `Updatable.READ_ONLY`       |
 * | `SEARCH_`    | {@link SearchMode}   | `SEARCH_PERIOD` = `SearchMode.PERIOD`         |
 * | `RENDERING_` | {@link Rendering}    | `RENDERING_SELECTBOX` = `Rendering.SELECTBOX` |
 * | `ERRLEVEL_`  | {@link ErrorLevel}   | `ERRLEVEL_ERROR` = `ErrorLevel.ERROR`         |
 * | `LEVEL_`     | {@link MessageLevel} | `LEVEL_ERROR` = `MessageLevel.ERROR`          |
 *
 * Plus `DEFAULT_ROW_ID`, `TRUE`, `FALSE`, `TYPES` ({@link FieldTypeLabels}) and `VIEW_TYPE` ({@link ViewType}).
 */
declare const AppConstants: AppConstantsType;

/** Grid data: rows of cells */
type GridEditorJson = string[][];
/** Options of the grid context menu */
interface MenuGridOptions {
    /** Selector of the menu */
    menuSelector: string;
    /** Handler when an item is selected */
    menuSelected: (invokedOn: JQuery, target: JQuery) => void;
}
/** Options of the grid editor */
interface GridEditorOptions {
    /** Grid name */
    name?: string;
    /** Initial number of rows */
    initRows?: number;
    /** Initial number of columns */
    initCols?: number;
    /** Labels of the menu items */
    text?: {
        /** Add a row before */
        BUTTON_ADD_ROW_BEFORE: string;
        /** Add a row after */
        BUTTON_ADD_ROW_AFTER: string;
        /** Delete the row */
        BUTTON_DEL_ROW: string;
        /** Add a column before */
        BUTTON_ADD_COL_BEFORE: string;
        /** Add a column after */
        BUTTON_ADD_COL_AFTER: string;
        /** Delete the column */
        BUTTON_DEL_COL: string;
    };
    /** Value of an empty cell */
    emptyVal?: string;
    /** Initial data */
    initJson?: string | GridEditorJson;
    /** Read only grid */
    readonly?: boolean;
    /** Callback when the data change */
    postDataChange?: (data: GridEditorJson) => void;
}
/** Parameters of a grid field */
interface GridEditorParam {
    /** Grid name */
    name: string;
    /** Grid data */
    json?: string | GridEditorJson;
    /** Grid container */
    grid: JQuery;
    /** Textarea of the field value */
    textarea?: JQuery;
    /** Read only grid */
    readonly?: boolean;
    /** Grid options */
    settings?: GridEditorOptions;
}
/**
 * Editable JSON array as HTML table
 */
declare class GridEditor {
    /**
     * Bind a context menu on the grid cells.
     * @param ctn Grid cells
     * @param settings Menu options
     * @returns The cells
     */
    contextMenu(ctn: JQuery, settings: MenuGridOptions): JQuery;
    /**
     * Build an editable grid in a container.
     * @param container Grid container
     * @param settings Grid options
     */
    edit(container: JQuery, settings: GridEditorOptions): void;
}

/**
 * Generic JQuery handler for HTML element
 */
type JQueryHandler = (this: HTMLElement, event: JQuery.Event, ...params: any) => void;
/** Item of a pillbox input (see `$.fn.pillbox`) */
interface PillboxItem {
    /** Item ID */
    id: string;
    /** Item label */
    label: string;
    /** Deletable item */
    del?: boolean;
    /** Openable item */
    open?: boolean;
}
/** Parameters of a pillbox input (see `$.fn.pillbox`) */
interface PillboxParam {
    /** Max size of search results (0 = read only) */
    limit: number;
    /** Max occurrences (-1 = no limit) */
    maxOccurs: number;
    /** Optional help text */
    help?: string;
    /** Optional service to search data thru completion with the input value */
    search: null | ((values: string, cbk: (r: KeyObject) => void) => void);
    /** To display completion row and add the pillbox data `{id,label}` */
    display: null | ((item: KeyObject) => string);
    /** Optional callback to pick a pair of `{id,label}` thru a popup */
    lookup: null | ((add?: (id: string, label: string) => void) => void);
    /** Optional callback when item is added, null to disable adding */
    onAdd: null | ((id: string, fn: (...p: any) => void, data: KeyObject) => void);
    /** Optional callback when item is removed, null to disable deletion */
    onRemove: null | ((id: string, fn: Callback) => void);
    /** Optional callback when item is created, null to disable creation */
    onCreate: null | ((val: string, fn: (id: string, label: string) => void) => void);
    /** Optional callback to open one item */
    onOpen: null | ((id: string) => void);
    /** Completion options */
    completion?: any;
    /** Optional create button label */
    onCreateLabel?: string;
}
/**
 * JQuery SVGGraphicsElement
 */
type JSVG = JQuery<SVGGraphicsElement>;
declare global {
    interface JQueryStatic {
        escapeHTML(c: string): string;
        getSafeHTML(c: string | JQuery): string;
        SVGElement(name: string, attr?: object): JSVG;
        jqplot: any;
    }
    interface JQuery {
        spectrum: (p?: any) => JQuery;
        contextMenuGrid: (settings: MenuGridOptions) => JQuery;
        editableTable: (settings: GridEditorOptions) => JQuery;
        reverse(): JQuery;
        appendText(c: string): JQuery;
        htmlSafe(c: string | JQuery): JQuery;
        appendSafe(c: string | JQuery): JQuery;
        prependSafe(c: string | JQuery): JQuery;
        replaceClass(oldClass: string, newClass?: string): JQuery;
        clickToggle(f1: {
            apply: (arg0: HTMLElement, arg1: IArguments) => void;
        }, f2: {
            apply: (arg0: HTMLElement, arg1: IArguments) => void;
        }): JQuery;
        swipe(handler?: Callback | "remove", options?: {
            duration?: number;
            direction?: string;
            distance?: number;
            margin?: number;
        }): JQuery;
        masonry(options?: JQuery | {
            item?: JQuery;
            columns?: number;
        }): JQuery;
        maxZ(selector?: string, min?: number): JQuery;
        scrollParent(dir?: string): JQuery<HTMLElement | Document>;
        scrollParents(dir?: string): JQuery<HTMLElement | Document>;
        printPreview(params?: {
            width?: string;
            height?: string;
            top: string;
            left: string;
            resizable: string;
            scrollbars?: string;
            status: string;
            title?: string;
        }): JQuery;
        setSelection(selectionStart: number, selectionEnd: number): JQuery;
        setCursorPosition(position: number): JQuery;
        focusEnd(): JQuery;
        getCursorPosition(): number;
        getWordAtPosition(str?: string, i?: number): string;
        replaceWordAtPosition(word: string, str?: string, i?: number): string;
        insertAtCursor(text: string): JQuery;
        pillbox(p: string | {
            limit?: number;
            maxOccurs?: number;
            help?: string;
            search: null | ((values: string, cbk: (r: KeyObject) => void) => void);
            display: null | ((item: KeyObject) => string);
            onAdd: null | ((id: string, fn: (...p: any) => void, data: KeyObject) => void);
            onRemove: null | ((id: string, fn: Callback) => void);
            onCreate: null | ((val: string, fn: Callback) => void);
            onOpen: null | ((id: string) => void);
            lookup: null | ((add?: Callback) => void);
            onCreateLabel?: string;
        }, data?: PillboxItem[]): JQuery | string[];
        autosize(options?: {
            className?: string;
            id?: string;
            append?: string;
            callback?: (ta: Element) => void;
            resizeDelay?: number;
            placeholder?: boolean;
        }): JQuery;
        draggable(options?: string | {
            handle?: JQuery | string | boolean;
            exclude?: string;
            x?: boolean;
            y?: boolean;
        }): JQuery;
    }
}
/** jQuery extensions of the UI (`$.fn.pillbox`, `$.fn.swipe`, `$.fn.htmlSafe`...) */
declare class JQueryExtension {
    constructor();
}

/** Provider of the social share */
interface SocialShareProvider {
    /** Provider name (icon /images/icon/share/<name>.png by default) */
    name: string;
    /** Share URL with the tokens [TEXT], [TITLE], [URL], [ROOT] and [IMAGE] */
    url?: string;
    /** Optional icon, see $view.icon */
    icon?: string;
}
/** Social share configuration (SOCIAL_SHARE parameter) */
interface SocialShareConfig {
    /** Share providers */
    providers?: SocialShareProvider[];
    /** Use the native share API when available */
    useAndroidChromeShare?: boolean;
}
/** Shared data */
interface SocialShareData {
    /** Optional title for email */
    title?: string;
    /** Optional text content */
    text?: string;
    /** URL to share */
    url?: string;
    /** Optional URL to image for pinterest */
    image?: string;
    /** Root domain to share */
    root?: string;
}
/** Status of a post: `O` open, `C` closed */
type SocialStatus = "O" | "C";
/** Author of a post */
interface SocialUser {
    /** User row ID */
    userId: string;
    /** Login */
    login: string;
    /** TODO "A" ... ? */
    status: string;
    /** Displayed name */
    label: string;
    /** Full name */
    fullName: string;
}
/** Social post */
interface SocialPost {
    /** Post ID */
    id: string;
    /** Date and time */
    datetime: string;
    /** Elapsed time since the post */
    elapsed: string;
    /** Message */
    message?: string;
    /** Level (info, warning, error) */
    level?: string;
    /** Status */
    status?: SocialStatus;
    /** Liked by the current user */
    like: boolean;
    /** Count of likes */
    count: number;
    /** Users who like the post */
    likes?: string[];
    /** Target object name */
    target?: string;
    /** Target row ID */
    rowId?: string;
    /** Target record */
    item?: KeyObject;
    /** Author */
    author: SocialUser;
}
/** Parameters of the social posts display */
interface SocialParam {
    /** Dialog title */
    title?: string;
    /** Embedded in the container (false to open a dialog) */
    embedded?: boolean;
    /** true to list the object/public activities, false to hide activities */
    activity?: boolean;
    /** Reset the list of posts */
    reset?: boolean;
    /** Posts of a parent object */
    object?: boolean;
    /** Follow status */
    follow?: {
        /** Follow is requested */
        requested: string;
        /** Follower */
        follower: string;
        /** Followed */
        followed: string;
    };
    /** List only audit posts */
    audit?: JQueryHandler;
    /** Count of posted messages */
    posted?: number;
    /** Total of posts */
    count?: number;
    /** Optional counts per level */
    levels?: {
        /** Info posts */
        info: number;
        /** Warning posts */
        warn: number;
        /** Error posts */
        error: number;
        /** Closed posts */
        closed: number;
    };
    /** Search service handler */
    onlist?: (i: number, activity: boolean, level: string) => void;
    /** Post service handler */
    onpost?: (p: {
        id?: string;
        message: string;
        pub?: boolean;
    }) => void;
    /** Delete service handler */
    ondel?: (id: string) => void;
    /** Like service handler */
    onlike?: (id: string, like: boolean) => void;
    /** Status service handler */
    onstatus?: (id: string, status: SocialStatus) => void;
    /** Follow service handler */
    onfollow?: (method: string | null, param: string | null, cbk: (r: KeyObject) => void) => void;
}
/**
 * Social and Follower rendering
 */
declare class Social {
    private _socialPage;
    private _socialActivity;
    private _socialLevel;
    /**
     * Display the social posts
     * @param ctn container
     * @param list list of posts (paginated)
     * @param p optional parameters { onlist, activity }
     * @param p.activity true to list the object/public activities, false to hide activities
     * @param p.onlist search service handler
     * @param p.onpost post service handler
     * @param p.ondel delete service handler
     * @param p.onlike like service handler
     * @param p.onfollow follow service handler
     * @param p.count total of posts
     * @param p.levels optional counts per level (info, warn, error)
     * @param p.object optional parent object
     * @param p.title Dialog title
     * @param p.audit List only audit posts
     * @param p.embedded false to open a dialog
     * @param cbk optional callback
     */
    display(ctn: Container, list: SocialPost[], p: SocialParam, cbk?: Callback): this;
    /**
     * Follower dialog
     * @param p optional parameters { onfollow }
     * @param p.onfollow follow service handler
     * @param cbk optional callback
     */
    follow(p?: SocialParam, cbk?: Callback): Window & typeof globalThis;
    /**
     * Build a share button
     * @param config see SOCIAL_SHARE parameter
     * @param o Optional object
     * @param params Optional share data, with optional keys:
     * `title` (optional title for email), `text` (optional text content),
     * `url` (URL to share), `image` (optional URL to image for pinterest),
     * `root` (root domain to share)
     */
    shareButton(config?: SocialShareConfig, o?: BusinessObject, params?: SocialShareData): JQuery<HTMLElement>;
}

/** Type of an alert */
type AlertType = "error" | "danger" | "warning" | "info" | "secondary" | "success";
/** Position */
type Position = "top" | "bottom" | "left" | "right";
/** Callback of an alert button, with the optional prompted value */
type AlertCallback = (prompt?: string) => void;
/** Parameters of an alert, confirm or prompt dialog (see `$ui.alert`) */
interface AlertParam {
    /** Level (set from the type) */
    level?: string;
    /** True to display a modal dialog */
    modal?: boolean;
    /** Optional type `error`, `danger`, `warning` or `info` */
    type?: AlertType;
    /** Optional name */
    name?: string;
    /** Optional title */
    title?: AnyContent;
    /** Icon name */
    icon?: string;
    /** Optional alert body */
    content?: AnyContent;
    /** Optional "OK" button label, default `OK` */
    okLabel?: string;
    /** Optional "CANCEL" button label, default `CANCEL` */
    cancelLabel?: string;
    /** Optional help */
    help?: AnyContent;
    /** Optional callback on "OK" button */
    onOk?: AlertCallback;
    /** Optional callback on "CANCEL" button */
    onCancel?: Callback;
    /** Use the "don't ask again" local storage (true = keep user's action or string = forced response), needs a name */
    dontAskAgain?: string;
    /** True to allow drag & drop */
    moveable?: boolean;
    /** True to display a toast instead a dialog */
    toast?: boolean;
    /** The toast can be pinned */
    pinable?: boolean;
    /** Optional buttons to replace default OK */
    buttons?: {
        /** Button name (text code) */
        name: string;
        /** Button style (primary, secondary...) */
        style: string;
        /** Handler on click */
        callback?: Callback;
    }[];
    /** False to remove the fade effect */
    fade?: boolean;
    /** Optional callback when displayed */
    onload?: JQueryHandler;
    /** Optional callback when closing */
    beforeunload?: JQueryHandler;
    /** Optional callback when closed */
    unload?: JQueryHandler;
}
/**
 * UI rendering, part of the UI engine `$ui` (see UIEngine): dialogs and messages: alerts, toasts, confirmations, prompts, back-end messages
 */
declare class UIRenderDialog {
    /**
     * Alert dialog box
     * @param params Message or object with:
     * @param params.name Optional name
     * @param params.title Optional title, default "ALERT"
     * @param params.type Optional 'error|danger|warning|info'
     * @param params.content Optional alert body
     * @param params.okLabel Optional "OK" button label, default: <code>'OK'</code>
     * @param params.help Optional help
     * @param params.onOk Optional callback on "OK" button
     * @param params.dontAskAgain Use the 'dont't ask again' local storage (true=keep user's action or string=forced response), needs a name
     * @param params.toast True to display a toast instead a dialog
     * @param params.modal True to display a modal dialog
     * @param params.moveable True to allow drag&drop
     * @param params.buttons Optional buttons to replace default OK
     * @example
     * $ui.alert("Hello world !");
     * $ui.alert({
     * 	title: $T("INFO"),
     * 	type: "warning",
     * 	content: "Hello world !",
     * 	onOk: () => $console.log("closed")
     * });
     * // as a toast
     * $ui.alert({ content: "Saved", toast: true });
     */
    alert(params: string | AlertParam): void;
    /**
     * Toast dialog box
     * @param params Message or object with:
     * @param params.type Optional <code>error|danger|warning|info</code>
     * @param params.content Toast body
     * @param params.position Position <code>top|bottom</code>
     * @param params.align Align <code>left|right|center</code>
     * @param params.undo Add an undo button?
     * @param params.moveable True to allow drag&drop
     * @example
     * $ui.toast("Saved");
     * $ui.toast({ type: "warning", content: "Check the amount", position: "bottom", align: "right" });
     */
    toast(params: string | {
        type?: AlertType;
        title?: string;
        content?: AnyContent;
        position?: string;
        align?: string;
        duration?: number;
        undo?: boolean;
        moveable?: boolean;
        pinable?: boolean;
        toast?: boolean;
    }): void;
    /**
     * Confirm dialog box
     * @param params Message or object with:
     * @param params.name Optional name
     * @param params.title Optional title, default: <code>'CONFIRM'</code>
     * @param params.content Optional alert body
     * @param params.okLabel Optional "OK" button label, default: <code>'OK'</code>
     * @param params.cancelLabel Optional "CANCEL" button label, default: <code>'CANCEL'</code>
     * @param params.help Optional help
     * @param params.onOk Optional callback on "OK" button
     * @param params.onCancel Optional callback on "CANCEL" button
     * @param params.dontAskAgain Use the 'dont't ask again' local storage (true=keep user's action or string=forced response), needs a name
     * @param params.moveable True to allow drag&drop
     * @example
     * $ui.confirm({
     * 	title: $T("CONFIRM"),
     * 	content: "Are you sure ?",
     * 	onOk: () => $console.log("confirmed"),
     * 	onCancel: () => $console.log("canceled")
     * });
     */
    confirm(params: string | AlertParam): void;
    /**
     * Prompt dialog box
     * @param params Message or object with:
     * @param params.name Optional name
     * @param params.title Dialog title
     * @param params.content Optional alert body
     * @param params.okLabel Optional "OK" button label, default: <code>'OK'</code>
     * @param params.cancelLabel Optional "CANCEL" button label, default: <code>'CANCEL'</code>
     * @param params.help Optional help
     * @param params.onOk Optional callback(value) on OK button
     * @param params.onCancel Optional callback on Cancel button
     * @param params.moveable True to allow drag&drop
     * @param params.required Required value
     * @param params.value Input initial value
     * @example
     * $ui.prompt({
     * 	title: "Name",
     * 	value: "",
     * 	required: true,
     * 	onOk: (value?: string) => $console.log(value)
     * });
     */
    prompt(params: AlertParam & {
        required?: boolean;
        value?: string;
    }): void;
    /**
     * Yes/No dialog box
     * @param params Message or object with:
     * @param params.name Optional name
     * @param params.title Optional title, default "CONFIRM"
     * @param params.content Optional alert body
     * @param params.yesLabel Optional "YES" button label, default: <code>'YES'</code>
     * @param params.noLabel Optional "NO" button label, default: <code>'NO'</code>
     * @param params.help Optional help
     * @param params.onYes Optional callback on "YES" button
     * @param params.onNo Optional callback on "NO" button
     * @param params.dontAskAgain Use the 'dont't ask again' local storage (true=keep user's action or string=forced response), needs a name
     * @param params.moveable True to allow drag&drop
     * @example
     * $ui.yesNo({
     * 	title: $T("CONFIRM"),
     * 	content: "Send the order now ?",
     * 	onYes: () => obj.action("MyObjSendOrder"),
     * 	onNo: () => $console.log("not sent")
     * });
     */
    yesNo(params: AlertParam & {
        onYes?: Callback;
        onNo?: Callback;
        yesLabel?: string;
        noLabel?: string;
    }): void;
    /**
     * Yes/No/Cancel dialog box
     * @param params Message or object with:
     * @param params.name Optional name
     * @param params.title Optional title, default "CONFIRM"
     * @param params.content Optional alert body
     * @param params.yesLabel Optional "YES" button label, default: <code>'YES'</code>
     * @param params.noLabel Optional "NO" button label, default: <code>'NO'</code>
     * @param params.cancelLabel Optional "CANCEL" button label, default: <code>'CANCEL'</code>
     * @param params.help Optional help
     * @param params.onYes Optional callback on "YES" button
     * @param params.onNo Optional callback on "NO" button
     * @param params.onCancel Optional callback on "CANCEL" button
     * @param params.dontAskAgain Use the 'dont't ask again' local storage (true=keep user's action or string=forced response), needs a name
     * @param params.moveable True to allow drag&drop
     * @example
     * $ui.yesNoCancel({
     * 	content: "Save your changes before leaving ?",
     * 	onYes: () => $ui.saveForm(ctn, obj),
     * 	onNo: () => $ui.closeForm(ctn),
     * 	onCancel: () => $console.log("stay on the form")
     * });
     */
    yesNoCancel(params: AlertParam & {
        onYes?: Callback;
        onNo?: Callback;
        yesLabel?: string;
        noLabel?: string;
    }): void;
    /**
     * Information dialog box
     * @param msg Content
     * @example
     * $ui.info("The import is running, you will be notified at the end.");
     */
    info(msg: AnyContent): void;
    /**
     * Error dialog box
     * @param msg Content
     * @example
     * $ui.error($T("ERROR") + ": the amount must be positive");
     */
    error(msg: AnyContent): void;
    /**
     * Warning dialog box
     * @param msg Content
     * @example
     * $ui.warning($("<div/>").html("Some records are <b>locked</b>"));
     */
    warning(msg: AnyContent): void;
    /**
     * Back-end messages in a single dialog
     * @param msg Array of backend messages per rowId
     * @example
     * // Messages per row ID returned by a bulk service
     * $ui.backendMessages({ "12": ["ERR_REQUIRED:myObjCode#E"], "15": ["Done#I"] });
     */
    backendMessages(msg?: MessagesPerRow | MessageAny[] | null): void;
    /**
     * Back-end message(s)
     * @param msg Plain text / encoded message <code>(code:text#level)</code> / object <code>\{ code, level, text, label \}</code> / or array of messages
     * @param toast True to display a toast instead a dialog box
     * @param title Optional title
     * @example
     * // Encoded message "code:text#level" in a dialog, or an object in a toast
     * $ui.backendMessage("MY_WARNING:Stock is low#W");
     * $ui.backendMessage({ level: "I", text: "Order sent" }, true);
     */
    backendMessage(msg: MessageAny[] | MessageAny | MessageFromBack | null, toast?: boolean, title?: string): void;
    /**
     * Back-end exception
     * @param msg Simple text or <code>\{ level, message or messages \}</code>, or first item of array
     * @example
     * obj.action("MyObjSendOrder").catch((e: MessageFromBack) => $ui.backendException(e));
     */
    backendException(msg: string | string[] | MessageJSON[] | MessageFromBack): void;
    /**
     * Extract errors from messages
     * @param msg list of backend messages
     * @example
     * const errors: MessageJSON[] = $ui.getErrors(msgs);
     * if (errors.length) $ui.backendMessage(errors);
     */
    getErrors(msg?: MessageAny[]): MessageJSON[];
    /**
     * Object title to display.
     * @param obj Object with metadata (label, plurallabel, userkey)
     * @param userKey True to add the valued user-key
     * @param plural True to use the plural label if exists
     * @example
     * // "Order: ORD-0001" with the valued user-key
     * $ui.title(obj, true);
     * // Plural label "Orders"
     * $ui.title(obj, false, true);
     */
    title(obj: BusinessObject, userKey?: boolean | null, plural?: boolean): string;
    /**
     * Display the export dialog and get exported data
     * @param ctn Container
     * @param object Object or name
     * @param rowId Optional row ID to export only one record
     * @example
     * // Export dialog of the current search
     * $ui.displayExport(null, obj);
     * // Export one record
     * $ui.displayExport(null, obj, obj.getRowId());
     */
    displayExport(ctn: AnyContainer, object: BusinessObject, rowId?: string | null): Promise<void>;
    /**
     * Display a print/publication
     * @param ctn Optional container (_blank if null)
     * @param name Print name
     * @param obj Object
     * @param rowId Optional row ID
     * @param cbk Optional callback
     * @param label Optional label, used as title of the frame when displayed in a container
     * @example
     * // Open the publication "MyObjPrint" of the record in a new window
     * $ui.displayPrint(null, "MyObjPrint", "MyObject", rowId);
     */
    displayPrint(ctn: AnyContainer, name: string, obj: string | BusinessObject, rowId?: string | null, cbk?: Callback, label?: string): Promise<void>;
    /**
     * Manage import XML thru UI
     * @param ctn Optional container
     * @param adapter Optional adapter to use
     * @example
     * $ui.displayImportXML(null);
     * // with a specific adapter
     * $ui.displayImportXML(null, "MyXMLAdapter");
     */
    displayImportXML(ctn: AnyContainer, adapter?: string): void;
    /**
     * Manage import CSV thru UI
     * @param ctn Optional container
     * @example
     * $ui.displayImportCSV(null);
     */
    displayImportCSV(ctn: AnyContainer): void;
}

/**
 * Layout of the summaries in a minified list:
 * - `float`: flow of summaries
 * - `masonry`: packed grid of summaries
 * - `column`: one summary per line
 */
type ListLayout = "float" | "masonry" | "column";
/**
 * Actions displayed in the list header.
 * `null` = no action, `undefined` = actions from metadata.
 */
interface ListActions {
    /** Visible actions of the list */
    list?: Action[] | null;
    /** Actions in the list "plus" dropdown */
    listPlus?: Action[] | null;
}
/**
 * Actions displayed on each row.
 * `null` = no action, `undefined` = actions from metadata.
 */
interface RowActions {
    /** Visible actions of the row */
    row?: Action[] | null;
    /** Actions in the row "plus" dropdown */
    rowPlus?: Action[] | null;
}
/**
 * Search filters by field name, plus the technical keys
 * (`order__<field>`, `dmin__<field>`, `dmax__<field>`, `link__<object>__<field>`...).
 */
interface Filters {
    [fieldname: string]: any;
}
/** All the actions of a list: header, rows and context menus. */
type ListRowsActions = ListActions & RowActions & {
    /** Generic actions have been added */
    generic?: boolean;
    /** Context menu of a single row */
    contextMenu?: Action[];
    /** Context menu when several rows are selected */
    contextMenuMultiple?: Action[];
};
/**
 * Edit mode of a list:
 * - `upsert`: update rows and add new ones
 * - `rows`: update the selected rows
 * - `new`: create new rows
 */
type ListEditMode = "upsert" | "rows" | "new";
/** Search controls available on a list. */
interface ListSearchMode {
    /** Fulltext search input, with or without completion */
    index?: boolean | "completion";
    /** Search by column in the table header */
    column?: boolean | "collapsed";
    /** Search form in a popup */
    dialog?: boolean;
    /** Search form docked beside the list */
    docked?: boolean;
}
/**
 * Rows selection:
 * - `null`: all rows of all pages
 * - `"all"` | `"page"` | `"none"`: keyword
 * - any other string: one row ID or semicolon-separated row IDs
 * - array: list of row IDs
 */
type ListSelection = null | "none" | "all" | "page" | (string & {}) | string[];
/** Parameters of a list rendering (see `$ui.displayList`). */
type ListParam = NavParam & {
    /** List container */
    container?: JQuery;
    /** List title */
    title?: string;
    /** Context list or update */
    context?: number;
    /** Object instance name */
    inst?: string;
    /** Embedded in the parent object form */
    embedded?: boolean;
    /** Link definition to the parent object */
    link?: Link;
    /** Edit mode */
    edit?: ListEditMode;
    /** Panel with parent */
    parent?: ParentObject;
    /** Metadata has already been (re)loaded */
    metaReady?: boolean;
    /** List in a view item */
    view?: {
        /** View name */
        name: string;
        /** Item index in the view */
        item: number;
        /** View is the home page */
        home?: boolean;
    };
    /** Multi-creation index 01, 02... */
    index?: string;
    /** Workflow step context */
    step?: string;
    /** Show more columns */
    isExtended?: boolean;
    /** Minified list or mobile device */
    minimized?: boolean;
    /** Show row summaries */
    minified?: boolean;
    /** Allow to toggle list/summaries */
    minifiable?: boolean;
    /** Show columns totals */
    showTotals?: boolean;
    /** Show areas titles */
    showAreaTitles?: boolean;
    /** Show filters on header */
    showFilters?: boolean;
    /** Show fixed filters on header */
    showFixedFilters?: boolean;
    /** @deprecated since 6.2, use the `search` options */
    showSearchInlined?: boolean;
    /** Row actions on the right side of the list */
    rowActionsRight?: boolean;
    /** Apply the list constraints */
    constraints?: boolean;
    /** The list is editable */
    listEdit?: boolean;
    /** New record mode */
    addList?: boolean;
    /** Upsert mode */
    listUpsert?: boolean;
    /** Allow bulk update on list */
    bulkUpdate?: boolean;
    /** Allow bulk delete on list */
    bulkDelete?: boolean;
    /** List global help */
    help?: string;
    /** Messages to display */
    msg?: MessageAny[];
    /** Messages per row ID */
    msgRow?: MessagesPerRow;
    /** Rows to highlight (associate, reference picker...) */
    highlightIds?: string[];
    /** Sticky columns header */
    sticky?: boolean;
    /** Add href on links */
    followLinks?: boolean;
    /** Create references on links */
    createLinks?: boolean;
    /** Open documents on click */
    rowOpenDocs?: boolean;
    /** Allow rows selection */
    selectRows?: boolean;
    /** Preselected rows */
    selectedIds?: string[];
    /** Search options */
    search?: null | ListSearchMode;
    /** Fulltext search request */
    indexRequest?: string;
    /** Predefined search row ID */
    searchId?: string;
    /** Current object filters */
    filters?: Filters;
    /** Current fixed filters (read only) */
    fixedFilters?: Filters;
    /** Current page to apply/restore */
    page?: number;
    /** Current rows per page (min/max rows toggle) to apply/restore */
    pagesize?: number;
    /** List template name */
    template?: string;
    /** Layout of summaries rendering */
    layout?: ListLayout;
    /** Field areas */
    areas?: Area[];
    /** Columns by areas */
    areaCols?: string[][];
    /** List of columns */
    columns?: string[];
    /** Read only (ex: N,N pillbox rendering) */
    read?: boolean;
    /** Allow sort on list */
    sort?: boolean;
    /** Rows reordering by drag & drop */
    reorder?: {
        /** Order field */
        field: string;
        /** Service to move the rows before or after the target row */
        move?: (ids: string[], targetId: string, before?: boolean) => void;
        /** Enabled with the current sort direction */
        enabled?: false | "asc" | "desc";
    };
    /** Hook before loading the data */
    beforeload?: (ctn: Container, o: UIBusinessObject, p: ListParam) => void;
    /** Hook after loading the data, before display */
    preload?: (ctn: Container, o: UIBusinessObject, p: ListParam) => void;
    /** Hook when the list is displayed */
    onload?: (ctn: Container, o: UIBusinessObject, p: ListParam) => void;
    /** Hook to override the rendering, `done` must be called to display the default list */
    display?: (ctn: Container, o: UIBusinessObject, p: ListParam, done: Callback) => void;
    /** Hook when the list is removed */
    onunload?: (ctn: Container, o: UIBusinessObject, p: ListParam) => void;
    /** Create button handler (`null` = no button) */
    oncreate?: JQueryHandler | null;
    /** Open a row handler (`null` = rows are not clickable) */
    onopen?: ((ctn: Container, obj: string | UIBusinessObject, rowId: string, p?: KeyObject) => void) | null;
    /** Service to select rows, `cbk` receives the selected row IDs (`null` = all) */
    onSelectRow?: (selection: ListSelection, cbk: (rowIds: string[]) => void) => void;
    /** Long help handler */
    onhelp?: (obj: BusinessObject) => void;
    /** Custom rendering of a column title */
    renderTitle?: (o: BusinessObject, f: ObjectField, label: string) => JQuery;
    /** Custom rendering of a cell value */
    renderValue?: (o: BusinessObject, f: ObjectField, v: FieldValue) => JQuery;
    /** Hook when a row is displayed */
    onloadrow?: (ctn: Container, obj: UIBusinessObject, id: string, item: RowData, row: Container) => void;
    /** Hook to override a row rendering, `done` must be called to display the default row */
    displayrow?: (ctn: Container, row: JQuery, obj: UIBusinessObject, rowId: string, p: ListParam, done: Callback) => void;
    /** Hook when a row is removed */
    onunloadrow?: (ctn: Container, obj: UIBusinessObject, id: string, item: RowData, row: Container) => void;
    /** Service to save an editable cell */
    onsavecell?: (ctnList: Container, o: UIBusinessObject, rowId: string, f: ObjectField, index?: string | null) => Promise<KeyObject>;
    /** Service to load the children of a tree row */
    treeSearch?: (id: string, cbk: (children: RowTree[]) => void) => void;
    /** List and row actions: `null` = no action, `undefined` = from metadata */
    actions?: ListRowsActions | null;
    /** Groups of actions */
    actionGroups?: ActionGroup[];
    /** State model transitions on row */
    transitions?: Transition[] | null;
    /** Calculated: at least one action is available on a row */
    hasRowActions?: boolean;
    /** Tree depth of a reflexive list (-1 = no limit) */
    treeDepth?: number;
    /** Toggle tree mode off */
    treeOff?: boolean;
    /** Row level in tree */
    level?: number;
    /** Row children in tree */
    childrenList?: RowTree[];
    /** Parent row in tree */
    childOf?: JQuery;
    /** Last child in sub-tree */
    lastChild?: boolean;
    /** Sub-tree count */
    childrenCount?: number;
    /** Ancestor row IDs on the current tree path, for cycle detection (per render, not global) */
    treeAncestors?: Set<string>;
    /** Reference to the initial list options (cloned per row) */
    listOptions?: ListParam;
    /** Group-by mode */
    groupBy?: boolean;
    /** Partial list of a group-by section */
    partial?: boolean;
    /** Forced row data to display */
    rows?: RowDataMeta[];
    /** Context menu per row */
    contextMenuItems?: Action[];
    /** Table summary for screen readers (WCAG) */
    tableSummary?: string;
    /** Promises to wait before the end of rendering (see `$ui.addPromise`) */
    promises?: Promise<unknown>[];
};
/** Parameters of an object summary (see `$ui.displaySummary`). */
interface SummaryParam {
    /** Object instance name */
    inst?: string;
    /** Parent object */
    parent?: ParentObject;
    /** Show the object icon */
    icon?: boolean;
    /** Show the image */
    image?: boolean;
    /** Title of the summary */
    label?: string;
    /** Summary template */
    template?: string;
    /** User key in title (`null` = none) */
    userKey?: string | null;
    /** Fields to display (`null` = none) */
    fields?: ObjectField[] | null;
    /** Row actions (`null` = no action) */
    actions?: ListRowsActions | null;
    /** Reference buttons */
    refButtons?: KeyObject;
    /** Open handler (`null` = not clickable) */
    onopen?: ((ctn: Container, obj: string | UIBusinessObject, id: string, p?: KeyObject) => void) | null;
    /** Row data to reuse */
    item?: KeyObject;
    /** Maximum number of fields */
    maxFields?: number;
    /** Layout of the summary */
    layout?: string;
    /** Hook before loading the data */
    beforeload?: (ctn: Container, o: UIBusinessObject, p: SummaryParam) => void;
    /** Hook to override the rendering, `cbk` must be called to display the default summary */
    display?: (ctn: Container, mo: MetaObject, obj: UIBusinessObject, cbk: Callback) => void;
    /** Hook when the summary is displayed */
    onload?: (ctn: Container, mo: MetaObject, o: UIBusinessObject, p: SummaryParam) => void;
}
/**
 * Object list rendering: tables, minified summaries, templated rows,
 * group-by, trees, edit lists, export and selection dialogs.
 */
declare class List {
    /**
     * Opened groups and loaded pages of each group-by list:
     * list ID => group label => `{ open: boolean, pages: number }`
     */
    localGroupBy: KeyObject;
    private static _thId;
    private static _areaId;
    private align;
    /**
     * Format a value for display in a list cell.
     * @param f Field definition
     * @param v Raw value
     * @returns The formatted value
     */
    toUI(f: ObjectField, v: FieldValue): string | string[];
    /**
     * Select list rows, then update the checkboxes and notify the selection listeners.
     * @param ctn List container
     * @param o Business object
     * @param sel `"all"` | `"page"` | `"none"` | row ID(s)
     * @param p List parameters with the `onSelectRow` service
     */
    selectRow(ctn: Container, o: BusinessObject, sel: ListSelection, p: Pick<ListParam, "onSelectRow">): void;
    /**
     * List navigation with arrow keys: up/down between rows, left/right to collapse/expand a group-by.
     * @param x Focused list element
     * @param e Keydown event
     */
    keydown(x: JQuery, e: JQuery.Event): void;
    /**
     * Build the object list: header, actions, search, columns, rows and pagination.
     * @param ctn Parent container
     * @param o Business object with the loaded list
     * @param p List parameters
     * @returns the displayed list
     */
    display(ctn: Container, o: UIBusinessObject, p: ListParam): Promise<JQuery>;
    private linkPillboxOrder;
    /**
     * Bind the scroll events to keep the table header visible (sticky header).
     * @param ctn Main container
     * @param div List container with scrollable parents
     * @param thead Table header
     */
    stickyHeader(ctn: Container, div: Container, thead: JQuery): void;
    private trTotals;
    private showColAction;
    private rowGroupBy;
    /**
     * Display a single list row: table cells, summary, templated row, group-by section or tree node.
     * @param ctn Navigation container
     * @param elt Row element (`tr` or `div`)
     * @param o Business object with the current item
     * @param rowid Row ID
     * @param p List parameters
     */
    row(ctn: Container, elt: JQuery, o: UIBusinessObject, rowid: string, p: ListParam): Promise<void>;
    /**
     * Open a row, or the document, image or reference of the clicked element, with `p.onopen`.
     * @param ctn Navigation container
     * @param el Clicked element in the row
     * @param o Business object
     * @param p List parameters
     */
    open(ctn: JQuery, el: JQuery, o: UIBusinessObject, p: ListParam): void;
    /**
     * Display a row with a template.
     * @param d Row container
     * @param o Business object
     * @param rowid Row ID
     * @param index Row index
     * @param tpl Template to parse with mapped fields and actions
     * @param p List parameters (row actions)
     * @param bindChange Bind the change to save an editable cell
     * @param onRowOpen Handler to open the row
     * @param cbk Callback when displayed
     */
    rowTemplate(d: Container, o: UIBusinessObject, rowid: string, index: string, tpl: string, p: ListParam, bindChange?: (field: ObjectField) => void, onRowOpen?: null | ((div: JQuery) => void), cbk?: Callback): void;
    /**
     * Display the search bar with a template.
     * @param div List container
     * @param o Business object
     * @param tpl Search template
     * @param pos Template position
     */
    searchTemplate(div: Container, o: UIBusinessObject, tpl: string, pos: Position): void;
    /**
     * Render a read only value in a list cell (documents, images, links, enums, progress bars...).
     * @param o Business object
     * @param rowid Row ID
     * @param f Field definition
     * @param v Field value
     * @param item Optional enumeration item
     * @param p Optional list parameters (followLinks, renderValue...)
     * @param onopen Optional handler on click
     * @param index Optional index of edit list
     * @returns The rendered content
     */
    renderValue(o: UIBusinessObject, rowid: string, f: ObjectField, v: FieldValue, item?: EnumItem | null, p?: ListParam | null, onopen?: JQueryHandler | null, index?: string | null): string | JQuery;
    /**
     * Display an object summary: icon, title, fields, image and actions.
     * @param ctn Container
     * @param mo Meta-object data
     * @param o Optional business object
     * @param cbk Optional callback when displayed
     * @returns This instance
     */
    summary(ctn: Container, mo: MetaObject, o?: UIBusinessObject, cbk?: Callback): this;
    /**
     * Display the export options dialog (mode, format and format options).
     * @param obj Business object to export
     * @param opt Export options: enabled formats (`CSV`, `XLS`, `PDF`...), `list` mode, print templates...
     * @param cbk Callback with the selected options
     * @returns This instance
     */
    exportDialog(obj: BusinessObject, opt: KeyObject, cbk?: (param: KeyObject) => void): this;
    /**
     * Display a dialog to select one record, or several ones when `p.selectRows` is set.
     * @param obj Business object to select
     * @param p List parameters
     * @param cbk Callback with the selected row ID(s)
     * @returns The dialog
     */
    selectDialog(obj: BusinessObject, p: ListParam, cbk: (obj: BusinessObject, ids?: string | string[]) => void): JQuery<HTMLElement>;
    /**
     * Controls of a row related to a message field: the cell of the field when it is displayed,
     * otherwise the first displayed reference field of this foreign key
     * @param tr Row
     * @param o Object
     * @param name Field name of the message
     * @returns Controls (inputs, selects, textareas, Select2 comboboxes)
     */
    rowFieldControls(tr: JQuery, o: UIBusinessObject, name: string): JQuery;
    /**
     * Give the focus to the first editable control of a row
     * @param row Row
     * @returns true when a control has been focused
     */
    focusEditable(row: JQuery): boolean;
    /**
     * Accessible name of a row control, fallback when the text is not defined: "<verb> : <row ID field label> <row ID>"
     * @param o Object
     * @param rowid Row ID
     * @param key Text code with a [ROWID] placeholder
     * @param verb Fallback prefix
     */
    rowLabel(o: UIBusinessObject, rowid: string, key: string, verb: string): string;
    /**
     * Reorder the row, or the selected rows, by drag and drop.
     * @param ctn Table body or templated rows container
     * @param rowid Row ID
     * @param btn Grip button to drag
     * @param row Row to move (`tr`, or `div` of a templated row)
     * @param p List parameters
     */
    reorder(ctn: Container, rowid: string, btn: JQuery, row: JQuery, p: ListParam): void;
    /**
     * Display a custom context menu for list elements.
     * @param ctn List container
     * @param o Business object
     * @param rowId Row ID (`null` for multiple selected rows)
     * @param p List parameters
     * @param e Context menu event
     * @param element The right-clicked element
     * @returns The context menu
     */
    showContextMenu(ctn: Container, o: UIBusinessObject, rowId: string | null, p: ListParam, e: JQuery.ContextMenuEvent, element: JQuery): JQuery<HTMLElement> | undefined;
}

/**
 * Navigation action:
 * - `add`, `new`, `del`, `none`: actions of the main navigation "home > list > form > ..."
 * - `first`, `prev`, `next`, `last`: actions of the list/form navigation
 */
type NavAction = null | "add" | "new" | "del" | "none" | "first" | "prev" | "next" | "last";
/** Type of a navigation item */
type NavType = "form" | "list" | "view" | "extern" | "url" | "index" | "placemap" | "crosstab" | "agenda" | "updateAll" | "statusMetrics" | "tray" | "timesheet" | "gantt" | "dashboard" | "editTemplate" | "codeEditor" | "logViewer" | "other";
/** Navigation parameters */
interface NavParam {
    /** to 'add' or start a 'new' nav */
    nav?: NavAction;
    /** show or hide the navigation bar on top */
    showNav?: boolean;
}
/** Element to focus when the page is restored */
interface NavFocus {
    /** Element */
    element?: HTMLElement;
    /** Element ID */
    id: string;
    /** Element name */
    name: string;
    /** Element CSS classes */
    cls: string;
    /** Element data */
    data: KeyObject;
}
/** Item of the navigation history */
interface NavHistItem {
    /** Label */
    label: string;
    /** Object name or object */
    object?: string | BusinessObject;
    /** Row ID */
    rowId?: string;
}
/** Item of the navigation */
type NavItem = NavHistItem & {
    /** Item type */
    type: NavType;
    /** Field name */
    field?: string;
    /** Name (view, external object...) */
    name?: string;
    /** URL */
    url?: string;
    /** View name */
    view?: string;
    /** Home page */
    home?: boolean;
    /** Row index */
    index?: string;
    /** Fulltext search request */
    req?: string;
    /** Scroll position to restore */
    scrollTop?: number;
    /** Simple params without function, object... */
    init?: KeyObject;
    /** Container (not serializable) */
    container?: AnyContainer;
    /** Display parameters (not serializable) */
    params?: KeyObject;
    /** Element to focus (not serializable) */
    focus?: NavFocus;
    /** Callback (not serializable) */
    callback?: any;
};
/**
 * Navigation controller
 */
declare class UINavigator {
    private container?;
    private uniqueId?;
    private _nav;
    private _preventLeave;
    private _restoreFocus;
    private _hist;
    private _timer1?;
    /**
     * Constructor
     * @param ctn Optional container (popup, div...)
     * @param uniqueId Optional navigator Id
     */
    constructor(ctn?: Container, uniqueId?: string);
    /**
     * Navigation history
     */
    getItems(): NavItem[];
    /**
     * Navigation element
     */
    getItem(i: number): NavItem;
    /**
     * Root element
     */
    getRootItem(): NavItem;
    /**
     * Current element
     */
    getCurrentItem(): NavItem;
    /**
     * Navigation length
     */
    length(): number;
    /**
     * Navigator Id to isolate its object instances
     * @param id Optional value to set the unique id
     * @returns navigator Id
     */
    navId(id?: string): string | undefined;
    /**
     * Navigation. Returns the current item.
     * @param action Optional <code>'new'</code>: reinit, <code>'add'</code>: push, <code>'del'</code>: pop (with an item = pop only if it is the current one), <code>'none' or null</code>: update last label
     * @param item Item to push in navigation <code>\{ container, type, object, rowId, params, callback, url \}</code>
     * <ul>
     * <li>container: navigate location</li>
     * <li>label: item label</li>
     * <li>object: optional business object</li>
     * <li>rowId: optional object row ID to display the form</li>
     * <li>type: optional type form, list, index, placemap, agenda, crosstab...</li>
     * <li>view: optional view</li>
     * <li>home: homepage?</li>
     * <li>params: optional parameters related to list, form...</li>
     * <li>callback: optional callback related to list, form...</li>
     * <li>url: optional specific location to load in container</li>
     * <li>index: index search</li>
     * </ul>
     */
    nav(action?: NavAction, item?: NavItem): NavItem;
    /**
     * Returns back in navigation
     * @param n backward iterations (default 1, reload 0)
     * @param params Optional additive parameters (to display messages or to override old parameters)
     */
    navBack(n?: number, params?: {
        msg?: MessageAny[];
        msgRow?: MessagesPerRow | null;
        rows?: RowItem[] | null;
        values?: RowItem | null;
        edit?: ListEditMode | null;
        copy?: boolean;
        deleted?: boolean;
        redirect?: string;
    }): this;
    /**
     * Navigate to item. Returns to home if unknown.
     * @param n Navigation item or index, default is the last one
     * @param params Optional additive parameters (to display messages or to override old parameters)
     */
    navTo(n?: NavItem | null, params?: KeyObject): this;
    private itemUniqueName;
    /**
     * Reload current navigation and notify js-reload components
     */
    reload(): this;
    /**
     * Preserve nav informations (scroll and focus)
     * @param y save the scrollTop + focus of nav container
     */
    leave(ctn: Container, y: number): this;
    /**
     * Set whether focus should be restored on navback
     * @param b a selector, true to restore, false to skip
     */
    setRestoreFocus(b: boolean | string): this;
    /**
     * Restore nav informations (scroll and focus)
     */
    restore(ctn: Container): this;
    /**
     * Preserve vertical scroll of current nav
     * @param apply apply when true or save the scrollTop of nav container
     * @param n Item with scrollTop property
     * @param ctn Container
     */
    vscroll(apply: boolean | number, n: NavItem, ctn?: Container): this;
    /**
     * Preserve page focus.
     * If the previous focus is not found, try to focus the first visible '.js-focusable' in container
     * @param apply true to restore focus, false to keep activeElement infos
     */
    focus(apply: boolean | number, n: NavItem, ctn: Container): this;
    /**
     * Extract only simple types parameters to be serializable in JSON and to avoid cyclic object references
     * @param params Parameters
     * @returns Simplified parameters
     */
    static parameters(params?: KeyObject): KeyObject | undefined;
    /**
     * Navigation as serializable JSON array
     */
    toJSON(): NavItem[];
    /**
     * Navigation item as serializable JSON object
     */
    itemToJSON(item: NavItem): NavItem;
    /**
     * Simple (JSON-serializable) initial params of a nav item
     */
    private itemInit;
    /**
     * Rebuild the navigation from serialized nav
     */
    fromJSON(list: NavItem[], ctn: JQuery): void;
    /**
     * Session history
     */
    getHistory(): NavHistItem[];
    /**
     * Load sysparam HISTORY
     */
    loadHistory(): this;
    /**
     * Clear sysparam HISTORY
     */
    clearHistory(cbk?: Callback): this;
    /**
     * JSON representation
     */
    jsonHistory(): {
        /** Object name */
        object: string | undefined;
        /** Row ID */
        rowId: string | undefined;
        /** History label */
        label: string;
    }[];
    /**
     * Save sysparam HISTORY
     */
    saveHistory(timer?: boolean): Promise<string>;
    /**
     * Add a history of opened object in main navigation
     */
    addHistory(item: NavHistItem): this;
    /**
     * Remove an item from session history and persist the change
     * @param item History item to remove (matched by object name and rowId)
     */
    removeHistory(item: Pick<NavHistItem, "object" | "rowId">): this;
    /**
     * Find the index of an item in session history
     * @param item History item to look up (matched by object name and rowId)
     * @returns Zero-based index, or -1 if not found
     */
    findHistory(item: Pick<NavHistItem, "object" | "rowId">): number;
    /**
     * Push a new item onto the navigation stack, update browser history and tab options
     * @param item Navigation item to push
     */
    private navPush;
    /**
     * Handle the browser popstate event to restore navigation state
     * @param event Browser PopStateEvent carrying the previously pushed state
     */
    private navPop;
}

/** Actions of a form */
interface FormActions {
    /** Generic actions have been added */
    generic?: boolean;
    /** Visible actions of the form */
    form?: Action[] | null;
    /** Actions in the form "plus" dropdown */
    formPlus?: Action[] | null;
}
/** Views display mode: `true`/`false`, `tabs`, `vertical` tabs or `split` panels */
type ShowViewsMode = boolean | "tabs" | "vertical" | "split";
/** Parameters of a form rendering (see `$ui.displayForm`) */
type FormParam = NavParam & {
    /** Form title */
    title?: string;
    /** Maximum length of the title (default 120) */
    titleMax?: number;
    /** Form element */
    form?: JQuery;
    /** Form help */
    help?: AnyContent;
    /** Form actions: `undefined` = generated from metadata, `null` = no action */
    actions?: FormActions | null;
    /** Visible actions of the form */
    formActions?: Action[] | null;
    /** Actions in the "plus" dropdown */
    plusActions?: Action[] | null;
    /** State model transitions */
    transitions?: Transition[] | null;
    /** Groups of actions */
    actionGroups?: ActionGroup[];
    /** Form template name */
    template?: string;
    /** Views display mode */
    showViews?: ShowViewsMode;
    /** Current tab name */
    viewTab?: string;
    /** Show the views options */
    showOptions?: boolean;
    /** Show the extended fields */
    isExtended?: boolean;
    /** @deprecated no more effect, form header is static */
    floating?: boolean;
    /** Collapsed areas/views */
    collapsed?: KeyObject;
    /** Default number of columns in areas */
    areaColumns?: number;
    /** Read only form */
    readonly?: boolean;
    /** Apply the form constraints */
    constraints?: boolean;
    /** With this instance name */
    inst?: string;
    /** In a copy context */
    copy?: boolean;
    /** In a workflow */
    workflow?: boolean;
    /** Messages to display */
    msg?: MessageAny[];
    /** Forced values */
    values?: RowItem | null;
    /** Add href on links */
    followLinks?: boolean;
    /** Create references on links */
    createLinks?: boolean;
    /** Reference buttons */
    refButtons?: KeyObject;
    /** In a search form */
    search?: boolean;
    /** Fixed filters of the search form */
    fixedFilters?: KeyObject;
    /** Parent object of an inlined form */
    parent?: ParentObject;
    /** Link of an inlined form */
    link?: Link;
    /** Inlined object (0,1 or 1,1 link) */
    inline?: InlineObject;
    /** Save button */
    saveBtn?: JQuery;
    /** Activate the save buttons only when the form has changed */
    activateSaveOnChange?: boolean;
    /** Auto-save the form on custom action (default true) */
    actionAutoSave?: boolean;
    /** Ignore the `canSaveClose` rule */
    ignoreCanSaveClose?: true;
    /** Ignore the `canClose` rule */
    ignoreCanClose?: true;
    /** Ignore the `canSave` rule */
    ignoreCanSave?: true;
    /** Ignore the `canSaveNew` rule */
    ignoreCanSaveNew?: true;
    /** Ignore the `canSaveCopy` rule */
    ignoreCanSaveCopy?: true;
    /** Hook before loading the data */
    beforeload?: (ctn: Container, o: UIBusinessObject, p: FormParam) => void;
    /** Hook after loading the data, before display */
    preload?: (ctn: Container, o: UIBusinessObject, p: FormParam) => void;
    /** Hook when the form is displayed */
    onload?: (ctn: Container, o: UIBusinessObject, p: FormParam) => void;
    /** Hook to override the rendering, `done` must be called to display the default form */
    display?: (ctn: Container, o: UIBusinessObject, p: FormParam, done: Callback) => void;
    /** Hook when the form is removed */
    onunload?: (ctn: Container, o: UIBusinessObject, p: FormParam) => void;
    /** Hook after reading the form, `cbk` must be called to continue */
    onread?: (ctn: Container, o: UIBusinessObject, p: FormParam, cbk: Callback) => void;
    /** Hook before saving the form */
    beforesave?: (ctn: Container, o: UIBusinessObject, index?: string, cbk?: Callback) => void;
    /** Hook after saving the form */
    aftersave?: (ctn: Container, o: UIBusinessObject, index?: string, cbk?: Callback) => void;
    /** Save button handler (`null` = no button) */
    onsave?: null | ((ctn: Container, o: UIBusinessObject, cbk?: Callback) => void);
    /** Save & Close button handler (`null` = no button) */
    onsaveclose?: null | ((ctn: Container, o: UIBusinessObject, cbk?: Callback) => void);
    /** Save & New button handler (`null` = no button) */
    onsavenew?: null | ((ctn: Container, o: UIBusinessObject, cbk?: Callback) => void);
    /** Save & Copy button handler (`null` = no button) */
    onsavecopy?: null | ((ctn: Container, o: UIBusinessObject, cbk?: Callback) => void);
    /** Long help handler */
    onhelp?: null | ((o: UIBusinessObject) => void);
    /** Close button handler (`null` = no button) */
    onclose?: null | ((ctn: Container, o: UIBusinessObject) => void);
    /** Hook when the record is not found (overrides the default message and list redirection) */
    noRowFound?: (ctn: Container, o: UIBusinessObject, id: string) => void;
    /** Social share options */
    socialShare?: SocialShareConfig & {
        /** Social share is enabled */
        enabled?: boolean;
    };
    /** Display the social posts */
    onsocial?: (ctn: Container, p: {
        object: string;
        rowId: string;
        embedded?: boolean;
        activity?: boolean;
    }) => void;
    /** Row index (multi-creation) */
    index?: string;
    /** Selected tab per tabs area */
    formTab?: KeyObject;
    /** Parsing the template */
    parse?: boolean;
    /** Tab counter */
    tabNum?: number;
    /** Has extended fields */
    hasMore?: boolean;
    /** Reference buttons */
    refb?: KeyObject;
    /** Count of visible views */
    visView?: number;
    /** Promises to wait before the end of rendering (see `$ui.addPromise`) */
    promises?: Promise<unknown>[];
};
/** Task of an action tracker */
interface TrackerTask {
    /** Task name */
    name?: string;
    /** Optional info message */
    message?: string;
    /** Optional error message */
    error?: string;
    /** Optional URL to log file */
    file?: string;
    /** Elapsed time on task */
    time?: string;
}
/** Status of an action tracker */
interface TrackerData {
    /** Tracker name */
    name: string;
    /** Optional title */
    title?: string;
    /** Start message */
    start?: string;
    /** End message */
    end?: string;
    /** Elapsed time */
    time?: string;
    /** List of tasks */
    tasks?: TrackerTask[];
    /** Depth of the tasks */
    depth?: number;
    /** Progression % */
    percent?: number;
    /** Terminated */
    state?: "T";
    /** Can be minified */
    minifiable?: boolean;
    /** Minified in a toast */
    minified?: boolean;
    /** Can be closed */
    closeable?: boolean;
    /** Can be stopped */
    stoppable?: boolean;
}
/** Callback with the tracker status */
type TrackerCallback = (data: TrackerData) => void;
/** Parameters of an action tracker dialog */
interface TrackerParam {
    /** Dialog title */
    title?: string;
    /** Optional related object */
    object?: BusinessObject;
    /** Optional action */
    action?: Action;
    /** Null = auto-start */
    start?: ((cbk: TrackerCallback) => void) | null;
    /** Service to get the back-end tracking */
    progress?: (cbk: TrackerCallback) => void;
    /** Service to request the action stop */
    stop?: (cbk: TrackerCallback) => void;
    /** Service to toggle/minify the popup */
    minify?: (cbk: TrackerCallback) => void;
    /** Callback when finished */
    done?: (log: JQuery, task: (t: TrackerTask) => void, pbar: JQuery) => void;
    /** Actions bar (default Close button) */
    bar?: JQuery;
}
/**
 * Object form rendering
 */
declare class Form {
    /**
     * Build the object form based on the UI template
     * @param ctn parent container
     * @param o object
     * @param p optional parameters
     * @param cbk optional callback with the displayed form
     * @returns the displayed form
     */
    display(ctn: Container, o: UIBusinessObject, p: FormParam, cbk?: (div?: JQuery) => void): JQuery<HTMLElement>;
    /**
     * Display a state-model navbar
     * @param ctn container
     * @param data navbar data style BREAD/METRO/ARROW + list of states
     */
    stateNavbar(ctn: Container, data: KeyObject): void;
    /**
     * Bind scroll to set the floating actions vertical position
     * @deprecated for accessibility and better responsiveness, the form/list header and footer are now static via CSS
     */
    floatingActions(_ctn: Container, _div: Container, _bar: JQuery, _form?: JQuery, _left?: boolean): void;
    /** Observe the head width to rebuild the actions bar to fit-content */
    observeHead(actions: JQuery): void;
    /**
     * Display the object usages
     * @param ctn container to populate
     * @param list list of users { login, firstname, lastname, picture, usageId }
     * @param obj optional object name when ctn is unknown (keepAlive trigger)
     * @param id optional row Id (keepAlive trigger)
     * @param action optional action use|close|delete|logout
     */
    objectUsage(ctn: Container | null, list?: UsageUser[], obj?: string, id?: string, action?: "use" | "close" | "delete" | "logout"): void;
    /**
     * Object informations
     */
    about(o: BusinessObject, id?: string): void;
    /**
     * Confirm action with dialog
     * @param act Action
     * @param o Object
     * @param run Optional confirm callback with actions 'values' and 'cbk(msg)' to send errors
     * @returns Promise(ok, refuse)
     */
    confirm(act: Action, o: BusinessObject, run?: (params?: ConfirmRun) => void): Promise<void | KeyObject>;
    /**
     * Open a dialog to track one asynchronous action
     * @param tk Tracker infos name + state + tasks
     * @param options
     * @param options.title optional dialog title (default tracker title or name)
     * @param options.start optional function(cbk) to start the tracking (default auto-start)
     * @param options.progress function(cbk) service to get back-end tracking
     * @param options.stop Optional service to request action stop
     * @param options.minify Optional service to toggle/minify popup
     * @param options.done optional function(log,task,pbar) when finished
     * @param options.bar optional actions bar (default = Close button)
     * function
     */
    tracker(tk: TrackerData, options: TrackerParam): JQuery<HTMLElement>;
    /**
     * Build a form based on global form.template
     * @param params options
     * @param params.icon icon name
     * @param params.title form title
     * @param params.content form content
     * @param params.actions form actions
     */
    build(params: {
        icon?: string;
        title: string;
        content?: AnyContent;
        actions?: AnyContent;
    }): JQuery<HTMLElement>;
    /**
     * Call to action in case of ERR_UPDATED
     * @param force true to force the timestamp to the DB value and re-save, false to discard changes = reload form
     */
    forceChange(ctn: Container, obj: BusinessObject, id: string, force: boolean): void;
    private fieldSearchCompletion;
}

/** Predefined searches of a search form */
interface SearchPredefParam {
    /** Predefined searches */
    list: PredefSearch[];
    /** 1 = edit */
    usage?: number;
    /** Service to create, update or delete a predefined search */
    service: (action: string, def: PredefSearch, cbk: (ps: PredefSearch) => void) => void;
}
/** Parameters of a search form (see `$ui.displaySearch`) */
interface SearchParam {
    /** Position of the search form */
    position?: "docked" | "column" | "popup";
    /** Slide the docked form from the right or left */
    slide?: "right" | "left" | null;
    /** Title */
    title?: string;
    /** Help */
    help?: string;
    /** Messages */
    msg?: MessageAny[];
    /** Show the fulltext search input */
    showIndex?: boolean;
    /** Show the sort/group-by editor */
    showSorting?: boolean;
    /** Show the extended fields */
    isExtended?: boolean;
    /** Edit the predefined searches */
    editPredef?: boolean;
    /** Object instance name */
    inst?: string;
    /** Searchable fields */
    fields?: ObjectField[];
    /** Fixed filters (read only) */
    fixedFilters?: KeyObject;
    /** Current filters */
    filters?: KeyObject;
    /** Group-by mode */
    groupBy?: boolean;
    /** Search by columns is visible */
    toggle?: boolean;
    /** Docked search form */
    docked?: boolean;
    /** Reference buttons of the search by columns */
    refButtonsBy?: KeyObject;
    /** Reference buttons */
    refButtons?: KeyObject;
    /** Predefined searches (`false` = none) */
    predef?: false | SearchPredefParam;
    /** Hook before loading */
    beforeload?: (ctn: Container, o: UIBusinessObject, p: SearchParam) => void;
    /** Hook when displayed */
    onload?: (ctn: Container, o: UIBusinessObject, p: SearchParam) => void;
    /** Hook to override the rendering, `done` must be called to display the default form */
    display?: (ctn: Container, o: UIBusinessObject, p: SearchParam, done: Callback) => void;
    /** Hook when removed */
    onunload?: (ctn: Container, o: UIBusinessObject, p: SearchParam) => void;
}
/**
 * Object search rendering
 */
declare class Search {
    /**
     * Search field
     * @param ctn container
     * @param o business object
     * @param f object field
     * @param filter current filter
     * @param fixedFilter fixed filter
     * @param search handler to launch the search
     * @returns formGroupSearch with required or semireq class
     */
    field(ctn: Container, o: BusinessObject, f: ObjectField, filter: string, fixedFilter: string, search?: Callback): JQuery<HTMLElement>;
    /**
     * Build the search form
     * @param ctn parent container
     * @param o object
     * @param p optional parameters
     * @param cbk optional callback
     */
    display(ctn: Container, o: UIBusinessObject, p: SearchParam, cbk?: Callback): void;
    /**
     * Remove all UI filters
     * @param form container
     * @param o object
     * @param fields optional fields array to delete foreignUserKey
     */
    reset(form: Container, o: BusinessObject, fields?: ObjectField[]): void;
    /**
     * Predefined search selector
     * @param o object
     * @param p search parameters with fields and predef services
     * @param filters Current form filters
     * @param update callback to update the form with selected search
     * @param close callback to return to form
     */
    predef(o: BusinessObject, p: SearchParam, filters: KeyObject, update?: Callback, close?: Callback): JQuery<HTMLElement>;
    /** Counter of the sort fields (unique DOM IDs) */
    static selectIndex: number;
    /**
     * Sort/Group by columns editor
     * @param o object
     * @param p search parameters
     * @param apply callback to process the sort on list
     * @param close callback to return to form
     */
    sortby(o: BusinessObject, p: SearchParam, apply?: Callback, close?: Callback): JQuery<HTMLElement> | undefined;
}

/**
 * Extends Simplicite.Ajax.BusinessObject with front hooks.
 */
declare class UIBusinessObject extends BusinessObject {
    /** V6 legacy shorthand to $ui */
    ui?: UIEngine;
    /**
     * Front constraints implementation
     */
    applyConstraints?: ConstraintFunction;
    /**
     * Bind hook functions in locals with inherited methods
     */
    bindHooks(): void;
    /**
     * Call a hook implementation
     * @param method hook
     * @param params array of parameters to apply
     */
    hook(method: any, params: any): any;
    /**
     * Front hook when object is instantiated.
     * Useful to override locals (cloned from Simplicite.UI.Globals) properties before usage.
     * @param _locals UI locals properties (shorthand to this.locals.ui)
     */
    onLoad(_locals?: typeof Globals): void;
    /**
     * Front hook before loading form data
     * @param _ctn Form container
     * @param _obj Object (same as this)
     * @param _p Form parameters
     */
    beforeLoadForm(_ctn: Container, _obj: UIBusinessObject, _p: FormParam): void;
    /**
     * Front hook when record is not found (default NO_ROW_FOUND alert + nav fix + list redirection)
     * @param ctn Form container
     * @param obj Object (same as this)
     * @param rowId Object row ID
     */
    noRowFound(ctn: Container, obj: UIBusinessObject, rowId: string): void;
    /**
     * Front hook before rendering form
     * @param _ctn Form container
     * @param _obj Object (same as this)
     * @param _p Form parameters
     */
    preLoadForm(_ctn: Container, _obj: UIBusinessObject, _p: FormParam): void;
    /**
     * Front hook to display the form
     * @param ctn Form container
     * @param obj Object (same as this)
     * @param p Form parameters
     * @param cbk callback when rendered (with the displayed form)
     */
    displayForm(ctn: Container, obj: UIBusinessObject, p: FormParam, cbk: (div?: JQuery) => void): void;
    /**
     * Front hook when object form is loaded
     * @param _ctn Form container
     * @param _obj Object (same as this)
     * @param _p Form parameters
     */
    onLoadForm(_ctn: Container, _obj: UIBusinessObject, _p: FormParam): void;
    /**
     * Front hook when object form is unloaded
     * @param _ctn Form container
     * @param _obj Object (same as this)
     * @param _p Form parameters
     */
    onUnloadForm(_ctn: Container, _obj: UIBusinessObject, _p: FormParam): void;
    /**
     * Front hook when object form is read
     * @param _ctn Form container
     * @param _obj Object (same as this)
     * @param _p Form parameters
     * @param cbk callback() must be called to resolve promise
     */
    onReadForm(_ctn: Container, _obj: UIBusinessObject, _p: FormParam, cbk?: () => void): void;
    /**
     * Front hook before calling Ajax object.save()
     * @param _ctn Form container
     * @param _obj Object (same as this)
     * @param _index record index (edit list)
     * @param cbk callback(true|false) (must return 'true' to continue or 'false' to stop/reject promise)
     */
    beforeSave(_ctn: Container, _obj: UIBusinessObject, _index?: string, cbk?: (x: boolean) => void): void;
    /**
     * Front hook after calling Ajax object.save()
     * @param _ctn Form container
     * @param _obj Object (same as this)
     * @param _index record index (edit list)
     * @param cbk callback(true|false) (must return 'true' to continue or 'false' to stop/reject promise)
     */
    afterSave(_ctn: Container, _obj: UIBusinessObject, _index?: string, cbk?: (x: boolean) => void): void;
    /**
     * Front hook before loading list data
     * @param _ctn List container
     * @param _obj Object (same as this)
     * @param _p List parameters
     */
    beforeLoadList(_ctn: Container, _obj: UIBusinessObject, _p: ListParam): void;
    /**
     * Front hook before rendering list
     * @param _ctn List container
     * @param _obj Object (same as this)
     * @param _p List parameters
     */
    preLoadList(_ctn: Container, _obj: UIBusinessObject, _p: ListParam): void;
    /**
     * Front hook to display the list
     * @param ctn List container
     * @param obj Object (same as this)
     * @param p List parameters
     * @param cbk callback when rendered (with the displayed list)
     */
    displayList(ctn: Container, obj: UIBusinessObject, p: ListParam, cbk: (div?: JQuery) => void): void;
    /**
     * Front hook to display one list record
     * @param ctn List container
     * @param row Row container (tr or div)
     * @param obj Object (same as this)
     * @param id Row ID
     * @param p List parameters
     * @param cbk callback when rendered
     */
    displayListRow(ctn: Container, row: Container, obj: UIBusinessObject, id: string, p: ListParam, cbk: Callback): void;
    /**
     * Front hook when a list row is displayed
     * @param _ctn List container
     * @param _obj Object (same as this)
     * @param _id Row ID
     * @param _item Row item
     * @param _row Row container (tr or div)
     */
    onLoadListRow(_ctn: Container, _obj: UIBusinessObject, _id: string, _item: RowData, _row: Container): void;
    /**
     * Front hook when a list row is unloaded
     * @param _ctn List container
     * @param _obj Object (same as this)
     * @param _id Row ID
     * @param _item Row item
     * @param _row Row container (tr or div)
     */
    onUnloadListRow(_ctn: Container, _obj: UIBusinessObject, _id: string, _item: RowData, _row: Container): void;
    /**
     * Front hook when object list is loaded
     * @param _ctn List container
     * @param _obj Object (same as this)
     * @param _p List parameters
     */
    onLoadList(_ctn: Container, _obj: UIBusinessObject, _p: ListParam): void;
    /**
     * Front hook when object list is unloaded
     * @param _ctn List container
     * @param _obj Object (same as this)
     * @param _p List parameters
     */
    onUnloadList(_ctn: Container, _obj: UIBusinessObject, _p: ListParam): void;
    /**
     * Front hook before loading search form
     * @param _ctn Search container
     * @param _obj Object (same as this)
     * @param _p Search parameters
     */
    beforeLoadSearch(_ctn: Container, _obj: UIBusinessObject, _p: ListParam): void;
    /**
     * Front hook to display the search form
     * @param ctn Search container
     * @param obj Object (same as this)
     * @param p Search parameters
     * @param cbk callback when rendered
     */
    displaySearch(ctn: Container, obj: UIBusinessObject, p: SearchParam, cbk: Callback): void;
    /**
     * Front hook when object search is loaded
     * @param _ctn Search container
     * @param _obj Object (same as this)
     * @param _p Search parameters
     */
    onLoadSearch(_ctn: Container, _obj: UIBusinessObject, _p: SearchParam): void;
    /**
     * Front hook when object search is unloaded
     * @param _ctn Search container
     * @param _obj Object (same as this)
     * @param _p Search parameters
     */
    onUnloadSearch(_ctn: Container, _obj: UIBusinessObject, _p: SearchParam): void;
    /**
     * Front hook before loading summary
     * @param _ctn Form container
     * @param _obj Object (same as this)
     * @param _p Parameters
     */
    beforeLoadSummary(_ctn: Container, _obj: UIBusinessObject, _p: SummaryParam): void;
    /**
     * Front hook to display the object summary
     * @param ctn Summary container
     * @param mo Meta object
     * @param obj Object (same as this)
     * @param cbk callback when rendered
     */
    displaySummary(ctn: Container, mo: MetaObject, obj: UIBusinessObject, cbk: Callback): void;
    /**
     * Front hook when object summary is loaded
     * @param _ctn Summary container
     * @param _mo Meta object
     * @param _obj Object (same as this)
     * @param _p Parameters
     */
    onLoadSummary(_ctn: Container, _mo: MetaObject, _obj: UIBusinessObject, _p: SummaryParam): void;
    /**
     * Front hook before loading calendar
     * @param _ctn container
     * @param _obj Object (same as this)
     * @param _agd Agenda definition
     * @param _p parameters
     */
    beforeLoadAgenda(_ctn: Container, _obj: UIBusinessObject, _agd: object, _p: KeyObject): void;
    /**
     * Front hook when calendar is loaded
     * @param _ctn container
     * @param _obj Object (same as this)
     * @param _agd Agenda definition
     * @param _p parameters
     */
    onLoadAgenda(_ctn: Container, _obj: UIBusinessObject, _agd: object, _p: KeyObject): void;
    /**
     * Front hook when calendar is unloaded
     * @param _ctn container
     * @param _obj Object (same as this)
     * @param _agd Agenda definition
     * @param _p parameters
     */
    onUnloadAgenda(_ctn: Container, _obj: UIBusinessObject, _agd: object, _p: KeyObject): void;
    /**
     * Front hook before loading timesheet
     * @param _ctn container
     * @param _obj Object (same as this)
     * @param _p parameters
     */
    beforeLoadTimesheet(_ctn: Container, _obj: UIBusinessObject, _p: KeyObject): void;
    /**
     * Front hook when timesheet is loaded
     * @param _ctn container
     * @param _obj Object (same as this)
     * @param _ts Timesheet definition
     */
    onLoadTimesheet(_ctn: Container, _obj: UIBusinessObject, _ts: KeyObject): void;
    /**
     * Front hook when timesheet is unloaded
     * @param _ctn container
     * @param _obj Object (same as this)
     * @param _ts Timesheet definition
     */
    onUnloadTimesheet(_ctn: Container, _obj: UIBusinessObject, _ts: KeyObject): void;
}

/** Type of preferences */
type PrefType = "list" | "search" | "action";
/** Preferences of an object */
interface PrefItem {
    /** Object name */
    name: string;
    /** Translated label */
    label?: string;
    /** User key */
    userkey?: string;
    /** Visible */
    visible?: boolean;
    /** Fields preferences */
    fields?: {
        /** Field name */
        name: string;
        /** Field is visible */
        visible: boolean;
        /** Field is required */
        required?: boolean;
        /** Field is part of the user key */
        userkey?: boolean;
        /** Field label */
        label?: string;
    }[];
}
/** Parameters of the preferences dialog */
interface PrefsParam {
    /** List preferences */
    list?: PrefItem[];
    /** Search preferences */
    search?: PrefItem[];
    /** Actions preferences */
    actions?: PrefItem[];
    /** Show the action labels */
    actionLabel?: boolean;
    /** Restore the default preferences */
    restore?: Callback;
    /** Save the preferences */
    save?: (p: PrefsParam, cbk: Callback) => void;
    /** Reload after save */
    reload?: Callback;
    /** Close the dialog */
    close?: Callback;
}
/** Bookmarks of an object */
interface Bookmark {
    /** Object name */
    o: string;
    /** Icon */
    i?: string;
    /** Bookmarked records */
    b: {
        /** Row_id */
        id: string;
        /** Text = user key */
        t: string;
    }[];
}
/** User bookmarks */
interface Bookmarks {
    /** Where to show the bookmarks (`top`, `bottom`...) or `false` */
    show: string | boolean;
    /** Bookmarks per object */
    list?: Bookmark[];
}
/** Parameters of the bookmarks display */
interface BookmarkParam {
    /** Where to show the bookmarks or `false` */
    show?: string | false;
}
/** Parameters of the user filters display */
interface UserFilterParam {
    /** Filters bar only (else dialog or form) */
    bar: boolean;
}
/**
 * Object preferences rendering
 */
declare class Prefs {
    /**
     * Build the object preferences dialog
     * @param o object
     * @param p parameters
     * @param p.list array of fields
     * @param p.search array of fields
     * @param p.actions array of actions
     * @param p.actionLabel show/hide the action labels ?
     * @param p.restore restore handler
     * @param p.save save handler
     * @param p.reload reload handler
     * @param p.close close handler
     */
    display(o: BusinessObject, p: PrefsParam): this;
    /**
     * Title of user filters
     * @param ctn optional container (#userfilters if null)
     * @param obj UserFilters object
     */
    userFiltersTitle(ctn: AnyContainer, obj: BusinessObject): void;
    /**
     * Badge of a user filter
     * @param ctn badges container
     * @param data <code>\{ dmin, dmax \}</code> or <code>\{ field, value or values \}</code>
     * @param remove optional handler to remove filter (if not required)
     * @param click optional handler on click
     */
    userFiltersBadge(ctn: Container, data: KeyObject, remove?: JQueryHandler, click?: JQueryHandler): JQuery<HTMLElement> | null;
    /**
     * Display the dialog of user global filters
     * @param ctn optional container (dialog if null)
     * @param obj UserFilters object
     * @param id UserFilters id
     * @param p options <code>\{ bar \}</code>
     */
    userFilters(ctn: AnyContainer | null, obj: UIBusinessObject, id: string, p?: UserFilterParam): this | undefined;
    /**
     * Display the user's bookmarks
     * @param ctn optional container (default popup)
     * @param bm bookmarks
     * @param p options show=top|bottom
     */
    bookmarks(ctn: AnyContainer, bm: Bookmarks, p: BookmarkParam): void;
}

/**
 * `Simplicite.UI.View` namespace: viewers, renderers and components.
 * Other bundles can add their classes by module augmentation (see the Maker).
 */
interface UIViewNamespace extends Readonly<typeof ViewClasses> {
}
/**
 * Extensions of the `Simplicite.Ajax` namespace (the Session class with the legacy constants).
 * Other bundles can add their classes by module augmentation (see the Maker).
 */
interface AjaxNamespace {
}

/** Job executed in a Promise: calls `resolve` with its result or `reject` on error */
type JobFunction = (resolve: (value?: unknown) => void, reject?: (reason?: unknown) => void) => void;
/** Queued job with its Promise handlers */
interface Job {
    /** Promise of the job result */
    promise: Promise<KeyObject | void>;
    /** Resolve the job with its result */
    resolve: (result: KeyObject | void) => void;
    /** Reject the job */
    reject: (reason?: unknown) => void;
}
/**
 * Queue to synchronize executions
 */
declare class SyncQueue {
    private queue?;
    private working;
    /** Constructor */
    constructor();
    /**
     * Await ordered functions
     * @param list Array of function(resolve, reject) to execute asynchronously
     * @param stopOnError Stop on first error (default true)?
     * @returns Promise with ordered result array of \{ index, status:'fulfilled' or 'rejected', value or reason \}
     */
    static all(list: JobFunction[], stopOnError?: boolean): Promise<KeyObject>;
    /**
     * Ordered functions
     * @param list Array of function(resolve, reject) to execute asynchronously within Promises
     * @returns Promise with result array of \{ index, status:'fulfilled' or 'rejected', value or reason \}
     */
    static allSettled(list: JobFunction[]): Promise<KeyObject>;
    /**
     * Enqueue a Promise and starts dequeue
     * @param promise Promise
     * @returns Promise
     */
    enqueue(promise: Promise<KeyObject | void>): Promise<KeyObject | void>;
    /**
     * Ask to stop next queued jobs
     */
    stop(): void;
    /**
     * Dequeue while not empty
     */
    dequeue(): void;
}

/** Activity of a business process */
interface ActivityMetadata {
    /** Activity row ID */
    id?: string;
    /** Activity name */
    name: string;
    /** Step code */
    step: string;
    /** Activity type */
    type: string;
    /** Translated label */
    label: string;
    /** Help */
    help?: AnyContent;
    /** Tip */
    tip?: AnyContent;
    /** HTML template */
    template?: string;
    /** Write access */
    write?: boolean;
}
/** Activity status: `R` read, `W` write */
type ActivityStatus = "R" | "W";
/** Activity file: current state of an activity in a running process */
interface ActivityFile {
    /** Process ID */
    pid: string;
    /** Activity file ID */
    aid: string;
    /** Step code */
    step: string;
    /** Activity metadata */
    metadata?: ActivityMetadata;
    /** Read only */
    readonly?: boolean;
    /** Status */
    status: ActivityStatus;
    /** Owner row ID */
    ownerId: string;
    /** HTML template */
    template?: string;
    /** URL */
    url?: string;
    /** Content */
    content?: AnyContent;
    /** Road info */
    info?: string;
    /** Data by group > field > values */
    data?: {
        [dataGroupName: string]: {
            [fielName: string]: {
                /** Field definition */
                field: ObjectField;
                /** One value or many in case of step loop */
                values: string[];
            };
        };
    };
    /** Validate, back, cancel, abort... */
    actions: ProcessAction[];
    /** Business object of the activity */
    object?: BusinessObject & {
        /** Object metadata */
        meta?: ObjectMetadata;
        /** Object instance name */
        inst?: string;
    };
    /** Process is terminated */
    terminated?: boolean;
    /** Where to go at the end of the process */
    forward?: {
        /** Object name to open */
        object?: string;
        /** Row ID to open */
        row_id?: string;
        /** URL to open */
        url?: string;
    };
}
/** Road rendering: `V`ertical or `H`orizontal, `C`omplete or `M`inimal */
type RoadRender = "VC" | "VM" | "HC" | "HM";
/** Business process metadata */
interface ProcessMetadata {
    /** Process row ID */
    id: string;
    /** Process name */
    name: string;
    /** Translated label */
    label: string;
    /** Activities by step */
    steps: {
        [step: string]: ActivityMetadata;
    };
    /** Resources */
    resources?: KeyObject[];
    /** Screenflow process */
    screenflow?: boolean;
    /** Road rendering (default `VC`) */
    roadRender?: RoadRender;
    /** Static road: shows all the ordered steps (else the visited steps) */
    roadStatic?: boolean;
    /** Ordered step codes */
    orderedSteps?: string[];
}
/** Action of an activity */
interface ProcessAction {
    /** Action ID */
    id: string;
    /** Action type */
    action: ProcessActionType;
    /** Translated label */
    label: string;
    /** Primary button */
    primary?: boolean;
}
/** Process actions (`start`, `abort`), activity actions and select activity actions */
type ProcessActionType = "start" | "abort" | "lock" | "unlock" | "validate" | "cancel" | "back" | "open" | "read" | "close" | "list" | "gotopage" | "searchpage";
/** Parameters of a process activity */
interface ProcessParam {
    /** Step code */
    step?: string;
    /** Activity file ID */
    aid?: string;
    /** Object name */
    object?: string;
    /** Row ID */
    rowId?: string;
    /** Action */
    action?: ProcessActionType;
    /** Show the road */
    showRoad?: boolean;
    /** Messages */
    msg?: MessageAny[];
    /** Road rendering */
    roadRender?: RoadRender;
    /** Static road */
    roadStatic?: boolean;
    /** In a workflow (forced by the activity display) */
    workflow?: boolean;
    /** Before loading the activity */
    beforeload?: (ctn: Container, wkf: BusinessProcess, act?: ActivityFile) => void;
    /** When the activity is loaded */
    onload?: (ctn: Container, wkf: BusinessProcess, act?: ActivityFile) => void;
    /** When the activity is unloaded */
    onunload?: (ctn: Container, wkf: BusinessProcess, act?: ActivityFile) => void;
}
/**
 * Simplicit&eacute; business process.
 * <br/>Getting a new business process should use the <code>Simplicite.Ajax.getBusinessProcess()</code> function instead of this constructor
 */
declare class BusinessProcess {
    private _app;
    /** Process metadata */
    metadata: ProcessMetadata;
    /** Process ID */
    pid?: string | null;
    /** Local data */
    locals: KeyObject;
    /** Current activity file */
    activity?: ActivityFile;
    /** Road of the visited activities */
    processRoad?: ActivityFile[];
    /** History */
    historic?: object;
    /** UI engine */
    ui?: UIEngine;
    /**
     * Constructor
     * @param app Application Simplicite.Ajax instance
     * @param name Business process name
     */
    constructor(app: Session, name: string);
    /**
     * Loads meta data.
     */
    getMetaData(): Promise<ProcessMetadata>;
    /**
     * Are metadata loaded ?
     */
    isLoaded(): string;
    /**
     * Gets name from meta data.
     */
    getName(): string;
    /**
     * Gets label name from meta data.
     */
    getLabel(): string;
    /**
     * Local parameter in instance
     * @param name Parameter key name
     * @param value Optional value (to get or set)
     */
    localParameter(name: string, value?: unknown): unknown;
    /**
     * Initialize the local parameters hasChanged and hasChangedFields
     */
    initChangedFields(): void;
    /**
     * Add a field when has changed
     * @param f field or name
     * @param id optional id (edit list)
     */
    addChangedField(f: string | ObjectField, id?: string): void;
    /**
     * Remove a field when has not changed
     * @param f field or name
     * @param id optional id (edit list)
     */
    removeChangedField(f: string | ObjectField, id?: string): void;
    /**
     * Trigger the has changed flag
     * @param v optional to set the hasChanged value (true when the array of hasChangedFields is not empty)
     * @returns the local parameter hasChanged
     */
    hasChanged(v?: unknown): unknown;
    /**
     * Start a new process (or continue the screenflow)
     * @param params Optional parameters
     * @param params.road true to get the full navigation array, false to get the current activity
     * @param params.object launcher object name
     * @param params.rowId launcher object row Id
     */
    start(params?: {
        road?: boolean;
        object?: string;
        rowId?: string;
    }): Promise<ActivityFile | undefined>;
    /**
     * Abort the process
     */
    abort(): Promise<ActivityFile>;
    /**
     * Process road
     */
    road(): Promise<object | undefined>;
    /**
     * Set data values in the current activity
     */
    setActivityData(group: string, name: string, values: string[]): void;
    /**
     * Get data values of the current activity
     */
    getActivityData(group: string, name: string): string[] | null;
    /**
     * Get data values of a road step
     */
    getData(step: string, group: string, name: string): string[] | null | undefined;
    /**
     * Activity common action
     * @param action lock, unlock, validate, back, cancel, read, open, firstpage, lastpage, nextpage, backpage, gotopage
     * @param activity Activity data
     * @param params Optional parameters
     * @param params.road true to get the full navigation array, false to get the current activity
     */
    action(action: string, activity: ActivityFile, params?: {
        road?: boolean;
    }): Promise<ActivityFile | undefined>;
    /**
     * Read the activity with <code>\{ step, aid \}</code>
     */
    read(activity: ActivityFile, params?: {
        road?: boolean;
    }): Promise<ActivityFile | undefined>;
    /**
     * Read and lock the activity <code>\{ step, aid \}</code>
     */
    lock(activity: ActivityFile, params?: {
        road?: boolean;
    }): Promise<ActivityFile | undefined>;
    /**
     * Read and unlock the activity <code>\{ step, aid \}</code>
     */
    unlock(activity: ActivityFile, params?: {
        road?: boolean;
    }): Promise<ActivityFile | undefined>;
    /**
     * Cancel the activity, returns the next activity or the forward parameters
     */
    cancel(activity: ActivityFile, params?: {
        road?: boolean;
    }): Promise<ActivityFile | undefined>;
    /**
     * Validate the activity with data, returns errors, the next activity or the forward parameters
     */
    validate(activity: ActivityFile, params?: {
        road?: boolean;
    }): Promise<ActivityFile | undefined>;
    /**
     * Next activity = alias of validate
     */
    next: (activity: ActivityFile, params?: {
        road?: boolean;
    }) => Promise<ActivityFile | undefined>;
    /**
     * Unlock the activity and read/lock the previous one
     */
    back(activity: ActivityFile, params?: {
        road?: boolean;
    }): Promise<ActivityFile | undefined>;
}

/**
 * Extends Simplicite.Ajax.BusinessProcess with front hooks.
 */
declare class UIBusinessProcess extends BusinessProcess {
}

/** Guide (interactive tour) */
interface GuideMetadata {
    /** Guide name */
    name: string;
    /** Translated label */
    label: string;
    /** Guide type */
    type: string;
    /** Object name */
    object: string;
    /** Launcher button */
    launcher?: JQuery;
    /** Launch on display */
    launch?: boolean;
    /** Tour definition */
    tour: {
        /** Condition to play the tour */
        condition: KeyObject;
        /** Tour options */
        options: KeyObject;
        /** Steps */
        steps: KeyObject[];
        /** Styles */
        styles?: KeyObject;
        /** Scroll options of the steps */
        scrollIntoView?: KeyObject;
        /** Tooltip element */
        tooltip: JQuery;
        /** Overlay element */
        overlay?: SVGSVGElement;
        /** Toast when leaving the tour */
        exitToast: KeyObject;
    };
    /** Track the usage of a step */
    usage: (name: string, step: string) => void;
}
/**
 * Guide rendering
 */
declare class Guide {
    private CLASS_IGNORE;
    /**
     * Helper to generate element selector
     */
    selector(el: HTMLElement): string;
    /**
     * Helper to build a tour
     * @param onsave service to save the tour in DB
     */
    recorder(onsave?: (p: {
        name: string;
        context: string;
        steps: KeyObject[];
    }, cbk: (id: string) => void) => void): void;
    /**
     * Simple step editor
     * @param el selected element
     * @param ok callback to confirm the new step or 'stop' recording
     * @param cbk callback on editor unload
     */
    edit(el: JQuery, ok: (r: any) => void, cbk: JQueryHandler): void;
    /**
     * Player of guides from the target object
     * @param ctn container
     * @param list list of guides
     */
    player(ctn: Container, list: GuideMetadata[]): void;
    /**
     * Play the guide
     */
    play(ctn: Container, def: GuideMetadata): void;
}

/** Data given to an external object from a view item or a parent external object */
interface ExternalData {
    /** External object fields and values */
    fields: KeyObject;
    /** Label from the item label/translation */
    label?: string;
    /** Help from the item translation */
    help?: string;
}
/** External object metadata */
interface ExternalMetadata {
    /** Object name (`ObjectExternal`) */
    object?: string;
    /** External object row ID */
    id?: string;
    /** External object name */
    name: string;
    /** Icon name */
    icon?: string;
    /** Translated label */
    label?: string;
    /** Translated help */
    help?: string;
    /** URL of the external object */
    url?: string;
    /** Fields of the external object */
    fields?: ObjectField[];
    /** Displayed without decoration (no panel) */
    embedded?: boolean;
    /** Guides to play on display */
    guides?: GuideMetadata[];
    /** ViewItem boosted instance for External object on View editor */
    meta?: ObjectMetadata;
}
/**
 * Simplicit&eacute; external object.
 */
declare class ExternalObject {
    private _app;
    /** External object metadata */
    metadata: ExternalMetadata;
    /**
     * Constructor
     * @param app Application Simplicite.Ajax instance
     * @param name External object name
     */
    constructor(app: Session, name: string);
    /**
     * Get meta data
     * @returns Promise of meta data
     */
    getMetaData(): Promise<ExternalMetadata>;
    /**
     * Get name
     * @returns Name
     */
    getName(): string;
    /**
     * Get label (is undefined as long as meta data are not loaded using <code>getMetaData</code>)
     * @returns Label
     */
    getLabel(): string | undefined;
    /**
     * Get help (is undefined as long as meta data are not loaded using <code>getMetaData</code>)
     * @returns Help
     */
    getHelp(): string | undefined;
    /**
     * Are metadata loaded ?
     */
    isLoaded(): string | undefined;
}

/** Render method of an external object */
type RenderFunction = (params?: KeyObject, data?: KeyObject) => Promise<void>;
/**
 * Extends Simplicite.Ajax.ExternalObject with front hooks.
 */
declare class UIExternalObject extends ExternalObject {
    /** External object container (`.objext`) */
    ctn: Container;
    /** Same as ctn */
    container: Container;
    /** Optional parent object */
    obj?: BusinessObject;
    /** Optional parent object row ID */
    rowid?: string;
    /** Optional data from view item or external object */
    data?: ExternalData;
    /**
     * Constructor with UI context from $ui.loadURL
     * @param ctn external object container (.objext)
     * @param obj optional parent object
     * @param rowid optional parent object rowId
     * @param data optional data from view item or external object
     * @param data.fields optional external object fields and values
     * @param data.label optional label from item label/translate
     * @param data.help optional item help from item translate
     */
    constructor(ctn: Container, obj?: BusinessObject, rowid?: string, data?: ExternalData);
    /**
     * Render in container
     * @param _params Optional parameters
     * @param _data Optional data
     */
    render(_params: KeyObject, _data: KeyObject): Promise<void>;
    /**
     * Call service
     * @param data Optional data
     * @param options can be a content type string, e.g. 'application/json' (or its shorthand 'json')
     *                                  which implies the data will be sent as the body,
     *                                  otherwise may contain custom jQuery.ajax options, e.g. { contentType: '...', ... }
     */
    service(data: KeyObject | string, options: string | KeyObject): Promise<void>;
    /**
     * Get resource URL
     * @param name Resource name
     * @param type Resource type
     */
    getResourceURL(name: string, type: string): string;
    /**
     * Static wrapper to exec render function asynchronously with parameters (thru the $ui.loadURL of external object)
     * @param conf wrapper config from ResponsiveExternalObject
     * @param conf.name External object name
     * @param conf.id External object ID
     * @param conf.params render parameters
     * @param conf.data optional render data
     * @param conf.render optional specific render method (from server-side hook getRenderFunction)
     * @param ctn container of external object
     * @param object optional context business object
     * @param rowId optional context business row ID
     * @param options options with data.fields
     */
    static exec(conf: {
        name: string;
        id: string;
        url: string;
        params: KeyObject;
        data?: KeyObject;
        render?: string;
    }, ctn: Container, object?: BusinessObject, rowId?: string, options?: {
        data: ExternalData;
    }): Promise<void>;
}

type DiagramContainerTitleAnchor = "start" | "middle" | "end";
type DiagramContainerStyle = {
    radius?: number;
    color?: string;
    shadow?: boolean;
    vertical?: boolean;
    anchor?: DiagramContainerTitleAnchor;
};
type DiagramContainerTemplate = {
    name?: string;
    object?: string;
    display?: string;
    icon?: string;
    contents?: DiagramNodeTemplate[];
} & DiagramContainerStyle;
type DiagramContainerDef = {
    template?: string;
    object?: string;
    id?: string;
    keys?: string;
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    type?: number;
    title?: string;
    label?: string;
    pool?: number;
    vertical?: boolean;
    shadow?: boolean;
    color?: string;
    radius?: number;
};
/**
 * Container constructor
 * @param {Simplicite.Diagram.Desktop} desktop desk manager
 * @param {Object} data Container data { title, type, template, x, y, w, h... }
 * @param {$} [elt] optional DOM object to synchronize
 * @class
 */
declare class DiagramContainer extends DiagramElement {
    container?: DiagramContainer;
    containers: DiagramContainer[];
    nodes: DiagramNode[];
    object: string;
    id: string;
    keys: KeyString;
    TYPE: KeyNumber;
    data?: KeyObject;
    olddata?: KeyObject;
    contents?: KeyObject[];
    template: DiagramContainerTemplate;
    type: number;
    icon?: string;
    label: string;
    title: string;
    radius: number;
    shadow?: boolean;
    color?: string;
    vertical?: boolean;
    anchor?: string;
    border?: JSVG;
    head?: JSVG;
    t?: JSVG;
    sep?: JSVG;
    pool: number;
    poolMin: number;
    padding: number;
    margin: number;
    canUseShadow: boolean;
    canUseVertical: boolean;
    constructor(desktop: DiagramDesktop, data: DiagramContainerDef | DiagramContainer, elt?: JQuery | JSVG);
    /**
     * Load
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    load(data: DiagramContainer | null, cbk?: Callback): void;
    /**
     * Draw
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    draw(): void;
    /**
     * Set/Get size of container
     * @param {number} w Width
     * @param {number} h Height
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    size(w?: number, h?: number): Size;
    /**
     * Size border
     * @param {number} w Width
     * @param {number} h Height
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    sizeBorder(w: number, h: number): void;
    /**
     * Change the pool position if > 0
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    setPool(pos: number, silent?: boolean): void;
    /**
     * Re-align all pools
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    resizePool(): void;
    /**
     * Bind
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    bind(el: JSVG): void;
    /**
     * Toggle menu
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    toggleMenu(): void;
    /**
     * Style
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    style(props?: DiagramContainerStyle, silent?: boolean): {
        color: string | undefined;
        radius: number;
        shadow: boolean | undefined;
        vertical: boolean | undefined;
    };
    /**
     * Remove
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    remove(cascad?: boolean): void;
    /**
     * Bounded rectangle of all contents
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    contentBound(): {
        x: number;
        y: number;
        w: number;
        h: number;
    } | null;
    /**
     * Set/get position of container
     * @param {number} x Horizontal coordinate
     * @param {number} y Vertical coordinate
     * @param {boolean} rel Relative?
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    position(x?: number, y?: number, rel?: boolean, cascad?: boolean): Point;
    /**
     * Is container inside this container?
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    contains(cont: DiagramContainer): boolean;
    /**
     * Attach
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    attach(x?: DiagramNode | DiagramContainer | null, silent?: boolean, noResize?: boolean): void;
    /**
     * Detach
     * @function
     * @memberof Simplicite.Diagram.Container
     */
    detach(x?: DiagramNode | DiagramContainer, silent?: boolean): void;
}

type DiagramSpringsParam = {
    stiffness: number;
    repulsion: number;
    damping: number;
    remoteness: number;
    gravity: number;
    maxDuration: number;
    callback?: Callback;
    enabled: boolean;
};
/**
 * Springs layout: a force directed graph algorithm
 * @constructor
 */
declare class DiagramSprings {
    model: DiagramModeler;
    desktop?: DiagramDesktop;
    box?: Rect;
    margin: number;
    graph?: Graph;
    layout?: Layout;
    renderer?: Renderer;
    stiffness: number;
    repulsion: number;
    damping: number;
    remoteness: number;
    gravity: number;
    enabled?: boolean;
    constructor(model: DiagramModeler);
    /**
     * Spring stiffness constant F = k * dx
     * @function
     */
    setStiffness(k: number): void;
    setRepulsion(r: number): void;
    setDamping(d: number): void;
    setRemoteness(r: number): void;
    setGravity(g: number): void;
    getData(): {
        "data-layout": string;
        "data-stiffness": number;
        "data-repulsion": number;
        "data-damping": number;
        "data-remoteness": number;
        "data-gravity": number;
        "data-enabled": boolean | undefined;
    };
    readData(svg: JSVG): this;
    /**
     * Prepare the nodes springs
     * @param {(Object|$)} data
     * @param {number} data.stiffness k = Spring stiffness
     * @param {number} data.repulsion Nodes repulsion
     * @param {number} data.damping Spring damping
     * @param {number} data.remoteness Nodes remoteness (zoom)
     * @param {number} data.gravity attraction factor
     * @param {number} data.maxDuration optional max time to execute the placement (in milliseconds)
     * @param {function} data.callback optional callback when all positions are fixed
     * @param {boolean} data.enabled true by default
     * @function
     */
    load(data: DiagramSpringsParam | JSVG): this;
    disable(): this;
    /**
     * Start the nodes placement
     * @function
     */
    start(): this;
    /**
     * Stop the nodes placement
     * @function
     */
    stop(): this;
    /**
     * add node
     * @function
     */
    addNode(node: HTMLElement): SpringNode | undefined;
    /**
     * add nodes
     * @function
     */
    addNodes(nodes?: JQuery): void;
    /**
     * Remove nodes
     * @function
     */
    removeNodes(selectorNodes: string): void;
    /**
     * Add a link between 2 spring nodes
     * @function
     */
    addLink(link: JSVG): SpringEdge | undefined;
    /**
     * Move nodes
     * @function
     */
    move(nodes: JSVG[]): void;
}
declare type SpringNodeData = {
    label?: string;
    mass?: number;
    node?: DiagramNode;
};
declare class SpringNode implements SpringNode {
    id: string;
    data: SpringNodeData;
    point?: Point$1;
    constructor(id: string, data?: SpringNodeData);
}
declare type SpringEdgeData = {
    type?: string;
    length?: number;
};
declare class SpringEdge {
    id: string;
    source: SpringNode;
    target: SpringNode;
    data: SpringEdgeData;
    from?: number;
    to?: number;
    type?: string;
    directed?: boolean;
    spring?: Spring;
    constructor(id: string, source: SpringNode, target: SpringNode, data?: SpringEdgeData);
}
declare class Graph {
    model: DiagramModeler;
    nodes: SpringNode[];
    edges: SpringEdge[];
    nodeSet: {
        [id: string]: SpringNode;
    };
    adjacency: {
        [id1: string]: {
            [id2: string]: SpringEdge[];
        };
    };
    nextNodeId: number;
    nextEdgeId: number;
    eventListeners: Renderer[];
    constructor(model: DiagramModeler);
    addNode(node: SpringNode): SpringNode;
    addNodes(list: string[]): void;
    addEdge(edge: SpringEdge): SpringEdge;
    addEdges(list: string[][]): void;
    newNode(data: SpringNodeData): SpringNode;
    newEdge(source: SpringNode, target: SpringNode, data: SpringEdgeData): SpringEdge;
    loadJSON(json: string | KeyObject): void;
    getEdges(node1: SpringNode, node2: SpringNode): SpringEdge[];
    removeNode(node: SpringNode): void;
    detachNode(node: SpringNode): void;
    removeEdge(edge: SpringEdge): void;
    merge(data: Graph): void;
    filterNodes(fn: (node: SpringNode) => boolean): void;
    filterEdges(fn: (node: SpringEdge) => boolean): void;
    addGraphListener(obj: Renderer): void;
    notify(): void;
}
declare class Point$1 {
    p: Vector;
    m: number;
    v: Vector;
    a: Vector;
    constructor(position: Vector, mass: number);
    applyForce(force: Vector): void;
}
declare class Spring {
    point1: Point$1;
    point2: Point$1;
    length: number;
    k: number;
    constructor(point1: Point$1, point2: Point$1, length: number, k: number);
    distanceToPoint(point: Point$1): number;
}
declare class ForceDirected {
    graph: Graph;
    stiffness: number;
    repulsion: number;
    damping: number;
    remoteness: number;
    gravity: number;
    static Point: typeof Point$1;
    static Spring: typeof Spring;
    constructor(graph: Graph, stiffness: number, repulsion: number, damping: number, remoteness: number, gravity: number);
    point(node: SpringNode): Point$1;
    spring(edge: SpringEdge): Spring;
    eachNode(cbk: (n: SpringNode, p: Point$1) => void): void;
    eachEdge(cbk: (e: SpringEdge, s: Spring) => void): void;
    eachSpring(cbk: (s: Spring) => void): void;
    applyCoulombsLaw(): void;
    applyHookesLaw(): void;
    attractToCentre(p: Point$1): void;
    updatePoint(p: Point$1, dt: number): void;
    totalEnergy(): number;
    _started?: boolean;
    _stop?: boolean;
    _energy: number;
    _count: number;
    _time0: number;
    /**
     * Start simulation if it's not running already.
     * In case it's running then the call is ignored, and none of the callbacks passed is ever executed.
     */
    start(render: Callback, onRenderStart?: Callback, onRenderStop?: Callback): void;
    stop(): void;
    tick(dt: number): void;
    getBound(): Rect;
}
declare class Layout extends ForceDirected {
    static ForceDirected: typeof ForceDirected;
}
declare class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number);
    static random(): Vector;
    add(v: Vector): Vector;
    subtract(v: Vector): Vector;
    multiply(n: number): Vector;
    divide(n: number): Vector;
    magnitude(): number;
    normal(): Vector;
    normalise(): Vector;
}
/**
 * Renderer handles the layout rendering loop
 * @param onRenderStart optional callback function that gets executed whenever rendering starts.
 * @param onRenderStop optional callback function that gets executed whenever rendering stops.
 * @param onRenderFrame optional callback function that gets executed after each frame is rendered.
 */
declare class Renderer {
    layout: Layout;
    clear?: Callback;
    drawNode?: (n: SpringNode, p: Vector) => void;
    drawEdge?: (e: SpringEdge, p1: Vector, p2: Vector) => void;
    onRenderStart?: Callback;
    onRenderStop?: Callback;
    onRenderFrame?: Callback;
    constructor(layout: Layout, clear?: Callback, drawEdge?: Callback, drawNode?: (n: SpringNode, p: Vector) => void, onRenderStart?: Callback, onRenderStop?: Callback, onRenderFrame?: Callback);
    graphChanged(): void;
    /**
     * Starts the simulation of the layout in use.
     *
     * Note that in case the algorithm is still or already running then the layout that's in use
     * might silently ignore the call, and your optional <code>done</code> callback is never executed.
     * At least the built-in ForceDirected layout behaves in this way.
     */
    start(): void;
    stop(): void;
}

type DiagramTreeParam = {
    vertical?: boolean;
    openClose?: boolean;
    rootPosition?: number;
    gapBetweenNodes?: number;
    gapBetweenLevels?: number;
    inspect?: number;
    reverse?: boolean;
};
type DiagramTreeMode = "simple" | "assign" | "release";
type DiagramTreeBound = {
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
};
/**
 * Tree singleton
 * @class
 */
declare class DiagramTree {
    DEFAULT_DISTANCE: number;
    ROOT: KeyNumber;
    INSPECT: KeyNumber;
    constructor();
    private static singleton;
    static get(): DiagramTree;
    /**
     * Tree placement from a node
     * @param {Simplicite.Diagram.Node} node node
     * @param {Object} params layout options
     * @param {boolean} params.vertical vertical direction
     * @param {boolean} params.openClose add collapse buttons
     * @param {Object}  params.rootPosition root absolute position {x,y}
     * @param {number}  params.gapBetweenNodes distance between nodes (px)
     * @param {number}  params.gapBetweenLevels distance between tree levels (px)
     * @param {number}  params.inspect links inspection (Simplicite.Diagram.Tree.INSPECT)
     * @param {boolean} params.reverse reverse tree?
     * @param {string} mode 'simple' placement | 'assign' to tree | 'release' from tree
     * @param {boolean} selected select the node
     * @function
     */
    layoutNode(node: DiagramNode, params: DiagramTreeParam, mode: DiagramTreeMode, selected: boolean): void;
    /**
     * Menu
     * @function
     */
    menu(desktop: DiagramDesktop): void;
}
/**
 * TreeLayout
 * @param {Simplicite.Diagram.Desktop} desktop desktop
 * @param {Object} params layout options
 * @class
 */
declare class DiagramTreeLayout {
    DEFAULT_DISTANCE: number;
    tree: DiagramTree;
    desktop: DiagramDesktop;
    root?: DiagramTreeNode;
    levelSizes?: number[];
    bound?: DiagramTreeBound;
    rootPosition: number;
    gapBetweenNodes: number;
    gapBetweenLevels: number;
    inspect: number;
    openClose: boolean;
    vertical: boolean;
    reverse: boolean;
    constructor(desktop: DiagramDesktop, params: DiagramTreeParam);
    /**
     * Set orientation
     * @function
     */
    setOrientation(vertical: boolean): void;
    /**
     * Set root position
     * @function
     */
    setRootPosition(pos: number): void;
    /**
     * Set gap between nodes
     * @function
     */
    setGapBetweenNodes(d: number): void;
    /**
     * Set gap between levels
     * @function
     */
    setGapBetweenLevels(d: number): void;
    /**
     * Set open/close
     * @function
     */
    setOpenClose(b: boolean): void;
    /**
     * Revalidate
     * @function
     */
    revalidate(): void;
    /**
     * Add node
     * @function
     */
    addNode(node: DiagramNode): DiagramTreeNode;
    /**
     * Remove node
     * @function
     */
    removeNode(node: DiagramNode): void;
    /**
     * Remove all
     * @function
     */
    removeAll(): void;
    /**
     * Set root
     * @function
     */
    setRoot(node: DiagramNode, mode: DiagramTreeMode): void;
    /**
     * Open
     * @function
     */
    open(node: DiagramNode, open: boolean): void;
    /**
     * Is open?
     * @function
     */
    isOpen(node: DiagramNode): boolean;
    /**
     * Switch open/close
     * @function
     */
    switchOpenClose(node: DiagramNode): void;
    /**
     * Set parent
     * @function
     */
    setParent(node: DiagramNode, parent: DiagramNode | null, redraw: boolean, root: DiagramNode, assign?: boolean): void;
    /**
     * Get size
     * @function
     */
    getSize(): Size;
    /**
     * Do layout
     * @function
     */
    doLayout(selected?: boolean): void;
    /**
     * Global size
     * @function
     */
    globalSize(node: DiagramNode): void;
    /**
     * Get tree level sizes
     * @function
     */
    getTreeLevelSizes(): number[] | undefined;
    /**
     * Get tree level size
     * @function
     */
    getTreeLevelSize(level: number): number;
    /**
     * Set tree level sizes
     * @function
     */
    setLevelSizes(tn: DiagramTreeNode, level: number): void;
    /**
     * Generate the tree form the parent thru links
     * @function
     */
    layoutNodeBuildTree(parent: DiagramNode, mode: DiagramTreeMode): void;
    /**
     * Insert node
     * @function
     */
    insertNode(child: DiagramNode, parent: DiagramNode, mode: DiagramTreeMode, link: DiagramLink): void;
}
/**
 * TreeNode assigned to node
 * @class
 */
declare class DiagramTreeNode {
    root?: DiagramNode;
    node: DiagramNode;
    key: string;
    children: DiagramTreeNode[];
    parent: DiagramTreeNode | null;
    layout: DiagramTreeLayout;
    assign?: boolean;
    constructor(node: DiagramNode, parent: DiagramTreeNode | null, layout: DiagramTreeLayout);
    /**
     * Is leaf?
     * @function
     */
    isLeaf(): boolean;
    /**
     * Has child?
     * @function
     */
    hasChild(tn: DiagramTreeNode): boolean;
    /**
     * Get tree size
     * @function
     */
    getTreeSize(level: number, subTreeOnly: boolean): Size;
    /**
     * Get angle in [0..2PI[
     * @function
     */
    getAngle(): number;
    /**
     * Add child
     * @function
     */
    addChild(child: DiagramTreeNode): void;
    /**
     * Remove child
     * @function
     */
    removeChild(child: DiagramTreeNode): void;
    /**
     * Open
     * @function
     */
    open(visible: boolean): void;
    /**
     * Is open?
     * @function
     */
    isOpen(): boolean;
    /**
     * Do layout
     * @function
     */
    doLayout(selected: boolean): void;
    /**
     * Do layout hierarchy (recursive)
     * @function
     */
    doLayoutHierarchy(x: number, y: number, level: number, selected?: boolean): void;
    /**
     * Do layout radial (recursive)
     * @function
     */
    doLayoutRadial(cx: number, cy: number, r: number, a1: number, a2: number, selected?: boolean): void;
    /**
     * Move node
     * @function
     */
    moveNode(x: number, y: number): void;
    /**
     * Translate
     * @function
     */
    translate(dx: number, dy: number): void;
    /**
     * Draw button
     * @function
     */
    /**
     * Move
     * @function
     */
    move(): void;
}

/**
 * Nodus = linkable element (node or note)
 * @param {Simplicite.Diagram.Desktop} desktop desk manager
 * @class
 */
declare class DiagramNodus extends DiagramElement {
    object: string;
    id: string;
    links?: DiagramLink[];
    springNode?: SpringNode;
    treeNode?: DiagramTreeNode;
    constructor(desktop: DiagramDesktop);
    /**
     * Add link
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    addLink(link: DiagramLink): void;
    /**
     * Remove link
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    removeLink(link: DiagramLink): void;
    /**
     * Move link
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    moveLinks(dx: number, dy: number): void;
    /**
     * Move pointer during add link
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    moveAddLink(al: DeskElementPos): void;
    /**
     * Create link
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    createLink(al: DeskElementPos): void;
}

type DiagramLinkTemplate = {
    name?: string;
    render?: number;
    type?: number;
    fromObject?: string;
    fromField?: string;
    fromRequired?: boolean;
    fromTemplate?: string;
    fromDisplay?: string;
    toObject?: string;
    toField?: string;
    toTemplate?: string;
    toDisplay?: string;
    link?: string;
    linkFromField?: string;
    linkToField?: string;
    linkRowIdField?: string;
    canChangeShowLabel?: boolean;
    canChangeRender?: boolean;
    canChangeType?: boolean;
    canChangeColor?: boolean;
    canChangeCurved?: boolean;
    canChangeBridge?: boolean;
    canChangeThickness?: boolean;
} & DiagramLinkStyle & DiagramLinkLabel;
type DiagramLinkLabel = {
    label?: string;
    showLabel?: boolean;
};
type DiagramLinkStyle = {
    color?: string;
    thickness?: number;
    curved?: boolean;
    bridge?: boolean;
    dashed?: boolean;
};
type DiagramLinkDef = {
    fromObject?: string;
    fromId?: string;
    toObject?: string;
    toId?: string;
    object?: string;
    id?: string;
    keys?: string | KeyString;
    template?: string | DiagramLinkTemplate;
    from?: DiagramNode;
    to?: DiagramNode;
    RENDER?: KeyObject;
    LINK?: KeyObject;
};
/**
 * Link constructor
 * @param {Simplicite.Diagram.Desktop} desktop Desk manager
 * @param {Object} data Link data <code>\{ object, id, template, points... \}</code>
 * @param {$} [elt] Optional DOM object to synchronize
 * @class
 */
declare class DiagramLink extends DiagramElement {
    RENDER: KeyNumber;
    LINK: KeyNumber;
    object: string;
    id: string;
    keys: KeyString;
    data?: KeyObject;
    from: DiagramNodus;
    fromType?: number;
    fromObject: string;
    fromId: string;
    to: DiagramNodus;
    toType?: number;
    toObject: string;
    toId: string;
    label: string;
    template: DiagramLinkTemplate;
    innerLink: boolean;
    points: Point[];
    masterLine: Line;
    road?: JSVG;
    border?: JSVG;
    border2?: JSVG;
    offset: number;
    offsetMax: number;
    render?: number;
    thickness?: number;
    color?: string;
    curved?: boolean;
    bridge?: boolean;
    dashed?: boolean;
    showLabel?: boolean;
    cls?: string;
    pointer?: JSVG;
    constructor(desktop: DiagramDesktop, data: DiagramLinkDef, elt?: JSVG);
    /**
     * Remove a link
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    remove(): void;
    /**
     * Compare links
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    equals(link: DiagramLink): boolean;
    /**
     * Override position to move points
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    positionPoints(dx: number, dy: number, nb: number | null, from: boolean): Point;
    /**
     * Change link rendering
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    rendering(render?: number, silent?: boolean): number | undefined;
    /**
     * Change extremity
     * @param {boolean} from From direction ?
     * @param {number} type Type of LINK, accept marker syntax
     * @param {boolean} silent no redraw/has changed
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    extremity(from: boolean, type: number | string, silent?: boolean): number | undefined;
    /**
     * Style
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    style(props?: DiagramLinkStyle, silent?: boolean): {
        color: string | undefined;
        thickness: number | undefined;
        curved: boolean | undefined;
        bridge: boolean | undefined;
        dashed: boolean | undefined;
    };
    /**
     * Text
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    text(props?: DiagramLinkLabel, silent?: boolean): {
        showLabel: boolean | undefined;
        label: string;
    };
    /**
     * Draw
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    draw(): void;
    /**
     * Redraw
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    redraw(): void;
    /**
     * Draw label
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    drawLabel(label: string): void;
    /**
     * Path
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    path(lines?: Line[], curved?: boolean, bridge?: boolean): string;
    /**
     * Draw bridge path
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    drawBridge(l: DiagramLink, line: Line, inters: DiagramLink[]): string;
    /**
     * Draw path
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    drawPath(lines: Line[] | undefined): void;
    /**
     * Toggle menu
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    toggleMenu(pos: Point): void;
    /**
     * Update path
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    updatePath(): void;
    /**
     * Leave
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    leave(): void;
    /**
     * Add point
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    addPoint(idx: number, p: Point): void;
    /**
     * Remove added point at index or position
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    removePoint(index: number | null, pos?: Point): void;
    /**
     * Move point
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    movePoint(pt: DeskElementPos, drop?: boolean): void;
    /**
     * Get starting point in node "from"
     * @param {Point} p optional x,y in percent to change relative position into node
     * @param {boolean} prct true to return percents or absolute position
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    pointFrom(p?: Point, prct?: boolean): Point;
    /**
     * Get ending point in node "to"
     * @param {Point} p optional x,y in percent to change relative position into node
     * @param {boolean} prct true to return percents or absolute position
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    pointTo(p?: Point, prct?: boolean): Point;
    /**
     * Broken lines
     * @param {boolean} full true: get lines from internal nodes, false: outgoing points from nodes
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    getLines(full?: boolean): Line[] | undefined;
    /** Build a line between 2 points */
    toLine(a: Point, b: Point): Line;
    /** Build a line between 2 points */
    toLine2(x1: number, y1: number, x2: number, y2: number): Line;
    /** Generate simple free line between 2 vectors */
    getFreeLines(u1: Line, u2: Line): Line[];
    /** Generate broken lines between 2 vectors */
    getAutoLines(u1: Line, u2: Line): Line[];
    /** Top to Bottom lines between 2 nodes */
    getTopBottomLines(n1: DiagramNodus, n2: DiagramNodus): Line[];
    /** Left to Right lines between 2 nodes */
    getLeftRightLines(n1: DiagramNodus, n2: DiagramNodus): Line[];
    /** Vertical to Horizontal lines between 2 nodes */
    getVertHorizLines(n1: DiagramElement, n2: DiagramElement): Line[];
    /** Horizontal to Vertical lines between 2 nodes */
    getHorizVertLines(n1: DiagramElement, n2: DiagramElement): Line[];
    /** Reflexive inner lines */
    getInnerLines(n: DiagramElement): Line[];
    /**
     * Normal Vector from node
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    getOutgoingPoint(n1: DiagramElement, _n2: DiagramElement, direction: number): Line;
    /**
     * Interpolation nearest point to path
     * @function
     * @memberof Simplicite.Diagram.Link
     */
    closestPoint(pathNode: SVGPathElement, point: Point): {
        x: number;
        y: number;
        d: number;
    };
    /** line (p1, p2) => ax + by + c = 0 */
    getStraightLine(l: Line): StraightLine;
    /** Intersection in segments ? */
    getIntersection(line1: Line, line2: Line, d1: StraightLine, d2: StraightLine): Point | undefined;
}

type DiagramNodeStyle = {
    radius?: number;
    color?: string;
    shadow?: boolean;
    shape?: string;
    titlePos?: string;
};
type DiagramNodeContentTemplate = {
    name: string;
    object: string;
    display?: string;
    relParentField?: string;
    refField?: string;
    refRequired?: boolean;
    relation?: string;
    relationRowIdField?: string;
    relContentField?: string;
};
type DiagramNodeTemplate = {
    name?: string;
    object?: string;
    relation?: string;
    refField?: string;
    display?: string;
    icon?: string;
    contents?: {
        [key: string]: DiagramNodeContentTemplate;
    };
    showContent?: boolean;
    collapseContent?: boolean;
    showField?: number;
    collapseField?: boolean;
    resizable?: boolean;
} & DiagramNodeStyle;
type DiagramNodeContentItem = {
    index: number;
    text: string;
    object: string;
    field?: string;
    id: string;
    relId?: string;
    pre?: JSVG[];
    post?: JSVG[];
    cls: string;
};
type DiagramNodeContent = {
    object: string;
    template: string;
    relField?: string;
    relation?: string;
    relParentField?: string;
    items: DiagramNodeContentItem[];
};
type DiagramNodeDef = {
    template: string | DiagramNodeTemplate;
    object: string;
    id: string;
    x: number;
    y: number;
    links?: DiagramLinkDef[];
};
type TitlePosition = "top" | "center" | "bottom";
/**
 * Node constructor
 * @param {Simplicite.Diagram.Desktop} desktop desk manager
 * @param {Object} data Node data { object, id, template, contents... }
 * @param {$} [elt] optional DOM object to synchronize
 * @class
 */
declare class DiagramNode extends DiagramNodus {
    keys: KeyString;
    label: string;
    titlePos?: TitlePosition;
    icon?: string;
    data?: KeyObject;
    olddata?: KeyObject;
    links: DiagramLink[];
    contents: DiagramNodeContent[];
    container?: DiagramContainer;
    border?: JSVG;
    template: DiagramNodeTemplate;
    padding: number;
    radius?: number;
    color?: string;
    shadow?: boolean;
    shape?: string;
    collapseContent?: boolean;
    collapseField?: boolean;
    canAttach?: boolean;
    layout?: DiagramTreeLayout;
    visible?: boolean;
    constructor(desktop: DiagramDesktop, data: Partial<DiagramNodeDef>, elt?: JQuery | JSVG);
    /**
     * Load node with data
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    load(data: DiagramNode, cbk?: (data?: DiagramNode | DiagramContainer) => void): void;
    /**
     * Draw
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    draw(): void;
    /**
     * Set/Get size of node
     * @param {number} w Width
     * @param {number} h Height
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    size(w?: number, h?: number): Size;
    /**
     * Redraw
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    redraw(): void;
    /**
     * Is content visible?
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    isContentVisible(i: number, _content: DiagramNodeContent): boolean | undefined;
    /**
     * Is item visible?
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    isItemVisible(_i: number, _j: number, _content: DiagramNodeContent, _item: DiagramNodeContentItem): boolean;
    /**
     * Draw item
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    drawItem(data: {
        item: DiagramNodeContentItem;
        content: DiagramNodeContent;
        indexContent: number;
        indexItem: number;
        height: number;
        group: JSVG;
    }): any;
    /**
     * Bind
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    bind(r: JSVG, g?: JSVG, data?: KeyObject): void;
    /**
     * Toggle menu
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    toggleMenu(item: DiagramNodeContentItem, pos: Point): void;
    /**
     * Collapse fields
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    collapseFields(b?: boolean, silent?: boolean): boolean | undefined;
    /**
     * Collapse contents
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    collapseContents(b?: boolean, silent?: boolean): boolean | undefined;
    /**
     * Style
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    style(props?: DiagramNodeStyle, silent?: boolean): {
        color: string | undefined;
        radius: number | undefined;
        shadow: boolean | undefined;
        shape: string | undefined;
        titlePos: TitlePosition | undefined;
    };
    /**
     * Remove
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    remove(): void;
    /**
     * Set/get position of element
     * @param {number} x Horizontal coordinate
     * @param {number} y Vertical coordinate
     * @param {boolean} rel Relative?
     * @param {boolean} attach Attach to parent container?
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    position(x?: number, y?: number, rel?: boolean | 0, attach?: boolean): Point;
    /**
     * Attach node to a container
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    attach(silent?: boolean, resize?: boolean): void;
    /**
     * Detach from container
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    detach(silent?: boolean): void;
    /**
     * Set label
     * @param {string} label Label
     * @function
     * @memberof Simplicite.Diagram.Node
     */
    setLabel(label: string): void;
}

type ShapeParam = {
    name: string;
    w?: number;
    h?: number;
    wmin?: number;
    hmin?: number;
    position?: TitlePosition;
    ar?: boolean;
    title?: string;
};
type Shape = {
    w: number;
    h: number;
    ar?: boolean;
    elt: () => JSVG;
    size: (e: JSVG, w: number, h: number) => Size;
    intersect?: () => Point | undefined;
};
type ShapeGroup = {
    name: string;
    list: string[];
};
type ShapeDefs = {
    [shape: string]: Shape;
};
/**
 * Node shape
 * @class
 */
declare class DiagramShape {
    name: string;
    elt: JSVG;
    title?: string;
    position?: TitlePosition;
    text?: JSVG;
    wmin: number;
    hmin: number;
    ar: boolean;
    static defs: ShapeDefs;
    MIN_SIZE: number;
    /**
     * New shape { name, w, h, wmin, hmin, title, position, ar }
     * @constructor
     */
    constructor(p: ShapeParam);
    /** Group of shapes */
    static getGroups(): ShapeGroup[];
    /**
     * Get shape
     * @function
     * @memberof Simplicite.Diagram.Shape
     */
    getShape(): JSVG;
    /**
     * Get title
     * @function
     * @memberof Simplicite.Diagram.Shape
     */
    getTitle(): JSVG | undefined;
    /**
     * Resize shape to fit centered text
     * @function
     * @memberof Simplicite.Diagram.Shape
     */
    fitText(): void;
    /**
     * Set/Get size of element
     * @param {number} w Width
     * @param {number} h Height
     * @function
     * @memberof Simplicite.Diagram.Shape
     */
    size(w: number, h: number): {
        w: number;
        h: number;
    };
    /**
     * To line
     * @function
     * @memberof Simplicite.Diagram.Shape
     */
    private toLine;
    private btwn;
    private line_line_intersect;
    private line_circle_intersect;
    private line_ellipse_intersect;
    private line_path_intersect;
    private line_rect_intersect;
    intersect(n: Point, line: Line): Point | undefined;
    /** Predefined Shapes definition */
    private initShapes;
}

/** Line between 2 points */
type Line = {
    p1: Point;
    p2: Point;
};
/** Line ax + by + c = 0 */
type StraightLine = {
    a: number;
    b: number;
    c: number;
};
type Bound = Rect & {
    x2: number;
    y2: number;
    xc: number;
    yc: number;
};
type Direction = "nw" | "sw" | "se" | "ne" | "n" | "s" | "w" | "e";
/**
 * Default element of diagram
 * @param {Simplicite.Diagram.Desktop} desktop desk manager
 * @class
 */
declare class DiagramElement {
    desktop: DiagramDesktop;
    elt: JQuery<SVGGraphicsElement>;
    elt2?: JQuery<SVGGraphicsElement>;
    x: number;
    y: number;
    w: number;
    h: number;
    resizable: boolean;
    wmin: number;
    hmin: number;
    s?: DiagramShape;
    constructor(desktop: DiagramDesktop);
    /**
     * Mark changed
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    changed(): void;
    /**
     * Draw element
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    draw(): void;
    /**
     * Redraw element
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    redraw(): void;
    /**
     * Set/get position of element
     * @param {number} x Horizontal coordinate
     * @param {number} y Vertical coordinate
     * @param {boolean} rel Relative?
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    position(x?: number, y?: number, rel?: boolean | 0): Point;
    /**
     * Set/Get size of element
     * @param {number} w Width
     * @param {number} h Height
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    size(w?: number, h?: number): Size;
    /**
     * Get bounds
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    bound(): Bound;
    /**
     * Remove element
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    remove(): void;
    /**
     * Select
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    select(sel?: boolean): boolean;
    /**
     * Menu
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    menu(sections: DesktopMenuItem[][], pos?: Point | null, cbk?: (menu: JQuery) => void): void;
    /**
     * Color picker
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    colorPicker(inp: JQuery, menu: JQuery, cbk?: (color: string) => void): void;
    /**
     * Is inside?
     * @param {number} x Horizontal coordinate
     * @param {number} y Vertical coordinate
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    isInside(x: number, y: number): boolean;
    /**
     * Bind resize
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    bindResize(): void;
    /**
     * Resize in direction
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    resize(rn: DeskElementPos, drop?: boolean): void;
    /**
     * Text size
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    textSize(text: string, cls?: string): {
        w: number;
        h: number;
    };
    /**
     * Wrap text
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    wrapText(text: string, width: number, padding: number, el?: JSVG): JSVG;
    /**
     * Get wrapped back as string
     * @function
     * @memberof Simplicite.Diagram.Element
     */
    unwrapText(el: JQuery): string;
}

/**
 * Caption constructor
 * @param {Simplicite.Diagram.Desktop} desktop desk manager
 * @param {Object} data Model data and { x, y }
 * @class
 */
declare class DiagramCaption extends DiagramElement {
    padding: number;
    border?: JSVG;
    t?: JSVG;
    data: KeyObject;
    constructor(desktop: DiagramDesktop, data: KeyObject);
    /**
     * Draw caption within hook onDrawCaption(caption, display)
     * @function
     * @memberOf Simplicite.Diagram.Caption
     */
    draw(): void;
    /**
     * Display the default caption with model data
     * @function
     * @memberOf Simplicite.Diagram.Caption
     */
    display(): void;
    /**
     * Set/Get size of caption
     * @param {number} w Width
     * @param {number} h Height
     * @function
     * @memberOf Simplicite.Diagram.Caption
     */
    size(w?: number, h?: number): Size;
    /**
     * Bind caption
     * @function
     * @memberOf Simplicite.Diagram.Caption
     */
    bind(el: JSVG): void;
}

type DiagramNoteData = {
    id?: string;
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    text?: string;
};
type DiagramNoteStyle = {
    color?: string;
};
/**
 * Note constructor
 * @param {Simplicite.Diagram.Desktop} desktop desk manager
 * @param {Object} data optional { text, x, y, w, h, id }
 * @param {$} [elt] optional DOM object to synchronize
 * @class
 */
declare class DiagramNote extends DiagramNodus {
    id: string;
    color: string;
    text: string;
    padding: number;
    border?: JSVG;
    t?: JSVG;
    constructor(desktop: DiagramDesktop, data: DiagramNoteData, elt?: JQuery | JSVG);
    /**
     * Draw
     * @function
     * @memberof Simplicite.Diagram.Note
     */
    draw(): void;
    /**
     * Set/Get size of note
     * @param {number} w Width
     * @param {number} h Height
     * @function
     * @memberof Simplicite.Diagram.Note
     */
    size(w?: number, h?: number): Size;
    /**
     * Redraw
     * @function
     * @memberof Simplicite.Diagram.Note
     */
    redraw(): void;
    /**
     * Bind
     * @function
     * @memberof Simplicite.Diagram.Note
     */
    bind(r: JSVG, _g?: unknown, _data?: unknown): void;
    /**
     * Toggle menu
     * @function
     * @memberof Simplicite.Diagram.Note
     */
    toggleMenu(): void;
    /**
     * Edit note
     * @function
     * @memberof Simplicite.Diagram.Note
     */
    edit(): void;
    /**
     * Style
     * @function
     * @memberof Simplicite.Diagram.Note
     */
    style(props?: DiagramNoteStyle, silent?: boolean): {
        color: string;
    };
    /**
     * Remove
     * @function
     * @memberof Simplicite.Diagram.Note
     */
    remove(): void;
    /**
     * Set/get position of element
     * @param {number} x Horizontal coordinate
     * @param {number} y Vertical coordinate
     * @param {boolean} rel Relative?
     * @function
     * @memberof Simplicite.Diagram.Note
     */
    position(x?: number, y?: number, rel?: boolean): Point;
}

type DesktopMenuItem = {
    text: string | JQuery;
    icon?: string;
    cbk?: JQueryHandler;
};
type DeskElementPos = {
    origin: Point;
    pos: Point;
    pointer?: JSVG;
    caption?: boolean;
    container?: boolean;
    elt?: DiagramElement;
    dir?: Direction;
    bound?: Bound;
    moved?: boolean;
    link?: DiagramLink;
    from?: DiagramNode | DiagramNote;
    to?: JQuery;
    index?: number;
    points?: Point[];
    pointFrom?: Point;
    pointTo?: Point;
    line?: JSVG;
    valid?: boolean;
};
type DiagramDesktopParam = {
    svg?: string;
    x?: number;
    y?: number;
    zoom?: number;
    grid?: number;
    color?: string;
};
/**
 * Desktop with SVG
 * @param {Object} p options
 * @param {number} p.x Origin position x
 * @param {number} p.y Origin position y
 * @param {number} p.zoom Zoom factor
 * @param {string} p.color Background color
 * @param {number} p.grid Grid size or 0 to hide
 * @class
 */
declare class DiagramDesktop {
    ctn: Container;
    data: Required<DiagramDesktopParam>;
    margin: number;
    model: DiagramModeler;
    options: KeyObject;
    undoRedo: KeyObject;
    pointerMode: number;
    _poolLock?: boolean;
    _move_links?: DiagramLink[];
    changed: boolean;
    isPopup: boolean;
    desktop?: JQuery;
    desk?: JQuery;
    svg?: JQuery<SVGSVGElement>;
    viewport?: JSVG;
    background?: JSVG;
    body?: JSVG;
    containers?: JSVG;
    links?: JSVG;
    nodes?: JSVG;
    foreground?: JSVG;
    palZoom?: JQuery;
    palLayout?: JQuery;
    palModel?: JQuery;
    palDesk?: JQuery;
    palAdd?: JQuery;
    constructor(ctn: Container, model: DiagramModeler, p: DiagramDesktopParam);
    /**
     * Init the desktop with contents, palettes...
     * @param {boolean} sync true to synchronize nodes with DB
     * @param {function} cbk optional callback
     * @function
     */
    init(sync: boolean, cbk?: Callback): void;
    /**
     * Content has changed ?
     * @param {boolean} b optional flag
     * @function
     */
    hasChanged(b?: boolean): boolean;
    /**
     * Get the SVG content as text
     * @param {Object} options
     * @param {boolean} options.clear true to clear dimension, unused image...
     * @param {number}  options.zoom optional scale 1=100%
     * @param {number}  options.grid 0=none
     * @param {boolean} options.xlink false to remove all use[xlink] of SVG 1.2
     * @param {function} cbk callback(svg content)
     * @function
     */
    getContent(options?: {
        clear?: boolean;
        zoom?: number;
        grid?: number;
        xlink?: boolean;
    }, cbk?: (svg: string) => void): void;
    /**
     * Convert to image
     * @param {string} format optional format (png...), default return SVG image
     * @param {number} zoom optional scale
     * @param {function} cbk callback to return the formatted image
     * @function
     */
    getImage(format: string | null, zoom: number, cbk: (img: JQuery<HTMLImageElement> | null) => void): void;
    /**
     * Load image and convert to data URL
     * @param {string} src image source URL
     * @param {string} format base64 format (default png)
     * @param {number} w width:  null=preserve original size | 0=maintain aspect ratio | specified size
     * @param {number} h height: null=preserve original size | 0=maintain aspect ratio | specified size
     * @param {function} cbk callback(dataURL, width, height)
     * @function
     */
    img2base64(src: string, format: string, w: number | null, h: number | null, cbk?: (dataURL: string, width: number, height: number) => void): void;
    getContainers(): JQuery;
    getSelectedContainers(): JQuery;
    /**
     * Search a container in diagram if exists
     * @param {Object} item filter { object, id }
     * @function
     */
    getContainer(item: {
        object?: string;
        id?: string;
    }): JQuery;
    getContainerAt(pos: Point): DiagramContainer | undefined;
    /**
     * Search a node in diagram if exists
     * @param {Object} item filter { object, id }
     * @function
     */
    getNode(item: {
        object?: string;
        id?: string;
    }): JQuery;
    /**
     * Search a note in diagram if exists
     * @param {string} id note id
     * @function
     */
    getNote(id: string): JQuery;
    /**
     * Search a content item in diagram if exists
     * @param {Object} item content { object, id }
     * @function
     */
    getNodeContent(item: {
        object: string;
        id: string;
    }): JQuery;
    /**
     * Search a node with content in diagram if exists
     * @param {Object} item content { object, id }
     * @function
     */
    getNodeWithContent(item: {
        object: string;
        id: string;
    }): JQuery;
    /**
     * Get all nodes in diagram
     * @param {string} selector optional selector
     * @function
     */
    getNodes(selector?: string): JQuery;
    /**
     * Get selected nodes in diagram
     * @param {boolean} notes include notes ?
     * @function
     */
    getSelectedNodes(notes?: boolean): JQuery<HTMLElement> | undefined;
    /**
     * Add a node in diagram
     * @param {Object} data node data
     * @function
     */
    addNode(data: DiagramNodeDef, cbk?: (node: DiagramNode) => void): void;
    /**
     * Apply a function on (selected) nodes
     * @function
     */
    applyToNodes(node?: JQuery | DiagramNode | null, fn?: (node: DiagramNode) => void): void;
    /**
     * Remove node from diagram
     * @param {Object} node Simplicite.Diagram.Node
     * @function
     */
    removeNode(node?: JQuery | DiagramNode): void;
    /**
     * Remove nodes from diagram
     * @param {jQuery} list nodes
     * @function
     */
    removeNodes(list?: JSVG | JQuery): void;
    /**
     * Remove container from diagram
     * @param {Object} ct Simplicite.Diagram.Container
     * @param {boolean} cascad true to remove contents from diagram
     * @function
     */
    removeContainer(ct: DiagramContainer | JQuery, cascad?: boolean): void;
    /**
     * Get all links on desktop
     * @function
     */
    getLinks(): JSVG;
    /**
     * Search a link on desktop
     * @param {Object} data filters { fromObject, fromId, toObject, toId, object, id, keys }
     * @function
     */
    getLink(data?: DiagramLinkDef | DiagramLink): JSVG;
    /**
     * Add a link on desktop
     * @param {Object} data { fromObject, fromId, toObject, toId, object, id }
     * @function
     */
    addLink(data: DiagramLinkDef | DiagramLink): JSVG | undefined;
    /**
     * Remove a link on desktop
     * @function
     */
    removeLink(link: DiagramLink | JSVG): void;
    unselectAll(): void;
    selectAllNodes(b?: boolean): void;
    /**
     * Select a node or a note
     * @param {$} el element
     * @param {boolean} sel true to select
     * @param {boolean} add add to selection or reset
     * @function
     */
    selectNode(el?: JQuery | JSVG, sel?: boolean, add?: boolean): void;
    selectItem(el?: JSVG): void;
    /**
     * Select a container
     * @param {$} el element
     * @param {boolean} sel true to select
     * @param {boolean} add add to selection or reset
     * @function
     */
    selectContainer(el?: JSVG, sel?: boolean, add?: boolean): void;
    /**
     * Brings element to front/back of its layer
     * @param {Object} x Node/Container
     * @param {boolean} front true to bring to front, false to back
     * @function
     */
    bringToLayer(x: DiagramNode | DiagramContainer, front: boolean): void;
    /** Mouse position in desktop (or absolute position) */
    mouseDeskPos(e: JQuery.Event, abs?: boolean): Point;
    /** Mouse position in SVG scale */
    mousePos(e: JQuery.Event): Point;
    /** Convert desk point to SVG scale */
    point2svg(pos: Point): Point;
    /** Convert desk rect to SVG scale */
    rect2svg(rect: Rect): Rect;
    /** Convert SVG point to desk */
    svg2point(pos: Point): Point;
    /** Convert SVG point to desk */
    svg2rect(rect: Rect): Rect;
    private mouseWheel;
    dragPos?: MousePos;
    dragMovePos?: Point;
    lasso?: JSVG;
    movePointPos?: DeskElementPos;
    moveElementPos?: DeskElementPos;
    resizeElementPos?: DeskElementPos;
    addLinkPos?: DeskElementPos;
    private mouseDown;
    private mouseMove;
    private mouseUp;
    private dblClick;
    private drawLasso;
    moveElements(el: DiagramElement | JQuery, x: number, y: number, rel?: boolean): void;
    moveSelectedContainers(x: number, y: number, rel?: boolean): void;
    moveSelectedNodes(x: number, y: number, rel?: boolean): void;
    moveNodes(nodes: DiagramNode | JQuery, x: number, y: number, rel?: boolean): void;
    /**
     * Node/Container magnetism when grid is active
     * @function
     */
    magnetism(node?: JQuery): void;
    private keydown;
    /**
     * Change desktop zoom
     * @param {number} zoom zoom factor
     * @param {number} tx optional translated x origin
     * @param {number} ty optional translated y origin
     * @function
     */
    setZoom(zoom?: number | null, tx?: number, ty?: number): void;
    /**
     * Zoom at position (default center of desk)
     * @function
     */
    zoom(z: number, pos?: Point): void;
    /**
     * Zoom IN
     * @param factor factor in percent (default +5%)
     * @function
     */
    zoomIn(factor?: number): void;
    /**
     * Zoom OUT
     * @param factor factor in percent (default 5%)
     * @function
     */
    zoomOut(factor?: number): void;
    /**
     * Reset zoom to scale 1
     * @function
     */
    zoomReset(): void;
    /**
     * Adjust scale to see all content in x>0 and y>0
     * @param {boolean} origin true to zoom and return to origin
     * @function
     */
    zoomFit(origin?: boolean): void;
    /**
     * Search elements in model
     * @function
     */
    search(): void;
    /**
     * scroll element to view center
     * @param el element to show
     * @param slide true to add a transition effect
     * @function
     */
    scrollIntoView(el: HTMLElement, slide?: boolean): void;
    /**
     * Full size with body elements
     * @function
     */
    getBound(): {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    private buildDef;
    /**
     * Add definition to SVG
     * @function
     */
    addDef(def: JSVG, replace?: boolean): void;
    /**
     * Add base64 icon to defs: inlined image for standalone usage (export to image, svg+xml...)
     * @function
     */
    addDefIcon(icon: string, w: number, h: number, cbk?: (img: JSVG) => void): void;
    /**
     * Remove icon definition
     * @function
     */
    removeDefIcon(icon: string, w: number, h: number): void;
    /**
     * Get defined icon
     * @function
     */
    getDefIcon(icon: string, w: number, h: number): JSVG;
    /**
     * Add base64 image to defs: inlined image for standalone usage (export to image, svg+xml...)
     * @function
     */
    addDefImage(name: string, url: string, w: number, h: number, cls: string, cbk?: (img: JSVG) => void): void;
    /**
     * Convert font icon to PNG definition
     * @function
     */
    addDefImageFont(name: string, icon: string, w: number, h: number, cls: string, cbk?: (img: JSVG) => void): void;
    /**
     * Remove image definition
     * @function
     */
    removeDefImage(name: string, w: number, h: number): void;
    /**
     * Get defined image
     * @function
     */
    getDefImage(name: string, w: number, h: number): JSVG;
    /**
     * Display the grid
     * @param {number} size Grid size (0 or false = hide)
     * @function
     */
    showGrid(size?: number | false): void;
    /**
     * Change background color
     * @function
     */
    setBackgroundColor(c: string): void;
    private chooseBckColor;
    private btn;
    searchButton?: JQuery;
    private palettes;
    editContainer(cont: DiagramContainer | null, pos?: Point): void;
    updateContainer(cont: DiagramContainer | null, data: DiagramContainerDef): DiagramContainer | null;
    addContainer(data: DiagramContainer, cbk?: (cont: DiagramContainer) => void): void;
    /**
     * Add a note in diagram
     * @param {Object} data note data { x,y,w,h,text }
     * @function
     */
    addNote(data: DiagramNoteData): void;
    getCaption(): JQuery<HTMLElement>;
    addCaption(item: DiagramCaption): void;
    removeCaption(): void;
    toggleCaption(x?: number, y?: number): void;
    moveCaption(x: number, y: number, rel?: boolean): void;
    syncCaption(): void;
    getLinkIconName(type: number, useCrowsFeet?: boolean): string;
    /**
     * Popup to ask user to select a link template between nodes
     * @function
     */
    linkTemplatePicker(list: DiagramLinkTemplate[], from: DiagramNode, to: DiagramNode, pos: Point, cbk: (selected: DiagramLinkTemplate, inverse?: boolean) => void): void;
    /**
     * Shape selection
     * @function
     */
    shapePicker(node: DiagramNode, cbk: (title: string | undefined, position?: TitlePosition) => void): void;
    /**
     * Ensure absolute div to be visible on desk
     * @function
     */
    ensureVisible(d: JQuery): void;
    closeMenu(): void;
    moveMenu(): void;
    private deskmenu;
    private palObj;
    private addContainerPos;
    private addNotePos;
    palTree(node: DiagramNode): void;
    private palSprings;
}

/**
 * Print preview / split large images
 * @class
 */
declare class DiagramPrint {
    desktop: DiagramDesktop;
    image?: JQuery<HTMLImageElement>;
    previewPart?: JQuery;
    previewCanvas?: JQuery<HTMLCanvasElement>;
    canvas?: HTMLCanvasElement;
    popup?: JQuery;
    selFormat?: JQuery;
    selOrient?: JQuery;
    inpZoom?: JQuery;
    inpSlider?: JQuery;
    zoom: number;
    format: string;
    landscape: boolean;
    wPage?: number;
    hPage?: number;
    cols: number;
    rows: number;
    FORMAT: KeyObject;
    MARGIN: number;
    DPI: number;
    WIDTH: number;
    HEIGHT: number;
    constructor(desktop: DiagramDesktop);
    /**
     * Open print dialog
     * @funtion
     */
    open(): void;
    private bar;
    private readInput;
    private setZoom;
    private onePage;
    private fitPage;
    private doPreview;
    private toPixels;
    private pageSize;
    private preview;
    private doPrint;
}

type DiagramModelerTemplate = {
    id?: string;
    name?: string;
    nodes?: {
        [name: string]: DiagramNodeTemplate;
    };
    containers?: {
        [name: string]: DiagramContainerTemplate;
    };
    links?: {
        [name: string]: DiagramLinkTemplate;
    };
    canUseGrid?: boolean;
    canUseTitle?: boolean;
    canReverseLink?: boolean;
    canUseContainer?: boolean;
    canUseFreeContainer?: boolean;
    canUseNote?: boolean;
    canUseSprings?: boolean;
    canAttachContainer?: boolean;
    canUseTree?: boolean;
    canUseShape?: boolean;
    script?: string;
    canInsertNode?: (template: DiagramNodeTemplate) => boolean;
    canCreateNode?: (template: DiagramNodeTemplate) => boolean;
    canRemoveNode?: (template: DiagramNodeTemplate) => boolean;
    canDeleteNode?: (template: DiagramNodeTemplate) => boolean;
    canFetchNode?: (template: DiagramNodeTemplate) => boolean;
    canInsertContent?: (template: DiagramNodeContentTemplate) => boolean;
    canCreateContent?: (template: DiagramNodeContentTemplate) => boolean;
    canRemoveContainer?: (template: DiagramContainerTemplate) => boolean;
    canDeleteLink?: (template: DiagramLinkTemplate) => boolean;
    canAddLink?: (template: DiagramLinkTemplate) => boolean;
    customDesktopMenu?: () => DesktopMenuItem[];
    customNodeMenu?: (node: DiagramNode, item: DiagramNodeContentItem, pos: Point) => DesktopMenuItem[];
    customLinkMenuAdd?: (from: DiagramNode, to: DiagramNode, palette: JQuery) => void;
};
/**
 *
 * Model controller between Model servlet and desktop/palette/events
 * @class
 */
declare class DiagramModeler {
    modelId: string;
    template: DiagramModelerTemplate;
    root: string;
    baseURL: string;
    hidden?: boolean;
    topui: UIEngine;
    engine: DiagramEngine;
    container?: Container;
    desktop?: DiagramDesktop;
    springs?: DiagramSprings;
    printer?: DiagramPrint;
    saving: boolean;
    constructor(modelId: string, engine: DiagramEngine);
    private getObject;
    /**
     * Open a model
     * @param {Object} ctn container
     * @param {function} cbk optional callback(diagram)
     * @param {Object} p options
     * @param {boolean} p.sync synchronize all nodes with DB?
     * @function
     */
    open(ctn: Container, cbk?: (diagram: DiagramModeler) => void, p?: ModelParam): void;
    listener(): void;
    onMessage(_: KeyObject): void;
    /**
     * Generic hook call if exists in template
     * @param {string} hook hook name defined as a function in template
     * @param {function} cbk optional callback (to be called at the end of hook)
     * @param {Array} params optional parameters
     * @function
     */
    hook(hook: string, cbk?: any, params?: any): any;
    /**
     * Save the model
     * @param {function} cbk optional callback
     * @param {boolean} silent no alert?
     * @function
     */
    save(cbk?: (err?: string) => void, silent?: boolean): void;
    /**
     * Detach diagram from Parent/Popup window
     * @param {boolean} dock true to dock on parent window
     * @function
     */
    detach(dock: boolean): void;
    /**
     * Close the diagram
     * @param {boolean} confirm confirm save when has changed, auto-save if false
     * @function
     */
    close(confirm: boolean): void;
    bindSaveAndQuit(ctn: JQuery): void;
    /**
     * Can close the modeler
     * @param {boolean} confirm confirm save when has changed, auto-save if false
     * @param {function} cbk callback if closeable
     * @function
     */
    canClose(confirm?: boolean, cbk?: Callback): void;
    /**
     * Content has changed ?
     * @param {boolean} b optional flag to set the value
     * @function
     */
    hasChanged(b?: boolean): boolean;
    /**
     * Image dialog with SVG source
     * @function
     */
    imageSVG(): void;
    /**
     * Print preview
     * @function
     */
    print(): void;
    /**
     * Ajax call to retrieve node data
     * @param {Object} n { object, id, template, keys }
     * @param {function} cbk
     * @function
     */
    getNodeData(n: {
        object: string;
        id: string;
        template: string | KeyObject;
        keys?: string | object;
    }, cbk: (node?: DiagramNode | DiagramContainer) => void): void;
    /**
     * Insert nodes
     * @param {Object} list Array of { object, id, template, x, y }
     * @param {function} cbk Optional callback(nodes)
     * @function
     */
    insertNodes(list: KeyObject, cbk?: (nodes: DiagramNode[]) => void): void;
    /**
     * Insert one node or a container
     * @param {Object} item { object, id, template, x, y, keys, container? }
     * @param {function} cbk Optional callback(node)
     * @function
     */
    insertNode(item: {
        object: string;
        id: string;
        template: string | DiagramNodeTemplate;
        x: number;
        y: number;
        keys?: string | object;
        container?: boolean;
    }, cbk?: (node?: DiagramNode | DiagramContainer) => void): void;
    /**
     * Reload element from DB
     * @param {Simplicite.Diagram.Element} node node (or jquery node)
     * @param {function} cbk optional callback
     * @param {boolean} partial only get data without loading UI node
     * @function
     */
    reloadNode(node: DiagramElement | JQuery, cbk?: (data?: DiagramNode | DiagramContainer) => void, partial?: boolean): void;
    /**
     * Reload a container from DB
     * @param {Simplicite.Diagram.Container} ct container (or jquery node)
     * @param {function} cbk optional callback
     * @function
     */
    reloadContainer(ct: DiagramContainer | JQuery, cbk?: Callback): void;
    /**
     * Reload all elements from DB
     * @param {function} cbk optional callback
     * @function
     */
    reload(cbk?: Callback): void;
    /**
     * Select objects and insert them on desktop
     * @param {string} tpl node/container template
     * @param {Point} pos position {x,y}
     * @param {boolean} cont container ? or node
     * @function
     */
    selectObjects(tpl: DiagramNodeTemplate | DiagramContainerTemplate, pos?: Point, cont?: boolean): void;
    /**
     * Launch a node/container creation in UI
     * @param {string} tpl node template
     * @param {Poisition} pos position {x,y}
     * @param {boolean} cont container ? or node
     * @function
     */
    createNode(tpl: DiagramNodeTemplate, pos: Point, cont?: boolean): void;
    /**
     * Delete node from DB + UI
     * @function
     */
    deleteNode(node: DiagramNode, silent?: boolean): void;
    /**
     * Delete link from DB + UI
     * @function
     */
    deleteLink(link: DiagramLink, silent?: boolean): void;
    /**
     * Update fields thru Ajax
     * @function
     */
    upd(obj: string, id: string, fields: {
        field: string;
        value: any;
    }[], cbk?: Callback): void;
    /**
     * Delete object thru Ajax
     * @function
     */
    del(obj: string, id: string, cbk?: Callback): void;
    /**
     * Call action on object form
     * @function
     */
    forceUIAction(obj: string, id: string, action: string): void;
    /**
     * Select content to add in node
     */
    selectNodeContent(node: DiagramNode, c: DiagramNodeContentTemplate): void;
    insertNodeContents(node: DiagramNode, items?: KeyObject[]): void;
    insertNodeContent(node: DiagramNode, item: KeyObject, cbk?: Callback): void;
    createContentLink(n: DiagramNode, t: DiagramNodeContentTemplate, id: string, cbk?: Callback): void;
    addNodeContent(n: DiagramNode, c: DiagramNodeContentTemplate): void;
    /**
     * Fetch related nodes
     * @param {Array} nodes arrays of nodes or data
     * @param {function} cbk Optional callback(nodes)
     * @function
     */
    fetchRelatedNodes(nodes?: DiagramNode[] | JQuery, cbk?: (inserted?: DiagramNode[]) => void): void;
    /**
     * Create a link between 2 nodes (or note to node)
     * @function
     */
    createLink(from: DiagramNodus, to: DiagramNode, t?: DiagramLinkTemplate): JSVG | undefined;
    /**
     * Create a N,N link between 2 internal objects
     * @function
     */
    createLinkMany2Many(from: DiagramNode, to: DiagramNode, cbk?: (node?: DiagramNode | DiagramContainer) => void): void;
    /**
     * Bind events to element
     */
    bind(el: any, b: {
        mouseWheel?: JQueryHandler;
        mouseDown?: JQueryHandler;
        mouseMove?: JQueryHandler;
        mouseUp?: JQueryHandler;
        mouseOut?: JQueryHandler;
        mouseOver?: JQueryHandler;
        mouseLeave?: JQueryHandler;
        contextMenu?: JQueryHandler;
        click?: JQueryHandler;
        dblClick?: JQueryHandler;
    }): void;
    /**
     * Open target or related model form
     * @param {Object} target optional <code>{ object, id }</code>
     * @function
     */
    openForm(target?: {
        object: string;
        id: string;
    } | JSVG): void;
    /**
     * Open workflow on top window
     * @param {string} name workflow name
     * @function
     */
    openWorkflow(name: string): void;
    /**
     * Load the template definition
     * @function
     */
    loadTemplate(cbk?: Callback): void;
    /**
     * Load model
     * @param {function} cbk post load function
     * @function
     */
    loadModel(cbk: (model: string) => void): void;
    /**
     * Get SVG inlined styles
     * @function
     */
    getStyles(): string | undefined;
    /**
     * Get model data
     * @function
     */
    info(cbk: (data: DiagramCaption) => void): void;
    /**
     * Nodes self-placement with Springs layout
     * @param {Object} data false to disable, or the $(svg) or the springs properties
     * @function
     */
    layoutSprings(data: boolean | DiagramSpringsParam | JSVG): void;
}

type DiagramModelers = {
    [modeId: string]: DiagramModeler;
};
type DiagramWindows = {
    [modeId: string]: Window;
};
type ModelParam = {
    docked?: boolean;
    popup?: boolean;
    hidden?: boolean;
    sync?: boolean;
    fetch?: boolean;
    module?: string;
    nodes?: DiagramNode[];
};
/**
 * Diagrams controller
 * @class
 */
declare class DiagramEngine {
    readonly models: DiagramModelers;
    readonly windows: DiagramWindows;
    /** SVG styles */
    styles?: string;
    constructor();
    /**
     * Open a SVG diagram
     * @function
     */
    private openSVG;
    /**
     * Open a diagram
     * @param {string} modelId model row ID
     * @param {Object} options <code>\{ name, docked, hidden, sync \}</code>
     * @param {function} cbk optional callback(model)
     * @function
     */
    open(modelId: string, options?: ModelParam, cbk?: (model: DiagramModeler) => void): void;
    /**
     * Detach diagram from Parent/Popup window
     * @param {string} modelId model row ID
     * @param {boolean} dock true to dock diagram on parent window, false to open a new window
     * @function
     */
    detach(modelId: string, dock: boolean): void;
    /**
     * Save a diagram
     * @param {string} modelId model row ID
     * @param {function} cbk optional callback
     * @function
     */
    save(modelId: string, cbk?: Callback): void;
    /**
     * Close a diagram
     * @param {string} modelId model row ID
     * @param {boolean} confirm false to auto-save
     * @function
     */
    close(modelId: string, confirm?: boolean): void;
    /**
     * Update models with incoming object
     * @function
     */
    update(obj: string | BusinessObject, id: string, action: string): void;
    /**
     * Notify UI events (CRUD on objects)
     * @function
     */
    notify(e: NotifyObject): void;
    /**
     * Helper to create a new SVG business model, user must have access to ModelTemplate (read) and Model (create).
     * @param {string} template Model template name
     * @param {string} name     Model name
     * @param {Object} options  Model options
     * @param {boolean} options.docked true to dock the model on the main page (default new window)
     * @param {boolean} options.hidden true to hide the model in a silent mode
     * @param {Array}   options.nodes  optional array of nodes to insert <code>\{ object, id, template, x, y \}</code>
     * @param {boolean} options.fetch  true to fetch related nodes
     * @param {boolean} options.module Optional module Id or name
     * @param {function} cbk Callback(diagram)
     * @function
     */
    create(template: string, name: string, options: ModelParam, cbk: (diagram: DiagramModeler) => void): void;
    /**
     * Models picker and creation
     * @param {jQuery} ctn Container
     * @param {Object} params options { embedded }
     * @function
     */
    picker(ctn: Container, params?: KeyObject): void;
}

/** Data of the WebPush service */
interface WebPushData {
    /** VAPID public key of the server */
    vapidKey?: string;
}
/**
 * WebPush controller
 */
declare class WebPush {
    /** URL of the service worker */
    worker: string;
    constructor();
    /** WebPush service */
    service(data?: WebPushData): void;
    /** Init webpush connection */
    init(data?: WebPushData): this;
    /** request permission to use WebPush API */
    requestPermission(reg: ServiceWorkerRegistration, data: WebPushData): void;
    private check;
    private urlB64ToUint8Array;
}

/** Recipients of a Firebase notification: lists of logins and groups, or 'all' users */
type FirebaseRecipients = {
    users?: string[];
    groups?: string[];
} | "all";
/** Firebase message or notification (from FCM, the service worker or the native app) */
interface FirebaseMessage {
    /** Optional embedded message */
    notification?: FirebaseMessage;
    /** Message body */
    body?: string;
    /** Optional title */
    title?: string;
    /** Optional priority */
    priority?: "high" | "normal" | "low";
    /** Optional icon */
    icon?: string;
    /** Optional color */
    color?: string;
    /** Optional origin */
    from?: string;
    /** Tapped by the user in foreground or background */
    tap?: "foreground" | "background";
    /** Background message already displayed in the system tray */
    _background?: boolean;
    /** Optional object name to open (or in data) */
    object?: string;
    /** Optional object row ID to open (or in data) */
    rowId?: string;
    /** Optional pairs of key-value */
    data?: KeyObject & {
        /** Optional object name to open */
        object?: string;
        /** Optional object row ID to open */
        rowId?: string;
    };
}
/** Data of the Firebase service */
type FirebaseServiceData = FirebaseMessage & {
    /** Config to init the plugin (see FIREBASE_CONFIG) */
    config?: KeyObject;
    /** Key needed for the Firebase authentication */
    vapidKey?: string;
    /** Device token of the user to refresh */
    token?: string;
    /** Message to send */
    message?: string;
    /** Message recipients */
    to?: FirebaseRecipients;
};
/**
 * Firebase controller
 */
declare class Firebase {
    worker: string;
    messaging?: KeyObject;
    constructor();
    /**
     * Firebase service wrapper
     * @param data service data, see {@link FirebaseServiceData}
     */
    service(data?: FirebaseServiceData): void;
    /**
     * Init firebase connection
     * @param config to init plugin (see FIREBASE_CONFIG)
     * @param vapidKey needed for firebase authent
     */
    init(config: KeyObject, vapidKey?: string): this | undefined;
    /**
     * Display a message
     * @param m message or notification
     * @param m.notification optional embedded message
     * @param m.body message body
     * @param m.title optional title
     * @param m.priority optional priority 'high' | 'normal' | 'low'
     * @param m.data optional pairs of key-value
     */
    showMessage(m: FirebaseMessage): void;
    /**
     * Refresh a device token on server-side
     * @param token new token for the user
     */
    refreshToken(token: string): void;
    /**
     * Request user permission to be notified
     */
    requestPermission(): void;
}

/** Options of the speech recognition */
interface SpeechRecognitionParam {
    /** Language (ex: FRA, ENU or fr-FR, en-GB...) */
    lang?: string;
    /** Continuous speaking (sentence)? */
    continuous?: boolean;
    /** Continuous speaking (no timeout after long silence)? */
    autoRestart?: boolean;
    /** Get interim results? */
    interimResults?: boolean;
    /** Max alternatives search */
    maxAlternatives?: number;
    /** First character uppercase in a sentence? */
    firstCapital?: boolean;
    /** Accept new line symbol? */
    newLine?: boolean;
    /** Optional handler when started */
    onStart?: () => void;
    /** Optional handler when ended */
    onEnd?: () => void;
    /** Optional handler on error */
    onError?: (e: Event) => void;
    /** Optional handler to override change event */
    onChange?: () => void;
    /** Optional console info */
    debug?: boolean;
}
/** Options of the speech synthesis */
interface SpeechSynthesisParam {
    /** Preferred language FRA, ENU... */
    lang?: string;
    /** Optional voice name to force if exists */
    voice?: string;
    /** Service URI, default native */
    uri?: string;
    /** 0 to 1, default 1 */
    volume?: number;
    /** 0.1 to 10, default 1 */
    rate?: number;
    /** 0 to 2, default 1 */
    pitch?: number;
    /** Optional handler when started */
    onStart?: () => void;
    /** Optional handler when ended */
    onEnd?: () => void;
    /** Optional console info */
    debug?: boolean;
}
/**
 * Web Speech API
 */
declare class Speech {
    CMD: KeyObject;
    SpeechRecognition: any;
    voice?: SpeechSynthesisVoice;
    readonly VOICES: KeyObject;
    constructor();
    /**
     * Get language ISO
     * @param l language FRA, ENU...
     * @returns ISO code (ex fr-FR)
     */
    langISO(l: string): string;
    /**
     * New SpeechRecognition if exists
     */
    createSpeechRecognition(): any;
    /**
     * Speech recognition
     * @param el Element input or textarea
     * @param options Options
     * @param options.lang Language (ex: FRA, ENU or fr-FR, en-GB...)
     * @param options.continuous Continuous speaking (sentence)?
     * @param options.autoRestart Continuous speaking (no timeout after long silence)?
     * @param options.interimResults Get interim results?
     * @param options.maxAlternatives Max alternatives search
     * @param options.firstCapital First character uppercase in a sentence?
     * @param options.newLine Accept new line symbol?
     * @param options.onStart Optional handler when started
     * @param options.onEnd Optional handler when ended
     * @param options.onError Optional handler on error
     * @param options.onChange Optional handler to override change event
     * @param options.debug Optional console info
     */
    recognition(el: JQuery, options?: SpeechRecognitionParam): void;
    /**
     * Get browser voices
     * @param ss speechSynthesis
     * @param cbk callback(voices)
     */
    getVoices(ss: SpeechSynthesis, cbk: (voices: SpeechSynthesisVoice[]) => void): void;
    /**
     * Find a voice matching language
     * @param voices supported voices
     * @param lang Language FRA, ENU...
     * @param use Try to use this voice if supported
     */
    getVoice(voices: SpeechSynthesisVoice[], lang: string, use?: string): SpeechSynthesisVoice | undefined;
    /**
     * Speech synthesis (experimental)
     * @param el Text or input or textarea
     * @param options Options
     * @param options.lang Preferred language FRA, ENU...
     * @param options.voice Optional voice name to force if exists
     * @param options.uri Service URI, default native
     * @param options.volume 0 to 1, default 1
     * @param options.rate 0.1 to 10, default 1
     * @param options.pitch 0 to 2, default 1
     * @param options.onStart Optional handler when started
     * @param options.onEnd Optional handler when ended
     * @param options.debug Optional console info
     */
    speak(el: JQuery, options?: SpeechSynthesisParam): void;
    /**
     * Start to speech
     * @param msg - Message to read
     */
    speakStart(msg: SpeechSynthesisUtterance): void;
    /**
     * Stop current speech
     */
    speakStop(): void;
}

/** Server and client information sent with a feedback */
interface FeedbackData {
    /** Browser */
    browser: {
        /** User agent */
        userAgent: string;
    };
    /** User */
    user: {
        /** Login */
        login: string;
        /** Language */
        lang: string;
        /** Email */
        email?: string;
        /** Responsibilities */
        resp: string;
    };
    /** Application */
    app: {
        /** Name */
        name: string;
        /** Version */
        version: string;
    };
    /** Platform */
    platform: {
        /** Name */
        name: string;
        /** Version */
        version: string;
        /** Build */
        build: string;
        /** Encoding */
        encoding: string;
    };
    /** Server */
    server: {
        /** Vendor */
        vendor: string;
        /** Version */
        version: string;
        /** Database driver */
        dbdriver: string;
        /** Date */
        date: string;
    };
    /** Java */
    java: {
        /** Vendor */
        vendor: string;
        /** Version */
        version: string;
    };
    /** Operating system */
    os: {
        /** Name */
        name: string;
        /** Version */
        version: string;
        /** Architecture */
        archi: string;
    };
}
/** Feedback to send */
interface FeedbackParam {
    /** Email */
    fbk_email: string;
    /** Type: `Q` question, `R` change request, `D` defect, `F` fatal */
    fbk_type: string;
    /** Description */
    fbk_desc: string;
    /** Base64 screen image */
    screen?: string;
}
/** Feedback dialog with an annotated screenshot */
declare class Feedback {
    /** Width of the screenshot */
    readonly WIDTH = 1024;
    private ctn?;
    private dlg?;
    private screen?;
    /** Open the feedback */
    open(): this;
    /** When feedback popup is loaded */
    ready(): this;
    /** Close the popup */
    close(): this;
    /** Send data and close */
    send(): this;
    /** Hide/Show the screenshot */
    hide(): this;
    /** Crop a part of screen */
    crop(): this;
    /** Highlight a part of screen */
    light(): this;
    /** Mask a part of screen */
    mask(): this;
    /** Clear canvas */
    reset(): this;
    /** Toggle edit buttons */
    toggle(id?: string): this;
    /** Edit mode 1=crop, 2=highlight, 3=mask */
    getMode(): 0 | 1 | 2 | 3;
    /** Show/Hide edit buttons */
    showEditButtons(vis: boolean): void;
    /** Canvas management */
    drawCanvas(screen?: string): this;
    /**
     * Build the content of the dialog.
     * @returns The dialog content
     */
    getContent(): JQuery<HTMLElement>;
}

/** News item */
interface News {
    /** Row ID */
    id?: string;
    /** Row ID */
    row_id?: string;
    /** Title */
    title?: string;
    /** Title (field name) */
    nws_title?: string;
    /** Description */
    description?: string;
    /** Description (field name) */
    nws_description?: string;
    /** Image */
    image?: DocumentDB;
    /** Image (field name) */
    nws_image?: DocumentDB;
    /** Publication date */
    date?: string;
    /** Publication date (field name) */
    nws_date?: string;
}
/**
 * Web news: popup on logon and footer ticker,
 * reloaded every 5 min without SSE when the tab is visible
 */
declare class WebNews {
    /** Ticker refresh timer */
    private timer?;
    /** Ticker has been started (and not stopped) */
    private started;
    /**
     * Start the news when granted: popup on logon + footer ticker
     */
    start(): void;
    /**
     * Display the footer ticker and start the refresh timer without SSE
     */
    private startTicker;
    /**
     * Pause the ticker refresh (page hidden)
     */
    pause(): void;
    /**
     * Restart and refresh the ticker if it was started (page restored)
     */
    resume(): void;
    /**
     * Stop the ticker refresh
     */
    stop(): void;
    /**
     * SSE handler for incoming news
     * @param n News
     */
    onNews(n: KeyObject): void;
}

/**
 * UI Component
 * @typeParam Def Type of the definition (metadata)
 * @typeParam RenderParam Type of the rendering options
 * @typeParam InitParam Type of the init/destroy context
 */
declare class UIComponent<Def = unknown, RenderParam = unknown, InitParam = unknown> {
    /** Component parent container */
    ctn: Container;
    /** Definition */
    def: Def;
    /** Event handlers */
    handlers?: KeyHash<JQueryHandler[]>;
    /** Component element */
    element?: JQuery<HTMLElement>;
    /** UI engine (`$ui`, backward compatibility V6) */
    ui: UIEngine;
    /** UI viewer (`$view`, backward compatibility V6) */
    view: UIViewer;
    /** Session (`$app`, backward compatibility V6) */
    app: Session;
    /** User grant (`$grant`, backward compatibility V6) */
    grant: Grant;
    /**
     * Constructor
     * @param ctn Component container
     * @param def Component definition
     */
    constructor(ctn: Container, def: Def);
    /**
     * Add an event handler, bound by `rebind`.
     * @param event Event name
     * @param handler Handler
     * @returns This component
     */
    addHandler(event: string, handler: JQueryHandler): this;
    /**
     * Remove an event handler.
     * @param event Event name
     * @param handler Handler to remove (all handlers of the event if undefined)
     * @returns This component
     */
    removeHandler(event: string, handler: JQueryHandler): this;
    /**
     * Bind all the handlers on a target.
     * @param target Target element
     * @returns This component
     */
    rebind(target: HTMLElement | JQuery): this;
    /**
     * Bind UI event
     * @param event event name (change, keydown...)
     * @param handler related handler
     */
    on(event: string, handler: JQueryHandler): this;
    /** compat alias */
    bind(event: string, handler: JQueryHandler): this;
    /**
     * Unbind UI event
     * @param event event name (change, keydown...)
     * @param handler related handler
     */
    off(event: string, handler: JQueryHandler): this;
    /** compat alias */
    unbind(event: string, handler: JQueryHandler): this;
    /**
     * Bind 'change' event
     * @param param change handler to set or change context to trigger (ex: from a 'populate')
     */
    change(param?: string | JQueryHandler): this;
    /**
     * Bind 'keyup' event
     * @param handler related handler
     */
    keyup(handler?: JQueryHandler): this;
    /**
     * Bind 'focus' event
     * @param handler related handler
     */
    focus(handler?: JQueryHandler): this;
    /**
     * Bind 'blur' event
     * @param handler related handler
     */
    blur(handler?: JQueryHandler): this;
    /**
     * Init component when displayed on screen
     * @param _options Context
     */
    init(_options?: InitParam): this;
    /**
     * Render the component
     * @param _options Rendering options
     * @returns element
     */
    render(_options?: RenderParam): JQuery;
    /**
     * Destroy component before closing
     * @param _p Context
     */
    destroy(_p?: InitParam): this;
}

/** Action button associated to field input */
type FieldAddon = JQuery | Addon;
/** Rendering options and context of a field */
interface FieldParam {
    /** Display the label? */
    showLabel?: boolean;
    /** Display the help? */
    showHelp?: boolean;
    /** Context list? */
    list?: boolean;
    /** Context form */
    form?: JQuery;
    /** Current tabs on form */
    formTab?: KeyObject;
    /** Field of inlined link? */
    inline?: boolean;
    /** Optional parent object */
    parent?: ParentObject;
    /** Extended form? */
    isExtended?: boolean;
    /** Has more field flag */
    hasMore?: boolean;
    /** HTML input type (defaults to text) */
    inputtype?: string;
    /** HTML input mode */
    inputmode?: string;
    /** Buttons of the referenced fields (not used by the default rendering) */
    refb?: KeyObject | null;
    /** Promises to wait before the end of rendering (see `$ui.addPromise`) */
    promises?: Promise<unknown>[];
}
/** Search input of a field */
interface FieldSearch {
    /** Prefix element */
    prefix?: JQuery;
    /** Input */
    input: JQuery;
    /** Action buttons */
    addons?: FieldAddon[] | null;
}
/** Options of the field search input (see drawSearch) */
interface DrawSearchOptions {
    /** Search by field of list header */
    searchby?: boolean;
    /** Search handler (with the keyup event: search on Enter only) */
    search?: (e?: JQuery.Event) => void;
    /** Read-only search (fixed filter) */
    readonly?: boolean;
}
/**
 * UI Field: common behavior for simple textual field.
 * Other types are inherited from this class to specialize the rendering.
 */
declare class UIField extends UIComponent<ObjectField, FieldParam, FormParam | ListParam> {
    /** Optional business object */
    obj: UIBusinessObject | null;
    /** Field definition */
    field: ObjectField;
    /** Same as field, backward compat */
    def: ObjectField;
    /**
     * Input dom ID: incremental to be unique in page.
     * ZZZ no more used by UI except in related <label for="id">
     */
    id: string;
    /** Input name <field.name>[_id<index>], unique in container */
    name: string;
    /** Related edit-list rowId, action/extobj name... */
    index?: string;
    /** All controls (input/textarea/select) associated to the field rendering */
    input: JQuery<HTMLElement>;
    /** Same as input for 6.3 compat */
    element: JQuery<HTMLElement>;
    /** True=editable field, false=search field */
    form?: boolean;
    /** Input file of document */
    file?: HTMLInputElement;
    /**
     * UI Field: common behavior for textual types
     * @param ctn container
     * @param obj Object
     * @param field Field
     * @param index optional edit list index = rowId, or inlined field foreignkey, or confirm action name
     */
    constructor(ctn: Container, obj: UIBusinessObject | null, field: ObjectField, index?: string);
    /**
     * Set the UI field index
     * @param index optional field index: edit list rowId, action name, foreignkey of inlined field, external object...
     */
    setIndex(index?: string): void;
    /**
     * Get all controls related to field (inputs, select, textarea)
     * - use the "name" because unique in the field container (form, list...)
     * - no more based on unique "id" in page / incremental / non determinist
     * @returns field UI elements
     */
    find(_checked?: boolean): JQuery;
    /**
     * Get the UI value converted to service
     * @returns the service value
     */
    val(): FieldValue | undefined;
    /**
     * Set a service value to UI and to the field of object
     * @param v Value (service syntax)
     * @returns itself
     */
    val(v: FieldValue): this;
    /**
     * Apply a UI function to all referenced fields
     * @param f field
     * @param fn function to apply
     * @param args function arguments
     */
    cascad(f: ObjectField, fn: string, ...args: unknown[]): void;
    /**
     * Show/Hide UI field
     * @param vis visibility ?
     * <ul>
     * <li>true/false</li>
     * <li>Simplicite.VIS_HIDDEN</li>
     * <li>Simplicite.VIS_BOTH</li>
     * <li>Simplicite.VIS_FORM</li>
     * <li>Simplicite.VIS_LIST</li>
     * </ul>
     * @param slide true to add a slide effect
     * @param context optional Simplicite.CONTEXT_*
     */
    visible(vis: boolean | number, slide?: boolean, context?: number, toRef?: boolean): this;
    /**
     * Enable/Disable UI field
     * @param upd updatable ? true/false or Simplicite.UPD_READ_ONLY|ALWAYS|FORM_ONLY|LIST_ONLY
     * <ul>
     * <li>true/false</li>
     * <li>Simplicite.UPD_READ_ONLY</li>
     * <li>Simplicite.UPD_ALWAYS</li>
     * <li>Simplicite.UPD_FORM_ONLY</li>
     * <li>Simplicite.UPD_LIST_ONLY</li>
     * </ul>
     */
    updatable(upd: boolean | number): this;
    /**
     * Set required UI field
     * @param req is required ?
     */
    required(req: boolean): this;
    /**
     * Bind 'focus' event or set the focus on field
     * @param handler optional handler
     */
    focus(handler?: JQueryHandler): this;
    /**
     * Read the form field into object field (async/file reading)
     * @returns Promise
     */
    read(): Promise<FieldValue>;
    /**
     * Init field components when displayed on screen
     * @param _p context parameters of the form or the list
     */
    init(_p?: FormParam | ListParam): this;
    /**
     * Display the field
     * @param disp optional display 'full' (default = label+input+help) | 'label' | 'input' | 'preview' | 'value' | 'help' | 'image'
     * @param p rendering options and context
     * @returns Rendered control
     */
    display(disp?: null | FieldDisplay, p?: FieldParam): string | JQuery;
    /**
     * Render the value only
     * @param v field value
     * @returns rendered read-only value, default returns field.displayValue(v,true)
     */
    renderValue(v: FieldValue, _item?: EnumItem | null): string | JQuery;
    /**
     * Render the object field with label/help and styles
     * @param options rendering options and context
     * @param options.showLabel display the label?
     * @param options.showHelp display the help?
     * @param options.list context list?
     * @param options.form context form?
     * @param options.formTab current tabs on form
     * @param options.inline field of inlined link?
     * @param options.parent optional parent object
     * @param options.isExtended extended form?
     * @param options.hasMore has more field flag
     * @returns Rendered control
     */
    render(options?: FieldParam): JQuery;
    /**
     * Draw the UI controls: input + addon buttons
     * @param options Options
     * @param options.inputtype HTML input type (defaults to text)
     * @param options.inputmode HTML input mode
     */
    draw(options?: {
        inputtype?: string;
        inputmode?: string;
    }): JQuery;
    /**
     * Draw the UI input only
     * @param options Options
     * @param options.inputtype HTML input type (defaults to text)
     * @param options.inputmode HTML input mode
     */
    drawInput(options?: {
        inputtype?: string;
        inputmode?: string;
    }): JQuery;
    /**
     * Build a form group with input and addon buttons (help, ref picker, datamap...)
     * @param inp Input control
     * @param addons Optional addons
     * @param ext Optional extended controls to add beyond the form group
     * @returns .field-container
     */
    drawGroup(inp: JQuery, addons?: FieldAddon[], ext?: JQuery[]): JQuery;
    /**
     * Redraw the UI field at same place and rebind events
     */
    redraw(): this;
    /**
     * Render the search field and addon buttons
     * @param filter Filter value
     * @param options Options
     * @param options.search Search handler
     * @param options.searchby Search by field of list header?
     * @param options.searchbyfocus set the focus?
     */
    renderSearch(filter?: FieldFilter | null, options?: {
        search?: Callback;
        searchby?: boolean;
        searchbyfocus?: boolean;
    }): JQuery;
    /**
     * Draw the input of field search
     * @returns Single input or complex <code>\{ prefix, input, addons \}</code> or array <code>[\{ prefix, input, addons \}...]</code>
     */
    drawSearch(filter: string, options?: DrawSearchOptions): JQuery | FieldSearch | FieldSearch[];
    /**
     * Read the search form into object filters
     * @param ctn container with .search-control
     * @param o Object to set filters
     * @param noRemove True to keep filter with default <code>'%'</code>
     */
    static readSearch(ctn: Container, o: BusinessObject, noRemove?: boolean): void;
    /**
     * Get the field case style
     */
    caseStyle(): string;
    /**
     * Reload and redraw all linked lists
     * @param all get all linked values when field is empty (case of search)
     */
    linkedLists(all?: boolean): void;
    /**
     * Helper to assist common filter expression
     * @param f object field
     * @param input search input to assist
     * @param type helper type 'number', 'string' or 'date'
     * @param onOk optional callback(expression)
     */
    searchHelper(f: ObjectField, input: JQuery, type: string, onOk: (expr: string) => void): void;
    /**
     * Return a simple clipboard icon, copying the given value to clipboard
     * @param ctn
     * @param obj
     * @param field
     * @param index
     * @param btn Optional button to complete
     */
    static buttonClipboard: (ctn: Container, obj: UIBusinessObject | null, field: ObjectField, index: string | undefined, btn?: JQuery) => JQuery<HTMLElement>;
    /**
     * Copy a value to the clipboard and show a toast.
     * @param v Value to copy
     */
    static clipboard(v: unknown): void;
    /**
     * Bind a debounced listener that refreshes the value-dependent style on change
     */
    onStyleChange(): this;
    /**
     * Refresh the value-dependent field style by calling the back-end `getStyle`,
     * swap the style class on the enclosing `.form-group`
     * and fire a `ui.field.style` event so concerned elements (e.g. progress bar) can react.
     * @param value Service value to evaluate the style for (defaults to the current UI value)
     * @returns the resolved style
     */
    refreshStyle(value?: string): Promise<string>;
}

/** Button of a dialog */
type DialogAction = Omit<Action, "name" | "callback"> & {
    /** Action name is not mandatory */
    name?: string;
    /** Handler on click */
    callback?: AlertCallback;
    /** Alias for action "callback" */
    click?: AlertCallback;
};
/** Parameters of a dialog (see `$tools.dialog`) */
interface DialogParam {
    /** Optional name */
    name?: string;
    /** Optional dialog title (rich content) */
    title?: AnyContent;
    /** Contextual help */
    help?: AnyContent;
    /** Optional type `error`, `danger`, `warning` or `info` */
    type?: AlertType;
    /** Dialog body */
    content?: AnyContent;
    /** Optional footer */
    footer?: AnyContent;
    /** True to add a close button in header */
    closeable?: boolean;
    /** True to focus the primary, success or first button (default true for ENTER key), or a selector element to focus */
    focus?: boolean | string;
    /** False to remove fade effect (default true) */
    fade?: boolean;
    /** True to disable click outside dialog and ESC keyboard button */
    modal?: boolean;
    /** Optional scrollable body (default true) */
    scrollable?: boolean;
    /** True to handle dialog move (handle = header), or a selector of the handle element */
    moveable?: boolean | string;
    /** True to create a new navigation in dialog */
    nav?: boolean;
    /** True to add scrollbars */
    overflow?: boolean;
    /** Optional width (ex: '600px' or '80%'), forced to 100% on XS device */
    width?: string | number;
    /** Optional fullscreen size */
    fullscreen?: boolean;
    /** Optional 'left' or 'right' slide with swipe event */
    slide?: "right" | "left" | null;
    /** Optional header actions */
    buttonsHeader?: JQuery | DialogAction[] | null;
    /** Optional footer actions */
    buttons?: JQuery | DialogAction[] | null;
    /** Optional callback when displayed */
    onload?: JQueryHandler;
    /** Optional callback when closing (use preventDefault to cancel) */
    beforeunload?: JQueryHandler;
    /** Optional callback when closed */
    unload?: JQueryHandler;
    /** Optional "don't ask again" callback */
    dontAskAgain?: (action: string) => void;
}
/** Tab of a tabs component */
interface Tab {
    /** Tab title */
    title?: string | JQuery;
    /** Tooltip */
    tooltip?: string;
    /** Icon name */
    icon?: string;
    /** Tab content */
    content?: AnyContent;
    /** Hidden tab */
    hidden?: boolean;
    /** Handler when the tab is selected */
    click?: JQueryHandler;
    /** Handler when the tab is hidden */
    hide?: JQueryHandler;
    /** Tab key */
    key?: string;
    /** Tab data */
    data?: KeyObject;
}
/** Parameters of a tabs component (see `$tools.tabs`) */
interface Tabs {
    /** Tabs ID */
    id: string;
    /** Tabs options */
    tabs?: Tab[];
    /** Selected tab index (default 0) */
    selected?: number;
    /** Tabs position `top` (default), `left`, `right` or `bottom` */
    position?: Position;
    /** Vertical tabs (same as position left) */
    vertical?: boolean;
    /** Underlined tab style */
    underline?: boolean;
    /** Optional class to add */
    cls?: string;
    /** Optional handler to allow drag */
    ondrag?: (li: JQuery) => void;
    /** Optional handler to allow drop, `cbk` confirms the move */
    ondrop?: (move: {
        li: JQuery;
        from: number;
        to: number;
    }, cbk: (confirm: boolean) => void) => void;
    /** Tabs in an overflow dropdown */
    overflow?: {
        /** Label of the overflow dropdown */
        show: string;
        /** Icon of the overflow dropdown */
        icon?: string;
    };
}
/** Item of a dropdown or an input addon */
interface InputAddon extends Omit<Addon, "label" | "cbk"> {
    /** Label */
    label: string;
    /** Reset item */
    reset?: boolean;
    /** Edit item */
    edit?: boolean;
    /** Handler on click */
    cbk?: Callback;
    /** Alias */
    callback?: Callback;
    /** Alias */
    click?: Callback;
}
/** Item of a dropdown */
type DropdownItem = InputAddon;
/** Any addon: element, field addon or input addon */
type AnyAddon = Container | FieldAddon | InputAddon;
/** Parameters of a button (see `$tools.button`) */
interface Button {
    /** Button optional ID */
    id?: string;
    /** Button name */
    name?: string;
    /** Icon */
    icon?: AnyContent | null;
    /** Button label */
    label?: AnyContent;
    /** Optional screen reader only text */
    sr?: string | null;
    /** Optional tooltip */
    tooltip?: string;
    /** Optional size */
    size?: ActionSize | null;
    /** Optional level (ex: `primary`, `secondary`, `plus`) */
    level?: ActionLevel;
    /** Optional additional CSS class(es) */
    style?: string;
    /** Optional type (ex: `submit` default, `button`) */
    type?: string;
    /** Disabled button */
    disabled?: boolean;
    /** Handler on click */
    click?: JQueryHandler;
}
/** Level of an alert */
type AlertLevel = "help" | "info" | "success" | "warning" | "danger";
/**
 * Bootstrap V5 Tools
 */
declare class Bootstrap5 {
    /** Bootstrap library, set when loaded */
    bootstrap: typeof BootstrapLib;
    /**
     * Load bootstrap libs
     */
    load(cbk?: Callback): Promise<this>;
    /**
     * Home is displayed
     */
    ready(): this;
    /**
     * Bootstrap full version (e.g. <code>5.1.3</code>)
     * @example
     * $console.log("Bootstrap " + $tools.getVersion());
     */
    getVersion(): string;
    /**
     * Get UI template
     */
    getTemplate(d?: {
        template?: string;
    }): JQuery<HTMLElement>;
    /**
     * Init a container with bootstrap elements
     * @param ctn form container
     * @example
     * // Init tooltips/popovers of a custom content
     * const c: JQuery = $("<div/>").html('<span title="Hello" data-bs-toggle="tooltip">?</span>').appendTo(ctn);
     * $tools.init(c);
     */
    init(ctn: Container): void;
    /**
     * Destroy bootstrap elements
     * @param ctn form container
     * @example
     * $tools.destroy(c);
     */
    destroy(ctn: Container): void;
    /**
     * Simple checkbox or radio
     * @param d Options
     * @param d.id Input id
     * @param d.name Input name
     * @param d.value Hidden value
     * @param d.label Label
     * @param d.inline Inlined in form?
     * @param d.disabled Disabled?
     * @param d.readonly Readonly?
     * @param d.checked Checked?
     * @param d.change Optional handler
     * @param d.type Type <code>'checkbox'</code> (default) or <code>'radio'</code>
     * @example
     * const cb: JQuery = $tools.check({
     * 	id: "myAccept",
     * 	name: "accept",
     * 	label: "I accept the terms",
     * 	change: function (this: HTMLElement) { $console.log($(this).prop("checked")); }
     * });
     * ctn.append(cb);
     */
    check(d: {
        id?: string;
        name?: string;
        value?: string;
        label?: AnyContent;
        inline?: boolean;
        disabled?: boolean;
        readonly?: boolean;
        checked?: boolean;
        change?: JQueryHandler;
        type?: "checkbox" | "radio";
    }): JQuery<HTMLElement>;
    /**
     * Simple radio
     * @param d Options
     * @param d.id Input id
     * @param d.name Input name
     * @param d.value Hidden value
     * @param d.label Label
     * @param d.inline Inlined in form?
     * @param d.disabled Disabled?
     * @param d.readonly Readonly?
     * @param d.checked Checked?
     * @param d.change Optional handler
     * @param d.type Forced to "radio"
     * @example
     * ctn.append(
     * 	$tools.radio({ id: "sizeS", name: "size", value: "S", label: "Small", inline: true, checked: true }),
     * 	$tools.radio({ id: "sizeL", name: "size", value: "L", label: "Large", inline: true })
     * );
     */
    radio(d: {
        id?: string;
        name?: string;
        value?: string;
        label?: AnyContent;
        inline?: boolean;
        disabled?: boolean;
        readonly?: boolean;
        checked?: boolean;
        change?: JQueryHandler;
        type?: "radio";
    }): JQuery<HTMLElement>;
    /**
     * Toogle checked class on an array of checkboxes/radio buttons's parent element
     * @param elts Array of checkboxes/radio buttons
     * @example
     * $tools.toggleChecked($("input[name='size']", ctn));
     */
    toggleChecked(elts?: JQuery<HTMLInputElement>): void;
    /**
     * Get responsive image (.img-fluid)
     * @param src Source
     * @param onload optional callback
     * @param onerror optional error callback
     * @example
     * ctn.append($tools.image($app.imageURL("MyObject", "myObjImage", rowId, docId), () => $console.log("loaded")));
     */
    image(src?: string, onload?: JQueryHandler, onerror?: JQueryHandler): JQuery<HTMLImageElement>;
    /**
     * Long description of an image (displayed in a11y mode only, see a11y.less)
     * @param text optional description
     * @param id optional id (to be referenced by the image aria-describedby)
     */
    imageLongDesc(text?: string, id?: string): JQuery;
    /**
     * Link search rendering (for N,N pillbox)
     * @param ctn Search container
     * @param o Business object
     * @param link N,N link
     * @param filter Current filter
     * @param options Search options
     * @param options.search Search handler
     * @param options.searchby Search by field of list header
     */
    displayLinkSearch(ctn: Container, o: BusinessObject, link: Link, filter: string | null, options?: {
        search?: () => void;
        searchby?: boolean;
    }): "" | JQuery<HTMLElement>;
    /**
     * Dialog box
     * @param params String content or object
     * @param params.name Optional name
     * @param params.title Optional dialog title (rich content)
     * @param params.help Contextual help
     * @param params.type Optional <code>error|danger|warning|info</code>
     * @param params.content Dialog body
     * @param params.closeable True to add a close button in header
     * @param params.focus True to focus the primary, success or first button (default true for ENTER key), or a selector element to focus
     * @param params.fade False to remove fade effect (default true)
     * @param params.modal True to disable click outside dialog and ESC keyboard button
     * @param params.scrollable Optional scrollable body (default true)
     * @param params.moveable True to handle dialog move (handle = header), or a selector of the handle element
     * @param params.nav True to create a new navigation in dialog
     * @param params.overflow True to add scrollbars
     * @param params.width Optional width (ex: '600px' or '80%'), forced to 100% on XS device
     * @param params.fullscreen Optional fullscreen size
     * @param params.slide Optional 'left|right' with swipe event
     * @param params.buttonsHeader Optional header actions
     * @param params.buttons Optional footer actions [{ name, label, icon, style:'primary|secondary|success|info|danger', callback (or click), close:true|false, disabled:true|false }]
     * @param params.footer Optional footer
     * @param params.onload Optional callback when displayed
     * @param params.beforeunload Optional callback when closing (use preventDefault to cancel)
     * @param params.unload Optional callback when closed
     * @param params.dontAskAgain Optional 'dont't ask again' callback
     * @example
     * const dlg = $tools.dialog({
     * 	title: "My dialog",
     * 	content: $("<div/>").text("Hello world !"),
     * 	closeable: true,
     * 	// each button closes the dialog by default (unless close: false)
     * 	buttons: [{
     * 		name: "OK",
     * 		label: $T("OK"),
     * 		style: "primary",
     * 		close: false,
     * 		callback: () => {
     * 			$console.log("clicked");
     * 			$tools.dialogClose(dlg); // explicitly close the dialog
     * 		}
     * 	}, {
     * 		name: "CANCEL",
     * 		label: $T("CANCEL"),
     * 		style: "secondary"
     * 	}]
     * });
     */
    dialog(params: string | DialogParam): JQuery;
    /**
     * Find a visible dialog
     * @param dlg optional dialog, name or "all", or returns the top level dialog if unset
     * @example
     * const dlg: JQuery = $tools.getDialog(); // top level dialog
     */
    getDialog(dlg?: string | JQuery): JQuery;
    /**
     * Is the dialog modal (no keyboard ESC and no close button) ?
     * @param dlg optional name or top level dialog if unset
     * @example
     * if (!$tools.isDialogModal(dlg)) $tools.dialogClose(dlg);
     */
    isDialogModal(dlg: string | JQuery): boolean;
    /**
     * Close the dialog box
     * @param dlg name or modal, undefined = close the top dialog if unset, "all" = close all
     * @param cbk optional callback when dialog is closed
     * @example
     * // Close the top dialog, or all dialogs
     * $tools.dialogClose();
     * $tools.dialogClose("all", () => $console.log("closed"));
     */
    dialogClose(dlg?: string | JQuery, cbk?: JQueryHandler): JQuery<HTMLElement>;
    /**
     * Icon button
     * @param p Optional parameters
     * @param p.name Action name
     * @param p.title Icon title
     * @param p.icon Icon name (default <code>'star'</code>)
     * @param p.click Handler on click or Enter
     * @param p.right True to pull on right side
     * @example
     * ctn.append($tools.spanIcon({ name: "refresh", title: "Refresh", icon: "fas/sync", click: () => $view.reload() }));
     */
    spanIcon(p: {
        name?: string;
        title?: string;
        icon?: string;
        click?: JQueryHandler;
        right?: boolean;
    }): JQuery<HTMLElement>;
    /**
     * Icon button
     * @param p Optional parameters
     * @param p.name Action name
     * @param p.title Icon title
     * @param p.icon Icon name (default <code>'star'</code>)
     * @param p.click Handler on click or Enter
     * @param p.right True to pull on right side
     * @param p.cls Optional extra class name(s)
     * @param p.label Optional accessible name if different from the title (e.g. feature name for a toggle whose title is the switch)
     * @param p.pressed Optional toggle state (sets <code>aria-pressed</code>), to be updated with <code>buttonIconState</code>
     * @example
     * // Toggle button
     * const b: JQuery = $tools.buttonIcon({
     * 	name: "myFav",
     * 	title: "Add to favorites",
     * 	icon: "far/star",
     * 	pressed: false,
     * 	click: () => $tools.buttonIconState(b, { icon: "fas/star", pressed: true, title: "Remove from favorites" })
     * });
     * ctn.append(b);
     */
    buttonIcon(p: {
        name?: string;
        title?: string;
        id?: string;
        icon?: string;
        click?: JQueryHandler;
        right?: boolean;
        cls?: string;
        pressed?: boolean;
        label?: string;
    }): JQuery<HTMLElement>;
    /**
     * Update the state of a toggle button built with <code>buttonIcon</code>
     * (icon = current state, <code>aria-pressed</code> = status, title = next switch)
     * @param b Button
     * @param s New state
     * @param s.icon New icon (current state)
     * @param s.pressed New status
     * @param s.title New title
     * @example
     * $tools.buttonIconState(b, { icon: "fas/star", pressed: true, title: "Remove from favorites" });
     */
    buttonIconState(b: JQuery, s: {
        icon?: string;
        pressed?: boolean;
        title?: string;
    }): JQuery<HTMLElement>;
    /**
     * Icon button
     * @param p Optional parameters
     * @param p.name Action name
     * @param p.title Title as HTML tooltip
     * @param p.subtitle Optional Subtitle
     * @param p.placement Tooltip placement (default <code>'bottom'</code>)
     * @param p.icon Icon name
     * @param p.disabled Icon disabled?
     * @param p.size Optional size (e.g. <code>'xs'</code>, <code>'sm'</code>, <code>'lg'</code>)
     * @param p.click Handler
     * @example
     * ctn.append($tools.actionIcon({
     * 	name: "myExport",
     * 	title: "Export",
     * 	subtitle: "CSV format",
     * 	icon: "fas/download",
     * 	click: () => $ui.displayExport(null, obj)
     * }));
     */
    actionIcon(p: {
        name?: string;
        title?: AnyContent;
        subtitle?: string | null;
        placement?: Position;
        icon?: AnyContent;
        disabled?: boolean;
        size?: string;
        click?: JQueryHandler | null;
    }): JQuery<HTMLElement>;
    /**
     * Flatten grouped menu items with dividers between groups
     * @param items Array of item groups (li)
     * @example
     * const li = (label: string): JQuery => $("<li/>").append($("<a class='dropdown-item'/>").text(label));
     * const items: JQuery[] = $tools.actionMenuItems([[li("Copy"), li("Paste")], [li("Delete")]]);
     */
    actionMenuItems(items: (JQuery<HTMLElement>[])[]): JQuery[];
    /**
     * Create a 'plus' button
     * @param items Array of items (li)
     * @param right Align popup to the right of button
     * @param dropUp On top?
     * @example
     * // "plus" menu with 2 groups separated by a divider, aligned to the right
     * const plus: JQuery | null = $tools.actionPlus([[li("Copy"), li("Paste")], [li("Delete")]], true);
     * plus && ctn.append(plus);
     */
    actionPlus(items: (JQuery<HTMLElement>[])[], right?: boolean, dropUp?: boolean): JQuery | null;
    /**
     * Create a button
     * @param p Options
     * @param p.id Button optional id
     * @param p.name Button name (attribute data-action and class 'btn-')
     * @param p.icon Optional icon name (e.g. <code>'fas/search'</code>) or icon
     * @param p.label Button label
     * @param p.tooltip Optional tooltip
     * @param p.sr Optional screen reader only
     * @param p.click Optional callback
     * @param p.size Optional size (e.g. <code>'xs'</code>, <code>'sm'</code>, <code>'lg'</code>, <code>'icon'</code>)
     * @param p.level Optional level (e.g. <code>'primary'</code>, <code>'secondary'</code>, <code>'plus'</code>)
     * @param p.style Optional additional CSS class(es)
     * @param p.type Optional type (e.g. <code>'submit'</code> default, <code>'button'</code>)
     * @param p.disabled Disabled?
     * @example
     * ctn.append($tools.button({
     * 	name: "mySearch",
     * 	label: $T("SEARCH"),
     * 	icon: "fas/search",
     * 	level: "primary",
     * 	type: "button",
     * 	click: () => $ui.displaySearch(null, "MyObject")
     * }));
     */
    button(p: Button): JQuery;
    /**
     * Button of action
     * @param a Action <code>\{ name, label, level, primary, icon, help, showLabel, toState, custom, enabled, disabled, style, background, size \}</code>
     * @param o Business Object
     * @param rowid Optional row ID
     * @param click Handler
     * @param minified Hide label?
     * @example
     * // Button of an object action in a custom toolbar
     * const a: Action | undefined = obj.getAction("MyObjSendOrder");
     * a && $("#toolbar", ctn).append($tools.actionButton(a, obj, obj.getRowId(), (act: Action, o: UIBusinessObject, id?: string | null) => $ui.doAction(act, o, id)));
     */
    actionButton(a: Action, o: UIBusinessObject, rowid?: string | null, click?: ActionHandler, minified?: boolean): JQuery<HTMLElement>;
    /**
     * Progress bar: creates the bar or updates an existing one.
     * <br>Value and text can be refreshed later by the event <code>ui.progressbar</code>:
     * <pre>const pb = $tools.progressBar("mybar", 0, null, undefined, "Loading...");
     * pb.trigger("ui.progressbar", [50, "Processing..."]); // value + text
     * pb.trigger("ui.progressbar", [100]); // value only, the text is kept</pre>
     * @param name Progress element or name
     * @param p Value in percent [0..100]
     * @param style Optional style to apply on the bar
     * @param ctn Optional container to search the bar when name is not the element
     * @param text Optional text displayed above the bar (the bar must be in the DOM to display it)
     * @returns Progress element <code>.progress</code>
     * @example
     * const pb: JQuery = $tools.progressBar("myBar", 0, "bg-success");
     * ctn.append(pb);
     * pb.trigger("ui.progressbar", [50, "Processing..."]);
     */
    progressBar(name: AnyContent, p?: number, style?: string | null, ctn?: Container, text?: string): JQuery<HTMLElement>;
    /**
     * Hack to make a drop-down inside responsive table visible
     */
    dropdownVisible(p: JQuery, eventOpen?: string, eventClose?: string): {
        /** Handler to call when the drop-down opens */
        onOpen: Callback;
        /** Handler to call when the drop-down closes */
        onClose: Callback;
    };
    /**
     * Simple panel (implemented with card)
     * @param params Parameters <code>\{ id, title, icon, content, hidden, collapsed, onCollapsed, footer \}</code>
     * @param params.id Panel ID
     * @param params.title Optional title or header
     * @param params.icon Optional icon name
     * @param params.content Body
     * @param params.hidden Hidden?
     * @param params.collapsed Collapsed?
     * @param params.onCollapsed Optional collapse handler(body, collapsed)
     * @param params.footer Optional footer
     * @example
     * // Collapsible panel
     * ctn.append($tools.panel({
     * 	id: "myPanel",
     * 	title: "Details",
     * 	icon: "fas/info-circle",
     * 	content: $("<p/>").text("Hello world"),
     * 	collapsed: false,
     * 	onCollapsed: (body: JQuery, collapsed: boolean) => $console.log(collapsed)
     * }));
     */
    panel(params: {
        id?: string;
        title?: AnyContent;
        icon?: string;
        content?: AnyContent;
        hidden?: boolean;
        collapsed?: boolean;
        onCollapsed?: (body: JQuery, collapsed: boolean) => void;
        footer?: AnyContent;
    }): JQuery<HTMLElement>;
    /**
     * card/panel alias
     */
    card: (params: {
        id?: string;
        title?: AnyContent;
        icon?: string;
        content?: AnyContent;
        hidden?: boolean;
        collapsed?: boolean;
        onCollapsed?: (body: JQuery, collapsed: boolean) => void;
        footer?: AnyContent;
    }) => JQuery<HTMLElement>;
    /**
     * Manage collapsible panels as accordion
     * @param ctn Container of panels .collapse
     * @example
     * // Only one panel open at a time
     * $tools.accordion($("#myPanels", ctn));
     */
    accordion(ctn: JQuery): JQuery<HTMLElement>;
    /**
     * Return a simple help icon with a popover or a dialog when help is too long
     * @param name Button name
     * @param help Text or html
     * @param title Optional title of dialog
     * @param btn Optional button to complete
     * @example
     * const help: JQuery | undefined = $tools.buttonHelp("myHelp", "Amount <b>without</b> taxes", "Amount");
     * help && $("label[for='myAmount']", ctn).append(help);
     */
    buttonHelp(name: string, help: string, title?: string, btn?: JQuery): JQuery | undefined;
    /**
     * Return a compliance hint icon with a popover or a dialog when the hint is too long
     * Works exactly as HELP but with `field.complianceHint` as source
     * @param name Button name
     * @param hint Text or html
     * @param title Optional title of dialog
     * @param btn Optional button to complete
     * @example
     * const hint: JQuery | undefined = $tools.buttonComplianceHint("myHint", "Personal data: kept 3 years (GDPR)");
     * hint && $("label[for='myEmail']", ctn).append(hint);
     */
    buttonComplianceHint(name: string, hint: string, title?: string, btn?: JQuery): JQuery | undefined;
    /**
     * Simple tabs
     * @param params Parameters
     * @param params.id Tab ID
     * @param params.selected Selected tab index (default <code>0</code>)
     * @param params.tabs Tabs options <code>\{ title, tooltip, icon, content, hidden, click, key, data \}</code>
     * @param params.position Tabs position 'top' as default, 'left', 'right' or 'bottom'
     * @param params.vertical Vertical tabs (same as position:left) ?
     * @param params.underline Underlined tab style
     * @param params.cls Optional class to add
     * @param params.ondrag Optional handler <code>function(li,cbk)</code> to allow drag
     * @param params.ondrop Optional handler <code>function(\{li, from, to\ }, cbk)</code> to allow drop
     * @param params.overflow no wrap tabs, overflow hidden tabs in a dropdown, with keys:
     * `show` (bring hidden tab visible at 'first' or 'last' position, always triggers a ui.tab.click) and
     * `icon` (dropdown icon, default simple caret)
     * @example
     * const t: JQuery = $tools.tabs({
     * 	id: "myTabs",
     * 	selected: 0,
     * 	tabs: [
     * 		{ title: "General", icon: "fas/home", content: $("<div/>").text("Tab 1") },
     * 		{ title: "Details", key: "details", content: $("<div/>").text("Tab 2"), click: () => $console.log("shown") }
     * 	]
     * });
     * ctn.append(t);
     */
    tabs(params: Tabs): JQuery;
    /**
     * Add a tab
     * @param t Existing .tabs
     * @param tab Tab options
     * @param tab.title tab title
     * @param tab.content tab content
     * @param tab.tooltip Optional tooltip
     * @param tab.icon optional icon name
     * @param tab.hidden is the tab hidden?
     * @param tab.hide optional handler on bootstrap hide event 'hide.bs.tab'
     * @param tab.click optional handler when tab is shown on bootstrap event 'shown.bs.tab'
     * @param tab.key optional anchor DOM property 'data-key'
     * @param tab.data optional jQuery 'data' to add to anchor
     * @param active Activate this tab?
     * @returns tab = li.nav-item + tab-pane
     * @example
     * $tools.addTab(t, { title: "History", key: "history", content: $("<div/>") }, true);
     */
    addTab(t: JQuery, tab: Tab, active?: boolean): {
        /** Tab item `li.nav-item` */
        tab: JQuery<HTMLElement>;
        /** Tab content `div.tab-pane` */
        tabpane: JQuery<HTMLElement>;
    };
    /**
     * Set a tab content
     * @param t Tabs
     * @param index Tab index or tab data-key
     * @param content HTML content
     * @example
     * $tools.setTabContent(t, "history", $("<p/>").text("No history"));
     */
    setTabContent(t: JQuery, index: number | string, content: AnyContent): void;
    /**
     * Get a tab container
     * @param t Tabs
     * @param index Tab index or tab data-key
     * @example
     * // Display a list in the pane of the tab "details"
     * $ui.displayList($tools.getTabPane(t, "details"), "MyChild", { embedded: true });
     */
    getTabPane(t: JQuery, index: number | string): JQuery<HTMLElement>;
    /**
     * Get the active tab anchor with data
     * @param t Tabs
     * @example
     * const active: JQuery = $tools.getTabActive(t);
     * $console.log(active.data("key"));
     */
    getTabActive(t: JQuery): JQuery<HTMLElement>;
    /**
     * Set the active tab anchor
     * @param t Tabs
     * @param index Tab index or tab data-key
     * @example
     * $tools.setTabActive(t, 1);
     */
    setTabActive(t: JQuery, index: number | string): void;
    /**
     * Get the tab anchors with data
     * @param t Tabs
     * @param s Optional anchor selector
     * @example
     * $tools.getTabs(t).each((i: number, a: HTMLElement) => $console.log($(a).text()));
     */
    getTabs(t: JQuery, s?: string): JQuery<HTMLElement>;
    /**
     * Is the tabs empty?
     * @param t Tabs
     * @param s Optional anchor selector
     * @example
     * if ($tools.isEmptyTabs(t)) t.hide();
     */
    isEmptyTabs(t: JQuery, s?: string): boolean;
    /**
     * Remove a tab
     * @param t Tabs
     * @param index Tab index or tab data-key
     * @param prev Click on previous (or next) tab if exists
     * @example
     * // Remove the tab and activate the previous one
     * $tools.removeTab(t, "history", true);
     */
    removeTab(t: JQuery, index: number | string, prev?: boolean): void;
    /**
     * Show/Hide empty tabs and ensure to activate a non-empty tab
     * @param t Tabs
     * @param fn Optional function to test if a tab is visible
     * @param cls Class 'hidden' or 'empty' to hide the tab
     * @returns True if the tabs is visible = contains something visible
     * @example
     * // Hide the tabs without visible content
     * $tools.showTabs(t, (pane: JQuery) => pane.children(":visible").length > 0, "empty");
     */
    showTabs(t: JQuery, fn?: (tabPane: JQuery) => boolean, cls?: 'hidden' | 'empty'): boolean;
    /**
     * Show/hide a tab in a tabs and ensure to activate a visible tab
     * @param t Tabs
     * @param id Tab ID
     * @param show False to hide the tab
     * @example
     * // Hide the tab of a pane (by pane ID)
     * $tools.showTab(t, $tools.getTabPane(t, "details").attr("id") || "", false);
     */
    showTab(t: JQuery, id: string, show?: boolean): void;
    /**
     * Focus one element and active/expand tabs/collapsed parents
     * @param el Element to focus
     * @example
     * // Focus a field even inside a collapsed panel or an inactive tab
     * $tools.focus($("#myAmount", ctn));
     */
    focus(el: JQuery): void;
    /**
     * Add/Replace a badge counter to tab
     * @param tab Tab href or any tab content element
     * @param val Badge value (no badge if null)
     * @example
     * $tools.tabBadge($tools.getTabPane(t, "details"), 12);
     * // remove the badge
     * $tools.tabBadge($tools.getTabPane(t, "details"), null);
     */
    tabBadge(tab: JQuery, val: number | string | null): JQuery<HTMLElement> | null;
    /**
     * Simple alert content
     * @param html HTML content
     * @param level Optional <code>help|info|success|warning|danger</code>
     * @example
     * ctn.append($tools.alert("The record is <b>locked</b>", "warning"));
     */
    alert(html: AnyContent, level?: AlertLevel): JQuery<HTMLElement>;
    /**
     * Simple help
     * @param h Content as safe HTML (any script is ignored)
     * @example
     * ctn.append($tools.help("Fill the <b>amount</b> without taxes"));
     */
    help(h: AnyContent): JQuery<HTMLElement>;
    /**
     * Simple info
     * @param h Content
     * @example
     * ctn.append($tools.success("Order sent"));
     */
    success(h: AnyContent): JQuery<HTMLElement>;
    /**
     * Simple info
     * @param h Content
     */
    info: (h: AnyContent) => JQuery<HTMLElement>;
    /**
     * Simple warning
     * @param h Content
     * @example
     * ctn.append($tools.warning("Stock is low"));
     */
    warning(h: AnyContent): JQuery<HTMLElement>;
    /**
     * Simple error
     * @param h Content
     * @example
     * ctn.append($tools.danger("Payment refused"));
     */
    danger(h: AnyContent): JQuery<HTMLElement>;
    /**
     * Simple error
     * @param h Content
     */
    error: (h: AnyContent) => JQuery<HTMLElement>;
    /**
     * Inlined message alert
     * @param m String or <code>\{ level, label \}</code>
     * @example
     * ctn.append($tools.message({ level: "W", text: "Check the delivery date" }));
     */
    message(m: MessageAny): JQuery;
    /**
     * Create a dropdown button
     * @param elt Optional left side of button
     * @param btn The button to convert to dropdown
     * @param items List of elements <code>$</code>
     * 				or items <code>\{ name, label, icon, cbk|callback|click, and custom data... \}</code> stored in anchor in <code>data('item')</code>
     * @param right Align popup on right side of button
     * @param dropUp True to drop on the top of button
     * @param caret Display a caret on the right side of button?
     * @param autoclose true(default) | inside | outside | false
     * @example
     * // Dropdown with actions
     * const btn: JQuery = $tools.button({ name: "myMenu", label: "Actions", type: "button" });
     * ctn.append($tools.dropdown(null, btn, [
     * 	{ name: "copy", label: "Copy", icon: "fas/copy", click: () => $console.log("copy") },
     * 	{ name: "delete", label: "Delete", icon: "fas/trash", click: () => $console.log("delete") }
     * ], true));
     */
    dropdown(elt: JQuery | null, btn: JQuery, items?: null | AnyAddon[], right?: boolean, dropUp?: boolean, caret?: boolean, autoclose?: boolean | string): JQuery<HTMLElement>;
    /**
     * Create a dropdown button with a non-list (div) popup container.
     * Like dropdown(), but for content that isn't a set of menu items
     * (e.g. a fieldset of checkboxes, arbitrary form content).
     * @param elt Optional left side of button
     * @param btn The button to convert to dropdown
     * @param content Popup content (appended as-is into a div.dropdown-menu)
     * @param right Align popup on right side of button
     * @param dropUp True to drop on the top of button
     * @param caret Display a caret on the right side of button?
     * @param autoclose true(default) | inside | outside | false
     * @example
     * // Dropdown with free content (ex: options to check)
     * const opt: JQuery = $tools.button({ name: "myOptions", label: "Options", type: "button" });
     * ctn.append($tools.dropdownDiv(null, opt, $("<div class='p-2'/>").append($tools.check({ id: "myOpt1", label: "Option 1" })), false, false, true, "outside"));
     */
    dropdownDiv(elt: JQuery | null, btn: JQuery, content: AnyContent | JQuery[], right?: boolean, dropUp?: boolean, caret?: boolean, autoclose?: boolean | string): JQuery<HTMLElement>;
    /**
     * Create a dropup button
     * @param elt Optional left side of button
     * @param btn Toggle button
     * @param items List of <code>$</code> or action <code>\{ name, label, icon, cbk \}</code>
     * @param right Align popup on right side of button
     * @example
     * ctn.append($tools.dropup(null, btn, [{ name: "help", label: "Help", click: () => $ui.displayHelp(obj) }]));
     */
    dropup(elt: JQuery | null, btn: JQuery, items?: null | (Container | DropdownItem)[], right?: boolean): JQuery<HTMLElement>;
    /**
     * Create an input group with prefix and addons actions
     * @param inp Input element
     * @param addons Optional array of <code>$</code> or actions <code>\{ name, label, icon, plus, cbk \}</code>
     * @param prefix Optional prefix
     * @example
     * // Input with a prefix and a reset button
     * const inp: JQuery = $tools.input({ type: "text", id: "myCode", name: "myCode" });
     * ctn.append($tools.inputGroup(inp, [{ name: "reset", label: "Reset", icon: "fas/times", click: () => inp.val("") }], "#"));
     */
    inputGroup(inp: JQuery, addons?: AnyAddon[] | null, prefix?: string | JQuery): JQuery;
    /**
     * Form group of input
     * @param name Group name
     * @param label Optional label
     * @param inp Input group
     * @param msg Optional backend message
     * @param suggestCallback a suggestion callback, sets new value, returns old value
     */
    formGroup(name: string, label: AnyContent | null, inp: AnyContent, msg?: MessageJSON, suggestCallback?: (v: string) => string, msgId?: string): JQuery;
    /**
     * Form group for search form
     * @param cls Class
     * @param label Text
     * @param inp Input
     */
    formGroupSearch(cls: string, label: string, inp?: JQuery | string): JQuery;
    /**
     * Simple form group with boolean, select or text field
     * @param id input id
     * @param label field label
     * @param val field value
     * @param arg true for boolean, array of code/value, 'textarea'
     * @param col optional size from 1 to 12
     * @param addon optional addon
     * @param disabled false to disable input
     * @param multi true for enum multi
     * @example
     * // Text, boolean and select fields in a custom form
     * ctn.append(
     * 	$tools.simpleFormGroup("myName", "Name", ""),
     * 	$tools.simpleFormGroup("myActive", "Active", true, true),
     * 	$tools.simpleFormGroup("mySize", "Size", "M", [{ code: "S", value: "Small" }, { code: "M", value: "Medium" }]),
     * 	$tools.simpleFormGroup("myComment", "Comment", "", "textarea")
     * );
     */
    simpleFormGroup(id: string, label?: string, val?: string | number | boolean | string[] | null, arg?: true | string | EnumItem[] | 'textarea' | 'div' | null, col?: number, addon?: string | JQuery | null, disabled?: boolean | null, multi?: boolean): JQuery;
    /**
     * Input with attributes
     * @param a Object with attributes
     * @example
     * const email: JQuery = $tools.input({ type: "email", id: "myEmail", name: "email", placeholder: "name@example.com" });
     */
    input(a?: KeyObject): JQuery;
    /**
     * Select with options
     * @param a Object with attributes
     * @param o Array of <code>\{ value, label, data \}</code>
     * @example
     * const s: JQuery = $tools.select({ id: "mySize", name: "size" }, [
     * 	{ value: "S", label: "Small", data: {} },
     * 	{ value: "M", label: "Medium", data: {} }
     * ]);
     */
    select(a?: KeyObject, o?: {
        value: string;
        label: string;
        data: KeyObject;
    }[]): JQuery;
    /**
     * Create a row with columns
     * @param cols Array of columns
     * @example
     * // 2 columns on medium screens and more
     * ctn.append($tools.row([
     * 	$tools.col("md-6", $("<div/>").text("Left")),
     * 	$tools.col("md-6", $("<div/>").text("Right"))
     * ]));
     */
    row(cols?: AnyContent[]): JQuery;
    /**
     * Simple column
     * @param size Media-width: short syntax 'md-5' or long syntax 'col-lg-4 col-md-8', default 'col-12', 'xs-' is supported
     * @param content Optional content or array of contents
     * @example
     * $tools.col("col-lg-4 col-md-6", "Content");
     */
    col(size?: string, content?: string | JQuery | JQuery[]): JQuery;
    /**
     * Simple form
     * @param p Parameters <code>\{ name, inline, content, autocomplete, onsubmit \}</code>
     */
    form(p: {
        name?: string;
        inline?: boolean;
        content?: AnyContent;
        autocomplete?: string;
        onsubmit?: string;
    }): JQuery;
    /**
     * Add a tooltip to element
     * @param e Element
     * @param title Text or html
     * @param placement Optional, default 'bottom'
     * @param html HTML Title?
     * @example
     * $tools.tooltip($("#myAmount", ctn), "Amount without taxes", "top");
     */
    tooltip(e: JQuery, title: AnyContent, placement?: Position, html?: boolean): JQuery<HTMLElement>;
    /**
     * Init all tooltips and popovers
     * @param ctn optional container
     * @example
     * $tools.initTooltips(ctn);
     */
    initTooltips(ctn?: AnyContainer): this;
    /**
     * Hide all (remaining) tooltips and popovers
     * @param ctn optional container
     * @example
     * $tools.hideTooltips();
     */
    hideTooltips(ctn?: AnyContainer): this;
}

/** Legacy 6.3: 2 parts splitter */
interface SplitPart {
    /** Content */
    content?: Container | string;
    /** Resizable part */
    resizable?: boolean;
    /** Height */
    height?: string;
    /** Width */
    width?: string;
    /** Collapsible part */
    collapsible?: boolean;
    /** Collapsed part */
    collapsed?: boolean;
    /** Width of the splitter */
    splitWidth?: string;
    /** Height of the splitter */
    splitHeight?: string;
}
/** Target work area to load a content */
type LoadTargetArea = 'work_tab' | 'work_left' | 'work_right' | 'work_top' | 'work_bottom';
/** Options of a work area */
interface WorkAreaOptions {
    /** Work area ID */
    id?: number;
    /** TODO */
    noSplit?: boolean;
}
/** Context menu of a work tab */
interface WorkTabContextMenu {
    /** Split to right-side */
    split?: boolean;
    /** Close the tab */
    close?: boolean;
}
/** Workarea size when splitted */
interface WorkAreaSize {
    /** optional area width in px or rem (only applies on horizontal split) */
    width?: number | string;
    /** optional area height in px or rem (only applies on vertical split) */
    height?: number | string;
}
/** Serializable tab infos */
interface WorkTabInfos {
    /** required tab label */
    title: string;
    /** unique name to find the tab when requested with unique=true */
    name: string;
    /** unique tab? default true = if a tab with the same name already exists, activate it instead of creating a new one */
    unique?: boolean;
    /** can move the tab, default true */
    draggable?: boolean;
    /** add a close button to tab, default true */
    closeable?: boolean;
    /** optional context menu to split/close */
    contextmenu?: WorkTabContextMenu;
    /** add a .desk with navigation into container */
    navigation?: true | number;
    /** specific external URL from loadURL */
    url?: string;
}
/** New tab options */
type WorkTabOptions = WorkTabInfos & WorkAreaSize & {
    /** new 'tab' or position: 'left','top','right' or 'bottom' */
    position?: NewTabPosition;
    /** open in top-level area (default true, false = open in caller area) */
    toplevel?: boolean;
};
type WorkTab = WorkTabInfos & WorkAreaSize & {
    id: number;
    nav?: NavItem[];
    active?: boolean;
};
interface WorkTabs {
    tabs: WorkTab[];
}
interface WorkAreas {
    vertical?: true;
    areas: WorkAreaItem[];
}
interface WorkAreaItem {
    content: WorkAreas | WorkTabs;
    id?: number;
    width?: string;
    height?: string;
}
type WorkAreaSettings = WorkTabs | WorkAreas;
/**
 * Tools to split the work area
 */
declare class UISplitter {
    private worktabId;
    private navId;
    private defaultWorkArea;
    /** Work area min size */
    readonly MIN_SIZE = 300;
    private autoSave;
    private lastSaved;
    private saveKeyMulti;
    private saveKeyMono;
    private restoreKey;
    /**
     * Init splitter #work for media desktop only
     * @param scope current user scope
     */
    init(scope?: Scope): void;
    /**
     * Allows UI to be splittable. Preserved in localStorage.
     * @param enable optional to enable/disable
     * @returns true if the UI is splittable
     */
    static enabled(enable?: boolean): boolean;
    /**
     * Is splitted mode enabled?
     * @returns true if user is allowed to split work-areas
     */
    isEnabled(): boolean;
    /**
     * Build the WORKAREA sysparam save key
     * - "WORKAREA-SPLIT <scope> <login>" for the multi work-area (splitted) mode
     * - "WORKAREA-MONO <scope> <login>" for the single work-area mode
     * so that each scope / user / mode keeps and restores its own saved layout.
     * @param multi true for the multi work-area
     * @param login current user login (switched user or current login)
     * @param scope optional current user scope
     * @returns the suffixed key, e.g. "WORKAREA-SPLIT myscope johndoe"
     */
    private saveKeyName;
    /**
     * Build the user preference key to restore the work-areas on the current scope
     * @param login current user login (switched user or current login)
     * @param scope optional current user scope
     * @returns the suffixed key, e.g. "WORKAREA-RESTORE myscope johndoe"
     */
    private restoreKeyName;
    /**
     * User preference to restore the saved work-areas on the next load (current scope),
     * preserved in the user's parameter "WORKAREA-RESTORE <scope> <login>" (default true).
     * When disabled, the saved states are cleared and the home page is always displayed.
     * @param enable optional to enable/disable
     * @returns true if the work-areas are restored on the next load
     */
    restore(enable?: boolean): boolean;
    /**
     * Unset the legacy sysparams saved before
     * (to be removed in a future beta release)
     */
    private static removeLegacyKeys;
    /**
     * Scope preference to enable/disable the splitter mode,
     * preserved in localStorage key <code>splitter_\<scope\></code>
     * @param enabled true to enable, false to disable or undefined to get the current preference
     * @returns the current preference or null
     */
    static localPreference(scope?: Scope, enabled?: boolean): string | null;
    /**
     * Allows user to switch between 2 modes: mono work-area / multi work-areas
     * @param switchable optional to enable/disable
     * @returns true if the mode is switchable
     */
    static switchable(switchable?: boolean): boolean;
    /**
     * Switch button to change the splitter mode
     */
    switchButton(): JQuery<HTMLElement>;
    /**
     * Button to enable/disable the restore of the work-areas on the next load
     */
    restoreButton(): JQuery<HTMLElement>;
    /**
     * Switch the splitter mode
     * @param enabled optional to force/abandon the splitted mode or toggle the mode by default
     * @param home optional to display the home page after switching mode (default true)
     */
    switch(enabled?: boolean, home?: boolean): void;
    /**
     * Switch from single work area to multiple work areas (splitter mode).
     * Creates a first default, non-closeable "home" tab then replaces the legacy #work content.
     */
    private singleToMultiple;
    /**
     * Switch from multiple work areas back to single (legacy 6.3) mode.
     * Preserves the first desk and its navigation, resets all id increments,
     * closes all other tabs, then wraps the result in a legacy .split container.
     */
    private multipleToSingle;
    /**
     * Load user's parameter WORKAREA and rebuild the UI
     * @param settings optional settings to load instead of user's parameter
     * @returns true if the UI has been rebuilt with saved settings
     */
    load(settings?: WorkAreaSettings | NavItem[]): boolean;
    /**
     * Rebuild the UI with WORKAREA settings
     */
    build(settings: WorkAreaSettings): void;
    /**
     * Save the current state (nav stack or work-areas tree) into user's parameter
     * What happens on the next load, per work-area mode x exit type:
     *
     *   exit type            | mode arg | single work-area | multi work-area
     *   ---------------------|----------|------------------|-----------------
     *   logout (Quit)        | "logout" | home page        | restore
     *   clear cache          | "logout" | home page        | restore
     *   change user          | "switch" | home page        | restore
     *   change scope         | "switch" | home page        | restore
     *   change language      | "save"   | restore          | restore
     *   reload / F5          | (none)*  | restore          | restore
     *
     *   - "restore"   = the saved state is persisted and rebuilt on next load
     *   - "home page" = the saved state is cleared ("empty"), the default home is shown
     *   - multi work-area mode always restores because the key is per scope + login, so a
     *     user/scope switch finds its own layout again when coming back to it
     *   - every "restore" case is conditioned by the user preference WORKAREA-RESTORE on the
     *     current scope (see restore()): when disabled, the state is always cleared ("empty")
     *   * reload / F5 does not call save() explicitly: it relies on the auto-save
     *     (saveRequest, on every nav change) having kept the parameter up to date
     *
     * @param mode "save" (default, incl. auto-save, page reload and language change) persists
     *        the current state; "logout" (explicit logout or cache clear) and "switch" (user or
     *        scope switch) drop it in single work-area mode so the next login lands on the home
     *        page, but still persist it in multi work-area mode
     */
    save(mode?: "save" | "logout" | "switch"): Promise<void>;
    /**
     * Auto-save request into user's parameter WORKAREA.
     */
    saveRequest(): void;
    /**
     * Tree of areas and navigations
     */
    jsonTree(): WorkAreaSettings;
    /**
     * Simple request for a new tab or a new split area.
     * @param options Tab options
     * @param caller The element that triggered the request
     * @returns the new container to display the content (.content or .work-area-content) or null to use default work-area
     */
    request(options: WorkTabOptions, caller?: AnyContainer): JQuery | null;
    /**
     * Create a desk with a new navigation including 2 parts: .nav-stack and .content
     * @param ctn container (specific or .work-tab-content)
     * @param content optional HTML content to display
     * @param navId optional restored nav Id (default incremental)
     * @returns .desk.nav-container
     */
    createDeskNavigator(ctn: JQuery, content?: Container | null, navId?: number): JQuery;
    /**
     * Create a work-area with a tabs of desks
     * @param options Work area options
     * @param tabOptions optional tab options to create a first tab with a desk
     * @param content optional content to insert in the new area
     * @returns .work-area
     */
    createWorkArea(options?: WorkAreaOptions, tabOptions?: WorkTabOptions, content?: JQuery): JQuery<HTMLElement>;
    /**
     * Add a tab to .work-tab
     * @param worktab Optional existing work tabs (default use the first tabs)
     * @param options Tab options
     * @param content optional content to insert
     */
    appendTab(worktab: JQuery | null, options?: WorkTabOptions, content?: JQuery): {
        tab: JQuery<HTMLElement>;
        tabpane: JQuery<HTMLElement>;
    };
    /**
     * Get the work tab content of a tab
     * @param tab tab anchor .nav-link or .nav-item
     * @returns .work-tab-content
     */
    getWorkTabContent(tab: JQuery): JQuery | undefined;
    /**
     * Get the desk content of a tab
     * @param el the .nav-link or a container
     * @returns desk .content for rendering if exists (or directly the .work-tab-content when the tab has no navigation)
     */
    getDeskContent(el: JQuery): JQuery<HTMLElement>;
    /**
     * Find a tab in all work-areas
     * @param name Optional tab name to find
     * @returns .nav-link if found
     */
    findTab(name?: string): JQuery | undefined;
    /**
     * Get a tab of related element
     * @param el any content element inside the .work-tab-pane
     * @returns .nav-link of the related tab if exists
     */
    getTabOfElement(el?: AnyContainer): JQuery | undefined;
    /**
     * Get the tab container of element
     * @param el Element inside the .work-tab
     * @returns .work-tab if exists
     */
    getWorkTab(el?: AnyContainer): JQuery | undefined;
    /**
     * Get the work-area of element
     * @param el Element inside the .work-area
     * @returns .work-area if exists
     */
    getWorkArea(el?: AnyContainer): JQuery | undefined;
    /**
     * Set the options for a work tab
     * @param el tab anchor .nav-link or .nav-item
     * @param options the options to store in a.data("worktab")
     */
    setTabOptions(el?: JQuery, options?: WorkTabOptions): void;
    /**
     * Update the options for a work tab from navigation data
     * @param el Element
     * @param label the label of the navigation item
     * @param name optional (unique) name of the navigation item
     * @param url optional URL of the navigation item
     */
    updateTabOptions(el?: AnyContainer, label?: string, name?: string, url?: string): void;
    /**
     * Update the tab label
     * @param el any content element inside the .work-tab-pane (or .nav-link or .nav-item)
     * @param label New label
     */
    setTabLabel(el?: AnyContainer, label?: string): void;
    /**
     * Activate a tab
     * @param el any content element inside the .work-tab-pane
     */
    activateTab(el: AnyContainer): JQuery | undefined;
    /**
     * Activate the first work-area tab
     */
    activateFirstTab(): JQuery | undefined;
    /**
     * Get the first work-area content: #work0 (or default #work if no enabled)
     * @param activate activate the first tab to show the content?
     */
    getDefaultWorkContent(activate?: boolean): JQuery;
    /**
     * Move a tab in a new work-area
     * @param tab tab .nav-link to move
     * @param workArea target workarea to split
     * @param pos position for the tab content top/left/right/bottom
     */
    moveTabToWorkArea(tab: JQuery, workArea: JQuery, pos: Position): void;
    /**
     * Move a tab in other tab
     * @param tab tab .nav-link to move
     * @param targetTab target tab
     * @param pos place the tab on the 'left' or the 'right' of the target tab
     */
    moveTabToTab(tab: JQuery, targetTab: JQuery, pos: 'left' | 'right'): void;
    /**
     * Close a tab if can close
     * @param tab .nav-link to close
     * @param checkCanClose check can close the tab content? default true. false = only destroy the content
     * @param activatePrevious activate the previous tab if exists? default true
     */
    closeTab(tab: JQuery, checkCanClose?: boolean, activatePrevious?: boolean): Promise<void>;
    /**
     * Remove a content and its tab
     * @param el any content element inside the .work-tab-pane
     * @param checkCanClose check can close the tab content? default true. false = only destroy the content
     */
    remove(el: AnyContainer, checkCanClose?: boolean): void;
    /**
     * Close a content: back to the previous page of its navigation if any,
     * otherwise remove its tab when it is in a work tab, otherwise only close the content
     * @param el content element (inside a .work-tab-pane or not)
     * @example
     * // Close the current content, ex: after detaching it in a popup
     * $view.splitter.close(ctn);
     */
    close(el: AnyContainer): void;
    /**
     * Close all tabs if can close
     * @param checkCanClose check can close the tab contents?
     */
    closeAll(checkCanClose?: boolean): Promise<void>;
    /**
     * Remove a tab of a work-area
     * ZZZ not public: use closeTab to destroy the content first
     * @param tab the .nav-link to remove
     * @param prev click on previous (or next) tab if exists
     */
    private removeTab;
    /**
     * Remove a work-area and its children
     * @param workarea .work-area to remove
     */
    removeWorkArea(workarea: JQuery): Promise<void>;
    private refreshTimer;
    /**
     * Refresh container when moved/splitted/resized
     * @param ctn container with events ui.resize and ui.zoom
     * @param resize true to force a resizing
     */
    refresh(ctn: JQuery, resize?: boolean): void;
    /**
     * Create a .work-area and/or assign a split direction
     * @param workarea optional .work-area to (re)assign (default returns a new one)
     * @param vertical optional, true to split vertically, false to split horizontally
     * @param children optional list of .work-area to append
     */
    workArea(workarea?: JQuery | null, vertical?: boolean, children?: JQuery[]): JQuery;
    /**
     * Split a work-area
     * @param workarea .work-area to split (default the root one)
     * @param pos insert at position left/right/top/bottom
     * @param tabOptions tab options
     * @param content optional content to insert in the new area
     * @returns newArea and content
     */
    splitWorkArea(workarea: JQuery | null, pos: Position | undefined, tabOptions: WorkTabOptions, content?: JQuery): {
        /** New work-area */
        newArea: JQuery;
        /** Content of the new work-area */
        content: JQuery;
    };
    /**
     * Convert a CSS size value to pixels.
     * Supports plain numbers (treated as px), "rem" units (1rem = 16px),
     * and "%" relative to the total #work width.
     * @param value Size as a number (px) or a CSS string ("300px", "20rem", "50%")
     * @returns Equivalent size in pixels
     */
    private toPixel;
    /**
     * Resize a work area (and its next area) in a horizontal split
     * @param workarea workarea to resize
     * @param width width in pixels or in rem (or in % of the #work)
     */
    setWidth(workarea: JQuery, width: number | string, store?: boolean): void;
    /**
     * Resize a work area (and its next area) in a vertical split
     * @param workarea workarea to resize
     * @param height height in pixels or in rem (or in % of the #work)
     */
    setHeight(workarea: JQuery, height: number | string, store?: boolean): void;
    /**
     * Resize a work area (and its next area) in the split direction
     * @param workarea workarea to resize
     * @param horizontal or vertical
     * @param size new size in pixels (fit to parent size if unset)
     * @param save save preference?
     */
    setSize(workarea: JQuery, horizontal: boolean, size: number, save?: boolean): void;
    /**
     * Resize all work areas to fit 100% of the container
     * @param workarea container
     */
    fitSize(workarea: JQuery): void;
    /**
     * Create context menu to request for the new tab position
     * @param el Right clicked element
     * @param e Context menu event
     * @param request callback with requested position
     * @param items optional previous menu items
     */
    contextMenu(el: JQuery, e: JQuery.ContextMenuEvent, request?: (pos: NewTabPosition) => void, items?: (DropdownItem | JQuery)[]): JQuery<HTMLElement> | undefined;
    /**
     * Add a context menu on follow link to open the target in a new tab or side
     * @param title Tab title
     * @param fl FollowLink definition with object and rowId to open the form
     * @param el Caller element to bind the context menu
     */
    followLinkContextMenu(title: string, fl: FollowLink, el: JQuery): void;
    /**
     * Stop event and return mouse position
     */
    private xy;
    /**
     * Drag & drop separator to resize sibling areas
     */
    private dragSeparator;
    /**
     * Drag & drop tab
     */
    private dragTab;
    /**
     * Split the container in 2 parts (any previous split is removed).
     * @param ctnr container
     * @param pos position left|right|top|bottom, default 'top'
     * @param options optional parameters or content
     * @param options.content content to add at position
     * @param options.resizable can resize content ?
     * @param options.height optional content height
     * @param options.width optional content width (in rem, px, %)
     * @param options.collapsible can collapse content ?
     * @param options.collapsed collapsed by default ?
     * @param options.splitWidth optional split width (default 100%, may be "auto" to let the scroll-x to parent element)
     * @param options.splitHeight optional split height (default 100%, may be "auto" to let the scroll-y to parent element)
     */
    splitPart(ctnr: AnyContainer, pos: Position, options: SplitPart | JQuery): void;
    /**
     * Remove the splitted content
     * @param ctn container with splitted contents
     */
    unsplitPart(ctn: string | Container): void;
}

/** Load URL target = same as lov SHC_TARGET to open a shortcut */
type LoadTarget = 'frame_work' | '_blank' | '_top' | '_popup' | LoadTargetArea;
/** LoadURL options */
type LoadParam = NavParam & {
    /** Optional target _blank, _top or _popup */
    target?: LoadTarget;
    /** Width of the element */
    width?: string;
    /** Height of the element */
    height?: string;
    /** Optional label to display in nav/dialog/download */
    label?: string;
    /** Optional name for the external object */
    name?: string;
    /** Optional object of action */
    object?: string | BusinessObject;
    /** Optional instance of object */
    inst?: string;
    /** Optional object row ID (form/row action) */
    rowId?: string;
    /** Optional object item (form/row action) */
    item?: RowItem | null;
    /** Optional data of external object (extobject, fields) */
    data?: KeyObject;
    /** Optional related action */
    action?: string | Action;
    /** Optional flag to inline content */
    noiframe?: boolean;
    /** Controller of the download, set by loadURL: call `controller.abort()` to stop the client side call */
    abortController?: AbortController;
    /** Optional reader(content-type, attach, filename, blob, defaultReader, cbk, status) to override default download into container */
    reader?: (contenttype: string, attach: boolean, filename: string, blob: Blob, defaultReader: (ct: string, _att: boolean, filename: string, res: File) => void, cbk?: Callback, status?: number) => void;
};
/**
 * UI Loader tool
 */
declare class UILoader extends UIUtil {
    /**
     * Common file extension icon
     */
    readonly FILE_ICONS: KeyString;
    /** Feedback instance */
    feedback?: Feedback;
    /** Disconnected translation */
    labelDisconnected?: string;
    /** Web news (popup and footer ticker) */
    readonly news: WebNews;
    /** Main navigator */
    readonly nav: UINavigator;
    /**
     * Mime type to file extension
     */
    readonly MIME_EXT: KeyString;
    constructor();
    /**
     * When page is loaded: load user rights, menu, texts and engine.<br />
     * Then call the main page service.
     * @param options some globals options to override
     * @example
     * // Standalone page: load the rights, texts and engine, then display the home page
     * $(document).ready(() => $ui.ready($app, "bootstrap5", { useMainParts: true }));
     */
    ready(app: Session, engine: string, options?: Partial<typeof Globals>): Promise<void>;
    private prepareBookmarks;
    /**
     * Set the Ajax APIs
     * @param app Simplicite.Ajax instance
     */
    setAjax(app: Session): UIEngine;
    /**
     * Returns the local client Id from local storage.
     * Used to identify the client in session and to change user on server-side in god mode.
     * @example
     * const id: string = $ui.clientId();
     */
    clientId(): string;
    /**
     * Open the user session with authtoken
     * @param params options
     * @param params.scope optional user scope or home view
     * @param params.clientId optional clientId (local storage to change users)
     * @returns Session infos
     * @example
     * const s: KeyObject = await $ui.session({ scope: "MyScope" });
     */
    session(params?: {
        scope?: string;
        clientId?: string;
    }): Promise<KeyObject>;
    /**
     * Default logout: confirm (with text CONFIRM_LOGOUT) and save session before quit
     * @param params logout parameters
     * @param params.confirm true to confirm the logout
     * @param params.url optional new location URL
     * @param params.login optional user login to switch session
     * @param params.token optional user token to switch session
     * @example
     * // Ask the confirmation, then logout
     * $ui.logout({ confirm: true });
     * // Logout and go to a URL
     * $ui.logout({ url: "/ext/MyLandingPage" });
     */
    logout(params: {
        confirm?: boolean;
        url?: string;
        login?: string;
        token?: string;
    }): void;
    /**
     * Default quit is a session logout
     * @param params logout parameters
     * @param params.url optional new location URL to change scope
     * @param params.login optional user login to change user
     * @example
     * $ui.quit({ url: "https://www.simplicite.io" });
     */
    quit(params?: {
        url?: string;
        login?: string;
    }): UIEngine;
    /**
     * Save the session
     * @param mode "save" (default, e.g. language change) keeps the current layout / nav;
     *        "logout" (explicit logout or cache clear) and "switch" (user or scope switch) drop it
     *        in single work-area mode so the next login lands on the home page, but keep it per
     *        scope + login in multi work-area mode, to be restored on return
     * @example
     * await $ui.saveSession();
     */
    saveSession(mode?: "save" | "logout" | "switch"): Promise<void>;
    /**
     * Load the Rendering engine
     * @param name extended engine name (forced to bootstrap5)
     */
    loadEngine(name: string): Promise<void>;
    /**
     * Bind server side events.
     * Custom messages from back-end
     * <code>ServerSideEvent.notify("myCustomEvent", "message", userId)</code>
     * Must be binded on "ui.ready"" with
     * <code>$ui.sse.addEventListener("myCustomEvent", e => e.data ... );</code>
     * @example
     * // Bound on ready, then listen custom events sent by ServerSideEvent.notify("myCustomEvent", ...)
     * $(document).on("ui.ready", () => {
     * 	$ui.sse?.addEventListener("myCustomEvent", (e: MessageEvent) => $ui.toast(e.data));
     * });
     */
    bindEventSource(): boolean;
    /**
     * Websocket handler for partial clear cache
     * @param d <code>\{ object, name \}</code>
     * @ignore
     */
    private onClearCache;
    /**
     * System clear cache
     * @param action Action <code>cc|dc|gc</code> for server, all sessions or granted user
     * @example
     * // Clear the cache of the current user
     * $ui.clearCache("gc");
     */
    clearCache(action: string): Promise<void>;
    /**
     * SSE handler for object usage
     * @param d <code>\{ object, action, emitter \}</code>
     * @ignore
     */
    private onActionObject;
    /**
     * SSE handler for internal notification
     * @param n <code>\{ count, message, incoming, userId \}</code>
     * @ignore
     */
    private onNotif;
    /**
     * Default keydown handler
     * <br>CTRL-S : trigger "ui.key.ctrls" to all "js-ctrl-s" elements
     * <br>ESCAPE : in order of priority close dialog, blur field (remove focus), or back in navigation
     * <br>SHIFT-LEFT/RIGHT : navigation between list items
     * <br>ALT-H : back to the home page
     * <br>ALT-M : focus last visited menu item
     * <br>ALT-W : wide screen = toggle menu
     * <br>ALT-B : open the bookmarks dialog
     * <br>ALT-F : focus the global searchbox
     * <br>ALT-L : focus the first list row
     * <br>ALT-N : focus the next area/panel
     * @param e Key event
     */
    private keydown;
    /**
     * Displays all site parts:
     * <ul>
     * <li>Create main div</li>
     * <li>load only options.resources if specified</li>
     * <li>load part MAIN/HEADER/FOOTER/MENU/WORK when options.useMainParts=true</li>
     * <li>load STYLES + SCRIPT resources of disposition or object</li>
     * </ul>
     */
    main(cbk: Callback): Promise<void>;
    /**
     * Load the FOOTER_ADDON if exists
     */
    footerAddon(): void;
    /**
     * Load the text and monospace fonts and override the related CSS variables
     * @param font text font (a plain name = assume a google font), none = default font of the theme CSS
     * @param mfont monospace font
     * @example
     * // Google font for texts, default monospace font
     * $ui.setFonts("Roboto");
     */
    setFonts(font?: Font | string | null, mfont?: Font | string | null): Promise<[void, void]>;
    /**
     * Change the current CSS theme
     * @param base 'light' or 'dark' reboot
     * @param theme theme name to load (vars + addon styles)
     * @example
     * $ui.setTheme("dark");
     * $ui.setTheme("light", "MyTheme");
     */
    setTheme(base?: ThemeBase, theme?: string): Promise<void>;
    /**
     * Add keys shortcuts to document
     * @param keys Pair of ('ctrl' | 'shift' | 'alt') + letter or char-code = callback or shortcut definition
     * @example
     * $ui.addShortcuts({
     * 	"ctrl+shift+h": () => $ui.displayHome(),
     * 	"alt+d": { name: "MyDoc", label: "Documentation", url: "https://docs.simplicite.io", target: "_blank" }
     * });
     */
    addShortcuts(keys: ShortcutKeys): void;
    /**
     * Open the URL in a new window
     * @param url URL to open
     * @param target Optional, default <code>'_blank'</code>
     * @example
     * $ui.openURL("https://www.simplicite.io");
     */
    openURL(url: string, target?: string): void;
    /**
     * Open the url in a separate window with the UI engine
     * @param url URL to load in a new window
     * @param options Detach options
     * @param options.name Optional window name (default detachurl)
     * @param options.width Optional window width in px (default 1200)
     * @param options.height Optional window height in px (default 700)
     * @param options.top Optional window top in px (default 0)
     * @param options.left Optional window left in px (default 0) (default 0)
     * @param options.full True to load the main parts (menu, header... default load the URL in div.main without parts)
     * @returns new window
     * @example
     * // Open an external object in a new window
     * $ui.detachURL($app.getExternalObjectURL("MyExternalObject"), { width: 800, height: 600 });
     */
    detachURL(url: string, options?: {
        name?: string;
        width?: number;
        height?: number;
        top?: number;
        left?: number;
        full?: boolean;
    }): Window | null;
    /**
     * Call periodically to check if the response is completed
     * @param ctn Container to load the URL
     * @param url URL to launch the asynchronous task on server side, and be polled with a check parameter periodically, must respond 202 while the task is not completed
     * @param params Optional parameters for loadURL
     * @param pgs Optional progress callback(message)
     * @returns Promise when loaded, or catch when stopped
     * @example
     * // Launch a long task and poll until done
     * $ui.waitForURL(ctn, myTaskURL, {}, (msg: string | ArrayBuffer | null) => $console.log("progress", msg));
     */
    waitForURL(ctn: Container, url: string, params?: LoadParam, pgs?: (msg: string | ArrayBuffer | null) => void): Promise<void>;
    /**
     * Load URL in a container: wrap the URL to specific controllers (list, form...) or call the back-end thru ajax
     * @param ctn Container to load the URL (default is #work)
     * @param url URL to load
     * @param options Contextual parameters
     * @param cbk Optional callback when loaded
     * @example
     * // Display an external object in the work area
     * $ui.loadURL(null, $app.getExternalObjectURL("MyExternalObject"));
     */
    loadURL(ctn: AnyContainer, url: string, options?: LoadParam | null, cbk?: Callback): this;
    getUIObject(obj: string | BusinessObject, cbk?: (obj: UIBusinessObject) => void, params?: KeyObject): Promise<UIBusinessObject>;
    getUIObject(object: string | BusinessObject, inst?: string | null | ((obj: UIBusinessObject) => void), cbk?: ((obj: UIBusinessObject) => void) | KeyObject, params?: KeyObject): Promise<UIBusinessObject>;
    getNavObject(ctn: AnyContainer, obj: string | BusinessObject, cbk?: (obj: UIBusinessObject) => void, params?: KeyObject): Promise<UIBusinessObject>;
    getNavObject(ctn: AnyContainer, object: string | BusinessObject, inst?: string | null | ((obj: UIBusinessObject) => void), cbk?: ((obj: UIBusinessObject) => void) | KeyObject, params?: KeyObject): Promise<UIBusinessObject>;
    /**
     * Generate the instance name within the component navigator.
     * Returns the common instance name on main navigation, otherwise add a suffix ex: the_ajax_(name)_nav(id)
     * @param c Component
     * @param obj Object name or BusinessObject
     * @param inst Optional instance name, default = <code>the_ajax_(name)</code>
     * @example
     * const inst: string = $ui.getNavInstanceName(ctn, "MyObject"); // the_ajax_MyObject on the main navigation
     */
    getNavInstanceName(c: AnyContainer, obj: string | BusinessObject, inst?: string): string;
    /** Web push service, loaded on demand */
    _webpush?: WebPush;
    /**
     * WebPush service
     * @example
     * $ui.webpush();
     */
    webpush(data?: WebPushData): WebPush;
    /** Firebase service, loaded on demand */
    _firebase?: Firebase;
    /**
     * Firebase service wrapper
     * @param data Service data, with optional keys:
     * `config` (init web browser to receive notification),
     * `token` (add the device token to FIREBASE_TOKENS on server side),
     * `tap` (incoming notification has been tapped by user?),
     * `body` (optional received message),
     * `title` (optional message title),
     * `from` (optional message origin),
     * `message` (message to send on server-side),
     * `to` (recipients `{ users:[], groups:[] }` or `'all'` users)
     * @example
     * // Send a notification to groups thru the server
     * $ui.firebase({ message: "New order", to: { users: [], groups: ["MY_SALES"] } });
     */
    firebase(data?: FirebaseServiceData): Firebase;
    /**
     * Firebase default handler when a message is received thru FCM or worker.
     * @param m Message or notification, with optional keys:
     * `notification` (optional embedded message with title and body),
     * `body` (message body),
     * `title` (optional title),
     * `priority` (optional priority `'high'|'normal'|'low'`),
     * `data` (optional pairs of key-value, may be present on top of message, e.g. `object` and `rowId`),
     * `tap` (foreground or background),
     * `icon` (optional icon),
     * `color` (optional color)
     */
    onMessageReceived(m: FirebaseMessage): void;
    /** Internal: editor options */
    _editor?: KeyObject;
    /**
     * Load local code editor
     */
    loadLocalEditor(): Promise<KeyObject>;
    /**
     * Load Simplicite standalone client lib
     * @param cbk optional callback
     * @example
     * $ui.loadSimpliciteClient(() => $console.log("client lib loaded"));
     */
    loadSimpliciteClient(cbk?: Callback): UIEngine;
    /**
     * Load metadata of font icons
     * @param cbk optional callback(meta)
     * @example
     * $ui.loadFontsMeta((meta: IconsMetadata) => $console.log(meta));
     */
    loadFontsMeta(cbk?: (meta: IconsMetadata) => void): UIEngine;
    /**
     * Load the diagram engine
     * @example
     * await $ui.loadDiagramEngine();
     */
    loadDiagramEngine(): Promise<DiagramEngine>;
    private _speech?;
    /**
     * Load the speech engine
     * @example
     * const speech: Speech = $ui.loadSpeech();
     */
    loadSpeech(): Speech;
    private _ocr?;
    /**
     * Load the OCR tools
     * @example
     * $ui.loadOCR(() => $console.log("OCR ready"));
     */
    loadOCR(cbk?: CallableFunction): void;
    /**
     * UI monitoring
     * @param ctn Container to monitor
     * @param params Parameters or action
     * @param params.action Action name (get, meta, search, display...) if unset: save and stop monitoring in the container
     * @param params.service UI service name (displayForm...)
     * @param params.target Target name (object, view, process...)
     * @param params.ui Front or Ajax call
     * @example
     * // Start tracing a custom service (a service is required on the first call)
     * $ui.monitor(ctn, { action: "display", service: "MyService", target: "MyObject", ui: true });
     * $ui.monitor(ctn, { action: "onload", ui: true });
     * // No action: save the trace and stop
     * $ui.monitor(ctn);
     */
    monitor(ctn: AnyContainer | null, params?: string | {
        action: string;
        service?: string;
        target?: string;
        ui?: boolean;
    }): UIEngine | undefined;
    /**
     * Loading page with status
     */
    splash(status: boolean | string): void;
    /**
     * Top Simplicite window
     * @example
     * const topUI: Window = $ui.getTop();
     */
    getTop(): Window & typeof globalThis;
}

/**
 * Workflow controller
 * @param ui Main UI controller
 */
declare class Workflow {
    /** Server-side specific instance */
    readonly bpmActivityObject = "BPMActivityFile";
    /** Server-side instance of the activity files */
    readonly bpmActivityInst = "list_ajax_BPMActivityFile";
    /**
     * Get a business process with its UI hooks.
     * @param process Process name or process
     * @param cbk Optional callback with the process
     * @returns This controller
     */
    getUIProcess(process: string | BusinessProcess, cbk?: (wkf: BusinessProcess) => void): this;
    /**
     * Display a process activity.
     * @param ctn Container
     * @param process Process name or process (null = current process)
     * @param action Optional process action
     * @param options Optional parameters
     * @param cbk Optional callback when displayed
     */
    display(ctn: Container, process: string | BusinessProcess | null, action?: ProcessActionType, options?: ProcessParam, cbk?: Callback): this;
    /** Service call */
    service(ctn: Container, wkf: BusinessProcess, action: ProcessActionType, onSuccess: (act?: ActivityFile) => void, onError: (reason: MessageFromBack) => void, params?: {
        road?: boolean;
        object?: string;
        rowId?: string;
        step?: string;
    }): void;
    /** Success : dispatch response */
    success(ctn: Container, wkf: BusinessProcess, resp?: ActivityFile, p?: ProcessParam, cbk?: Callback): void;
    /** Error : return to activity with messages */
    error(ctn: Container, wkf: BusinessProcess, err: MessageFromBack, p?: ProcessParam, cbk?: Callback): void;
    /** Activities list filtered on process name and step */
    displayList(ctn: Container, wkf: BusinessProcess, options?: {
        step?: string;
    } | null, cbk?: Callback): this;
    /**
     * Display the activity
     * @param ctn Container
     * @param wkf Business process instance
     * @param activity Current activity with metadata
     * @param options Options
     * <ul>
     * <li>showRoad: displays the workflow navbar, default true</li>
     * <li>msg: back-end messages to display</li>
     * <li>workflow: true</li>
     * </ul>
     * @param cbk Optional callback
     */
    displayActivity(ctn: Container, wkf: BusinessProcess, activity: ActivityFile | null, options?: ProcessParam, cbk?: (wkf: BusinessProcess, act?: ActivityFile, p?: ProcessParam) => void): Promise<this | undefined>;
}

/** Agenda of an object */
interface Agenda {
    /** Agenda row ID */
    id: string;
    /** Agenda name */
    name: string;
    /** Agenda is enabled */
    enabled: boolean;
    /** Events can be moved or resized */
    editable?: boolean;
    /** WEEK */
    display?: string;
    /** Default 1=monday */
    firstDay?: number;
    /** Hidden days (0 = sunday) */
    hiddenDays?: number[];
    /** [1, 2, 3, 4, 5] monday to friday */
    workingDays?: number[];
    /** 09:00 */
    startTime?: string;
    /** 18:00 */
    endTime?: string;
    /** Start date field name */
    date: string;
    /** Duration field name */
    duration?: string;
    /** End date field name */
    endDate?: string;
    /** Calendar height */
    height?: number;
    /** First displayed time (ex: `08:00`) */
    minTime?: string;
    /** Last displayed time (ex: `20:00`) */
    maxTime?: string;
    /** Duration of a time slot */
    slot?: string;
    /** Snap duration when moving an event */
    snap?: string;
    /** Label field names of an event */
    labels?: string[];
    /** Default user login */
    user?: string;
    /** User field name */
    userField?: string;
    /** Default group name */
    group?: string;
    /** Group field name */
    groupField?: string;
}
/** Parameters of a calendar display (see `$ui.displayCalendar`) */
interface CalendarParam {
    /** Filter on user login */
    login?: string;
    /** Filter on group */
    group?: string;
    /** Initial date */
    date?: Date;
    /** Locale */
    locale?: string;
    /** Renderer: is the event editable? */
    editable?: (obj: BusinessObject, item: KeyObject) => boolean;
    /** Handler on event click */
    click?: (arg: EventClickArg) => void;
    /** Handler on dates selection */
    select?: (arg: DateSelectArg) => void;
    /** Handler on event drop */
    drop?: (arg: EventDropArg) => void;
    /** Handler on event resize */
    resize?: (arg: EventResizeDoneArg) => void;
    /** Handler on render */
    render?: (arg: DateSelectArg) => void;
    /** Renderer: title of the event */
    title?: (obj: BusinessObject, item: KeyObject) => string;
    /** Renderer: header of a column */
    column?: (date: string) => void;
    /** Renderer: background color of the event */
    color?: (obj: BusinessObject, item: KeyObject) => string;
    /** Renderer: border color of the event */
    borderColor?: (obj: BusinessObject, item: KeyObject) => string;
    /** Renderer: text color of the event */
    textColor?: (obj: BusinessObject, item: KeyObject) => string;
    /** Renderer: CSS classes of the event */
    classNames?: (obj: BusinessObject, item: KeyObject) => string[];
    /** Renderer: label of the color legend */
    colorLabel?: (obj: BusinessObject, item: KeyObject) => string;
    /** Hook before loading */
    beforeload?: (ctn: Container, obj: UIBusinessObject, agd: object, p: KeyObject) => void;
    /** Hook when displayed */
    onload?: (ctn: Container, obj: UIBusinessObject, agd: object, p: KeyObject) => void;
    /** Hook when removed */
    onunload?: (ctn: Container, obj: UIBusinessObject, agd: object, p: KeyObject) => void;
    /** First displayed time */
    minTime?: string;
    /** Last displayed time */
    maxTime?: string;
    /** Duration of a time slot */
    slot?: string;
    /** Snap duration when moving an event */
    snap?: string;
    /** Working days (1 = monday) */
    workingDays?: number[];
    /** Start time of the working day */
    startTime?: string;
    /** End time of the working day */
    endTime?: string;
    /** Calendar height */
    height?: number;
}
/**
 * Calendar controller (based on FullCalendar V5)
 * @param options <code>\{ locale, version \}</code>
 */
declare class UICalendar {
    /** Date format of the service */
    readonly dateFormat = "YYYY-MM-DD HH:mm:ss";
    /** Current date per calendar */
    currentDate: {
        [key: string]: Date;
    };
    /** Current filter per calendar */
    currentFilter: {
        [key: string]: string;
    };
    /** FullCalendar instance */
    cal?: Calendar;
    /** Options `{ locale, version }` */
    options: KeyObject;
    constructor(options: {
        locale?: string;
        version?: number;
    });
    /**
     * Set date
     */
    setDate(name: string, date?: Date): void;
    /**
     * Get date
     */
    getDate(name: string): Date;
    /**
     * Get filter (user or group field)
     */
    setFilter(name: string, filter?: string): void;
    /**
     * Get filter (user or group field)
     */
    getFilter(name: string): string;
    /**
     * Generate a light color
     */
    hsl(text: string): string;
    /**
     * Display calendar
     * @param ctn Container
     * @param obj Business object
     * @param agd Agenda definition
     * @param params options
     * @param params.login optional login filter
     * @param params.group optional group filter
     * @param params.date current date to show
     * @param params.editable editable?
     * @param params.locale use locale (ex 'fr', 'es')
     * @param params.click click handler (default open the update form)
     * @param params.select select date handler (default open the create form)
     * @param params.drop drop event handler (default update the event start date)
     * @param params.resize resize event handler (default update the event duration)
     * @param params.title handler(obj,item) of event title (default based on label fields)
     * @param params.column handler(date) to override column header (HTML)
     * @param params.color handler(obj,item) for event background (default grey or hash of selected login|group)
     * @param params.borderColor handler(obj,item) for border color
     * @param params.textColor handler(obj,item) for text color
     * @param params.classNames handler(obj,item) to get an array of CSS classes
     * @param params.render handler to override the render the event
     * @param params.minTime default "00:00:00"
     * @param params.maxTime default "24:00:00"
     * @param params.slot default "00:30:00"
     * @param params.snap default "00:05:00"
     * @param params.workingDays default [1,2,3,4,5] = monday to friday
     * @param params.startTime default "09:00" for business hours
     * @param params.endTime default "18:00" for business hours
     * @param params.height default 800
     * @param cbk Optional callback
     */
    display(ctn: AnyContainer, obj: BusinessObject, agd: Agenda, params?: CalendarParam, cbk?: Callback): Promise<void>;
}

/** A place of a place map: one record with its coordinates and labels */
interface Place {
    /** Coordinates `"lat;lng"` or `"lat,lng"` */
    coord: string;
    /** Value of the first label field */
    label1?: string;
    /** Value of the second label field */
    label2?: string;
    /** Value of the third label field */
    label3?: string;
    /** Value of the address field */
    address?: string;
}
/** Place map definition: object fields to locate and describe the places */
interface Placemap {
    /** Place map row ID */
    id: string;
    /** Place map name */
    name: string;
    /** Places to display */
    places: Place[];
    /** Name of the first label field */
    label1?: string;
    /** Name of the second label field */
    label2?: string;
    /** Name of the third label field */
    label3?: string;
    /** Name of the address field */
    address?: string;
}
/** Leaflet map settings */
interface MapSettings {
    /** Tile layer URL template (ex: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`) */
    tileLayer: string;
    /** Default center latitude */
    lat?: number;
    /** Default center longitude */
    lng?: number;
    /** Default zoom level (default 13) */
    zoom?: number;
    /** Attribution of the tile layer */
    attribution?: string;
    /** Maximum zoom level */
    maxZoom?: number;
}
/**
 * Place Map renderer
 */
declare class UIMap {
    /** Map settings */
    options: MapSettings;
    /** Leaflet map, set by `display` */
    map?: L.Map;
    /** Markers added with `addMarker` */
    map_markers?: L.Marker[];
    /**
     * @param options Options <code>\{ tileLayer, attribution, maxZoom, lat, lng, zoom \}</code>
     */
    constructor(options: MapSettings);
    /**
     * Parse coordinates.
     * @param coord Coordinates `"lat;lng"` or `"lat,lng"`
     * @returns The `[lat, lng]` tuple, or the default center when invalid
     */
    getLatLong(coord: string): LatLngTuple;
    /**
     * Init a map in the container
     * @param ctn Container
     * @param pm Placemap definition
     */
    display(ctn: AnyContainer, pm?: Placemap): string | false | undefined;
    /**
     * A map can only have bounds if it contains at least two markers.
     * @returns true when the map has at least 2 markers
     */
    hasBounds(): boolean;
    /**
     * Bounds of all the markers.
     * @returns The bounds, or undefined when there are less than 2 markers
     */
    getLatLngBounds(): L.LatLngBounds | undefined;
    /**
     * Add a marker on map
     * @param params Parameters
     * @param params.coord coma-separated coordinates
     * @param params.onMove callback function when user moves marker
     */
    addSelector(params: {
        coord: string;
        onMove?: (lat: string, lng: string) => void;
    }): boolean;
    /**
     * Add a marker on map
     * @param params Parameters <code>\{ coord, info, center \}</code>
     * @param params.coord coma-separated coordinates
     * @param params.info jquery element to show in popup
     */
    addMarker(params: {
        coord: string;
        info?: JQuery;
    }): boolean;
    /**
     * Build the marker info
     */
    getMarkerInfo(o: BusinessObject, pm: Placemap, place: Place, onOpen: (id: string) => void): JQuery<HTMLElement>;
}

/** HSV color */
interface HSV {
    /** 0..360 */
    h: number;
    /** 0..100 */
    s: number;
    /** 0..100 */
    v: number;
}
/** RGB color */
interface RGB {
    /** 0..255 */
    r: number;
    /** 0..255 */
    g: number;
    /** 0..255 */
    b: number;
}
/** RGB color with alpha */
type RGBA = RGB & {
    /** 0..1 */
    a?: number;
};
/** Oklab color */
interface OKLAB {
    /** Positive */
    L: number;
    /** Signed */
    a: number;
    /** Signed */
    b: number;
}
/** Contrast between a text and its background */
interface Contrast {
    /** Background color */
    bgcolor: RGBA;
    /** Text color */
    color: RGBA;
    /** Min 4.5 */
    ratio: number;
    /** Error when the contrast is too low */
    error?: string;
}
/** Named CSS colors by group */
interface CSSColors {
    /** Group name */
    name: string;
    /** Named colors of the group */
    list: KeyString[];
}
/** Named CSS colors by group */
declare const CSSCOLORS: CSSColors[];
/**
 * Color helpers
 */
declare class UIColor {
    /** Type of colors */
    static readonly TYPES: string[];
    /** minimal WCAG level AAA is 4.5 */
    static readonly MIN_CONTRAST = 4.5;
    /** legacy regex for 'rgb(123, 123, 123)' or 'rgba(123, 123, 123, 0.33)'*/
    static readonly rgbaRegex: RegExp;
    /** legacy regex for 'rgb(123, 123, 123)' */
    static readonly rgbRegex: RegExp;
    /** regex for 'rgb(123 123 123)' or 'rgb(123 123 123 / 0.5)' */
    static readonly rgbRegex2: RegExp;
    /** regex for '#RRGGBB' or '#rrggbb' */
    static readonly hexRegex: RegExp;
    /** regex for 'color(srgb 0.17 0.13 0.28 / 0.5)' */
    static readonly srgbRegex: RegExp;
    /** oklab(0.28 -0.07 -0.03 / 0.5) */
    static readonly oklabRegex: RegExp;
    /**
     * Convert color string to #rrggbb
     * @param rgb color
     * @returns A color <code>#RRGGBB</code>
     */
    rgb2hex(rgb: string): string;
    /**
     * Convert string color to object
     * @param color css color
     * @param alpha optioanl alpha (transparency 0..1)
     * @returns object <code>\{r,g,b,a\}</code>
     */
    css2rgb(color: string, alpha?: number): RGBA;
    /**
     * Convert color to hexa format
     * @param rgb Color
     * @returns Color <code>#RRGGBB</code> or <code>#RRGGBBAA</code>
     */
    rgb2css(rgb?: RGBA | null): string;
    /**
     * Convert <code>#RRGGBB</code> to string
     * @param color Color <code>#RRGGBB</code>
     * @param alpha Alpha (transparency)
     * @returns string <code>'rgba(r,g,b,a)'</code>
     */
    css2rgba(color: string, alpha?: number): string;
    /**
     * Convert <code>\{r,g,b\}</code> to <code>\{h,s,v\}</code>
     * @param color Color <code>\{r,g,b\}</code>
     * @returns Color <code>\{h,s,v\}</code>
     */
    rgb2hsv(color: RGB): HSV;
    /**
     * Convert <code>\{h,s,v\}</code> to <code>\{r,g,b\}</code>
     * @param hsv Color <code>\{h,s,v\}</code>
     * @returns Color <code>\{r,g,b\}</code>
     */
    hsv2rgb(hsv: HSV): RGB;
    /**
     * Calculate the color luminance 0..1
     * @param c #RRGGBB or <code>\{r,g,b\}</code>
     * @returns luminance
     */
    luminance(c: string | RGB): number;
    /**
     * Calculate the contrast ratio between 2 colors
     * @param c1 #RRGGBB or <code>\{r,g,b\}</code>
     * @param c2 #RRGGBB or <code>\{r,g,b\}</code>
     * @returns minimal ratio recommanded by WCAG is 4.5 (or 3 for larger font-sizes)
     */
    contrast(c1: string | RGB, c2: string | RGB): number;
    /**
     * Computed text and background colors of an element (transparent colors look at the parents).
     * @param el Element
     * @returns The colors
     */
    getComputedColors(el: HTMLElement): Partial<Contrast>;
    /**
     * Contrast of an element with its background.
     * @param el Element
     * @param minRatio Minimum ratio (WCAG)
     * @returns The contrast with an error when too low, or undefined when not evaluable
     */
    elementContrast(el: HTMLElement, minRatio?: number): Contrast | undefined;
    /**
     * Black or white color to contrast with a color.
     * @param color Background color
     * @returns `black` or `white`
     */
    contrastedColor(color: string): "black" | "white";
    /**
     * Convert a color to RGB object
     * @param color supported spaces: #RRGGBB, rgb(), color(srgb r g b / x), oklab(L a b / x)
     */
    static convertToRGB(color: string): RGBA | undefined;
    /**
     * Gamma 2.2 to linear value.
     * @param c Value 0..1
     * @returns Linear value
     */
    static gamma2Linear(c: number): number;
    /**
     * Linear to gamma 2.2 value.
     * @param c Value 0..1
     * @returns Gamma value
     */
    static linear2Gamma(c: number): number;
    /**
     * Convert a RGB color to Oklab.
     * @param color RGB color
     * @param linear true when the RGB is linear (else sRGB)
     * @returns Oklab color
     */
    static sRGB2oklab(color: RGB, linear?: boolean): OKLAB;
    /**
     * Round and clamp a value in a range.
     * @param value Value
     * @param min Minimum (default 0)
     * @param max Maximum (default 255)
     * @returns Clamped value
     */
    static clamp(value: number, min?: number, max?: number): number;
    /**
     * Convert an Oklab color to RGB.
     * @param oklab Oklab color
     * @param linear true to return linear RGB (else sRGB)
     * @returns RGB color
     */
    static oklab2RGB(oklab: OKLAB, linear?: boolean): RGB;
    /**
     * Convert a sRGB color (0..1) to RGB (0..255).
     * @param rgb sRGB color
     * @param linear true when the color is already linear
     * @returns RGB color
     */
    static sRGB2RGB(rgb: RGB, linear?: boolean): RGB;
    /** WCAG 2.1 sRGB transfer function (distinct from the 2.2 gamma used by Oklab) */
    static srgb2Linear(c: number): number;
}

/** Axis type: `C` column, `L` line, `V` value */
type CrosstabAxisType = "C" | "L" | "V";
/** Axis of a crosstab */
interface CrosstabAxis {
    /** Field name */
    field: string;
    /** Axis name */
    name: string;
    /** Translated label */
    label: string;
    /** Order of the axis */
    order: number;
    /** Caption position */
    caption?: string;
    /** TODO "T" | "F"... */
    method: string;
    /** Axis type */
    type: CrosstabAxisType;
    /** Formula of a calculated value */
    formula?: string;
    /** Date grouping (year, month, day...) */
    dateGroup?: string;
    /** Index of the Y axis in chart */
    yaxis?: number;
    /** Hidden axis */
    hidden?: boolean;
    /** Chart type */
    chart?: string;
    /** Color palette */
    palette?: string;
    /** Field definition */
    f?: ObjectField;
}
/** Crosstab metadata */
interface CrosstabMetadata {
    /** Crosstab row ID */
    id: string;
    /** Crosstab name */
    name: string;
    /** Translated label */
    label: string;
    /** Default aggregation method */
    method?: string;
    /** Available aggregation methods */
    methods: EnumItem[];
    /** Available date groupings */
    dateGroups: EnumItem[];
    /** Color of the sub-totals */
    subcolor?: string;
    /** Show the control panel */
    control?: boolean;
    /** Show the sub-totals */
    subtotal?: boolean;
    /** "no" or position */
    caption?: string;
    /** Precision of the values */
    precision?: number;
    /** Editable axis */
    editable?: boolean;
    /** Chart type */
    chart?: string;
    /** Chart width */
    width?: string;
    /** Chart height */
    height?: string;
    /** Color palette */
    palette?: string;
    /** Axis in columns */
    columns?: CrosstabAxis[];
    /** Axis in lines */
    lines?: CrosstabAxis[];
    /** Values */
    values?: CrosstabAxis[];
}
/** Crosstab rendering options (`z` parameters sent to the service) */
interface CrosstabParam {
    /** "no" or position */
    zcaption?: string;
    /** Show the table */
    ztable?: boolean;
    /** Always get lines tree + metadata */
    ztree?: true;
    /** Show the sub-totals */
    zstotal?: boolean;
    /** Color of the sub-totals */
    zstcolor?: string | null;
    /** Axis definitions */
    zaxis?: KeyObject[];
    /** Filters */
    zfilters?: KeyObject;
    /** Color palette */
    zpalette?: string;
    /** Mono chart name */
    zgraph?: string;
    /** Chart names of multi charts */
    [key: `zgraph_${string}`]: string;
    /** Chart width */
    zwidth?: string;
    /** Chart height */
    zheight?: string;
    /** Show the control panel */
    zcontrol?: boolean;
    /** Selected tab of the control panel */
    controlTab?: number;
    /** Search handler */
    search?: (filters: KeyObject) => void;
    /** Apply the options */
    apply?: (obj: BusinessObject, ct: CrosstabMetadata, p: CrosstabParam) => void;
    /** Export the data in a media (CSV, XLSX...) */
    exportData?: (media: string) => void;
    /** Reload the crosstab */
    reload?: Callback;
    /** Error handler */
    error?: Callback;
}
/** Parameters of a crosstab display (see `$ui.displayCrosstab`) */
type CrosstabNavParam = NavParam & {
    /** Optional instance name */
    inst?: string;
    /** Optional filters to apply */
    filters?: KeyObject;
    /** Optional crosstab options */
    options?: CrosstabParam;
    /** Search handler */
    search?: (filters: KeyObject) => void;
    /** Apply the options */
    apply?: (obj: BusinessObject, ct: CrosstabMetadata, p: CrosstabParam) => void;
    /** Export the data in a media (CSV, XLSX...) */
    exportData?: (media: string) => void;
    /** Reload the crosstab */
    reload?: Callback;
    /** Error handler */
    error?: Callback;
};
/** Crosstab data */
interface CrosstabData {
    /** Column nodes */
    columns: CrosstabNode[];
    /** Root of the line nodes */
    lines: CrosstabNode;
}
/** Node of a crosstab axis */
interface CrosstabNode {
    /** Index */
    index: number;
    /** Path in the tree */
    path: string;
    /** Name */
    name: string;
    /** Text color */
    color?: string;
    /** Background color */
    bgcolor?: string;
    /** Background colors per value */
    bgcolors?: (string | null)[];
    /** Values */
    values?: any;
    /** Labels */
    labels?: string[];
    /** Row IDs */
    ids?: string[];
    /** Child nodes */
    children?: CrosstabNode[];
}
/**
 * Crosstab rendering
 */
declare class Crosstab {
    private controlTab;
    /**
     * Display the cross tab
     * @param ctn Container
     * @param obj Object
     * @param ct Crosstab definition
     * @param data Crosstab data
     * @param p options { zstotal, zstcolor, zcaption, ztable, zgraph... }
     */
    display(ctn: Container, obj: BusinessObject, ct: CrosstabMetadata, data: CrosstabData, p: CrosstabParam, cbk?: Callback): this;
    private axisDragDrop;
}

/** Handler on chart click */
type ChartClickHandler = (chart: Chart, clickElements: InteractionItem[], dataset: InteractionItem[], elementIndex: number, datasetIndex: number) => void;
/** Options of the charts (each chart uses its own subset) */
interface ChartParam {
    /** Chart type (ex: 'pie', 'doughnut', 'bar', 'line') */
    type?: ChartType;
    /** Title */
    title?: string;
    /** Display the legend? */
    legend?: boolean;
    /** Colors of the values (default palette) */
    colors?: string[] | null;
    /** Animate the rotation (pie)? */
    animate?: boolean;
    /** Animation? */
    animation?: boolean;
    /** Responsive chart? */
    responsive?: boolean;
    /** Dark mode? */
    dark?: boolean;
    /** Stacked bars or lines? */
    stacked?: boolean;
    /** Horizontal bars? */
    horizontal?: boolean;
    /** Aspect ratio (default 2) */
    aspectRatio?: number;
    /** Logarithmic Y axis? */
    log?: boolean;
    /** Values in log10? */
    log10?: boolean;
    /** Zoom on X axis by mouse drag? */
    zoom?: boolean;
    /** Type of X axis (ex: 'time', 'date') */
    xType?: string;
    /** Time format of X axis */
    timeFormat?: string;
    /** Minimum of X axis */
    min?: number | string;
    /** Maximum of X axis */
    max?: number | string;
    /** Unit of Y axis */
    unit?: string;
    /** Unit of X axis */
    xUnit?: string;
    /** Unit of the second Y axis */
    y2unit?: string;
    /** Unit of Y axis (bubble) */
    yUnit?: string;
    /** Label of X axis (bubble, default 'x') */
    xLabel?: string;
    /** Label of Y axis (bubble, default 'y') */
    yLabel?: string;
    /** Line tension (0 = straight lines) */
    lineTension?: number;
    /** Width (default 100%) */
    width?: string;
    /** Height (default 200px) */
    height?: string;
    /** Click handler */
    onClick?: ChartClickHandler;
    /** Existing chart to update */
    chart?: Chart;
}
/** Count per status for {@link Charts.chartStatusPie}: list of [status label, count] */
type StatusPieData = [string, number][];
/** Count per status and date for {@link Charts.chartStatusCount} */
interface StatusCountData {
    /** Date format of the period */
    format?: string;
    /** Status labels */
    series: string[];
    /** Points [datetime, count] per status */
    data: [string, number][][];
}
/** Duration per status for {@link Charts.chartStatusDuration} */
interface StatusDurationData {
    /** Duration unit: seconds, minutes, hours or days */
    unit: "s" | "m" | "h" | "d";
    /** Status labels */
    ticks: string[];
    /** Durations per status: [averages, maximums, minimums] */
    data: [number[], number[], number[]];
}
/** Terminal status durations for {@link Charts.chartStatusTerminal} */
interface StatusTerminalData {
    /** Terminal status labels */
    series: string[];
    /** Points [duration in days, count] per terminal status */
    data: [number, number][][];
}
/** Serie of points for {@link Charts.chartTimeSeries} */
interface PlotSerie {
    /** Serie label */
    label: string;
    /** Points `[x, y]`: x is a date `YYYY-MM-DD HH:mm:ss` or a number */
    data: [string | number, number][];
    /** Fill the area under the line */
    fill?: boolean;
    /** Display as bars */
    bar?: boolean;
    /** Display only the points without line */
    points?: boolean;
    /** Use the second Y axis on the right */
    y2?: boolean;
    /** Specific color */
    color?: string;
}
/**
 * ChartJS controller
 */
declare class Charts {
    constructor();
    /**
     * Current palette name
     */
    PALETTE: string;
    /**
     * Predefined palettes <code>\{ name:[colors] \}</code>.
     */
    PALETTES: {
        [key: string]: string[];
    };
    /** Bright color of the palette */
    BRIGHT_COLOR?: string;
    /** Dark color of the palette */
    DARK_COLOR?: string;
    /**
     * Current palette of colors <br />
     * default: <code>app.sysparams.CHART_PALETTE</code> or 'Sea'
     */
    COLORS: string[];
    /** Units to format a file size */
    readonly SIZES: (string | number)[][];
    /**
     * Indexed color in palette
     * @param i Index
     * @returns color (<code>#RRGGBB</code>)
     */
    getColor(i: number): string;
    /**
     * All palette colors
     * @returns array of colors (<code>#RRGGBB</code>)
     */
    getColors(): string[];
    /**
     * Current palette
     * @returns palette = list of colors
     */
    getPalette(): string;
    /**
     * Change the current palette
     * @param name Palette name ('Sea', 'Base'...)
     */
    setPalette(name: string): void;
    /**
     * Chart JS
     * @param ctn Container
     * @param config From chart.js v3 config with options
     * @param click Optional handler <code>function(chart, clickElements, dataset, elementIndex, datasetIndex)</code>
     */
    chart(ctn: Container, config: ChartConfiguration, click?: ChartClickHandler, ariaLabel?: string): Chart | undefined;
    /**
     * Destroy the charts of a container
     * @param ctn Container
     */
    destroy(ctn: Container): void;
    /**
     * Enable the zoom on X axis by mouse drag (needs the chartjs-plugin-zoom, reset by double-click)
     * @param config Chart config
     */
    zoom(config: ChartConfiguration): void;
    /**
     * Dark theme: black background with light texts and grid
     * @param config Chart config
     */
    dark(config: ChartConfiguration): void;
    /**
     * Add a title and legend
     * @param config Chart config
     * @param title display+text
     * @param legend display+position
     */
    addTitle(config: ChartConfiguration, title: TitleOptions, legend: TitleOptions): void;
    /**
     * Set Stacked option
     * @param config Chart config
     * @param stacked true to stack axis
     */
    stacked(config: ChartConfiguration, stacked?: boolean): void;
    /**
     * Apply the common scale options
     * @param config Chart config
     * @param p Options: `log` for a logarithmic Y axis, `zoom` to zoom on X axis by mouse drag
     */
    scaleOptions(config: ChartConfiguration, p: ChartParam): void;
    /**
     * Set the background color of chart
     * @param config Chart config
     * @param color background color of canvas
     */
    backgroundColor(config: ChartConfiguration, color: string): void;
    /**
     * Status count in a PIE
     * @param ctn Container
     * @param data Pie data
     * @param p Optional chart.js options
     */
    chartStatusPie(ctn: Container, data: StatusPieData, p: ChartParam): void;
    /**
     * Status count in a chart line per date
     * @param ctn Container
     * @param data Line data
     * @param p Optional chart.js options
     */
    chartStatusCount(ctn: Container, data: StatusCountData, p: ChartParam): void;
    /**
     * Status duration in a polar/radar/bar charts
     * @param ctn Container
     * @param d Duration data
     * @param p Optional chart.js options
     */
    chartStatusDuration(ctn: Container, d: StatusDurationData, p: ChartParam): void;
    /**
     * Asysnc queue chart
     * @param ctn Container
     * @param hist History data
     * @param p Options width ans height
     */
    chartQueueHistory(ctn: Container, hist: KeyObject, p: ChartParam): void;
    /**
     * Process duration in a bar chart
     * @param ctn Container
     * @param data Duration data
     * @param p Optional chart.js options
     */
    chartStatusTerminal(ctn: Container, data: StatusTerminalData, p: ChartParam): void;
    /**
     * Series on a time or numeric X axis (monitoring, histories...)
     * @param ctn Container
     * @param series Series of points
     * @param p Options:
     * `title` (chart title),
     * `xType` (`time` default or `linear`),
     * `timeFormat` (moment format of the time ticks),
     * `min`/`max` (X axis range),
     * `xUnit`/`unit`/`y2unit` (units of the X, Y and second Y axis ticks),
     * `log` (logarithmic Y axes),
     * `stacked` (stacked Y values),
     * `zoom` (zoom by mouse drag, default true),
     * `legend` (default true),
     * `dark` (dark theme),
     * `colors` (default palette)
     * @returns Chart
     * @example
     * await $factory.ChartJS();
     * $ui.charts?.chartTimeSeries(ctn, [
     * 	{ label: "Sessions", data: [["2026-09-24 10:00:00", 12], ["2026-09-24 11:00:00", 18]], fill: true },
     * 	{ label: "Errors", data: [["2026-09-24 10:00:00", 1], ["2026-09-24 11:00:00", 3]], bar: true }
     * ], { title: "Activity", timeFormat: "HH:mm", log: false });
     */
    chartTimeSeries(ctn: Container, series: PlotSerie[], p?: ChartParam): Chart | undefined;
    /**
     * Stacked bars per category
     * @param ctn Container
     * @param d Data: `series` (labels of series), `ticks` (categories), `data` (values per serie and category)
     * @param p Options:
     * `title` (chart title),
     * `horizontal` (horizontal bars),
     * `unit` (unit of the values),
     * `max` (max value),
     * `legend` (default true),
     * `dark` (dark theme),
     * `colors` (default palette)
     * @returns Chart
     * @example
     * await $factory.ChartJS();
     * $ui.charts?.chartBars(ctn, {
     * 	series: ["Open", "Closed"],
     * 	ticks: ["Jan", "Feb", "Mar"],
     * 	data: [[10, 20, 15], [5, 8, 12]]
     * }, { title: "Tickets", horizontal: false });
     */
    chartBars(ctn: Container, d: {
        series: string[];
        ticks: string[];
        data: number[][];
    }, p?: ChartParam): Chart | undefined;
    /**
     * Bubbles with one dataset per bubble
     * @param ctn Container
     * @param points Bubbles `[x, y, count, label]`
     * @param p Options:
     * `title` (chart title),
     * `xUnit`/`yUnit` (units of the axes),
     * `xLabel`/`yLabel` (labels of the values in tooltip),
     * `colors` (default palette)
     * @returns Chart
     * @example
     * await $factory.ChartJS();
     * // [x, y, count, label]
     * $ui.charts?.chartBubble(ctn, [[2, 5, 10, "Process A"], [4, 1, 3, "Process B"]], {
     * 	title: "Process times", xUnit: "d", yUnit: "d"
     * });
     */
    chartBubble(ctn: Container, points: [number, number, number, string][], p?: ChartParam): Chart | undefined;
    /**
     * Chart for crosstab
     */
    chartCrosstab(ctn: Container, ct: CrosstabMetadata, data: KeyObject, p?: ChartParam): void;
    /**
     * Format octets size to Kb/Mb/Gb/Tb
     * @param size Size
     */
    size(size: string): string | undefined;
    /**
     * Heap chart of browser memory (LOG_UI=yes)
     * @param ctn Container
     * @param data Lines data <code>[\{d,u,t\},...]</code>
     * @param p Optional chart.js options
     */
    chartHeapSize(ctn: Container, data: KeyObject, p: ChartParam): Chart | undefined;
    /**
     * Steps of front service (LOG_UI=yes)
     */
    chartServiceSteps(ctn: Container, data: KeyObject[], p: ChartParam): Chart | undefined;
    /**
     * Times of front service (LOG_UI=yes)
     */
    chartServiceTimes(ctn: Container, data: KeyObject, p: ChartParam): Chart | undefined;
    /**
     * Get the brightest color in the current palette
     * @param darkest True to get the darkest one
     * @returns A color <code>#RRGGBB</code>
     */
    getBrightColor(darkest?: boolean): string;
    /**
     * Get the lighten or darken color
     * @param color <code>#RRGGBB</code>
     * @param val -255..255
     * @returns A color <code>#RRGGBB</code>
     */
    lightenDarkenColor(color: string, val: number): string;
    /**
     * Convert <code>#RRGGBB</code> to object <code>\{r,g,b,a\}</code>
     * @param color Color <code>#RRGGBB</code>
     * @param alpha Alpha (transparency)
     * @returns object <code>\{r,g,b,a\}</code>
     */
    css2rgb(color: string, alpha?: number): RGBA;
    /**
     * Convert object <code>\{r,g,b\}</code> to <code>#RRGGBB</code>
     * @param rgb Color <code>\{r,g,b\}</code>
     * @returns Color <code>#RRGGBB</code>
     */
    rgb2css(rgb: RGB): string;
    /**
     * Convert <code>#RRGGBB</code> to string
     * @param color Color <code>#RRGGBB</code>
     * @param alpha Alpha (transparency)
     * @returns string <code>'rgba(r,g,b,a)'</code>
     */
    css2rgba(color: string, alpha?: number): string;
    /**
     * Convert <code>\{r,g,b\}</code> to <code>\{h,s,v\}</code>
     * @param color Color <code>\{r,g,b\}</code>
     * @returns Color <code>\{h,s,v\}</code>
     */
    rgb2hsv(color: RGB): HSV;
    /**
     * Convert <code>\{h,s,v\}</code> to <code>\{r,g,b\}</code>
     * @param hsv Color <code>\{h,s,v\}</code>
     * @returns Color <code>\{r,g,b\}</code>
     */
    hsv2rgb(hsv: HSV): RGB;
}

/**
 * OCR tools (using the Tesseract.js lib) **EXPERIMENTAL**
 */
declare class OCR {
    /** URL of the Tesseract library */
    readonly tessurl: string;
    /**
     * Extract the text of an image.
     * @param img Image
     * @param lang Language
     * @returns Promise of the recognized text
     */
    doOCR(img: any, lang: string): Promise<any>;
}

/** Name of a color palette */
type PaletteName = "Base" | "Pastel" | "Strong" | "Light" | "Bright" | "Mars" | "Sea" | "Berry" | "Fire" | "Choco";
/** Parameters of a toast (see `$view.widget.toast`) */
interface ToastParam {
    /** Optional level */
    level?: AlertType;
    /** Toast body */
    content: AnyContent;
    /** Position `top` or `bottom` */
    position?: string;
    /** Align `left`, `right` or `center` */
    align?: string;
    /** Duration in ms (default 3000, -1 = no auto close) */
    duration?: number;
    /** Add an undo button */
    undo?: boolean;
    /** Add a pin button to keep the toast open */
    pinable?: boolean;
}
/** Parameters of a scratch pad to draw on an image */
interface ScratchPadParam {
    /** Width */
    width?: number;
    /** Height */
    height?: number;
    /** Dialog title */
    title?: string;
    /** Inline pad (else in a dialog) */
    inline?: boolean;
    /** Image to draw on */
    image: HTMLImageElement | JQuery;
    /** Callback when the pad is loaded */
    onload?: (pad: JQuery) => void;
    /** Callback with the updated image data URL (null when removed) */
    update: (dataURL: string | null) => void;
}
/** Parameters of a counter widget */
interface CounterParam {
    /** Object name */
    name: string;
    /** Object instance name */
    instance?: string;
    /** Optional field name to get total (or simple count) */
    field?: string;
    /** Object filters */
    filters?: KeyObject;
    /** Counter label */
    label?: string;
    /** Optional help title */
    help?: string;
    /** Background color (CSS color) */
    bgColor?: string;
    /** Text color (CSS color) */
    textColor?: string;
    /** Predefined background color grey(default)|blue|orange|red|green|purple|violet|yellow|turquoise|brown */
    color?: string;
    /** Icon name */
    icon?: string;
    /** Width (number of pixels or CSS dimension) */
    width?: string | number;
    /** Height (number of pixels or CSS dimension) */
    height?: string | number;
    /** Column span (defaults to max(3, 12 / number of objects)) */
    colSpan?: number;
    /** Click handler, `true` to open the list */
    onclick?: true | JQueryHandler;
}
/** Parameters of a slider */
interface SliderParam {
    /** Input ID */
    id?: string;
    /** Input name */
    name?: string;
    /** Label */
    label?: string;
    /** Minimum value */
    min?: number;
    /** Maximum value */
    max?: number;
    /** Step */
    step?: number;
    /** Value */
    value?: number;
    /** Width */
    width?: string;
    /** Height */
    height?: string;
    /** Show the value */
    showValue?: boolean;
    /** Handler on change */
    onchange?: JQueryHandler;
    /** Handler on input */
    oninput?: JQueryHandler;
    /** Disabled */
    disabled?: boolean;
    /** Read-only: focusable, exposed as `aria-readonly`, every change blocked (ignored if `disabled`) */
    readonly?: boolean;
    /** Round or square */
    round?: boolean;
    /** Thin input */
    thin?: boolean;
}
/**
 * Common widgets
 */
declare class Widget {
    /**
     * Predefined palettes
     * <ul>
     * <li>Base</li>
     * <li>Pastel</li>
     * <li>Strong</li>
     * <li>Light</li>
     * <li>Bright</li>
     * <li>Mars</li>
     * <li>Sea</li>
     * <li>Berry</li>
     * <li>Fire</li>
     * <li>Choco</li>
     * </ul>
     */
    readonly PALETTES: {
        [key: string]: string[];
    };
    /**
     * Build an avatar image
     * @param data or { login, firstname, lastname, picture (full usr_image_id document) }
     * @returns .avatar
     */
    avatar(data?: UsageUser): JQuery<HTMLElement>;
    /**
     * Create a badge
     * @param p value or { name, value }
     * @returns div.badge
     */
    badge(p?: string | number | {
        name?: string;
        value?: string | number;
    }): JQuery<HTMLElement>;
    /**
     * Wait dialog box
     * @returns div.waitdlg
     */
    waitdlg(): JQuery<HTMLElement>;
    /**
     * Build a switch button on/off
     * @param p button parameters
     * @param p.id optional input id
     * @param p.name input name
     * @param p.value input initial value (default "1")
     * @param p.onchange optional 'change' handler
     * @param p.label optional accessible name through aria-label
     * @param p.checked on/off ?
     * @param p.disabled false to disable the switch
     * @param p.round round or square?
     * @returns span with a checkbox and a slider
     */
    switchButton(p: {
        id?: string;
        name?: string;
        value?: string;
        label?: string;
        onchange?: JQueryHandler;
        checked?: boolean;
        disabled?: boolean;
        round?: boolean;
    }): JQuery<HTMLElement>;
    /**
     * Build a slider
     * @param p slider parameters
     * @param p.id input id
     * @param p.name input name
     * @param p.min min value
     * @param p.max max value
     * @param p.step slider step
     * @param p.value slider value
     * @param p.width optional input width
     * @param p.height optional input height
     * @param p.showValue insert the value?
     * @param p.onchange optional 'change' handler (on slider release)
     * @param p.oninput optional 'input' handler (on slider move)
     * @param p.disabled false to disable the slider
     * @param p.readonly true for a focusable slider that cannot be changed
     * @param p.round round or square?
     * @param p.thin thin input?
     * @returns div.slider
     */
    slider(p: SliderParam): JQuery<HTMLElement>;
    /**
     * Build a star slider (rate rendering)
     * @param p slider parameters
     * @param p.name input name
     * @param p.size nb of stars, server values goes from 1 to size (0 = no star checked)
     * @param p.value slider value
     * @param p.disabled false to disable the slider
     * @returns div.star-slider
     */
    starSlider(p: {
        name: string;
        size: number;
        value?: number;
        disabled?: boolean;
    }): JQuery<HTMLElement>;
    /**
     * Build an action control
     * @param a action metadata
     * @param o object
     * @param rowId optional rowId for form/row action
     * @param click click handler
     * @param minified true to move the label in a tooltip
     * @returns button or li for 'Plus' button
     */
    actionItem(a: Action, o: UIBusinessObject, rowId: string | null, click?: ActionHandler, minified?: boolean): JQuery<HTMLElement>;
    /**
     * Convert actions to buttons array
     * @param o Business object
     * @param rowId Optional rowId on form/row
     * @param list List of actions as plain buttons
     * @param plus List of actions as 'plus' button
     * @param options Options
     * @param options.alignRight true for right side
     * @param options.minified true to move labels in tooltips
     * @param options.dropUp true to drop up the 'plus' popup
     * @param options.plusFirst true to put the plus button on first position
     * @param options.grouped true to group plain buttons per type (print, crosstab, treeview, placemap, associate)
     * @param options.groups additional action groups with name, icon, label, actions
     * @returns jQuery items
     */
    actionItems(o: UIBusinessObject, rowId: string | null, list?: Action[] | null, plus?: Action[] | null, options?: {
        alignRight?: boolean;
        minified?: boolean;
        dropUp?: boolean;
        plusFirst?: boolean;
        grouped?: boolean;
        groups?: ActionGroup[];
    }): JQuery[];
    /**
     * Create a searchbar
     * @param p Options
     * @param p.id Input id
     * @param p.label Input aria label
     * @param p.icon Optional icon
     * @param p.cbk Optional callback
     * @param p.events Input binded events
     * @param p.collapsed Input collapsed
     */
    searchBar(p: {
        id: string;
        label: string;
        icon?: string;
        cbk?: JQueryHandler | null;
        events?: string;
        collapsed?: boolean;
    }): JQuery<HTMLElement>;
    /**
     * Action bar
     * @param list Array of buttons (plain or plus)
     * @param alignRight pull on the right side of container ?
     * @returns div.actions
     */
    actionBar(list: JQuery[], alignRight?: boolean): JQuery | "";
    /**
     * Convert image to base64 (using a canvas)
     * @param img DOM image
     * @param mime mime type (ex: image/jpeg)
     * @returns string = image BASE64 encoded
     */
    getBase64Image(img: HTMLImageElement, mime: string): string;
    /**
     * Build a breadcrump 'first / ... / last ones'
     * @param items list of items : string or <code>{ label }</code>
     * @param size size limit
     * @param cbk click handler(index)
     * @returns ol.breadcrumb
     */
    breadcrump(items: (string | NavItem)[], size: number, cbk?: (index: number) => void): JQuery<HTMLElement>;
    /**
     * Transform a bar with overflow button for invisible items in a dropdown
     * @param ctn horizontal bar container (ul or div, with a limited height) with items (li/a, button or div)
     * @param options Overflow options
     * @param options.show bring hidden item visible at 'first' or 'last' position when clicked (always trigger a 'ui.bar.click' on bar)
     * @param options.icon icon button (default fas/caret-square-down)
     * @param options.count count hidden items in icon (dafault false)
     * @returns .bar-overflow + caller must trigger 'ui.resize' when displayed to fit size
     */
    barOverflow(ctn: JQuery, options?: {
        show: string;
        icon?: string;
        count?: boolean;
    }): JQuery<HTMLElement>;
    /**
     * Bind a completion to input
     * @param input input or null
     * @param limit max size of results (0 = no limit)
     * @param search search service(cbk)
     * @param select optional callback(data) on picking (click or enter)
     * @param disp optional callback to display a result
     * @param options options
     * @param options.autoselect auto-select the single result on blur or enter (default false)
     * @returns input
     */
    completion(input: JQuery | null, limit: number, search: (cbk: (rows: KeyObject[]) => void) => void, select?: null | ((data: KeyObject) => void), disp?: null | ((data: KeyObject) => string | JQuery), options?: {
        autoselect?: boolean;
    }): JQuery<HTMLElement>;
    /**
     * Bind a completion to textarea (substitute @login)
     * @param textarea social textarea
     */
    completionSocial(textarea: JQuery): JQuery<HTMLElement>;
    /**
     * Pillbox control with completion, deprecated use $.pillbox
     * @deprecated 7.0
     */
    pillbox(div: JQuery | null, data: PillboxItem[], limit: number, maxOccurs: number, search: null | ((values: string, cbk: (r: KeyObject) => void) => void), disp: null | ((item: KeyObject) => string), lookup: null | ((add?: Callback) => void), onAdd: null | ((id: string, fn: (...p: any) => void, data: KeyObject) => void), onRemove: null | ((id: string, fn: Callback) => void), onCreate: null | ((val: string, fn: Callback) => void), onOpen: null | ((id: string) => void)): JQuery<HTMLElement> | string[];
    /**
     * Launch a simple calculator on input
     * @param inp form input
     * @param cbk callback(result)
     * @returns input
     */
    calculator(inp: AnyContent, cbk?: (result: number) => void): this;
    /**
     * Theme picker
     * @param themes list of themes (at list 2 themes to open the dialog)
     * @param pick callback with selected theme
     */
    themePicker(themes?: Theme[], pick?: (theme: Theme) => void): void;
    /**
     * Theme palette preview
     * @returns .theme-palette-preview with colors
     */
    palette(palette?: Palette): JQuery<HTMLElement>;
    /**
     * Predefined palette of colors picker
     * @param p Parameters
     * @param p.palette optional selected palette
     * @param p.pick optional pick handler(palette)
     * @param p.dropup true to dropup (default dropdown)
     * @param p.inline true to inline the palettes (default display a dropdown button)
     * @param p.label optional label dropdown button (default: selected palette name)
     * @param p.icon optional icon of dropdown button
     */
    palettePicker(p: {
        palette?: string;
        pick?: (palette: string) => void;
        dropup?: boolean;
        inline?: boolean;
        label?: string;
        icon?: string;
    }): JQuery<HTMLElement>;
    /**
     * Preview image in a dialog
     * @param p
     * @param p.url image url
     * @param p.alt optional image alt
     * @param p.longDesc optional image long description
     * @param p.name optional image name
     * @param p.zoom percent or 'fit", fitWidth' or 'fitHeight' to screen
     * @param p.onload optional onload callback
     */
    previewImage(p: {
        url: string;
        alt?: string;
        longDesc?: string;
        name?: string;
        zoom?: string | number;
        onload?: (img: JQuery) => void;
    }): JQuery<HTMLElement>;
    /**
     * Circular progress bar
     * @param options
     * @param options.percent percent value 0..100
     * @param options.background center background color
     * @param options.color center text color
     * @param options.color1 circle color
     * @param options.color2 circle active color
     * @param options.duration animation duration in ms (default 2000)
     * @param options.radius circle radius in px
     * @param options.width circle line width in px
     * @param options.text optional center content (""=empty, default='n%')
     * @param options.bar optional bar selector to update value
     */
    circularProgressBar(options?: {
        percent?: number;
        background?: string;
        color?: string;
        color1?: string;
        color2?: string;
        duration?: number;
        radius?: number;
        width?: number;
        text?: AnyContent;
        bar?: string | JQuery;
    }): JQuery<HTMLElement>;
    /**
     * POST/UPLOAD dialog
     * @param e progress event from xhr
     * @param p Optional parameters
     * @param p.id dialog Id
     * @param p.label dialog title
     * @param p.after timeout in ms before opening the modal dialog (default 3s)
     * @param p.background callback when the dialog in minified as toast (post in background)
     */
    postProgress(e: ProgressEvent, p?: {
        id?: string;
        label?: string;
        after?: number;
        background?: Callback;
    }): void;
    private _postProgress;
    /**
     * Toast during the export loading
     * @param title toast title
     * @param filename file name to download
     * @param url url to load
     * @param p Parameters
     * @param p.async async URL to wait for by polling
     * @param p.abort optional URL to abort
     */
    toastLoading(title: string, filename: string, url: string, p?: {
        async?: string;
        abort?: string;
    }): void;
    /**
     * Toast dialog
     * @param params text or an object with optional keys:
     * `level` ('info' default, 'success', 'warning', 'error'='danger'),
     * `content` (content message),
     * `position` ('top' default or 'bottom'),
     * `align` ('left', 'center' default or 'right'),
     * `duration` (animation duration in ms, default 3000, -1 = infinity),
     * `undo` (add a UNDO button?),
     * `pinable` (add a push-pin button?)
     */
    toast(params: string | ToastParam): JQuery<HTMLElement>;
    private toastStacks;
    /**
     * Display the news
     * @param ctn container to display articles (null to display an area or a ticker bar)
     * @param list news list from WebNews object or or <code>\{ id, title, description, date, image \}</code>
     * @param options optional parameters
     * @param options.template HTML template with classes to fill <code>.news-title .news-date .news-desc .news-img</code> (default Simplicite.UI.Globals.news.template)
     * @param options.popup true to get only news to display (on logon) in a modal dialog
     * @param options.ticker true to get only news to display on a footer ticker
     */
    news(ctn: AnyContainer, list?: News[], options?: {
        template?: string;
        popup?: boolean;
        ticker?: boolean;
    }): void;
    /**
     * Display a ticker bar
     * @param p Optional parameters
     * @param p.position position selector (default 'body')
     * @param p.list list of news <code>\{ id, title, description \}</code>
     */
    tickerBar(p?: {
        position?: AnyContainer;
        list?: News[];
    }): void;
    /**
     * Multi-files rendering + upload
     * @param ctn container
     * @param list list of documents { id, name }
     * @param p options
     * @param p.name component name
     * @param p.object business object
     * @param p.field doc field with fileAccept: string or array of permitted extensions and MIME types
     * @param p.upload upload files allowed?
     * @param p.download download documents?
     * @param p.preview preview documents?
     * @param p.remove remove documents?
     * @param p.show 'list' default or 'boxes'
     * @param p.toggle true to toggle list|boxes
     * @param p.min minimum files (0 = not required)
     * @param p.max total of permitted files (0 = no limit)
     */
    docUploader(ctn: JQuery, list: DocumentDB[], p: {
        id: string;
        name: string;
        object: BusinessObject;
        field: ObjectField;
        upload?: boolean;
        download?: boolean;
        preview?: boolean;
        remove?: boolean;
        show?: "list" | "boxes";
        toggle?: boolean;
        min?: number;
        max?: number;
    }): JQuery<HTMLElement>;
    /**
     * Advanced notepad with activities
     * @param p options
     * @param p.id widget id
     * @param p.name widget name
     * @param p.data Content <code>{ checks:[{ title, list:[check,text]}], activities:[{ date, author, text }] }</code>
     * @param p.readonly Read only or editable by authors
     * @param p.popup Allows to open a popup to enlarge contents
     * @param p.split split checklists and comments in 2 columns
     * @param p.autosplit minimal width of container to auto-split
     * @param p.height Optional max height
     * @param p.change optional <code>callback({act,event})</code> when data has changed
     */
    notepad(p: {
        id?: string;
        name?: string;
        data: string | KeyObject;
        readonly?: boolean;
        popup?: boolean;
        split?: boolean;
        autosplit?: number;
        height?: number | string;
        change?: (p: {
            act?: KeyObject;
            item?: KeyObject;
            list?: {
                title: string;
                list: KeyObject[];
            };
            event: string;
        }) => void;
    }): JQuery<HTMLElement>;
    /**
     * Simple dialog to change the user's password
     */
    changePwd(): void;
    /**
     * Create a characters counter on input field
     * @param input input or textarea
     * @param p Options
     * @param p.max Max length of input (default 100)
     * @param p.position top or bottom (default bottom)
     * @param p.align left or right (default left)
     * @param p.toggle true to show/hide on focus/blur
     */
    charCounter(input: AnyContent, p?: {
        max?: number;
        position?: "bottom" | "top";
        align?: "left" | "right";
        toggle?: boolean;
    }): JQuery<HTMLElement>;
    /**
     * Edit a markdown text in a dialog with a preview area
     * @param md Initial value
     * @param cbk Callback with new value
     */
    editMarkdown(md: string, cbk?: (md: string) => void): JQuery<HTMLElement>;
    /**
     * Open a dialog to take a picture
     * @param p
     * @param p.title Dialog title
     * @param p.facingMode video facing mode suggestion (selfie = 'user' or back camera = 'environment', not applicable if device has only one camera)
     * @param p.videoWidth video width (use the media width by default without zoom)
     * @param p.imageWidth result image width (use the media width if unspecified)
     * @param p.imageHeight result image height (same video aspect ratio if unspecified)
     * @returns Promise with data URL 'data:image/png;base64,...'
     */
    takePicture(p: {
        title: string;
        facingMode: string;
        videoWidth?: number;
        imageWidth?: number;
        imageHeight?: number;
    }): Promise<string>;
    /**
     * Simple scratch pad
     * @param p
     * @param p.width result image width (default 800)
     * @param p.height result image height (default 600)
     * @param p.title dialog title
     * @param p.inline inline pad
     * @param p.image source image
     * @param p.onload callback(pad) when loaded
     * @param p.update callback(dataURL) when signature has changed
     */
    scratchPad(p: ScratchPadParam): void;
    /**
     * Take a signature on pad
     * @param p Options
     * @param p.width result image width (default 400)
     * @param p.height result image height (default 200)
     * @param p.title dialog title
     * @param p.inline inline pad
     * @param p.image source image
     * @param p.onload callback(pad) when loaded
     * @param p.update callback(dataURL) when signature has changed
     */
    takeSignature(p: ScratchPadParam): void;
    /**
     * Scan a QRCode/barcode
     * @param p
     * @param p.width scanner width (default 350)
     * @param p.height scanner height (default 0)
     * @param p.scanWidth scan zone width (default 250)
     * @param p.scanHeight scan zone height (default 250)
     * @param p.aspectRatio scanner aspect ratio height (default 1.0)
     * @param p.title dialog title
     * @param p.applyButton display apply button? defaults to true
     * @param p.retryButton display retyr button? defaults to true
     * @param p.cancelButton display cancel button? defaults to true
     * @param p.applyLabel apply label
     * @param p.retryLabel retry button title
     * @param p.cancelLabel cancel button title
     * @param p.container container to inline in (no dialog in this case)
     * @param p.id DOM id (got from container if a container is set, defaults to 'scanner')
     * @param p.onload callback(scanner) when loaded
     * @param p.onscan callback(scanner, text) when scan is done
     * @param p.onapply callback(text) when scan is applied (trigger by the apply button)
     * @param p.onretry callback() when scan is resumed (triggered by the retry button)
     * @param p.oncancel callback() when scan is cancelled (triggered by the cancel button)
     * @param p.onclose callback() after closing
     */
    scanCode(p: {
        width?: number;
        height?: number;
        scanWidth?: number;
        scanHeight?: number;
        aspectRatio?: number;
        title?: string;
        applyButton?: boolean;
        applyLabel?: string;
        retryButton?: boolean;
        retryLabel?: string;
        cancelButton?: boolean;
        cancelLabel?: string;
        container?: JQuery;
        id?: string;
        onload?: Callback;
        onscan?: (scan: Html5Qrcode | null, value: string) => void;
        onapply?: (text: string) => void;
        onretry?: Callback;
        oncancel?: Callback;
        onclose?: Callback;
    }): void;
    /**
     * Display a contrast helper between 2 colors
     * @param ctn Target container to draw the preview button with colors and contrast value
     * @param color input of color
     * @param bgcolor input of background color
     */
    contrastHelper(ctn: JQuery, color: JQuery, bgcolor: JQuery): void;
    /**
     * Display a shortcut
     * @param ctn Target container
     * @param p Options
     * @param p.shortcuts List of shortcuts, each with `name`, `url`, `target` and `order`
     */
    shortcuts(ctn: JQuery, p: {
        shortcuts: Shortcut[];
    }): JQuery<HTMLElement>;
    /**
     * Display a counter
     * @param ctn Target container
     * @param p Options
     * @param p.name Object name
     * @param p.instance Object instance name
     * @param p.field Optional field name to get total (or simple count)
     * @param p.filters Object filters
     * @param p.label Counter label
     * @param p.help Optional help title
     * @param p.bgColor Background color (CSS color)
     * @param p.textColor Text color (CSS color)
     * @param p.color Predefined background color grey(default)|blue|orange|red|green|purple|violet|yellow|turquoise|brown
     * @param p.icon Icon name
     * @param p.width Width (number of pixels or CSS dimension)
     * @param p.height Height (numbre of pixels or CSS dimension)
     * @param p.onclick Click handler
     */
    counter(ctn: JQuery, p: CounterParam): JQuery<HTMLElement>;
    /**
     * Display a set of counters
     * @param ctn Target container (if null defauts to container with options.id DOM Id)
     * @param p Options
     * @param p.objects Objects to display (see CounterParam for per-object properties)
     * @param p.id DOM Id (required if no container is passed)
     * @param p.width Width (number of pixels or CSS dimension)
     * @param p.height Height (numbre of pixels or CSS dimension)
     * @param p.colSpan Column span (defaults to max(3, 12 / number of objects)
     * @param p.rowClasses Optional CSS row classes (default 'row')
     * @param p.classes Optional CSS classes to add
     * @param p.onclick Click handler
     */
    counters(ctn: JQuery | null, p: {
        id?: string;
        objects: CounterParam[];
        width?: string | number;
        height?: string | number;
        colSpan?: number;
        rowClasses?: string;
        classes?: string;
        onclick?: JQueryHandler;
    }): JQuery<HTMLElement>;
    /**
     * Display a carousel for a business object
     * @param ctn Target container (if null defauts to container with opts.id DOM Id)
     * @param p Options
     * @param p.name Object name
     * @param p.instance Object instance name
     * @param p.filters Object filters
     * @param p.titleField Object title field
     * @param p.subTitleField Object sub-title field
     * @param p.descriptionField Object description filters
     * @param p.imageField Object image field
     * @param p.imageFieldThumbnail Object image field as thumbnail ?
     * @param p.id DOM Id (required if no container is passed)
     * @param p.width Width (number of pixels or CSS dimension)
     * @param p.height Height (numbre of pixels or CSS dimension)
     * @param p.bgColor Background color (CSS color))
     * @param p.onclick Click handler
     */
    carousel(ctn: JQuery, p: {
        name: string;
        instance?: string;
        filters?: KeyObject;
        titleField: string;
        subTitleField?: string;
        descriptionField?: string;
        imageField?: string;
        imageFieldThumbnail?: string;
        id?: string;
        width?: string | number;
        height?: string | number;
        bgColor?: string;
        addon?: AnyContent;
        onclick?: boolean | JQueryHandler;
    }): void;
    /**
     * Display a set of cards for a business object
     * @param ctn Target container (if null defauts to container with opts.id DOM Id)
     * @param p Options
     * @param p.name Object name
     * @param p.instance Object instance name
     * @param p.filters Object filters
     * @param p.titleField Object title field
     * @param p.subTitleField Object sub-title field
     * @param p.descriptionField Object description filters
     * @param p.statusField Object status filters
     * @param p.imageField Object image field
     * @param p.imageFieldThumbnail Object image field as thumbnail ?
     * @param p.id DOM Id (required if no container is passed)
     * @param p.rowClasses Row-level CSS classes
     * @param p.classes Row-level additional CSS classes
     * @param p.width Width (number of pixels or CSS dimension)
     * @param p.height Height (numbre of pixels or CSS dimension)
     * @param p.bgColor Background color (CSS color))
     * @param p.cardClasses Card-level additional CSS classes
     * @param p.cardWidth Card width (number of pixels or CSS dimension)
     * @param p.cardHeight Card height (numbre of pixels or CSS dimension)
     * @param p.cardImgWidth Card image width (number of pixels or CSS dimension)
     * @param p.cardImgHeight Card image height (numbre of pixels or CSS dimension)
     * @param p.cardBgColor Card background color (CSS color))
     * @param p.onclick Click handler
     */
    cards(ctn: JQuery, p: {
        name: string;
        instance?: string;
        filters?: KeyObject;
        titleField: string;
        subTitleField?: string;
        descriptionField?: string;
        statusField?: string;
        imageField?: string;
        imageFieldThumbnail?: string;
        id?: string;
        rowClasses?: string;
        classes?: string;
        width?: string | number;
        height?: string | number;
        bgColor?: string;
        cardClasses?: string;
        cardWidth?: string | number;
        cardHeight?: string | number;
        cardImgWidth?: string | number;
        cardImgHeight?: string | number;
        cardBgColor?: string;
        addon?: AnyContent;
        button?: {
            style?: string;
            label?: string;
            onclick?: JQueryHandler;
        };
        onclick?: boolean | JQueryHandler;
    }): void;
    /**
     * Display an accordion set for a business object
     * @param ctn Target container (if null defauts to container with opts.id DOM Id)
     * @param p Options
     * @param p.name Object name
     * @param p.instance Object instance name
     * @param p.filters Object filters
     * @param p.titleField Object title field
     * @param p.contentField Object description filters
     * @param p.id DOM Id (required if no container is passed)
     * @param p.classes Row-level additional CSS classes
     * @param p.width Width (number of pixels or CSS dimension)
     * @param p.height Height (numbre of pixels or CSS dimension)
     * @param p.bgColor Background color (CSS color))
     * @param p.onclick Click handler
     */
    accordion(ctn: JQuery, p: {
        name: string;
        instance?: string;
        filters?: KeyObject;
        titleField: string;
        contentField: string;
        id?: string;
        classes?: string;
        width?: string | number;
        height?: string | number;
        bgColor?: string;
        onclick?: boolean | JQueryHandler;
    }): void;
    /**
     * Display a time line set for a business object
     * @param ctn Target container (if null defauts to container with opts.id DOM Id)
     * @param p Options
     * @param p.name Object name
     * @param p.instance Object instance name
     * @param p.filters Object filters
     * @param p.titleField Object title field
     * @param p.dateField Object title field
     * @param p.contentField Object description filters
     * @param p.id DOM Id (required if no container is passed)
     * @param p.classes Row-level additional CSS classes
     * @param p.width Width (number of pixels or CSS dimension)
     * @param p.height Height (numbre of pixels or CSS dimension)
     * @param p.bgColor Background color (CSS color))
     * @param p.onclick Click handler
     */
    timeline(ctn: JQuery, p: {
        name: string;
        instance?: string;
        filters?: KeyObject;
        titleField: string;
        dateField: string;
        contentField: string;
        id?: string;
        classes?: string;
        width?: string | number;
        height?: string | number;
        bgColor?: string;
        onclick?: boolean | JQueryHandler;
    }): void;
    /**
     * Create a context menu
     * @param _element The element that was right-clicked
     * @param e Mouse event
     * @param items Actions
     */
    contextMenu(_element: JQuery, e: JQuery.ContextMenuEvent, items: (DropdownItem | JQuery)[]): JQuery<HTMLElement> | undefined;
}

/** Item of a view addon bar */
interface AddonBarItem {
    /** Unique name within the host bar (data-addon + .addon-<name>) */
    name: string;
    /** Accessible name: mandatory, no faked buttons */
    label: string;
    /** Icon, see $view.icon */
    icon?: string;
    /** Ascending left-to-right order (default 50) */
    weight?: number;
    /** Click handler (ignored when 'element' is given) */
    click?: (e: JQuery.Event) => void;
    /** Prebuilt element (dropdown, gotoDefinition...) */
    element?: JQuery;
}
/**
 * Addon bar renderer: collects the floating controls (gotodef, copylink, guides, ...)
 * of a whole view or a single view item
 */
declare class AddonBar {
    static enabled(): boolean;
    /**
     * Closest element that can host a bar
     */
    hostOf(el: AnyContainer): JQuery;
    /**
     * Get (or create) the bar for a host
     * @param host Host container (view item, view, external object, list or form)
     * @param create Create the bar if it does not exist?
     */
    bar(host: AnyContainer, create?: boolean): JQuery;
    /**
     * Reorder addons by ascending weight
     */
    sort(items: JQuery): void;
    /**
     * Set the bar title (host type and name)
     * @param host bar host
     * @param label host name
     * @param type optional object type (View, ObjectExternal...)
     */
    hostTitle(host: AnyContainer, label: string, type?: string): void;
    /**
     * Apply the expanded/collapsed state to a toggle button
     */
    static toggleState(tgl: JQuery, open: boolean): void;
    /**
     * Add an addon to the bar
     */
    add(host: AnyContainer, addon: AddonBarItem): JQuery | undefined;
    /**
     * Remove an addon by name
     */
    remove(host: AnyContainer, name: string): void;
    /**
     * Collapse the bar when empty, bypass the toggle for a single addon
     */
    refresh(bar: JQuery): void;
}

/** Node of a tree view (a record and its linked lists) */
interface TreeNode {
    /** Node ID */
    id?: string;
    /** Node name */
    name: string;
    /** Node type */
    type: number;
    /** Icon name */
    image?: string;
    /** Class name */
    style?: string;
    /** Node layout */
    layout?: string;
    /** Html */
    userkey?: string;
    /** Path of the node in the tree */
    path?: string;
    /** Row ID of the record */
    row_id?: string;
    /** Object of the node: name or rights */
    object?: string | {
        /** Object name */
        name: string;
        /** Open the form */
        form?: boolean;
        /** Show the list */
        list?: boolean;
        /** Plus menu */
        plus?: boolean;
    };
    /** Record values */
    item?: RowData;
    /** Old record values (to compare) */
    old?: RowData;
    /** Equ | new | upd | del */
    diff: 0 | 1 | 2 | 3;
    /** Linked lists */
    links?: TreeNodeList[];
    /** Child nodes */
    children?: TreeNode[];
    /** Count of children */
    count?: number;
    /** History of the tree */
    history?: KeyObject[];
    /** Root: closed paths */
    closed?: {
        [path: string]: boolean;
    };
    /** Root: objects of the tree */
    objects?: string[];
    /** Root: show the lists of nodes */
    showNodeList?: boolean;
}
/** List of child nodes of a link, or a menu entry (process, URL, action or script) */
interface TreeNodeList {
    /** Object name */
    object: string;
    /** Icon name */
    icon?: string;
    /** Translated label */
    label: string;
    /** Path of the list in the tree */
    path?: string;
    /** Count of records */
    count: number;
    /** Page index */
    page: number;
    /** Max page index */
    maxpage: number;
    /** Nodes of the page */
    list: TreeNode[];
    /** Process to start */
    process?: string;
    /** External URL to open */
    exturl?: string;
    /** Action name */
    action?: string;
    /** Action metadata */
    meta?: Action;
    /** Fk */
    field?: string;
    /** Filters of the list */
    filters?: KeyObject;
    /** Script to execute */
    script?: string;
    /** Do not show the list of nodes */
    nolist?: boolean;
}
/** Parameters of a tree view rendering */
interface TreeParam {
    /** Object instance name */
    inst?: string;
    /** Search depth */
    depth?: number;
    /** In menu */
    menu?: boolean;
    /** Or docked on left */
    docked?: boolean;
    /** Opened tree */
    open?: boolean;
    /** Distinguishes first open from reload */
    rendered?: boolean;
    /** Work area to display the forms */
    work?: JQuery;
    /** Display a record in the work area, `cbk` must be called when displayed */
    display?: (target: Container, obj: BusinessObject, rowId: string, tv: TreeView, p: KeyObject, cbk: Callback) => void;
    /** Load a node item on open */
    onOpen?: (node: TreeNode, cbk: (item?: RowItem | null) => void) => void;
    /** Load a page of a linked list */
    onPage?: (parent: string, parentId: string, object: string, page: number, cbk: (r: KeyObject) => void) => void;
    /** Add the tree in menu */
    addMenu?: Callback;
    /** Remove the tree from menu */
    delMenu?: Callback;
}
/**
 * Simplicit&eacute; tree view
 */
declare class TreeView {
    /** Session */
    app: Session;
    /** Tree view name */
    name: string;
    /** Root node */
    root?: TreeNode;
    private _nodes;
    /**
     * Constructor
     * @param app Ajax services
     * @param tv Treeview metadata { id, name, root... }
     */
    constructor(app: Session, tv: object);
    /**
     * Get node definition
     * @param id node id
     */
    getDefinition(id: string): TreeNode;
    /**
     * Node definition of object
     * @param obj object name
     */
    getNode(obj: string): KeyObject | undefined;
}

/** Parameters of a menu entry click */
interface MenuParam {
    /** Menu item */
    item: MenuItem;
    /** Object name */
    object?: string;
    /** Workflow name */
    workflow?: string;
    /** Process name */
    process?: string;
    /** BAM name */
    bam?: string;
    /** Process step */
    step?: string;
    /** Object name of a tray */
    tray?: string;
    /** Field name (tray or list of states) */
    field?: string;
    /** Enumeration code */
    code?: string;
    /** Domain name */
    domain?: string;
    /** View name */
    view?: string;
    /** URL */
    href?: string;
    /** Target of the URL */
    target?: LoadTarget;
    /** Translated label */
    label?: string;
    /** Open in a new tab */
    newtab?: NewTabPosition;
}
/** Menu item */
interface MenuItem {
    /** Item type */
    type: "object" | "statusobject" | "external" | "process" | "workflow" | "domain" | "view";
    /** Item name */
    name: string;
    /** Translated label */
    label: string;
    /** Icon name */
    icon: string;
    /** Opened */
    open?: boolean;
    /** Extendable */
    ext?: boolean;
    /** Extended */
    extended?: boolean;
    /** Create right */
    create?: boolean;
    /** URL */
    url?: string;
    /** Link URL */
    href?: string;
    /** Target of the link */
    target?: string;
    /** Width */
    width?: number | string;
    /** Height */
    height?: number | string;
    /** Field name */
    field?: string;
    /** Has a home page */
    hasHome?: boolean;
    /** Home page name */
    homePage?: string;
    /** Is a dashboard */
    dashboard?: boolean;
    /** Is a widget */
    widget?: boolean;
    /** Has a tray */
    tray?: boolean;
    /** Sub-items */
    items?: SubMenu;
    /** Activities of a process */
    activities?: ActivityMetadata[];
    /** States of a status object */
    states?: EnumItem[];
    /** Tray fields */
    trays?: {
        /** Tray field name */
        field: string;
        /** Tray label */
        label: string;
    }[];
    /** Lists of states per field */
    lists?: {
        /** Field name */
        field: string;
        /** Field label */
        label: string;
        /** States of the field */
        items: EnumItem[];
    }[];
    /** Position of the menu (`T` = top, else left) */
    menu_position?: string;
}
/** Main menu */
type MainMenu = MenuItem[];
/** Sub menu */
type SubMenu = MenuItem[];
/** Menu settings */
interface MenuSettings {
    /** Top menu */
    top: {
        /** Top menu is active */
        active: boolean;
    };
    /** Left menu */
    left: {
        /** Left menu is active */
        active: boolean;
        /** Collapse mode */
        collapse: "icons-static" | "icons-expand" | "none";
        /** Search box in menu */
        searchable: boolean;
    };
}
/**
 * Main menu rendering
 */
declare class Menu {
    /** #menu.left-sidebar */
    container?: Container;
    /** .main-nav-toggle */
    navToggle?: JQuery;
    /** Ul.main-menu role=menu */
    menu?: JQuery;
    /** Last focused item */
    _focus?: JQuery;
    /** Timer of the status refresh */
    statusTimer?: number;
    /** Default value to default behavior */
    leftMinified: string;
    /** Menu settings (default values iso v6.3) */
    menuSettings: MenuSettings;
    /**
     * Main menu
     */
    getMenu(): JQuery<HTMLElement>;
    /**
     * Menu (left/top) Settings (either from sys_param or default values)
     */
    getMenuSettings(): MenuSettings;
    /**
     * Init menus (left,top)
     */
    init(): void;
    private item;
    private toggle;
    private itemTop;
    /** Element by id, as a JQuery set */
    private byId;
    /** Counter of the ids linking toggles to their controlled lists */
    topMenuId: number;
    private hasSubMenu;
    private contextMenu;
    private click;
    /**
     * Init the top menu (horizontal with dropdowns)
     * - Click to open dropdowns
     * - Click to open flyout sub-menus (no hover)
     * - Keyboard navigation support
     * - Flyouts detached to body to avoid clipping
     */
    initTopMenu(items: MenuItem[], menuSettings: MenuSettings["top"]): void;
    /**
     * Init the main menu (on left), use the ui.clickMenu handler
     */
    initLeftMenu(items: MenuItem[], menuSettings: MenuSettings["left"]): void;
    /**
     * Select one menu item
     */
    selectMenu(a: JQuery, menu?: JQuery | null): JQuery;
    /**
     * Focus the last selected item or first item
     */
    focus(): void;
    /**
     * hover effect when minified
     * @param b false to remove effect
     */
    hover(b: boolean): void;
    /**
     * Menu navigation with Arrow keys
     */
    keydown(el: HTMLElement, e: JQuery.Event): void;
    /**
     * Accordion effect
     */
    accordion(el: JQuery): void;
    /**
     * Is menu minimized on the left side ?
     */
    isMenuMin(): boolean | undefined;
    /**
     * Is menu maximized on the left side ?
     */
    isMenuMax(): boolean;
    /**
     * Minimize the menu on the left side
     * <ul>
     * <li>displays only domain icons</li>
     * <li>popup the sub-menus over the screen</li>
     * <ul>
     */
    menuMin(): void;
    /**
     * Maximize the menu on the left side
     * <ul>
     * <li>displays domain icons and labels</li>
     * <li>accordion sub-menus</li>
     * <ul>
     */
    menuMax(): void;
    /**
     * Hide a sub-menu
     * @param m menu item (li element with .sub-menu child)
     */
    subMenuMin(m: JQuery): void;
    /**
     * Show a sub-menu
     * @param m menu item (li element with .sub-menu child)
     */
    subMenuMax(m: JQuery): void;
    /**
     * Toggle the main menu on the left side
     * @param e optional event
     * @param sign positive:show, negative:hide
     */
    menuToggle(e?: JQuery.Event | KeyboardEvent | null, sign?: number): void;
    private setToggleState;
    /**
     * Start a timer to update enum counters
     */
    startRefreshStatus(): void;
    /** Refresh of status counters has been started */
    private statusStarted;
    /**
     * Pause the timer to update visible status counters (page hidden)
     */
    pauseRefreshStatus(): void;
    /**
     * Restart and refresh the status counters if they were paused (page restored)
     */
    resumeRefreshStatus(): void;
    /**
     * Stop the timer to update visible status counters
     */
    stopRefreshStatus(): void;
    /**
     * Update the visible enum counter
     * @param object object name or menu item or sub-menu
     * @param field enum field name
     * @param code enum code
     */
    updateStatusBadge(object: string | JQuery, field?: string, code?: string): false | Promise<boolean | JQuery<HTMLElement>> | undefined;
    private badge;
    /**
     * Update all status and enum counters of a given menu
     * @param m sub menu
     */
    updateStatusBadges(m: JQuery): void;
    /**
     * Process incoming data from SSE event enumCounters
     * @param d data
     */
    onEnumCounters(d: KeyObject): void;
    /**
     * Display a tree view in the menu.
     * @param ctn Container
     * @param o Business object
     * @param id Root row ID
     * @param tv Tree definition
     * @param p Tree parameters
     * @param cbk Optional callback when displayed
     */
    treeview(ctn: Container, o: BusinessObject, id: string, tv: TreeNode, p: TreeParam, cbk?: Callback): Window & typeof globalThis;
    /**
     * Update the badge of the notifications shortcut.
     * @param n Notifications data (`incoming` to shake the bell)
     */
    updateNotificationBadge(n: KeyObject): void;
    /**
     * Filter menu
     */
    filterMenu(): void;
    /**
     * Open a top menu dropdown
     */
    openTopDropdown(mi: JQuery): void;
    /**
     * Close a top menu dropdown
     */
    closeTopDropdown(mi: JQuery): void;
    /**
     * Expand/collapse an expandable entry (enum group) of a dropdown or flyout
     * - expanding one collapses its siblings (accordion)
     */
    toggleSub(btn: JQuery, open?: boolean): void;
    /**
     * Collapse all the expanded entries (enum groups) within a scope
     */
    collapseSubs(scope: JQuery): void;
    /**
     * Close all top menus
     */
    closeAllTopMenus(): void;
    /**
     * Open a flyout submenu
     */
    openTopFlyout(li: JQuery): void;
    /**
     * Close a flyout menu
     */
    closeTopFlyout(li: JQuery): void;
    /**
     * Keyboard navigation for top menu
     * - Left/Right: between top entries, open/close flyouts, expand/collapse enum groups
     * - Up/Down/Home/End: through the visible entries of the current dropdown/flyout
     */
    keydownTopMenu(el: HTMLElement, e: JQuery.Event, openFlyout?: (li: JQuery) => void, closeFlyout?: (li: JQuery) => void, getFlyoutForLi?: (li: JQuery) => JQuery | null): void;
    /**
     * Append flyout to body & position it (no clipping)
     */
    positionFlyout(li: JQuery, fm: JQuery): void;
}

/**
 * Type of a view item:
 * `L` login, `D` date, `T` time, `C` enumeration code, `S` search list, `F` filters,
 * `E` external object, `I` image, `G` graph chart, `X` crosstab, `P` link, `Z` print template,
 * `N` index search, `W` news, `U` shortcuts, `V` tree view, `B` sub-view
 */
type ViewItemType = typeof ViewType[keyof typeof ViewType];
/** Data given to the external object of a view item */
interface ViewItemContentData {
    /** External object name */
    extobject?: string;
    /** Translated label */
    label?: string;
    /** Translated help */
    help?: string;
    /** Values */
    fields?: KeyObject;
}
/** Content of a view item (depends on its type) */
interface ViewItemContent {
    /** Translated label */
    label?: string;
    /** Name (external object, crosstab, tree view...) */
    name?: string;
    /** Image source */
    src?: string;
    /** URL */
    url?: string;
    /** External object name */
    ext?: string;
    /** Code */
    code?: string;
    /** Crosstab name */
    crosstab?: string;
    /** Search name */
    search?: string;
    /** Print template name */
    print?: string;
    /** CT options */
    options?: KeyObject;
    /** CT meta */
    meta?: KeyObject;
    /** External object data */
    data?: ViewItemContentData;
    /** Object name */
    object?: string;
    /** Object instance name */
    inst?: string;
    /** Field name */
    field?: string;
    /** Specific rendering */
    spec?: string;
    /** Fixed filters */
    filters?: KeyObject;
    /** Vertical rendering */
    vertical?: boolean;
    /** Compact rendering */
    compact?: boolean;
    /** Show a date period */
    period?: boolean;
    /** Treeview Id */
    id?: string;
    /** Root Id of treeview */
    rowId?: string;
    /** Tree view depth (default 2) */
    depth?: number;
}
/** Item of a view */
interface ViewItem {
    /** Item row ID */
    id?: string;
    /** Position of the item in the view template */
    pos?: number;
    /** Item type */
    type?: ViewItemType;
    /** Collapsed */
    collapsed?: boolean;
    /** Show the title */
    title?: boolean;
    /** Translated label */
    label?: string;
    /** Item content */
    content?: string | ViewItemContent;
    /** Item container */
    div?: Container;
    /** Tab area of the item */
    _tabArea?: number;
    /** Index of the item in its tabs */
    _tabIndex?: number;
}
/** Parameters of a view display (see `$ui.displayView`) */
type ViewParam = {
    /** True on main/domain home view (to get home instance of objects) */
    home?: boolean;
    /** When view has a parent object */
    parent?: BusinessObject;
    /** false to hide the permalink button */
    useCopyLink?: boolean;
    /** Edit mode */
    edit?: boolean;
    /** Optional before load callback */
    beforeload?: (ctn: Container, view?: View) => void;
    /** Optional onload callback */
    onload?: (ctn: Container, view?: View) => void;
    /** Optional unload callback */
    onunload?: (ctn: Container, view?: View) => void;
} & NavParam;
/**
 * View
 */
declare class View {
    /** View row ID */
    id?: string;
    /** View name */
    name: string;
    /** Translated label */
    label: string;
    /** Show the title */
    title?: boolean;
    /** Icon name */
    icon?: string;
    /** View items */
    items: ViewItem[];
    /** Cacheable view */
    cacheable?: boolean;
    /** Visible view */
    visible?: boolean;
    /** Inlined view (link displayed in the form) */
    inline?: boolean;
    /** Related business object */
    object?: BusinessObject;
    /** Home page view */
    home: boolean;
    /** URL */
    url?: string;
    /** Home position */
    item?: string;
    /** Guides to play on display */
    guides?: GuideMetadata[];
    /** Owner row ID */
    ownerId?: string;
    /** Owner name */
    ownerName?: string;
    /** Link: child object name */
    target?: string;
    /** Link: reference field name */
    reference?: string;
    /** Name sanitized */
    fullname: string;
    /** Session */
    app: Session;
    /** UI data */
    ui?: KeyObject;
    /** View template */
    uiTemplate?: string | JQuery;
    /** Moved in the template */
    moved?: boolean;
    /** View container */
    div?: Container;
    /** Tab index of the view */
    _tab?: number;
    /** Unique DOM ID */
    domId?: string;
    /** Unique DOM ID of the tab label */
    linkTabId?: string;
    /**
     * Constructor
     * @param app Ajax services
     * @param view Field metadata
     * @param obj Optional related business object
     */
    constructor(app: Session, view: KeyObject, obj?: BusinessObject);
    /**
     * Get an item of the view.
     * @param n Item position
     * @returns The item or undefined
     */
    getItem(n: number): ViewItem | undefined;
}

/** Status metrics cached in the object context: last params and last rendered metrics */
interface ContextMetrics {
    /** From date (YYYY-MM-DD) */
    fromDate?: string;
    /** To date (YYYY-MM-DD) */
    toDate?: string;
    /** Group by period: 1=hour, 2=day, 3=week, 4=month, 5=quarter, 6=semester, 7=year */
    period?: number | string;
    /** Palette name */
    palette?: string;
    /** Last rendered metrics element, kept to be restored as is by the navigation */
    view?: JQuery;
    /** Container of the rendered metrics */
    ctn?: HTMLElement;
}
/** Filter input of the status metrics: visible, hidden or `read` only */
type StatusMetricsInput = boolean | "read";
/** Elements to show in the status metrics (all visible by default) */
interface StatusMetricsShow {
    /** Show the count per status */
    count?: boolean;
    /** Show the duration per status */
    duration?: boolean;
    /** Show the status history */
    history?: boolean;
    /** Show the terminal status per duration */
    terminal?: boolean;
    /** Show the palette picker */
    palette?: boolean;
    /** Use the status colors (no palette picker) */
    statusColor?: boolean;
    /** Period selector */
    period?: StatusMetricsInput;
    /** From date input */
    fromDate?: StatusMetricsInput;
    /** To date input */
    toDate?: StatusMetricsInput;
}
/** Parameters of the status metrics */
interface StatusMetricsParam {
    /** Palette name in `Simplicite.UI.Charts.PALETTE` (ex 'sea', 'mars'...) */
    palette?: string;
    /** Data groupment 1:hour, 2:day, 3:week, 4:month, 5:quarter, 6:semester, 7:year */
    period?: number | string;
    /** Search data from this date YYYY-MM-DD */
    fromDate?: string;
    /** Search data to this date YYYY-MM-DD */
    toDate?: string;
    /** Show options */
    show?: StatusMetricsShow;
    /** Restore the last metrics as is without backend call (used by the navigation), otherwise a new search is done */
    restore?: boolean;
}
/** Parameters of the status metrics display */
type StatusMetricsDisplayParam = StatusMetricsParam & NavParam & {
    /** Before loading */
    beforeload?: (ctn: Container, obj: UIBusinessObject) => void;
    /** When loaded */
    onload?: (ctn: Container, obj: UIBusinessObject) => void;
    /** When unloaded */
    onunload?: (ctn: Container, obj: UIBusinessObject) => void;
};
/** Metrics data from the `bamMetric` service (charts are present when requested in the show options) */
interface StatusMetricsData {
    /** Objects as [code, label], null when no data */
    objects?: [string, string][] | null;
    /** Count per status */
    pie?: StatusPieData;
    /** Count per status and date */
    count?: StatusCountData;
    /** Duration per status */
    duration?: StatusDurationData;
    /** Terminal status durations */
    term?: StatusTerminalData;
}
/** State model metrics rendering (charts per status) */
declare class StatusMetrics {
    /**
     * State model charts
     * @param ctn Container
     * @param obj Business object
     * @param data Metrics from service
     * @param params Options: palette, period, dates and elements to show
     * @returns The metrics element, undefined when there is nothing to display
     */
    static display(ctn: AnyContainer, obj: BusinessObject, data: StatusMetricsData, params?: StatusMetricsParam): JQuery | undefined;
}

/**
 * Board and view rendering
 */
declare class Board {
    /**
     * Navigation rendering
     * @param ctn Optional container to find the .nav
     * @param nav Navigator
     */
    displayNav(ctn: AnyContainer, nav: UINavigator): this;
    /**
     * Hide navigation
     * @param ctn Optional container to find the .nav
     */
    hideNav(ctn: AnyContainer): this;
    /**
     * Display a view of items (i.e. home, plain view or part of form)
     * @param ctn container
     * @param v view metadata <code>\{ name, visible, template, ...\}</code>
     * @param p options <code>\{ parent, home, lazy, edit \}</code>
     * @param cbk callback when displayed
     */
    display(ctn: Container, v: View, p?: ViewParam, cbk?: Callback): this;
    /**
     * Display user's dashboards
     * @param ctn container
     * @param data list of user views + perm + groups
     * @param p options
     * @param cbk callback when displayed
     */
    dashboards(ctn: Container, data: KeyObject, p: KeyObject, cbk?: (div: JQuery) => void): void;
    /** Current dashbord view to display */
    selectedDashboard?: View;
    /**
     * State model charts
     * @deprecated moved to `StatusMetrics.display`
     */
    statusMetrics(ctn: AnyContainer, obj: BusinessObject, data: StatusMetricsData, params?: StatusMetricsParam): this;
    /**
     * Version check
     * @param ctn Target container
     * @param options
     * @param options.silent Do not display message in case of check error?
     * @param options.addon Optional addon content
     */
    versionCheck(ctn: Container | string, options?: {
        addon?: AnyContent;
        silent?: boolean;
    }): void;
    /**
     * Display the About dialog
     */
    about(): this;
    /**
     * System informations rendering
     * @param ctn Container
     * @param data Informations
     * @param fn action callback
     * @param cache Clear cache only or full form
     */
    sysinfo(ctn: Container, data: KeyObject, fn: (action: string, param?: string | null) => void, cache?: boolean): this;
    /**
     * Models picker and creation
     * @param ctn Container
     * @param params options { embedded }
     */
    modeler(ctn: Container, params?: KeyObject): Promise<this>;
    /**
     * import/export application with modules
     */
    moduleApp(action: string, obj: BusinessObject, service: (p: ModuleAjax, started: TrackerCallback) => void): void;
    /** Delete module rendering */
    moduleDelete(ctn: AnyContainer, module: BusinessObject, service: CallableFunction): this;
    /**
     * Check if the easter egg is allowed
     * @param name entry name in SIM_EASTER_EGGS: true or 'devmode' only
     * @param egg optional JS egg name to load
     * @param jsfile resource name to install the game
     * @returns true if allowed
     */
    easterEgg(name: string, egg?: string, jsfile?: string): boolean;
    /** Load and launch the easter egg */
    loadEasterEgg(egg: string, jsfile: string): Promise<void>;
}

/** Parameters of the bulk update form */
type UpdateFormParam = {
    /** Title */
    title?: string;
    /** Object instance name */
    inst?: string;
    /** Save button handler */
    onsave?: (ctn: Container, o: BusinessObject, cbk?: Callback) => void;
    /** Close button handler */
    onclose?: (ctn: Container, o: BusinessObject) => void;
    /** Hook when displayed */
    onload?: (ctn: Container, o: BusinessObject) => void;
    /** Hook when removed */
    onunload?: (ctn: Container, o: BusinessObject) => void;
} & NavParam;
/**
 * Bulk update rendering
 */
declare class Update {
    /**
     * Display the bulk update form
     * @param ctn container
     * @param o object
     * @param p optional parameters
     * @param cbk optional callback
     */
    display(ctn: Container, o: BusinessObject, p: UpdateFormParam, cbk?: Callback): this;
}

/** Parameters of an external object page */
interface ExternalParam {
    /** Title */
    title?: string;
    /** Help */
    help?: string;
    /** Icon name */
    icon?: string;
    /** HTML content */
    html: string;
    /** External object metadata */
    metadata?: ExternalMetadata;
    /** Stylesheets to load */
    css?: string[];
    /** Scripts to load */
    js?: string[];
}
/**
 * External object rendering
 */
declare class External {
    /**
     * Display the external object
     * @param ctn container
     * @param p optional parameters { title, icon, html, metadata }
     * @param cbk optional callback
     */
    display(ctn: Container, p: ExternalParam, cbk: (div: JQuery) => void): this;
}

/** Callback with the picked color, `apply` = false to restore the old color on cancel */
type ColorPickerHandler = (color: string, apply?: boolean) => void;
/** Color with its lighter and darker shades */
interface ColorSet {
    /** Base color */
    color: string;
    /** Lighter shades */
    lighters: string[];
    /** Darker shades */
    darkers: string[];
}
/** Colors of a palette */
type PaletteColors = ColorSet[];
/**
 * Color picker widget (based on https://seballot.github.io/spectrum)
 */
declare class ColorPicker {
    /** Container */
    ctn: Container;
    /** Color input */
    input: JQuery;
    /** Callback with the picked color */
    callback?: ColorPickerHandler;
    /** Dialog */
    dlg?: JQuery;
    /** Color before picking */
    oldColor: string;
    /** Picked color */
    newColor?: string;
    /** Empty color on optional field */
    allowEmpty: boolean;
    /** From field rendering */
    allowAlpha: boolean;
    /** Only RGB colors (no names) */
    onlyRgb: boolean;
    /** Current selected theme with colors */
    static theme?: string;
    /** Colors of the current theme */
    static themeSet?: PaletteColors;
    /** Pre-loaded colors per theme name */
    static themePalettes: KeyHash<JQuery>;
    constructor(ctn: Container, input: JQuery, cbk?: ColorPickerHandler);
    private toString;
    /**
     * Open the color picker
     * @param dropdown display as dropdown or dialog box
     */
    open(dropdown: boolean): void;
    /** Close the picker and notify the picked color (or restore the old one on cancel) */
    close(): void;
    /** Get the theme palette */
    palTheme(t: Theme): JQuery<HTMLElement> | undefined;
    /** Themes picker to change the master palette */
    listThemes(ctn: JQuery): "" | undefined;
    /**
     * Build the color sets of a theme palette.
     * @param theme Theme name
     * @param pal Optional palette (default palette of the theme)
     */
    static buildColorSets(theme: string, pal?: Palette): void;
    private static palPrepare;
}

/**
 * Parameters of the XML import service (IMPORTXML, IMPORTZIP or IMPORTADP)
 */
type ImportXMLParams = {
    /** Data file in the multi-part POST */
    file?: {
        file: File;
        name: string;
        id: string;
    };
    /** Data file location */
    url?: string;
    /** Adapter name */
    adapter?: string;
    /** Adapter parameters: param1=1;param2=2 */
    param?: string;
    /** XML data */
    data?: string;
    /** Parallel import of the data */
    async?: boolean;
    /** Stop the import on the first error */
    stoponerror?: boolean;
};
/**
 * Import data rendering
 */
declare class Import {
    /** Template of a Simplicite XML import file */
    readonly XML_SIMPLICITE: string;
    private help;
    /**
     * Import XML interface
     * @param ctn Container
     * @param data
     * @param send callback to post data
     */
    display(ctn: Container, data: {
        help?: AnyContent;
        adapters?: string[];
        adapter?: string;
    }, send: (data: ImportXMLParams) => void): void;
    /**
     * Import CSV interface
     * @param ctn Container
     * @param data objects and help
     * @param send callback to post data
     */
    displayCSV(ctn: Container, data: {
        help?: AnyContent;
        objects?: string[];
    }, send: (data: KeyObject) => void): void;
}

/** Records to merge */
interface MergeParam {
    /** array of row IDs to merge */
    ids: string[];
}
/** Parameters of a merge save */
type MergeSaveParam = MergeParam & {
    /** true to check only (isMergeEnable) */
    check?: boolean;
    /** index per field to preserve */
    item?: object;
    /** indexes per link to preserve */
    links?: object;
    /** optional limited link Ids per link and indexes to preserve */
    linkIds?: object;
    /** indexes per meta-object to preserve */
    metaobj?: object;
};
/**
 * Merge object rendering
 */
declare class Merge {
    /**
     * Display the merge form of records.
     * @param ctn Container
     * @param obj Business object
     * @param items Records to merge
     * @param save Save handler
     * @param close Close handler
     */
    display(ctn: Container, obj: BusinessObject, items: RowDataMeta[], save?: (p: MergeSaveParam) => void, close?: Callback, cbk?: Callback): void;
}

/** Parameters of the BAM dashboard */
interface BamParam {
    /** Begin date */
    begin?: string;
    /** End date */
    end?: string;
    /** Period 1:hour, 2:day, 3:week, 4:month, 5:quarter, 6:semester, 7:year */
    period?: number | string;
}
/** Business Activity Monitoring (BAM) rendering */
declare class Bam {
    private ctn;
    private head?;
    private _baseURL;
    private _tab;
    private _metrics;
    private _cols;
    private _log10;
    private _colors;
    private _fdate?;
    private static singleton?;
    /**
     * Render the BAM dashboard.
     * @param metrics Array of other available metrics {key,label}
     * @param params begin, end, period
     */
    static render(metrics: KeyObject[], params?: BamParam): Promise<void>;
    /**
     * Render the BAM dashboard
     * @param metrics Array of other available metrics {key,label}
     * @param params begin, end, period
     */
    display(metrics: KeyObject[], params?: BamParam): void;
    /**
     * Display a tab: 0 = status, 1 = activities and processes, else a metric.
     * @param tab Optional tab index (default current tab)
     */
    displayTab(tab?: number): void;
    /** Reload with the selected dates, period and palette */
    reload(): void;
    /**
     * Shift the period.
     * @param s Shift (-1 = backward, 1 = forward)
     */
    shift(s: number): void;
    /**
     * Add a metric tab.
     * @param k Metric key (`o<object>` or `p<process>`)
     */
    addTab(k: string): void;
    /**
     * Remove a metric tab.
     * @param k Metric key (`o<object>` or `p<process>`)
     */
    delTab(k: string): void;
    private _getMetric;
    private _call;
    private _onBamActivity;
    private _onBamProcess;
    private _onBamStatus;
    private _onBamMetric;
    /**
     * Draw a chart in a container with error handling
     * @param div Container id
     * @param draw Drawing function
     * @param error Error message prefix
     */
    private _plot;
    private _plotProcessPie;
    private _plotProcessLag;
    private _plotProcessDate;
    private _plotProcessUser;
    private _plotStatusPie;
    private _plotStatusDate;
    private _plotStatusDuration;
    private _plotStatusTerm;
    /**
     * Convert a period format of the server (strftime) to a moment format
     * @param format Format as `%a %e-%b`, `%Y-%m`...
     */
    private _timeFormat;
}

/**
 * ZIP files editor
 */
declare class ZIP {
    /**
     * Display the content of a ZIP document.
     * @param ctn Container
     * @param doc ZIP document
     * @param zip Loaded ZIP
     * @param p Optional parameters (`readonly`)
     */
    display(ctn: Container, doc: DocumentDB, zip: JSZip, p?: {
        readonly?: boolean;
    }): void;
}

/**
 * Treeview rendering
 */
declare class Tree {
    /**
     * Object treeview rendering
     * @param ctn container
     * @param o business object (where o.item is a tree)
     * @param id row Id
     * @param tv treeview definition { name }
     * @param p options
     * @param cbk optional callback
     */
    display(ctn: Container, o: BusinessObject, id: string, tv: TreeNode, p: TreeParam, cbk?: Callback): this;
    /**
     * Filter tree
     */
    filterTree(this: HTMLElement): void;
}

/** Timesheet service parameters */
interface TimesheetData {
    /** Action (`save` or undefined to read) */
    action?: string;
    /** Timesheet name */
    name: string;
    /** Resource row ID */
    resId?: string;
    /** Start date of the range */
    start?: string;
    /** End date of the range */
    end?: string;
    /** Grid data to save */
    data?: KeyObject;
    /** Swap inputs and resources */
    swap?: boolean;
    /** Go to today */
    today?: boolean;
    /** Show all the lines */
    showall?: boolean;
    /** Shift the period backward (-1) or forward (1) */
    shift?: TimesheetShift;
    /** Gantt name */
    gantt?: string;
}
/** Totals of a timesheet line */
interface TimesheetTotal {
    /** Total */
    total: number;
    /** Sub-total */
    subtotal: number;
    /** Workload */
    workload: number;
}
/** Line of a timesheet (N,N assignment between 2 resources) */
interface TimesheetLine {
    /** N,N row_id */
    id: string;
    /** Resource 1 */
    id1: string;
    /** Label of resource 1 */
    label1: string;
    /** Resource 2 */
    id2: string;
    /** Label of resource 2 */
    label2: string;
    /** Group index */
    groupby: number;
    /** Begin date of the assignment */
    begin: string;
    /** End date of the assignment */
    end: string;
    /** Input values per date key */
    inputs: {
        [key: string]: string[];
    };
    /** Totals */
    totals: TimesheetTotal[];
    /** Status field */
    sfield?: ObjectField;
    /** Status value */
    status?: string;
}
/** Period (column) of a timesheet */
interface TimesheetPeriod {
    /** Date key */
    key: string;
    /** Day label */
    day: string;
    /** Open day */
    open?: boolean;
    /** Read only */
    read?: boolean;
}
/** Shift backward (-1) or forward (1) */
type TimesheetShift = 1 | -1;
/** Timesheet metadata and handlers */
interface TimesheetMetadata {
    /** Container */
    ctn: Container;
    /** Timesheet row ID */
    id: string;
    /** Timesheet name */
    name: string;
    /** Period type (`D` = day, `W` = week, `Y` = year) */
    type: "D" | "W" | "Y";
    /** Read only timesheet */
    readOnly?: boolean;
    /** Allow inputs in the past */
    backward?: boolean;
    /** Show the sheet */
    useSheet?: boolean;
    /** Use a chart */
    useChart?: boolean;
    /** Show the chart */
    showChart?: boolean;
    /** Swap inputs and resources */
    swapInput?: boolean;
    /** Show all the lines */
    showall?: boolean;
    /** Start date */
    start?: string;
    /** End date */
    end?: string;
    /** Go to today */
    today?: boolean;
    /** Shift of the period */
    shift?: TimesheetShift;
    /** Assign N,N object name */
    assign: string;
    /** Object of root resource 1 or 2 */
    object: UIBusinessObject;
    /** Row ID of resource 1 */
    id1?: string;
    /** Object of resource 1 */
    obj1?: string;
    /** Field of resource 1 */
    field1: string;
    /** Row ID of resource 2 */
    id2?: string;
    /** Object of resource 2 */
    obj2?: string;
    /** Field of resource 2 */
    field2: string;
    /** Lines */
    lines: TimesheetLine[];
    /** Status values */
    status: EnumItem[];
    /** Input fields */
    inputs: ObjectField[];
    /** Periods (columns) */
    periods: TimesheetPeriod[];
    /** Groups */
    groups: number[];
    /** Chart */
    chart?: Chart;
    /** Save the timesheet */
    save: (cbk?: Callback) => void;
    /** Close the timesheet */
    close: Callback;
    /** Redraw the timesheet */
    redraw?: Callback;
    /** Read the grid data */
    read?: () => KeyObject;
    /** Swap inputs and resources */
    swap?: Callback;
    /** Go to today */
    showToday?: Callback;
    /** Add a line */
    add?: Callback;
    /** Open a record */
    open?: (obj: string, id: string, form: boolean) => void;
    /** Shift the period */
    onshift: (sign: number) => void;
}
/** Timesheet data from the server */
interface TimesheetParam {
    /** Timesheet metadata */
    ts: TimesheetMetadata;
    /** Messages */
    msg?: MessageJSON[];
}
/** Timesheet display options */
type TimesheetOptions = NavParam & {
    /** Hook before loading */
    beforeload?: (ctn: Container, obj: UIBusinessObject, ts: TimesheetMetadata) => void;
    /** Hook when displayed */
    onload?: (ctn: Container, obj: UIBusinessObject, ts: TimesheetMetadata) => void;
    /** Hook when removed */
    onunload?: (ctn: Container, obj: UIBusinessObject, ts: TimesheetMetadata) => void;
};
/** Gantt data */
interface TimesheetGanttData {
    /** Periods */
    period: TimesheetPeriod[];
    /** TODO */
    meta: KeyObject;
    /** TODO */
    data: KeyObject;
}
/** Gantt display options */
type TimesheetGanttParam = {
    /** Object instance name */
    inst?: string;
    /** Start date */
    start?: string;
    /** End date */
    end?: string;
} & NavParam;
/**
 * Timesheet rendering
 */
declare class Timesheet {
    /**
     * Display a timesheet.
     * @param ctn Container
     * @param obj Business object
     * @param t Timesheet data
     * @param cbk Optional callback when displayed
     */
    display(ctn: Container, obj: BusinessObject, t: TimesheetParam, cbk?: Callback): void;
    /**
     * Read form data
     * field name => assign id => period key: value
     */
    private read;
    /**
     * Bulk transition
     */
    private transition;
    /**
     * Format float
     */
    private format;
    private grid;
    private fixed;
    /** Generated colors per resource label */
    _colors: KeyString;
    /**
     * Generate a color to resource label
     */
    private color;
    /**
     * Resource chart
     */
    private chart;
    /**
     * Gantt chart
     */
    displayGantt(ctn: Container, obj: BusinessObject, tsName: string, data: TimesheetGanttData, upd?: (p: KeyObject, cbk: (err: MessageJSON) => void) => void, cbk?: Callback): void;
}

/**
 * Trays rendering
 */
declare class UITray {
    /**
     * Display the trays form
     * @param ctn container
     * @param div optional div.tray to fill
     * @param trays list of trays with items
     * @param p optional parameters
     * @param cbk optional callback
     */
    display(ctn: Container, div: JQuery, trays: TrayColumn[], p: {
        cls?: string;
        findItem?: (e: JQuery.Event) => JQuery | undefined;
        getItemId?: (item: JQuery) => string;
        getTrayName?: (tray: JQuery) => string;
    }, cbk?: Callback): this;
}

/**
 * UI Action
 */
declare class UIAction extends UIComponent<Action> {
    /** business object */
    obj: UIBusinessObject;
    /**
     * UI Action
     * @param ctn container
     * @param obj object
     * @param action Action metadata
     */
    constructor(ctn: Container, obj: UIBusinessObject, action: Action);
    /**
     * Bind a 'click' on button
     * @param handler related handler
     */
    click(handler: JQueryHandler): JQuery<HTMLElement> | undefined;
    /**
     * Enable/Disable the action
     * @param enabled false to disable
     */
    enable(enabled: boolean): this;
    /**
     * Show/Hide the action
     * @param vis visibility ? false to hide
     */
    visible(vis: boolean): this;
}

/** Parameters of an area rendering */
interface AreaParam {
    /** To parse the area definition on display */
    parse?: boolean;
    /** Read only area, or only editable cells */
    readonly?: boolean | "editcell";
    /** Null = no actions, undefined = from metadata */
    formActions?: Action[] | null;
    /** Null = no actions, undefined = from metadata */
    plusActions?: Action[] | null;
    /** In a workflow */
    workflow?: boolean;
    /** Show extended fields */
    isExtended?: boolean;
    /** Index to identify fields by row */
    index?: string;
    /** Area in a tab */
    tabNum?: number;
    /** Current active tabs */
    formTab?: KeyObject;
    /** Optional final save on ENTER */
    saveBtn?: JQuery;
    /** Area in form */
    showViews?: ShowViewsMode;
    /** Count of visible views */
    visView?: number;
    /** In a search area */
    search?: boolean;
    /** Readonly filters */
    fixedFilters?: KeyObject;
    /** Promises to wait before the end of rendering (see `$ui.addPromise`) */
    promises?: Promise<unknown>[];
}
declare class UIArea extends UIComponent<Area, AreaParam> {
    /** Business object */
    obj: UIBusinessObject;
    /** Area body */
    body: Container;
    /** Tabs container */
    tabs?: Container;
    /** Current tab */
    tab?: Container;
    constructor(ctn: Container, obj: UIBusinessObject, area: Area);
    /**
     * Show/Hide the area
     * @param vis visibility ? false to hide
     */
    visible(vis: boolean, slide?: boolean): this;
    /**
     * Render the area
     * @param options
     * @param options.parse
     */
    render(options?: AreaParam): JQuery;
    /**
     * Display a template with components substitution
     * @param d The container to fill
     * @param template Optional template to re-apply
     * @param options Form options
     * @param options.parse Parse the full template
     * @param options.readonly true to insert readonly fields, or "editcell" to edit only editbale fields by cell
     * @param options.formActions Main actions
     * @param options.plusActions Extended actions
     * @param options.isExtended Extended form?
     * @param options.search in a search area?
     * @param options.formTab Selected tabs index
     * @param options.saveBtn Optional Save button after last ENTER
     */
    display(d: Container, template: string | JQuery | null, options?: AreaParam): void;
    /**
     * Build a field
     */
    field(f: ObjectField, disp: FieldDisplay, p: AreaParam): string | JQuery<HTMLElement> | undefined;
    /**
     * Build a field with ENTER handler
     */
    static formField(ctn: Container, obj: UIBusinessObject, f: ObjectField, disp: FieldDisplay, p?: {
        readonly?: boolean | string;
        index?: string;
        saveBtn?: JQuery;
        promises?: Promise<unknown>[];
    }): string | JQuery<HTMLElement> | undefined;
    /**
     * Show/hide tabs/panels containing something visible
     * @param slide Slide effect?
     */
    visibleAreas(slide?: boolean): void;
    /**
     * Show/hide a view and parent panels
     * @param el target element
     * @param view optional view
     * @param vis show or hide
     * @param slide slide effect?
     */
    visibleView(el: HTMLElement, view?: View, vis?: boolean, slide?: boolean): void;
    /**
     * Object Views and Links
     * @param div append links to the container
     * @param p form context
     */
    displayViews(div: JQuery, p: AreaParam): void;
    /**
     * Display a link or view related to object
     * @param div container to fill
     * @param v view metadata
     * @param l or 0,n link
     * @param p optional form context to add a promise
     */
    displayLink(div: JQuery, v: View, l?: Link | null, p?: AreaParam): void;
    /**
     * Add a counter in the tab label
     */
    countRef(v: View, div: JQuery, list?: BusinessObject): void;
}

/** Rendering options of a view */
interface UIViewParam extends Pick<ViewParam, "parent" | "home" | "edit" | "useCopyLink"> {
    /** Load tabs content in lazy mode / on click (default true) */
    lazy?: boolean;
}
/** Filters of a view (period and object filters) */
interface ViewFilter {
    /** Show a date period */
    period?: boolean;
    /** Start date of the period */
    periodFromDate?: string;
    /** End date of the period */
    periodToDate?: string;
    /** Metadata */
    meta?: KeyObject;
    /** Filters per object field */
    filters?: {
        /** Object name */
        object: string;
        /** Field name */
        field: string;
        /** Filter value */
        filter: string;
    }[];
    /** Vertical rendering */
    vertical?: boolean;
    /** Compact rendering */
    compact?: boolean;
}
/**
 * UI View
 */
declare class UIView extends UIComponent<View, UIViewParam> {
    /**
     * UI View
     * @param ctn container
     * @param def View metadata
     */
    constructor(ctn: Container, def: View);
    /**
     * Display a view of items in container (i.e. home, plain view or part of form)
     * @param options options
     * @param options.parent parent object when the view belongs to a form
     * @param options.home is a home view?
     * @param options.lazy load tabs content in lazy mode / on click (default true)
     * @param options.edit edit mode for gridstack
     * @param options.useCopyLink add the copy link addon?
     * @param cbk optional callback when rendered
     */
    render(options?: UIViewParam, cbk?: Callback): JQuery;
    /**
     * Display the view filters
     * @param ctn Container of view
     * @param div Container of filters
     * @param options Filters definition
     * @param options.period Show a date period?
     * @param options.periodFromDate optional min date filter
     * @param options.periodToDate optional max date filter
     * @param options.meta all meta-data with search fields
     * @param options.filters optional list of object/field/filter
     * @param cbk Optional callback
     */
    renderFilters(ctn: Container, div: Container, options: ViewFilter, cbk?: Callback): JQuery<HTMLElement>;
    /**
     * Show/Hide the view
     * @param vis visibility ? false to hide
     * @param slide optional slide effect
     */
    visible(vis: boolean, slide?: boolean): this;
    /**
     * Grid stack rendering
     * @param ctn View container
     * @param el Element .grid-stack
     * @param edit true to edit the view
     * @param options Gridstack options (cellHeight, mode, removable, staticGrid, acceptWidgets...) and the grid DOM id
     */
    grid(ctn: Container, el: HTMLElement, edit?: boolean, options?: GridStackOptions & {
        id?: string;
    }): Promise<void>;
}

/**
 * UI Field Boolean
 */
declare class UIFieldBoolean extends UIField {
    /**
     * Get all inputs related to field
     * @param checked search only checked input ?
     * @returns field UI elements (input, select...)
     */
    find(checked: boolean): JQuery;
    /**
     * Get the UI value converted to service
     * @returns the service value
     */
    val(): FieldValue | undefined;
    /**
     * Set a service value to UI and to the field of object
     * @param v Value (service syntax)
     * @returns itself
     */
    val(v: FieldValue): this;
    /**
     * Draw the UI input
     */
    drawInput(): JQuery;
    /**
     * Draw the search field
     * @param filter Filter
     * @param options Options
     * @param options.searchby Search by field of list header
     * @param options.search Search handler
     * @param options.readonly Read-only search (fixed filter)
     */
    drawSearch(filter: string, options?: DrawSearchOptions): JQuery;
}

/**
 * UI Field color
 * - draw a preview area and a color picker based on spectrum
 * - trigger event 'ui.preview.color' on input field to preview the color
 */
declare class UIFieldColor extends UIField {
    /**
     * Draw the UI controls
     */
    draw(): JQuery;
}

/**
 * UI Field Date time
 */
declare class UIFieldDateTime extends UIField {
    /**
     * Init field components (with flatpickr as date picker)
     */
    init(p?: FormParam | ListParam): this;
    /**
     * Get the flatpickr instance
     */
    getDatePicker(): Instance;
    /**
     * Destroy the flatpickr instance
     */
    destroy(p?: FormParam | ListParam): this;
    /**
     * Draw the UI controls
     */
    draw(): JQuery;
    /**
     * Render the search field (with datetime picker)
     * @param filter Filter
     * @param options Options
     * @param options.searchby Search by field of list header
     * @param options.search search handler
     */
    renderSearch(filter: string, options?: {
        searchby?: boolean;
        search?: Callback;
    }): JQuery;
    /**
     * A11Y: append the typed format hint below a search element and describe its input(s) with it
     * @param el Search element
     * @param inputs Inputs to describe (none = unchanged element)
     * @param searchby Search by field of list header
     * @returns The element wrapped with its hint
     */
    private searchHint;
    /**
     * Icon button of a date/time input.
     * @param type Field type or icon name
     * @param ariaLabel Accessible label
     * @param click Handler on click
     * @returns The button
     */
    static icon(type: number | string, ariaLabel: string, click: JQueryHandler): JQuery<HTMLElement>;
    /**
     * Convert a server side date 'YYYY-MM-DD HH:MI:SS' to Date
     * @param v A date or datetime or null or a filter %
     * @returns Date or undefined if not a date
     */
    toDate(v?: string | null): Date | undefined;
    /**
     * Manage change event to set min/maxDate
     * @param ctn Container
     * @param dp Date picker instance
     * @param field Field name to bind onchange
     * @param value Optional date value YYYY-MM-DD HH:MI:SS
     * @param prop property minDate or maxDate to set to picker
     * @param read readonly?
     */
    changeDate(ctn: Container, dp: Instance | undefined, field: string, value: string, prop: "minDate" | "maxDate", read: boolean): void;
    /**
     * Date picker parameters (based on flatpickr options)
     */
    dpParam(type: number, lang: string, df: string, rdg?: string, autoopen?: string | boolean): Options;
    /**
     * Get a datepicker input-group
     * @param ctn optional container to append the picker (default is the input-group)
     * @param options options
     * @param options.input optional input element (create one if not specified)
     * @param options.type $ui.TYPE_DATE (default) or $ui.TYPE_DATETIME or $ui.TYPE_TIME
     * @param options.rendering optional field rendering
     * @param options.autoopen true to open the picker on click
     * @param options.clear true to add a clear button
     * @returns input group with input and buttons
     */
    static datePicker(ctn: Container | null, options?: {
        input?: JQuery;
        type?: number;
        rendering?: string;
        autoopen?: boolean;
        clear?: boolean;
        label?: string;
    }): JQuery<HTMLElement>;
    /**
     * Build datetime picker parameters (based on flatpickr options)
     */
    static datePickerParam(type: number, lang: string, dateformat: string, rdg?: string, autoopen?: string | boolean): Options;
    /**
     * Human-readable input format hint for typed date entry:
     * a fixed sample formatted with the field's own display formatter (same as draw()),
     * so the hint always matches the user date format and the field rendering (Y|M|D|H|I|S)
     */
    private formatHint;
}

/**
 * UI Field Date
 */
declare class UIFieldDate extends UIFieldDateTime {
}

/**
 * UI Field Time
 */
declare class UIFieldTime extends UIFieldDateTime {
}

/**
 * UI Field Document
 */
declare class UIFieldDocument extends UIField {
    /**
     * Get all inputs related to field
     * @returns field UI elements (input, select...)
     */
    find(_checked: boolean): JQuery;
    /**
     * Get the UI value converted to service
     * @returns the service value
     */
    val(): FieldValue | undefined;
    /**
     * Set a service value to UI and to the field of object
     * @param v Value (service syntax)
     * @returns itself
     */
    val(v: FieldValue): this;
    /**
     * Draw the UI controls
     */
    draw(p?: FieldParam): JQuery;
}

/**
 * UI Field Image
 */
declare class UIFieldImage extends UIFieldDocument {
}

/**
 * UI Field Integer
 */
declare class UIFieldInt extends UIField {
    /**
     * Get all inputs related to field
     * @param checked search only checked radio in case of stars rendering ?
     * @returns field UI elements (input, select...)
     */
    find(checked: boolean): JQuery;
    /**
     * Init field components
     */
    init(p?: FormParam | ListParam): this;
    /**
     * Draw the UI controls
     */
    draw(): JQuery<HTMLElement>;
    /**
     * Unit addon as real text, linked to the input
     * @param inp Input
     * @param rdg Rendering
     * @param unit Unit text
     */
    private unitAddon;
    /**
     * Draw the search field
     * @param filter Filter
     * @param options Options
     * @param options.searchby Search by field of list header
     * @param options.search Search handler
     * @param options.readonly Read-only search (fixed filter)
     */
    drawSearch(filter: string, options?: DrawSearchOptions): JQuery | FieldSearch | FieldSearch[];
}

/**
 * UI Field Float
 */
declare class UIFieldFloat extends UIFieldInt {
}

/**
 * UI Field Big decimal
 */
declare class UIFieldBigDecimal extends UIFieldInt {
    /**
     * Get the UI value converted to service
     * @returns the service value
     */
    val(): FieldValue | undefined;
    /**
     * Set a service value to UI and to the field of object
     * @param v Value (service syntax)
     * @returns itself
     */
    val(v: FieldValue): this;
    /**
     * Init field components
     */
    init(): this;
}

/**
 * UI Field email
 */
declare class UIFieldEmail extends UIField {
    /**
     * Draw the UI controls
     */
    draw(): JQuery;
}

/**
 * UI Field Enum
 */
declare class UIFieldEnum extends UIField {
    /**
     * Get all inputs related to field
     * @param checked search only checked input ?
     * @returns field UI elements (input, select...)
     */
    find(checked?: boolean): JQuery;
    /**
     * Get the UI value converted to service
     * @returns the service value
     */
    val(): FieldValue | undefined;
    /**
     * Set a service value to UI and to the field of object
     * @param v Value (service syntax)
     * @returns itself
     */
    val(v: FieldValue): this;
    /**
     * Load and redraw the list of values
     * @param lov List of values name
     * @param cbk Optional callback(response)
     */
    setList(lov: string, cbk: (r: KeyObject) => void): this;
    /**
     * Init field components
     */
    init(p?: FormParam | ListParam): this;
    /**
     * Destroy field components
     */
    destroy(p?: FormParam | ListParam): this;
    /**
     * Transform radios/checks into columns
     * @param inp Input
     * @param n number of columns
     * @param vertical vertical?
     */
    cols(inp: JQuery, n: number, vertical: boolean): void;
    /**
     * Draw the UI controls
     */
    draw(): JQuery;
    /**
     * Draw the search field (enum and enum-multi)
     * @param filter Filter codes to display: array of codes or separated by ';' or expression "is null", "is not null", "in ('a','b') or is null"
     * @param options Options
     * @param options.searchby Search by field of list header
     * @param options.search Search handler
     * @param options.readonly Read-only search (fixed filter)
     */
    drawSearch(filter?: string | string[], options?: DrawSearchOptions): JQuery | FieldSearch | FieldSearch[];
    /**
     * Render the value with item icon / colored tag
     * @param v field value (enum code)
     * @param item optional item on list / with icon, tag, color, bgcolor, hideLabel (default use definition of field)
     * @returns div.enum
     */
    renderValue(v: FieldValue, item?: EnumItem): string | JQuery;
}

/**
 * UI Field Enum multiple
 */
declare class UIFieldEnumMulti extends UIFieldEnum {
    /**
     * Get all inputs related to field
     * @param checked search only checked input ?
     * @returns field UI elements (input, select...)
     */
    find(checked?: boolean): JQuery;
    /**
     * Get the UI value converted to service
     * @returns the service value
     */
    val(): FieldValue | undefined;
    /**
     * Set a service value to UI and to the field of object
     * @param v Value (Array of codes, or separated with ';')
     * @returns itself
     */
    val(v: FieldValue): this;
    /**
     * Init field components
     */
    init(p?: FormParam | ListParam): this;
    /**
     * Draw the UI controls
     */
    draw(): JQuery;
    /**
     * Add event handlers for select/unselect all functionality
     * @param inp input element
     * @param rdg rendering mode
     */
    addSelectAllHandlers(inp: JQuery, rdg?: string): void;
    /**
     * Render the value with item icon / colored tag
     * @param v field values (enum codes)
     * @returns ul.enum
     */
    renderValue(v: FieldValue): string | JQuery;
}

/**
 * UI Field geo coords
 */
declare class UIFieldGeoCoords extends UIField {
    /**
     * Draw the UI controls
     */
    draw(): JQuery;
    /**
     * Helper to pick the coordinates of the search filter on a map
     * @param f object field
     * @param input search input to assist
     */
    searchHelper(f: ObjectField, input: JQuery): void;
}

/**
 * UI Field HTML
 */
declare class UIFieldHtml extends UIField {
    constructor(ctn: Container, obj: UIBusinessObject | null, f: ObjectField, index?: string);
    /**
     * Get the UI value converted to service
     * @returns the service value
     */
    val(): FieldValue | undefined;
    /**
     * Set a service value to UI and to the field of object
     * @param v Value (service syntax)
     * @returns itself
     */
    val(v: FieldValue): this;
    /**
     * Init field components
     * @param p context parameters of the form or the list
     */
    init(p?: FormParam | ListParam): this;
    /**
     * Destroy field components
     */
    destroy(p?: FormParam | ListParam): this;
    /**
     * Draw the UI controls
     */
    drawInput(): JQuery;
}

/**
 * UI Field ID
 */
declare class UIFieldId extends UIField {
    /**
     * Draw the search field
     * @param filter Filter
     */
    drawSearch(filter: string, options?: DrawSearchOptions): JQuery | FieldSearch | FieldSearch[];
}

/**
 * UI Field Long string
 */
declare class UIFieldLongString extends UIField {
    /**
     * Get the UI value converted to service
     * @returns the service value
     */
    val(): FieldValue | undefined;
    /**
     * Set a service value to UI and to the field of object
     * @param v Value (service syntax)
     * @returns itself
     */
    val(v: FieldValue): this;
    /**
     * Init field components (ace or grid)
     * @param p context parameters of the form or the list
     */
    init(p?: FormParam | ListParam): this;
    /**
     * Destroy field components (ace editor)
     */
    destroy(p?: FormParam | ListParam): this;
    /**
     * Draw the UI controls
     */
    draw(): JQuery;
}

/**
 * UI Field Notepad
 */
declare class UIFieldNotepad extends UIField {
    /**
     * Get the UI value converted to service
     * @returns the service value
     */
    val(): FieldValue | undefined;
    /**
     * Set a service value to UI and to the field of object
     * @param v Value (service syntax)
     * @returns itself
     */
    val(v: FieldValue): this;
    /**
     * Init field components
     */
    init(p?: FormParam | ListParam): this;
    /**
     * Draw the UI input
     */
    drawInput(): JQuery;
}

/**
 * UI Field Meta-object
 */
declare class UIFieldObject extends UIField {
    /**
     * Get the UI value converted to service
     * @returns the service value
     */
    val(): FieldValue | undefined;
    /**
     * Set a service value to UI and to the field of object
     * @param v Value "object:row_id" or \{ object, row_id, optional parent \}
     * @returns itself
     */
    val(v: FieldValue): this;
    /**
     * Draw the UI controls
     */
    draw(): JQuery;
    /**
     * Draw the search field
     * @param filter Filter
     * @param options Options
     * @param options.searchby Search by field of list header
     * @param options.search Search handler
     * @param options.readonly Read-only search (fixed filter)
     */
    drawSearch(filter: string, options?: DrawSearchOptions): JQuery | FieldSearch | FieldSearch[];
}

/**
 * UI Field phone num
 */
declare class UIFieldPhoneNum extends UIField {
    /**
     * Draw the UI controls
     */
    draw(): JQuery;
}

/**
 * UI Field regexp
 */
declare class UIFieldRegexp extends UIField {
}

/**
 * UI Field URL
 */
declare class UIFieldUrl extends UIField {
    /**
     * Draw the UI controls
     */
    draw(): JQuery;
}

/**
 * Simplicite Ajax session / model layer, with the legacy static constants (Simplicite.Ajax.CONTEXT_CREATE...)
 */
declare const Ajax: typeof Session & typeof AppConstants & AjaxNamespace;
/**
 * Classes of the `Simplicite.UI.View` namespace (typed by UIViewNamespace, see namespaces.ts)
 * @hidden
 */
declare const ViewClasses: {
    /** `Simplicite.UI.View.Bootstrap5`: alias of the `Bootstrap5` class */
    Bootstrap5: typeof Bootstrap5;
    /** `Simplicite.UI.View.Main`: alias of the `UIViewer` class */
    Main: typeof UIViewer;
    /** `Simplicite.UI.View.Widget`: alias of the `Widget` class */
    Widget: typeof Widget;
    /** `Simplicite.UI.View.Addons`: alias of the `AddonBar` class */
    Addons: typeof AddonBar;
    /** `Simplicite.UI.View.Menu`: alias of the `Menu` class */
    Menu: typeof Menu;
    /** `Simplicite.UI.View.Board`: alias of the `Board` class */
    Board: typeof Board;
    /** `Simplicite.UI.View.List`: alias of the `List` class */
    List: typeof List;
    /** `Simplicite.UI.View.Form`: alias of the `Form` class */
    Form: typeof Form;
    /** `Simplicite.UI.View.Search`: alias of the `Search` class */
    Search: typeof Search;
    /** `Simplicite.UI.View.Update`: alias of the `Update` class */
    Update: typeof Update;
    /** `Simplicite.UI.View.Social`: alias of the `Social` class */
    Social: typeof Social;
    /** `Simplicite.UI.View.Color`: alias of the `UIColor` class */
    Color: typeof UIColor;
    /** `Simplicite.UI.View.ColorPicker`: alias of the `ColorPicker` class */
    ColorPicker: typeof ColorPicker;
    /** `Simplicite.UI.View.Crosstab`: alias of the `Crosstab` class */
    Crosstab: typeof Crosstab;
    /** `Simplicite.UI.View.External`: alias of the `External` class */
    External: typeof External;
    /** `Simplicite.UI.View.Import`: alias of the `Import` class */
    Import: typeof Import;
    /** `Simplicite.UI.View.Merge`: alias of the `Merge` class */
    Merge: typeof Merge;
    /** `Simplicite.UI.View.Bam`: alias of the `Bam` class */
    Bam: typeof Bam;
    /** `Simplicite.UI.View.StatusMetrics`: alias of the `StatusMetrics` class */
    StatusMetrics: typeof StatusMetrics;
    /** `Simplicite.UI.View.ZIP`: alias of the `ZIP` class */
    ZIP: typeof ZIP;
    /** `Simplicite.UI.View.Tree`: alias of the `Tree` class */
    Tree: typeof Tree;
    /** `Simplicite.UI.View.Prefs`: alias of the `Prefs` class */
    Prefs: typeof Prefs;
    /** `Simplicite.UI.View.Timesheet`: alias of the `Timesheet` class */
    Timesheet: typeof Timesheet;
    /** `Simplicite.UI.View.IndexSearch`: alias of the `IndexSearch` class */
    IndexSearch: typeof IndexSearch;
    /** `Simplicite.UI.View.Tray`: alias of the `UITray` class */
    Tray: typeof UITray;
    /** `Simplicite.UI.View.Component`: alias of the `UIComponent` class */
    Component: typeof UIComponent;
    /** `Simplicite.UI.View.UIAction`: alias of the `UIAction` class */
    UIAction: typeof UIAction;
    /** `Simplicite.UI.View.UIArea`: alias of the `UIArea` class */
    UIArea: typeof UIArea;
    /** `Simplicite.UI.View.UIView`: alias of the `UIView` class */
    UIView: typeof UIView;
    /** `Simplicite.UI.View.UIField`: alias of the `UIField` class */
    UIField: typeof UIField;
    /** `Simplicite.UI.View.UIFieldBoolean`: alias of the `UIFieldBoolean` class */
    UIFieldBoolean: typeof UIFieldBoolean;
    /** `Simplicite.UI.View.UIFieldColor`: alias of the `UIFieldColor` class */
    UIFieldColor: typeof UIFieldColor;
    /** `Simplicite.UI.View.UIFieldDate`: alias of the `UIFieldDate` class */
    UIFieldDate: typeof UIFieldDate;
    /** `Simplicite.UI.View.UIFieldDateTime`: alias of the `UIFieldDateTime` class */
    UIFieldDateTime: typeof UIFieldDateTime;
    /** `Simplicite.UI.View.UIFieldTime`: alias of the `UIFieldTime` class */
    UIFieldTime: typeof UIFieldTime;
    /** `Simplicite.UI.View.UIFieldDocument`: alias of the `UIFieldDocument` class */
    UIFieldDocument: typeof UIFieldDocument;
    /** `Simplicite.UI.View.UIFieldImage`: alias of the `UIFieldImage` class */
    UIFieldImage: typeof UIFieldImage;
    /** `Simplicite.UI.View.UIFieldFloat`: alias of the `UIFieldFloat` class */
    UIFieldFloat: typeof UIFieldFloat;
    /** `Simplicite.UI.View.UIFieldInt`: alias of the `UIFieldInt` class */
    UIFieldInt: typeof UIFieldInt;
    /** `Simplicite.UI.View.UIFieldBigDecimal`: alias of the `UIFieldBigDecimal` class */
    UIFieldBigDecimal: typeof UIFieldBigDecimal;
    /** `Simplicite.UI.View.UIFieldEmail`: alias of the `UIFieldEmail` class */
    UIFieldEmail: typeof UIFieldEmail;
    /** `Simplicite.UI.View.UIFieldEnum`: alias of the `UIFieldEnum` class */
    UIFieldEnum: typeof UIFieldEnum;
    /** `Simplicite.UI.View.UIFieldEnumMulti`: alias of the `UIFieldEnumMulti` class */
    UIFieldEnumMulti: typeof UIFieldEnumMulti;
    /** `Simplicite.UI.View.UIFieldGeoCoords`: alias of the `UIFieldGeoCoords` class */
    UIFieldGeoCoords: typeof UIFieldGeoCoords;
    /** `Simplicite.UI.View.UIFieldHtml`: alias of the `UIFieldHtml` class */
    UIFieldHtml: typeof UIFieldHtml;
    /** `Simplicite.UI.View.UIFieldId`: alias of the `UIFieldId` class */
    UIFieldId: typeof UIFieldId;
    /** `Simplicite.UI.View.UIFieldLongString`: alias of the `UIFieldLongString` class */
    UIFieldLongString: typeof UIFieldLongString;
    /** `Simplicite.UI.View.UIFieldNotepad`: alias of the `UIFieldNotepad` class */
    UIFieldNotepad: typeof UIFieldNotepad;
    /** `Simplicite.UI.View.UIFieldObject`: alias of the `UIFieldObject` class */
    UIFieldObject: typeof UIFieldObject;
    /** `Simplicite.UI.View.UIFieldPhoneNum`: alias of the `UIFieldPhoneNum` class */
    UIFieldPhoneNum: typeof UIFieldPhoneNum;
    /** `Simplicite.UI.View.UIFieldRegexp`: alias of the `UIFieldRegexp` class */
    UIFieldRegexp: typeof UIFieldRegexp;
    /** `Simplicite.UI.View.UIFieldUrl`: alias of the `UIFieldUrl` class */
    UIFieldUrl: typeof UIFieldUrl;
};
/**
 * Simplicite UI / rendering classes
 */
declare const UI: {
    /** `Simplicite.UI.Globals`: default UI options */
    Globals: typeof Globals;
    /** `Simplicite.UI.Engine`: alias of the `UIEngine` class */
    Engine: typeof UIEngine;
    /** `Simplicite.UI.Navigator`: alias of the `UINavigator` class */
    Navigator: typeof UINavigator;
    /** `Simplicite.UI.Util`: alias of the `UIUtil` class */
    Util: typeof UIUtil;
    /** `Simplicite.UI.Loader`: alias of the `UILoader` class */
    Loader: typeof UILoader;
    /** `Simplicite.UI.Factory`: alias of the `Factory` class */
    Factory: typeof Factory;
    /** `Simplicite.UI.BusinessObject`: alias of the `UIBusinessObject` class */
    BusinessObject: typeof UIBusinessObject;
    /** `Simplicite.UI.BusinessProcess`: alias of the `UIBusinessProcess` class */
    BusinessProcess: typeof UIBusinessProcess;
    /** `Simplicite.UI.ExternalObject`: alias of the `UIExternalObject` class */
    ExternalObject: typeof UIExternalObject;
    /** `Simplicite.UI.SyncQueue`: alias of the `SyncQueue` class */
    SyncQueue: typeof SyncQueue;
    /** `Simplicite.UI.Workflow`: alias of the `Workflow` class */
    Workflow: typeof Workflow;
    /** `Simplicite.UI.Calendar`: alias of the `Calendar` class */
    Calendar: typeof UICalendar;
    /** `Simplicite.UI.Firebase`: alias of the `Firebase` class */
    Firebase: typeof Firebase;
    /** `Simplicite.UI.WebPush`: alias of the `WebPush` class */
    WebPush: typeof WebPush;
    /** `Simplicite.UI.Tray`: alias of the `Tray` class */
    Tray: typeof Tray;
    /** `Simplicite.UI.OCR`: alias of the `OCR` class */
    OCR: typeof OCR;
    /** `Simplicite.UI.Map`: alias of the `Map` class */
    Map: typeof UIMap;
    /** `Simplicite.UI.Charts`: alias of the `Charts` class */
    Charts: typeof Charts;
    /** `Simplicite.UI.Guide`: alias of the `Guide` class */
    Guide: typeof Guide;
    /** `Simplicite.UI.Speech`: alias of the `Speech` class */
    Speech: typeof Speech;
    /** UI viewers, renderers and components (`Simplicite.UI.View`) */
    View: UIViewNamespace;
    /**
     * Business object class definitions with front hooks
     */
    BusinessObjects: KeyBusinessObjectHook;
    /**
     * Object hooks: <code>Simplicite.UI.hooks['myObject'] = function(obj, cbk) \{\}</code>
     */
    hooks: KeyObjectHook;
    /**
     * External object class definitions with front hooks
     */
    ExternalObjects: KeyExternalObject;
    /**
     * Business process class definitions with front hooks
     */
    BusinessProcesses: KeyBusinessProcessHook;
    /**
     * Object contraints: <code>Simplicite.UI.constraints['myObject'] = function(ctn, obj, elt, index, context, cbk) \{\}</code>
     */
    constraints: KeyConstraint;
    /**
     * Predefined colors
     */
    CSSColors: CSSColors[];
    /**
     * Icons meta-data
     */
    icons: IconsMetadata;
};

/**
 * Factory singleton
 */
declare const $factory: Factory;
/**
 * Console
 */
declare const $console: Console;
/**
 * UI main navigator
 */
declare const $nav: UINavigator;
/**
 * Global bootstrap tools
 */
declare const $tools: Bootstrap5;
/**
 * UI Viewer
 */
declare const $view: UIViewer;
/**
 * UI global singleton
 */
declare const $ui: UIEngine;
/**
 * Session singleton
 */
declare const $app: Session;
/**
 * Grant singleton
 */
declare const $grant: Grant;

declare type Translate = (code: string, plural?: boolean) => string;
declare global {
    interface Window {
        $factory: Factory;
        $app: Session;
        $grant: Grant;
        $ui: UIEngine;
        $view: UIViewer;
        $tools: Bootstrap5;
        $console: Console;
        $root: string;
        $nav: UINavigator;
        $T: Translate;
    }
    var $root: string;
    const $T: Translate;
}

/** Global `Simplicite` namespace */
interface SimpliciteInterface {
    /** Back-end constants */
    Globals: BackendConstants;
    /** Application: instance of session */
    Application: Session;
    /** Model classes: Session, Grant, BusinessObject, BusinessProcess... */
    Ajax: typeof Ajax;
    /** UI rendering classes */
    UI: typeof UI;
}
declare global {
    interface Window {
        Simplicite: SimpliciteInterface;
    }
}

/**
 * API tester
 * @class
 */
declare class APITester {
    apiTestReady(): void;
    apiTestCall(logout?: boolean): void;
    apiTestData(): void;
    apiMethod(): void;
    apiOption(opt: string, b: number): void;
    apiTestURL(): void;
    apiTestFilter(): void;
}

type UndoRedoAction = "nm" | // move element(s)
"re" | // resize
"na" | // add node
"nt" | // add note
"ac" | // add container
"nr" | // remove nodes
"tr" | // remove note
"cr" | // remove container
"st" | // style
"lm";
type UndoRedoTarget = DiagramElement | DiagramElement[] | JSVG;
type UndoRedoItem = {
    a: UndoRedoAction;
    t: UndoRedoTarget;
    dx?: number;
    dy?: number;
    style?: DiagramContainerStyle | DiagramNodeStyle;
    bound?: Bound;
    points?: Point[];
    pointFrom?: DiagramElement;
    pointTo?: DiagramElement;
};
declare class DiagramUndoRedo {
    desktop: DiagramDesktop;
    list: UndoRedoItem[];
    index: number;
    max: number;
    lock: boolean;
    constructor(desktop: DiagramDesktop);
    push(data: UndoRedoItem): void;
    pushMoveElement(n: UndoRedoTarget, dx: number, dy: number): void;
    pushResizeElement(rn: DeskElementPos): void;
    pushAddNode(n: DiagramNode): void;
    pushAddNote(n: DiagramNote): void;
    pushAddContainer(c: DiagramContainer): void;
    pushRemoveNodes(l: DiagramNode[]): void;
    pushRemoveNote(n: DiagramNote): void;
    pushRemoveContainer(c: DiagramContainer): void;
    pushElementStyle(n: DiagramElement, s: KeyObject): void;
    pushMoveLink(pt: KeyObject): void;
    private copy;
    private restore;
    private restoreSize;
    private restoreStyle;
    private restoreLink;
    undo(): void;
    redo(): void;
}

/**
 * Websocket to synchronize diagrams
 * @class
 */
declare class DiagramWebsocket {
    engine: DiagramEngine;
    url: string;
    ws?: WebSocket;
    retry: number;
    constructor(engine: DiagramEngine);
    private init;
    private onUpd;
    private onDel;
    start(): void;
    stop(): void;
    send(msg: string | object): void;
    private onMessage;
}

interface diagram {
    /** SVG modelId => Simplicite.Diagram.Modeler */
    models: DiagramModelers;
    /** Opened popups with model */
    windows: DiagramWindows;
    /** Hooks namespace for SVG diagram */
    ModelHooks: KeyObject;
    /** Diagram controller */
    Engine: typeof DiagramEngine;
    /** Model controller */
    Modeler: typeof DiagramModeler;
    /** Desktop to draw one SVG model */
    Desktop: typeof DiagramDesktop;
    /** Common SVG element */
    Element: typeof DiagramElement;
    /** Node renderer */
    Node: typeof DiagramNode;
    /** Container types */
    CONTAINER: KeyNumber;
    /** Container renderer */
    Container: typeof DiagramContainer;
    /** Link rendering */
    LINK_RENDER: KeyNumber;
    /** Link type */
    LINK_TYPE: KeyNumber;
    /** Link renderer */
    Link: typeof DiagramLink;
    /** Caption renderer */
    Caption: typeof DiagramCaption;
    /** Note renderer */
    Note: typeof DiagramNote;
    /** Shape tools */
    Shape: typeof DiagramShape;
    /** Print diagram */
    Print: typeof DiagramPrint;
    /** Springs animation tools */
    Springs: typeof DiagramSprings;
    /** Tree renderer */
    Tree: typeof DiagramTree;
    /** Undo/Redo user actions */
    UndoRedo: typeof DiagramUndoRedo;
    /** Synchronize data thru WS */
    Websocket: typeof DiagramWebsocket;
}
declare const Diagram: diagram;

type Objects = "Adapter" | "Disposition" | "ObjectExternal" | "ObjectInternal" | "BPMProcess" | "Script";
type Modes = "java" | "text" | "html" | "javascript" | "typescript" | "css" | "less" | "xml" | "json" | "yaml" | "sql" | "markdown" | "perl" | "python" | "ruby" | "batchfile" | "powershell";
type Types = "java" | "txt" | "html" | "htm" | "js" | "ts" | "css" | "less" | "xml" | "json" | "yml" | "yaml" | "sql" | "md" | "pl" | "py" | "rb" | "bat" | "ps1";
type Scopes = "adapter" | "disposition" | "extobject" | "object" | "process" | "global";
type Annotation = {
    row: number;
    column: number;
    type: string;
    text: string;
};
type EditorTab = {
    key: string;
    path: string;
    icon: string;
    title: string;
    help?: string;
    sessionId: string;
    object: Objects;
    field: string;
    rowId: string;
    item: KeyObject;
    filename: string;
    mime: string;
    scope: Scopes;
    type: Types;
    mode: Modes | Types;
    editor: any;
    div: JQuery;
    hasChanged?: boolean;
    force?: boolean;
    saveall?: boolean;
    selected?: string;
    lspTimer?: number;
    javadoc?: boolean;
    jsdoc?: boolean;
    unittest?: boolean;
};
/**
 * Code editor rendering
 * @class
 */
declare class CodeEditor {
    private selectedTab?;
    private hasChanged;
    private codeEditor;
    private tab;
    private btnJavaDoc?;
    private btnJsDoc?;
    private btnRunUnitTest?;
    private btnSnippets?;
    private multiSearch?;
    private leftPane?;
    constructor();
    /**
     * Editor services
     * @param {string} service <code>prefs|open|close|save|completion|move|explore|validatets</code>
     * @param {params} params Optional parameters <code>\{ object, inst, rowId, field, scope, type, cls, prefix, force, from, to, explore, javadoc, cls, pkg \}</code>
     * @param {Object} post Optional post data with document
     * @memberof Simplicite.Ajax
     * @function
     */
    service(service: string, params?: KeyObject | null, post?: object): Promise<{
        tab?: EditorTab;
        item?: KeyObject;
        result?: string | object;
    }>;
    private getKey;
    private icon;
    private getTab;
    private getActiveTab;
    private title;
    private clickTab;
    /**
     * Observe the head to move the overflowing actions of the bar into the "plus" dropdown
     * @param head editor head
     * @param bar actions bar (takes the width left by the title)
     * @param plus "plus" dropdown, last but the close button
     */
    private observeBar;
    private toggleEmpty;
    /**
     * Display the editor form
     * @param {jQuery} ctn container
     * @param {Object} p optional parameters
     * @param {function} cbk optional callback
     * @function
     */
    display(ctn: Container, p: {
        object?: string | string[];
        row_id?: string | string[];
        field?: string;
    }, cbk?: Callback): void;
    /** Close the editor */
    exit(): void;
    /**
     * Select a tab with lazy loading
     * @function
     */
    select(e: EditorTab): void;
    private toggleDoc;
    private toggleSnippets;
    /**
     * Call to open source in the tab content
     * @function
     */
    open(e: EditorTab): void;
    /**
     * Add a tab from explorer
     * @function
     */
    add(e: Partial<EditorTab>): Promise<void> | undefined;
    /**
     * Close all tabs
     * @function
     */
    closeAll(): void;
    /**
     * Close a tab
     * @function
     */
    close(e: EditorTab, cbk?: Callback): void;
    /**
     * Change event on tab
     * @function
     */
    changed(e: EditorTab, cbk?: Callback): void;
    /**
     * Save all tabs
     * @function
     */
    saveAll(cbk?: Callback, err?: (log: KeyObject) => void): void;
    compiled(r: KeyObject, cbk?: Callback, err?: (log: KeyObject) => void): void;
    private tsTimer;
    private selTimer;
    /**
     * Persist the current tab as a user preference (debounced)
     * @param {string} key tab unique key
     * @function
     */
    private persistSelected;
    applyAnnotations(e: EditorTab, annotations: Annotation[]): void;
    /**
     * Validate Typescript code and set annotations in the editor
     * @param e {EditorTab} Editor tab
     */
    validateTypescript(e: EditorTab): void;
    /**
     * Display compilation result popup if needed
     * @param r result with error and/or warning arrays
     */
    private showCompileResult;
    private getJSErrors;
    /**
     * Write active tab
     * @function
     */
    writeActive(cbk?: Callback): void;
    /**
     * Save active tab
     * @function
     */
    saveActive(cbk?: Callback): void;
    /**
     * Format active tab
     * @function
     */
    formatActive(): void;
    /**
     * Format a source code
     * @param {string} src source code
     * @param {string} type source type js, css, less, html or java
     * @returns Promise resolved with the formatted source
     * @function
     */
    formatSource(src: string, type: string): Promise<string>;
    /**
     * Open active object
     * @function
     */
    openActive(): void;
    /**
     * Compare active tab with DB source
     * @function
     */
    compareActive(cbk?: Callback): void;
    /**
     * Get tab content value
     * @param {Object} e tab definition
     * @funtion
     */
    val(e: EditorTab): any;
    /**
     * Write tab content (only write content as file when applicable, not the save as save which saves the content as source attached to an object)
     * @param {Object} e tab definition
     * @param {function} cbk optional callback
     * @function
     */
    write(e: EditorTab, cbk?: Callback): void;
    /**
     * Save a tab
     * @param {Object} e tab definition
     * @param {function} cbk optional callback
     * @param {Object} log save all context to return errors
     * @function
     */
    save(e: EditorTab, cbk?: Callback, log?: KeyObject): void;
    /**
     * Source explorer
     * @param {jQuery} ctn Container
     * @param {Object} modules list of modules/object/doc [{ id, module, open, items:[{ object, label, field, open, list:[{ id, label, docId }] }] }]
     * @function
     */
    explorer(ctn: Container, modules: KeyObject[]): void;
    /**
     * Filter explorer
     * @function
     */
    filterExplorer(): void;
    /**
     * Activate the Search tab and focus the find input.
     * If already active, just focus the input.
     * @function
     */
    activateSearchTab(seedQuery?: string): void;
    /**
     * Ace editor
     * @param {string} key tab unique key
     * @param {Object} x tab definition and db source item {tab, item}
     * @function
     */
    openAce(key: string, x: {
        tab?: EditorTab;
        item?: KeyObject;
    }): void;
    updateIndicator(_state: string): void;
    /**
     * Compare sources with 2 ACE editors https://github.com/ace-diff/ace-diff
     * @param {Object} left left editor parameters { content, editable, copyLinkEnabled... }
     * @param {Object} right right editor parameters
     * @param {function} save optional callback(src) to apply changes in caller
     * @param {Object} options optional ace-diff options
     * @function
     */
    compare(left: KeyObject, right: KeyObject, save?: (src: string) => void, options?: KeyObject): Promise<void>;
    /**
     * Open the Javadoc URL
     * @function
     */
    javadocActive(): void;
    /**
     * Open the JSDoc URL
     * @function
     */
    jsdocActive(): void;
    /**
     * Run unit test shared code
     * @function
     */
    runUnitTest(item: KeyObject): void;
}

declare class LSP {
    /**
     * Load LSP dependencies and initialize configuration
     */
    static load(): Promise<void>;
    /**
     * Pulse animation for LSP busy indicator
     * @param $el jQuery element to pulse
     */
    static pulse($el: JQuery): void;
    /**
     * Initialize LSP server connection and configuration
     */
    static init(e: any): Promise<void>;
    /**
     * Set up WebSocket event listeners for LSP communication
     */
    static setSocket(path: string): void;
    /**
     * Register a .java editor with the java-language-server
     * @param e editor to be registered
     */
    static registerFile(e: KeyObject): void;
    /**
     * Notify the java-language-server that the watched file changes
     * @param e editor whose file is being watched
     */
    static updateFile(e: KeyObject): void;
}

/** Editor of the LESS addon of a theme (Ace, or a textarea when Ace is not loaded) */
type ThemeAceEditor = {
    get: () => any;
    set: (v: string) => void;
    close: Callback;
};
type ThemeCompileData = {
    theme: string;
    base: ThemeBase;
    css?: string;
    vars: KeyString;
    parentVars?: KeyString;
    addon: string;
    error?: string;
};
/**
 * Theme editor
 * @class
 */
declare class ThemeEditor {
    private theme;
    /**
     * Theme editor
     * @param theme Theme object (Theme) with the record to edit
     */
    constructor(theme: BusinessObject);
    /**
     * Compile the theme on server side (action ThemeCompile), then display the editor
     * @param data Optional values of the theme (the documents are not sent)
     * @param fn Optional handler of the compiled data (default is the display)
     */
    compile(data?: KeyObject, fn?: (r: ThemeCompileData) => void): Promise<void>;
    /**
     * Display the theme editor
     * @function
     */
    display(data: ThemeCompileData): Promise<void>;
    /**
     * Open the editor of the LESS addon: Ace in LESS mode, or a textarea when Ace is not loaded
     * @param addon Container of the editor
     * @param change Handler of the changes
     * @param apply Handler of Ctrl-S
     * @returns Editor with get, set and close functions
     */
    openAce(addon: JQuery, change: JQueryHandler, apply: Callback): ThemeAceEditor;
    private _menu;
    private _form;
    private _list;
    private _bookmarks;
    private _shortcuts;
}

/**
 * Client side monitoring
 * @class
 */
declare class MonitorClient {
    private static inst;
    static open(p?: {
        docked?: boolean;
        tabIndex?: number;
    }, cbk?: Callback): void;
    private body;
    private chart?;
    private div;
    private tabIndex;
    private timer0?;
    private topType;
    private selTime?;
    private heapChart0?;
    private timeChart0?;
    constructor();
    /**
     * Close monitoring
     * @function
     */
    close(): void;
    /**
     * Attach to main page
     * @function
     */
    attach(): void;
    private timer;
    private heapChart;
    private memory;
    private toTimeMs;
    private timeChart;
    private stepsChart;
    private stats;
    /**
     * Displays the monitoring
     * @param {Object} p Options
     * @param {boolean} p.docked dock monitoring on bottom
     * @param {number}  p.tabIndex tab to focus
     * @param {function} cbk Optional callback
     * @function
     */
    display(p?: {
        docked?: boolean;
        tabIndex?: number;
    }, cbk?: Callback): this;
}

/**
 * Server monitoring (external object Monitoring): snapshot, memory, data, threads, performances, agents, class loaders and queues tabs
 */
declare class MonitorServer {
    private _baseURL;
    private _colors;
    private ctn;
    private _started;
    private _delay;
    private _tab;
    private _log10;
    private _tfilter;
    private _pf?;
    private _cols;
    private _timerDelay?;
    private _timerBar?;
    private _perfService?;
    private _perfTarget?;
    private _perfAction?;
    private _perfSlider;
    /**
     * Monitoring of the server, see the static render
     */
    constructor();
    private static singleton?;
    /**
     * Render monitoring thru external access
     * <code>Simplicite.UI.View.Monitor.render(...)</code>
     * @function
     */
    static render(params: KeyObject): Promise<void>;
    /**
     * Display the monitoring in the `.backend-monitor` container of the dashboard template
     * @param params Parameters from the server: `started` (events cron), `delay` (polling in seconds), `platform`,
     * `platforms`, `perfSlider`, `date`, `prev`/`next` (dates of the previous/next days), `hours` (period to observe)
     */
    display(params: KeyObject): void;
    /**
     * Stop the refresh timers when the content is unloaded
     */
    unload(): void;
    /**
     * Start the monitoring events on server side, then reload
     */
    start(): void;
    /**
     * Stop the monitoring events on server side, then reload
     */
    stop(): void;
    /**
     * Clear all the monitoring data on server side (after confirmation), then reload
     */
    clear(): void;
    /**
     * Clear the SQL monitoring data on server side (after confirmation), then reload
     */
    clearSQL(): void;
    /**
     * Dump the JVM heap on server side (after confirmation) and display the dump path
     */
    dumpHeap(): void;
    /**
     * Observe another day
     * @param dt Date YYYY-MM-DD
     */
    changeDate(dt: string): void;
    /**
     * Reload the monitoring content (default values from the inputs of the head)
     * @param dt Optional date YYYY-MM-DD
     * @param hr Optional period to observe in hours
     * @param delay Optional polling delay in seconds
     */
    reload(dt?: string, hr?: string, delay?: string): void;
    /**
     * Select the platform to observe (cluster node)
     * @param pf Optional platform name, 'all' for all the platforms (default is the current one)
     */
    setPlatform(pf?: string): void;
    /**
     * Display a tab: 0 snapshot, 1 memory (sessions, heap, cache, CPU, GC, classes), 2 data (documents, disk, SQL, JDBC),
     * 3 threads, 4 performances, 5 agents, 6 class loaders, 7 queues
     * @param tab Optional tab (default is the current one)
     * @param pf Optional platform
     */
    displayTab(tab?: number, pf?: string): void;
    /**
     * Display the stack of a thread
     * @param id Thread ID
     */
    displayStack(id: string): void;
    /**
     * Interrupt a thread (after confirmation)
     * @param id Thread ID
     */
    interrupt(id: string): void;
    /**
     * Toggle the threads list between all the threads and the com.simplicite ones
     */
    threadFilter(): void;
    /**
     * Force a garbage collection on server side
     */
    forceGC(): void;
    /**
     * Performances: percentage of the calls kept, to exclude the exceptional ones (5 to 100, 98 by default)
     * @param p Percentage
     */
    pageSlider(p: number): void;
    /**
     * Performances: clear the data (after confirmation)
     */
    pageClear(): void;
    /**
     * Performances of a service
     * @param s Service (ex: /obj)
     * @param t Target (ex: object name)
     * @param a Action (ex: get, search)
     */
    displayPerfs(s: string, t: string, a: string): void;
    /**
     * Performances: ranking criterion of the top services
     * @param top C (count), M (min time), P (peak time), A (average time) or X (max time)
     */
    pageTop(top: string): void;
    private _timer;
    private _call;
    private _onTopUser;
    private _onMemory;
    private _onSessionCount;
    private _onHeap;
    private _onCache;
    private _onCPU;
    private _onGC;
    private _onClass;
    private _onDoc;
    private _onDisk;
    private _onJDBC;
    private _onSql;
    private _onPerf;
    private _onPerfPage;
    private _onPerfForm;
    private _onPerfList;
    private _onPerfTop;
    private _onTopSQL;
    private _snapshot;
    private _onGauge;
    private _onThreadCount;
    private _onThread;
    private _onThreadStack;
    private _onAgents;
    private _onCL;
    private _onQueues;
    /**
     * Draw a chart in a container with error handling
     * @param div Container id
     * @param draw Drawing function
     * @param error Error message prefix
     */
    private _plot;
    /**
     * Series on the observed period
     * @param div Container id
     * @param title Chart title
     * @param series Series of `[date, value]`
     * @param d Data with the period `min` and `max`
     * @param p Optional options of {@link Charts.chartTimeSeries}
     */
    private _timeSeries;
    /** Time ticks format depending on the observed hours */
    private _timeFormat;
    private _plotSession;
    private _plotHeap;
    private _plotCache;
    private _plotCPU;
    private _plotClass;
    private _plotGC;
    private _plotDoc;
    private _plotDisk;
    private _plotSqlCount;
    private _plotSqlTime;
    private _plotSqlJDBC;
    private _plotPerfPage;
    private _plotTopUser;
    private _plotMemory;
    private _plotGauge;
    private _plotThreadPie;
    private _plotThread;
    private _plotUserAgents;
}

declare class UIGit {
    private params;
    private ctn?;
    private msg?;
    private format?;
    private exploded?;
    constructor(params?: KeyObject);
    render(div: string): void;
    diff(commit: string, type: string): Promise<void>;
    display(ctn: Container, commit: string, type: string): Promise<void>;
    private loadDiff;
    private static renderDiff;
    private call;
    private service;
    private diffCommit;
    private diffPrevious;
    private diffCurrent;
    private history;
    private toast;
    /**
     * Display a tree difference
     * @param {(String|jQuery)} ctn Optional container
     * @param {Object} p Options
     * @param {string} p.name   Root object name
     * @param {string} p.id     Root object Id
     * @param {string} p.local  Local name
     * @param {string} p.remote Remote name
     * @param {string} p.uri    Remote URI to push patch
     * @param {string} p.login  Remote login
     * @param {string} p.pwd    Remote pwd
     * @param {(string|function)} p.preview Preview action or service (type, json)
     * @param {(string|function)} p.apply   Apply service (type, xml)
     * @param {Object} data Difference tree
     * @function
     */
    static treeDiff(ctn: Container, p: {
        title?: string;
        type: string;
        local?: string;
        remote?: string;
        reload?: string;
        object: string;
        id: string;
        apply: string | ((p: KeyObject) => void);
        preview: string | ((p: KeyObject) => void);
        patch?: KeyObject[];
        xml?: string;
        uri?: string;
        login?: string;
        pwd?: string;
    }, data: TreeNode): void;
}
/**
 * Git functor
 */
declare const Git: (params?: KeyObject) => UIGit;

type TemplateEntity = "ObjectInternal" | "View";
/** Target of a template editor */
type TemplateTarget = TemplateEntity | "ObjectInternalRow" | "ObjectInternalSearch";
/** Log viewer parameters (see `$ui.displayLogViewer`) */
interface LogViewerParam extends NavParam {
    /** Log source: empty for the system log, `cron`, `session`, `redo` for the cron/sessions/redo logs, `tomcat` for the Tomcat logs */
    log?: string;
    /** Tomcat log type (`catalina` by default, `localhost`, `localhost_access_log`...) */
    type?: string;
    /** Optional filter (regexp or text) */
    filter?: string;
    /** Maximum number of lines to read (default 1000, changed by clicking on the max in the toolbar) */
    max?: number;
    /** Display order: `asc` last line at the bottom (default), `desc` last line on top */
    order?: "asc" | "desc";
    /** HTTP polling interval in seconds (default 30s) */
    refresh?: number;
}
/**
 * UI rendering, part of the UI engine `$ui` (see UIEngine): tools dedicated to the makers (code editor, audit, modules,
 * logs, system info, monitoring, ZIP editor, modeler, feedback, template and theme editors, color picker)
 */
declare class UIRenderMaker {
    /**
     * Code editor
     * @param ctn Container
     * @param options Optional parameters <code>\{ showNav, nav \}</code>
     * @param cbk Optional callback
     * @example
     * $ui.displayEditor(null, { nav: "add", showNav: true });
     */
    displayEditor(ctn: AnyContainer, options: NavParam, cbk?: Callback): void;
    /**
     * Display the audit issues (social posts of audit).
     * @param ctn Container
     * @example
     * $ui.displayAuditIssues(null);
     */
    displayAuditIssues(ctn: AnyContainer): void;
    /**
     * Display the application module screen
     * @param action import or export
     * @param obj application (root module)
     * @example
     * $ui.displayModuleApp("export", appModule);
     */
    displayModuleApp(action: string, obj: BusinessObject): void;
    /**
     * Display the delete module screen
     * @param ctn Container
     * @param moduleId module row Id
     * @example
     * $ui.displayModuleDelete(null, moduleId);
     */
    displayModuleDelete(ctn: AnyContainer, moduleId: string): void;
    /**
     * Log viewer (Maker bundle) of a server log file: system, cron, sessions, redo or Tomcat logs,
     * with source/type selectors, text and level filters, live updates (polling + websocket events),
     * lock, download, adjustable number of lines and detach in a popup.
     * Data are served by the `/ui/logs` service (LogsServlet, `LogsAccess` or `CronLogsAccess` for the cron logs).
     * @param ctn Container (the content of the container is rendered, not the whole work area)
     * @param p Optional parameters <code>\{ log, type, filter, max, order, refresh, nav, showNav \}</code> (see LogViewerParam),
     * the navigation bar is refreshed unless <code>showNav: false</code>
     * @example
     * // Cron logs in the menu tab (ctn = tab content of a menu javascript URL)
     * $ui.displayLogViewer(ctn, { log: "cron", nav: "new" });
     * // Last 5000 lines of the Tomcat localhost log with errors only
     * $ui.displayLogViewer(null, { log: "tomcat", type: "localhost", filter: "SEVERE", max: 5000, nav: "add" });
     */
    displayLogViewer(ctn: AnyContainer, p?: LogViewerParam): Promise<void>;
    /**
     * Show server logs thru web-socket. Useful when UI has no console
     * @param ctn Optional container to split (default is #work)
     * @param action <code>start|stop</code>
     * @param pos Optional position <code>dialog|left|right|top|bottom</code> (default bottom)
     * @example
     * // Server logs docked on the right of the work area
     * $ui.displayLogs(null, "start", "right");
     * $ui.displayLogs(null, "stop");
     */
    displayLogs(ctn: AnyContainer, action: string, pos?: Position | "dialog"): void;
    /**
     * System informations
     * @param ctn Container
     * @param p Options <code>\{ action, objdt, cache \}</code>
     * @example
     * $ui.displaySysInfos(null);
     */
    displaySysInfos(ctn: AnyContainer, p?: {
        action?: string;
        objdt?: string | null;
        cache?: boolean;
    }): void;
    /**
     * UI Monitoring
     * @param p Options
     * @param p.docked Dock monitoring on bottom
     * @param p.tabIndex Tab to focus
     * @param cbk Optional callback
     * @example
     * $ui.displayUIMonitoring({ docked: true });
     */
    displayUIMonitoring(p?: {
        docked?: boolean;
        tabIndex?: number;
    }, cbk?: Callback): Promise<void>;
    /**
     * Server Monitoring
     * @param p Parameters
     * @example
     * $ui.displayServerMonitoring({});
     */
    displayServerMonitoring(p: KeyObject): Promise<void>;
    /**
     * ZIP editor
     * @param ctn Parent container
     * @param doc Document <code>\{ object, rowId, field, docId, name \}</code>
     * @param p Options <code>\{ readonly:true|false \}</code>
     * @param cbk Optional callback to get the new ZIP as Base64
     * @example
     * // Read-only ZIP editor of a document field
     * $ui.displayZipEditor(ctn, { object: "MyObject", rowId: obj.getRowId(), field: "myObjArchive", docId, name: "archive.zip" }, { readonly: true });
     */
    displayZipEditor(ctn: Container, doc: DocumentDB, p?: {
        readonly?: boolean;
    }, cbk?: (zip: string) => void): void;
    /**
     * Load and display the modeler
     * @param _ctn Container to append the map to
     * @param modelId Model row ID
     * @param options Options <code>\{ docked, popup \}</code>
     * @example
     * $ui.displayModeler(null, modelId, { docked: true });
     */
    displayModeler(_ctn: AnyContainer, modelId: string, options?: ModelParam): Promise<void>;
    /**
     * User feedback
     * @example
     * $ui.displayFeedback();
     */
    displayFeedback(): void;
    /**
     * Template editor
     * @param ctn Container
     * @param target ObjectInternal or View or ObjectInternalRow or ObjectInternalSearch
     * @param rowId Object/view ID
     * @example
     * $ui.displayTemplate(null, "ObjectInternal", objectId);
     */
    displayTemplate(ctn: AnyContainer, target: TemplateTarget, rowId: string): Promise<void>;
    /**
     * Theme editor
     * @param rowId Theme row Id
     * @param options Options
     * @param options.popup Open the editor in this window (default is a new window)
     * @example
     * $ui.displayTheme(themeId, { popup: true });
     */
    displayTheme(rowId: string, options?: {
        popup?: boolean;
    }): Promise<void>;
    /**
     * Color picker
     * @param ctn Container
     * @param input Element to receive selected color as <code>#RRGGBB</code>
     * @param dropdown Displays as dropdown or dialog box
     * @param cbk Optional callback(color,valid)
     * @example
     * // Dropdown color picker bound to an input
     * $ui.displayColorPicker(ctn, $("#myColor", ctn), true, (color: string, valid?: boolean) => valid && $console.log(color));
     */
    displayColorPicker(ctn: AnyContainer, input: AnyContent, dropdown: boolean, cbk?: ColorPickerHandler): void;
}

/**
 * View item editor
 * @class
 */
declare class UIViewItemEditor extends Simplicite.UI.View.UIView {
    /**
     * Save the edited view
     * @param cbk Callback
     * @function
     */
    save(cbk?: Callback): void;
    /**
     * Edit View item
     * @function
     */
    editItem(area: JQuery, a: ViewItem, tab: number | null, n: number | null, onApply: (data: KeyObject, cbk?: Callback) => void, onRemove: Callback, onDelete: Callback): void;
}

/**
 * Editor of the UI templates of the business objects (form, edit list row, search page) and the views:
 * drag & drop of areas, rows, fields, actions, texts and external objects, undo/redo, save
 * @class
 */
declare class TemplateEditor {
    /**
     * Open the template editor in a container, with its navigation and save before quit
     * @param ctn Container
     * @param target Template to edit: ObjectInternal (form), ObjectInternalRow (edit list row), ObjectInternalSearch (search page) or View
     * @param rowId Row ID of the object (ObjectInternal) or the view (View)
     */
    static render(ctn: AnyContainer, target: TemplateTarget, rowId: string): void;
    object?: UIBusinessObject;
    view?: View;
    metadata?: KeyObject;
    moduleId?: string;
    objectId?: string;
    isBase?: boolean;
    entity?: TemplateEntity;
    isObject?: boolean;
    isView?: boolean;
    isObjectRow?: boolean;
    isObjectSearch?: boolean;
    isGrid?: boolean;
    uiView?: UIViewItemEditor;
    redoLabel?: string;
    undoLabel?: string;
    oInternal?: BusinessObject;
    oExternal?: BusinessObject;
    oLov?: BusinessObject;
    oField?: BusinessObject;
    oFieldList?: BusinessObject;
    oObjField?: BusinessObject;
    oAction?: BusinessObject;
    oView?: BusinessObject;
    oViewItem?: BusinessObject;
    oArea?: BusinessObject;
    edit: JQuery;
    dd?: JQuery;
    origin?: JQuery;
    target?: JQuery;
    timerAutoScroll?: number;
    /**
     * Template editor, see the static render
     */
    constructor();
    private closest;
    private xy;
    private xye;
    private element;
    private zoneIn;
    private usedAreas;
    private placeArea;
    private static filterList;
    private getType;
    private drag;
    private move;
    private drop;
    private cols;
    private findArea;
    private findTemplate;
    private insertElement;
    private insertRow;
    private insertArea;
    private insertView;
    private insertViewItem;
    private insertStatesNavbar;
    private selectField;
    private insertForeignKey;
    private selectRef;
    private insertExtern;
    private insertAction;
    private moveElement;
    private editElement;
    private editRow;
    /**
     * Edit area or view
     * @param ar area
     * @param tab optional area num (when displayed in a tabs)
     */
    private editArea;
    private editExtern;
    private editStatesNavbar;
    private updateStatesNavbar;
    private loadQuill;
    /**
     * Edit View item
     * @param ar area or view item or string
     * @param tab optional area num (when displayed in a tabs)
     */
    private editViewItem;
    private editField;
    private editList;
    private iconPicker;
    private textPicker;
    private editText;
    private editAction;
    private desk;
    private row2tabs;
    private tabs2row;
    private barMini;
    private barNew;
    private selectTemplate;
    private service;
    private undo;
    private redo;
    private listBases;
    private saveTemplate;
    private saveArea;
    private deleteArea;
    private saveView;
    private saveText;
    private saveList;
    private saveField;
    private saveMultipleFields;
    private saveJoinField;
    private saveMultipleJoinFields;
    private moveField;
    private deleteField;
    private saveAction;
    private deleteAction;
    private saveRef;
    private saveViewItem;
    private deleteViewItem;
    private toHTML;
    private dump;
    /**
     * Save the template (the view items of a Gridstack view, or the HTML template), then redraw
     * @param cbk Optional callback when saved (default redraws the editor)
     */
    save(cbk?: Callback): void;
    private saveDlg;
    private init;
    private redraw;
    private getUIView;
    private grid;
    /**
     * Display the template editor
     * @param ctn Container
     * @param t Entity of the template: ObjectInternal or View
     * @param def Definition record (ObjectInternal or View)
     * @param inst Main instance of the object, or the view metadata
     * @param target Template to edit (form, edit list row, search page or view)
     */
    display(ctn: Container, t: TemplateEntity, def: BusinessObject, inst: UIBusinessObject | {
        metadata: View;
    }, target: TemplateTarget): Promise<void>;
    private static _iconPickerTarget?;
    /**
     * Icon picker
     * @param {jquery} inp input to set with selected icon
     * @param {boolean} embedded only content or full dialog
     * @param {string} selected optional selected icon
     * @param {function} onSelect optional callback(icon)
     * @function
     */
    static iconPicker(inp: AnyContent, embedded?: boolean, selected?: string, onSelect?: (icon: string, input: JQuery | undefined) => void): JQuery<HTMLElement>;
}

/**
 * Editor of a view template with Gridstack: drag & drop of new items (from the action bar or the menu),
 * resize, edition and deletion of the view items, save of the template
 * @class
 */
declare class UIViewEditor {
    ctn: Container;
    el?: HTMLElement;
    params: KeyObject;
    grid: any;
    element?: JQuery;
    isAdmin: boolean;
    def: View;
    oView: UIBusinessObject;
    /**
     * View editor
     * @param ctn View container
     * @param view View component
     * @param el Element .grid-stack
     * @param params Gridstack options, and `dragIn`/`dragInOptions` for the new items
     */
    constructor(ctn: Container, view: UIView, el: HTMLElement, params?: KeyObject);
    /**
     * Build the action bar: new items (empty, list, pivot, chart, widget, filters, items not placed),
     * preview, compact, save and close buttons, and bind the menu entries as new items
     * @returns Action bar
     */
    toolbar(): JQuery<HTMLElement>;
    /**
     * Start the edition with the grid: drag in of the new items, changes tracking
     * @param grid Gridstack instance
     */
    start(grid: any): void;
    /**
     * Build the action bar of an area: edit, fit height, delete
     * @param a Area element (.area)
     */
    areaBar(a: JQuery): void;
    /**
     * Save the template in DB
     * @param e Optional event
     * @param cbk Optional callback when saved
     */
    saveView(e?: JQuery.Event, cbk?: Callback): void;
    /**
     * Redraw the view editor
     */
    redraw(): void;
    /**
     * Get or set the changed flag of the view
     * @param b Optional flag to set
     * @returns true if the view has changed
     */
    hasChanged(b?: boolean): any;
    /**
     * Return to the view
     */
    showView(): void;
    /**
     * Display the view without edit mode (saved before if changed)
     */
    preview(): void;
    /**
     * Close the editor (navigation back), asking to save the changes
     */
    close(): void;
    /**
     * Make the menu entries draggable as new items: objects (with status or enumeration), views and external objects
     * @param b true to bind, false to unbind
     */
    bindMenu(b: boolean): void;
    /**
     * Build the Gridstack HTML of the template from the grid
     * @returns HTML template
     */
    getHTML(): string;
    /**
     * Call the template service (/ui/edittmpl) with the HTML template, then update the view metadata
     * @param name Action
     * @param data Service data
     * @param cbk Optional callback on success
     */
    service(name: string, data: KeyObject, cbk?: Callback): void;
    /**
     * Edit the view item of an area
     * @param area Area element
     */
    editArea(area: JQuery): void;
    /**
     * Remove an area from the template (the view item is kept in DB)
     * @param area Area element
     */
    removeArea(area: JQuery): void;
    /**
     * Fit the heights of all the areas to their contents
     */
    fitHeights(): void;
    /**
     * Fit the height of an area to its content
     * @param area Area element (or a child)
     */
    fitHeight(area: JQuery): void;
    /**
     * Fit the heights and compact the grid
     */
    compact(): void;
    /**
     * Delete an area: remove it from the template and/or delete its view item from DB
     * @param area Area element (or a child)
     * @param confirm true when already confirmed (no dialog)
     */
    deleteArea(area: JQuery, confirm?: boolean): void;
    /**
     * Prepare a new area in the template, from a dropped item
     * @param e Gridstack node <code>\{ x, y, w, h, el \}</code>
     */
    addArea(e: KeyObject): void;
}

/**
 * Log viewer of a server log file (system, cron, sessions, redo or Tomcat logs, see `LogViewer.SOURCES`):
 * - last lines in ascending (last line at the bottom) or descending order, stack traces kept under their line,
 *   fields separated with pipes colorized
 * - text filter (regexp) and level toggles applied on server side before the lines limit, Tomcat log type selector
 * - live updates: HTTP polling, plus UI websocket `log` events to refresh sooner (at most every 2s);
 *   the view follows the last line unless locked
 * - adjustable maximum number of lines (click on the max), download, detach in a popup
 *
 * Rendered by `$ui.displayLogViewer`, data served by the `/ui/logs` service (see LogsServlet).
 */
declare class LogViewer {
    /** Labels of the log sources (the available sources are returned by the service) */
    static readonly SOURCES: Record<string, string>;
    /**
     * Primary log lines start with a date digit (year for system/cron logs, day for Tomcat logs),
     * continuation lines (stack traces...) do not
     */
    private static readonly PRIMARY_LINE;
    private ctn;
    private params;
    private elFilter;
    private elSource;
    private elType;
    private elView;
    private elTransport;
    private elStatus;
    private elCount;
    private elTotal;
    private elPause;
    private elOrder;
    /** Descending order: last line on top */
    private desc;
    private elRefresh;
    private elDownload;
    private paused;
    private httpTimer?;
    private pullDebounce?;
    /** A pull is in progress */
    private pulling;
    /** The wait spinner is displayed (until the requested load ends) */
    private waiting;
    /** Viewer root (container of the wait spinner) */
    private elViewer;
    /** Pull again when the current one ends (source or filter changed meanwhile) */
    private pullAgain;
    /** End time of the last pull (ms) */
    private lastPull;
    /** Signature of the rendered lines, to skip identical renders */
    private lastSig;
    /** Maximum number of lines to read (as applied by the service) */
    private max;
    /** Upper bound of the maximum number of lines (see LogsServlet.MAX_LOGS) */
    private maxLimit;
    private elMax;
    private lastRaw;
    /** Name of the log file being displayed */
    private file;
    private mask;
    private readonly onLog;
    /**
     * Log viewer
     * @param ctn Container
     * @param params Parameters
     */
    constructor(ctn: Container, params?: LogViewerParam);
    /**
     * Render the log viewer in a container
     * @param ctn Container
     * @param params Parameters
     * @returns The log viewer
     */
    static render(ctn: Container, params?: LogViewerParam): Promise<LogViewer>;
    /** User system parameter of the viewer preferences */
    private static readonly PREFS;
    /** Tomcat log type of the preferences (kept while another source is displayed) */
    private prefType;
    /** Previous filters (most recent first) proposed in the filter input */
    private filters;
    /** Maximum number of previous filters kept in the preferences */
    private static readonly MAX_FILTERS;
    /** Datalist of the previous filters */
    private elFilters;
    /** Sequence of the viewers in page (unique datalist ids) */
    private static seq;
    /**
     * Load the user preferences (order, max lines, levels, Tomcat log type, previous filters),
     * the explicit parameters win over the preferences
     */
    private loadPrefs;
    /** Add the current filter on top of the previous filters (saved in the preferences) */
    private addFilter;
    /** Propose the previous filters in the filter input */
    private syncFilters;
    /** Save the user preferences in the user system parameters */
    private savePrefs;
    /** Service URL */
    private static url;
    /** Display the viewer and start the live updates */
    display(): void;
    /** Window name of the detached viewers */
    private static readonly DETACHED_NAME;
    /** Is the viewer in a detached window? */
    private static isDetached;
    /** Open the viewer with the current source, type and filter in a new window (one window per source and type) */
    private detach;
    /** Apply the source and filter, then restart the live updates */
    private go;
    /** Option of a log source */
    private static option;
    /** Current log source */
    private source;
    /** Tomcat log source */
    private static readonly SOURCE_TOMCAT;
    /** Default Tomcat log type */
    private static readonly TOMCAT_DEFAULT_TYPE;
    /** Current Tomcat log type (empty for other sources) */
    private type;
    /**
     * Service parameters of the current source and type
     * @param more Additional parameters
     * @returns URL query string
     */
    private query;
    /** Fill the Tomcat log types returned by the service, keep the current one */
    private syncTypes;
    /**
     * Fill the selector with the sources available on server side only (granted, accessible log file)
     * @param sources Available sources returned by the service
     * @returns `true` when the current source is not available: switched and reloaded with the first available one
     */
    private syncSources;
    /**
     * Start the live updates: HTTP polling, plus websocket log events to refresh sooner
     * (events are pushed only when USE_WEBSOCKET_LOGS is enabled, polling remains the fallback)
     */
    private start;
    /** Stop the live updates */
    stop(): void;
    /** Pause/resume the live updates */
    private togglePause;
    /** Sync the lock button with the paused state */
    private syncPause;
    /**
     * Coalesce log events into one pull, at most every 2s:
     * each pull may produce server logs, so pushed events must not trigger pulls in a tight loop
     */
    private debPull;
    /** Minimum delay between 2 pulls triggered by log events (ms) */
    private static readonly MIN_PULL_DELAY;
    /**
     * Get the last log lines (one call at a time)
     * @param wait Show the wait spinner until loaded (loads requested by the user, not the background refreshes)
     */
    private pull;
    /**
     * Show the live updates transport
     * @param mode `ws` websocket events + polling, `http` polling only, `off` paused
     */
    private setTransport;
    /** Level toggle of a log level (fatal is grouped under errors) */
    private static maskKey;
    /**
     * Toggle a level filter (at least one level remains visible)
     * @param k `all` or a level toggle
     */
    private toggleLevel;
    /** Enabled level toggles for the service, empty for all levels */
    private levels;
    /** Sync the level buttons with the level toggles */
    private syncLevels;
    /**
     * Log row: one element per line, the level icon is rendered by CSS
     * @param entry Log entry
     * @param cont Continuation line (stack trace...) of the previous primary line
     * @returns Row element
     */
    private static row;
    /** Level tokens of a log line */
    private static readonly LEVELS;
    /**
     * Colorize the fields of a log line separated with pipes (date|marker|level|...|message):
     * one span per field and the pipes as text nodes (kept when copying), colors by position,
     * level token by level, the last field (message) with the level color
     * @param row Row element
     * @param text Log line
     */
    private static fields;
    /**
     * Render the entries with their continuation lines, in file order (last line at the bottom) or descending order
     * @param entries Log entries in file order
     * @param forceScroll Focus the last line even when locked (ex: order changed)
     */
    private render;
    /** Sync the order button with the display order */
    private syncOrder;
    /** Change the maximum number of lines to read */
    private promptMax;
    /** Set the maximum number of lines (as applied by the service) */
    private setMax;
    /** Minimum number of lines (see LogsServlet.MIN_LOGS) */
    private static readonly MIN_LINES;
}

declare module "simplicite/namespaces" {
    interface AjaxNamespace {
        /** `Simplicite.Ajax.APITester`: API tester (Maker) @hidden */
        APITester: typeof APITester;
    }
    interface UIViewNamespace {
        /** `Simplicite.UI.View.Editor`: code editor (Maker) @hidden */
        Editor: typeof CodeEditor;
        /** `Simplicite.UI.View.Git`: Git tools (Maker) @hidden */
        Git: typeof Git;
        /** `Simplicite.UI.View.ThemeEditor`: theme editor (Maker) @hidden */
        ThemeEditor: typeof ThemeEditor;
        /** `Simplicite.UI.View.Template`: template editor (Maker) @hidden */
        Template: typeof TemplateEditor;
        /** `Simplicite.UI.View.ClientMonitoring`: client monitoring (Maker) @hidden */
        ClientMonitoring: typeof MonitorClient;
        /** `Simplicite.UI.View.Monitor`: server monitoring (Maker) @hidden */
        Monitor: typeof MonitorServer;
    }
}
declare global {
    const Simplicite: SimpliciteInterface;
    const $factory: Factory;
    const $app: Session;
    const $grant: Grant;
    const $ui: UIEngine;
    const $view: UIViewer;
    const $tools: Bootstrap5;
    const $console: Console;
    const $nav: UINavigator;
    var $root: string;
}
interface MakerInterface extends SimpliciteInterface {
    Diagram: typeof Diagram;
    CodeEditor: typeof CodeEditor;
    LSP: typeof LSP;
    UIGit: typeof UIGit;
    Git: typeof Git;
    ThemeEditor: typeof ThemeEditor;
    TemplateEditor: typeof TemplateEditor;
    UIViewEditor: typeof UIViewEditor;
    UIViewItemEditor: typeof UIViewItemEditor;
    MonitorClient: typeof MonitorClient;
    MonitorServer: typeof MonitorServer;
    LogViewer: typeof LogViewer;
}
/** Simplicite namespace extended with the maker tools (diagram, code editor, git, theme editor...) */
declare const SimpliciteMaker: MakerInterface;
declare global {
    interface Window {
        SimpliciteMaker: MakerInterface;
    }
}

declare type ZIPTools = {
    JSZip: typeof JSZip;
    JSZipUtils: typeof JSZipUtils;
};
/** Resource to load: script, stylesheet or HTML part */
interface LoadPart {
    /** Resource URL */
    url?: string;
    /** `HTML`, `CSS` or `JS` (or URL extension) */
    type?: "JS" | "CSS" | "HTML";
    /** Optional element ID (to append to head or replace) */
    id?: string;
    /** Resource name */
    name?: string;
    /** Encoding */
    encoding?: string;
    /** Optional selector or element to append the `HTML` part */
    target?: string | JQuery;
    /** true for no logging (not found 404) */
    silent?: boolean;
    /** Ignore the local cache */
    force?: boolean;
    /** true to inline the styles in header (default add a link to the stylesheet) */
    inline?: boolean;
    /** true to resolve when the stylesheet link is loaded (default resolve when the link is added) */
    wait?: boolean;
    /** Path relative to the root */
    path?: string;
}
/** Resource to load with a callback */
type LoadPartOnload = LoadPart & {
    /** Callback when loaded */
    onload?: (data?: string) => void;
};
/**
 * Factory to load UI components on-the-fly
 * - Never load optional components at UI loading
 * - Fix some issues when importing non ESM bundle
 */
declare class Factory {
    private root;
    private dist;
    /** Loaded scripts per URL */
    scripts: KeyBoolean;
    /** Loaded css per URL */
    css: KeyBoolean;
    constructor();
    /**
     * Set the root location.
     * @param root Root URL
     */
    setRoot(root: string): void;
    /**
     * Get the root path of the application (context root)
     * @returns string
     */
    getRootPath(): string;
    /**
     * Get the path to the local distribution in /scripts
     * @returns string
     */
    getDistPath(): string;
    /**
     * Evaluate a JavaScript source string in the global scope,
     * like a &lt;script&gt; tag (top-level var/function declarations become globals).
     * @param src JavaScript source
     */
    globalEval(src: string): void;
    /**
     * Copy the methods of independent classes (mixins) on the prototype of a target class,
     * to aggregate them without a cascading inheritance.
     * The target must declare the related interface merging to be typed:
     * <code>interface Target extends Mixin1, Mixin2 {}</code>
     * A warning is logged when a mixin has a constructor, fields or a parent class: they are not copied.
     * @param target Target class
     * @param mixins Classes without state (no field, no constructor) to aggregate
     */
    static applyMixins(target: {
        prototype: object;
    }, mixins: {
        prototype: object;
    }[]): void;
    /**
     * Load a HTML/JS/CSS resource in the target selector
     * @param part Parameters
     * @param part.name resource name
     * @param part.url or resource URL
     * @param part.type "HTML", "CSS" or "JS" (or URL extension)
     * @param part.target optional selector to append the "HTML" part
     * @param part.silent true for no logging (not found 404)
     * @param part.force ignore the local cache
     */
    loadPart(part: string | LoadPart): Promise<void>;
    /**
     * Load HTML/JS/CSS resources
     * @param list list of parts [{ name, url, type, target }] or urls
     * @param ordered ordered loading of each part? true by default
     */
    loadParts(list: LoadPart[] | string[], ordered?: boolean): Promise<void> | Promise<KeyObject> | Promise<PromiseSettledResult<void>[]>;
    /**
     * Browser cache per revision
     */
    private addUrlRev;
    /**
     * Load a server CSS
     * @param part Parameters or URL
     * @param part.url script location
     * @param part.inline true to inline the styles in header (default add a link to the stylesheet)
     * @param part.silent true for no logging (not found 404)
     * @param part.force ignore the local cache
     * @param part.id optional link id (to append to head or replace)
     */
    loadCSS(part: string | LoadPart): Promise<void>;
    /**
     * Load a disposition resource and replace [ROOT] tokens
     * @param p Parameters
     * @param p.url script location
     * @param p.silent true for no logging (not found 404)
     */
    loadResource(p: LoadPart): Promise<string>;
    /**
     * Load a server JavaScript
     * @param part minimal parameter { url } or URL
     * @param part.url script location
     * @param part.encoding optional, default 'UTF-8'
     * @param part.silent true for no logging (not found 404)
     * @param part.force ignore the local cache
     */
    loadScript(part: string | LoadPart): Promise<void>;
    /**
     * Ordered loading of JS/CSS scripts
     * @param list list of scripts URL (js or css)
     */
    loadScripts(list: (string | LoadPart)[]): Promise<KeyObject>;
    /**
     * Ordered loading of HTML/JS/CSS resource(s) in the target selector
     * @param p Parameters or array of parameters
     * @param p.name resource name
     * @param p.url or resource URL
     * @param p.type "HTML", "CSS" or "JS" (or URL extension)
     * @param p.target optional selector to append the "HTML" part
     * @param p.silent true for no logging (not found 404)
     * @param p.force ignore the local cache
     * @returns Promise
     */
    load(p: LoadPart | LoadPart[] | string[]): Promise<void> | Promise<KeyObject>;
    private part;
    private _bootstrap?;
    private _quill?;
    private _flatpickr?;
    private _moment?;
    private _hljs?;
    private _marked?;
    private _calendar?;
    private _select2?;
    private _qrcode?;
    private _signpad?;
    private _gridstack?;
    private _chartjs?;
    private _leaflet?;
    private _beautify?;
    private _zip?;
    private _mermaid?;
    private _mustache?;
    private _terminal?;
    /** Reset the cached libraries options (highlight styles, editor options) */
    reset(): void;
    /**
     * Bootstrap loader
     */
    Bootstrap(): Promise<typeof BootstrapLib>;
    /**
     * JQuery loader
     */
    JQuery(): Promise<void>;
    /**
     * Quill loader to avoid direct (non ESM) import.
     */
    Quill(): Promise<typeof Quill>;
    /**
     * Quill constructor (when loaded first)
     */
    quill(container: HTMLElement | string, options?: QuillOptions): Quill;
    /**
     * Flatpickr loader to avoid direct (non ESM) import.
     */
    Flatpickr(): Promise<typeof flatpickr>;
    /**
     * flatpickr constructor (when loaded first)
     */
    flatpickr(selector: Node, config?: Options): Instance;
    /**
     * moment loader
     */
    Moment(): Promise<typeof moment>;
    /**
     * Parse a date with moment.js (the library must be loaded).
     * @param inp Date input
     * @param format Optional format
     * @param language Optional language
     * @param strict Strict parsing
     * @returns Moment date
     */
    moment(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, language?: string, strict?: boolean): moment.Moment;
    /**
     * Load the select box component (see https://select2.org)
     */
    Select2(): Promise<void>;
    /**
     * Load highlight tool
     * @param options Options
     * @param options.styles Styles (defaults to <code>default</code>)
     */
    Highlight(options?: {
        styles?: string;
    }): Promise<typeof hljs>;
    /**
     * Load marked plugin
     */
    Marked(): Promise<typeof marked>;
    /**
     * Calendar loading from FULLCALENDAR_LIBS or /scripts/fullcalendar.
     * <code>FULLCALENDAR_VERSION</code> is ignored = forced to 5
     */
    Calendar(): Promise<typeof Calendar$1>;
    /**
     * Load HTML QR code plugin
     */
    Html5Qrcode(): Promise<typeof Html5Qrcode>;
    /**
     * Load Signature pad plugin
     */
    SignaturePad(): Promise<typeof SignaturePad>;
    /**
     * Load GridStack plugin
     */
    GridStack(): Promise<typeof GridStack>;
    /**
     * Load Chart JS
     * @param version Optional version
     * @example
     * await $factory.ChartJS();
     * // then use Chart directly or the $ui.charts helpers
     * $ui.charts?.chartBars(ctn, { series: ["Open"], ticks: ["Jan", "Feb"], data: [[10, 20]] });
     */
    ChartJS(version?: string): Promise<typeof Chart>;
    /**
     * Load jqplot for JQuery
     * @deprecated jqPlot is no more maintained, use Chart.js with `$factory.ChartJS()` and `$ui.charts`
     */
    JQPlot(): Promise<void>;
    /**
     * Load Leaflet
     */
    Leaflet(iconUrl?: string, shadowUrl?: string): Promise<typeof L$1>;
    /**
     * Load JS beautify
     */
    Beautify(): Promise<typeof js_beautify>;
    /**
     * Load GZip tools
     */
    JSZip(): Promise<ZIPTools>;
    /**
     * Load spectrum Color picker
     */
    ColorPicker(): Promise<void>;
    /**
     * Load mermaid tools
     */
    Mermaid(): Promise<typeof mermaid>;
    /**
     * Load Mustache template parser
     */
    Mustache(): Promise<typeof mustache>;
    /**
     * Load Terminal (XTerm.js)
     */
    XTerm(): Promise<typeof Terminal>;
    /**
     * Load Swagger UI.
     * @returns Promise of the `SwaggerUIBundle`
     */
    SwaggerUI(): Promise<any>;
    /**
     * Load Ace editor
     */
    AceEditor(): Promise<any>;
    /**
     * Load ace-diff component
     */
    AceDiff(): Promise<void>;
    /**
     * Load Typescript libraries
     */
    TypeScript(): Promise<any>;
    /**
     * Load simplicite maker bundle: API tester, Modeler, Monitoring, Code editor/LSP, Theme editor...
     */
    SimpliciteMaker(): Promise<typeof SimpliciteMaker>;
}

/**
 * Legacy / Compat 6.3 / Deprecated stuff
 */
declare class Legacy {
    /**
     * Complete globals in window.Simplicite
     */
    compat(win: Window): void;
    /**
     * Common key codes. Event.which and Event.keyCode are deprecated.
     * Handler must now use the string Event.key = "Enter", "Escape", "ArrowUp", "KeyA", "Digit0"...
     * @deprecated
     */
    readonly KEYS: {
        /** Key code of `Backspace` */
        BACKSPACE: number;
        /** Key code of `Tab` */
        TAB: number;
        /** Key code of `Enter` */
        ENTER: number;
        /** Key code of `Shift` */
        SHIFT: number;
        /** Key code of `Control` */
        CTRL: number;
        /** Key code of `Alt` */
        ALT: number;
        /** Key code of `Pause` */
        PAUSE: number;
        /** Key code of `CapsLock` */
        CAPS_LOCK: number;
        /** Key code of `Escape` */
        ESCAPE: number;
        /** Key code of `PageUp` */
        PAGE_UP: number;
        /** Key code of `PageDown` */
        PAGE_DOWN: number;
        /** Key code of `End` */
        END: number;
        /** Key code of `Home` */
        HOME: number;
        /** Key code of `ArrowLeft` */
        LEFT_ARROW: number;
        /** Key code of `ArrowUp` */
        UP_ARROW: number;
        /** Key code of `ArrowRight` */
        RIGHT_ARROW: number;
        /** Key code of `ArrowDown` */
        DOWN_ARROW: number;
        /** Key code of `Insert` */
        INSERT: number;
        /** Key code of `Delete` */
        DELETE: number;
    };
    /**
     * Current ajax session (deprecated use getApp)
     * @deprecated
     */
    getAjax(): Session | undefined;
    /**
     * Renamed to setCompletionMinSize
     * @deprecated
     */
    setCompletionSize(size: number): void;
    /**
     * Read the form field into object field (async/file reading)
     * @deprecated
     */
    readField(ctn: AnyContainer, obj?: BusinessObject, f?: ObjectField, index?: string, cbk?: (v: FieldValue) => void): UIEngine;
    /**
     * Load a server JavaScript
     * @deprecated
     */
    loadScript(part: string | LoadPartOnload): UIEngine;
    /**
     * Load a list of JS/CSS scripts (preserve ordering)
     * @deprecated
     */
    loadScripts(list: (string | LoadPart)[], onload: Callback): UIEngine;
    /**
     * Load a server CSS
     * @deprecated
     */
    loadCSS(part: string | LoadPartOnload): UIEngine;
    /**
     * Load a disposition resource and replace [ROOT] tokens
     * @deprecated
     */
    loadResource(p: LoadPartOnload): UIEngine;
    /**
     * Load a HTML/JS/CSS resource(s) in the target selector
     * @deprecated
     */
    load(p: LoadPart | LoadPart[]): Promise<unknown>;
    /**
     * Load a HTML/JS/CSS resource in the target selector
     * @deprecated
     */
    loadPart(part: string | LoadPartOnload): UIEngine;
    /**
     * Load HTML/JS/CSS resources
     * @deprecated
     */
    loadParts(list: LoadPart[] | string[], cbk?: Callback): UIEngine;
    /**
     * Load TinyMCE editor / deprecated / replaced by Quill
     * @deprecated
     */
    loadTinyMCE(cbk?: Callback): UIEngine;
    /**
     * Create the chart.js tool (based on chartjs V4)
     * @deprecated
     */
    loadCharts(cbk?: Callback): UIEngine;
    /**
     * Calendar loading from FULLCALENDAR_LIBS or /scripts/fullcalendar.
     * @deprecated
     */
    loadCalendar(cbk?: Callback): UIEngine;
    /**
     * Load Color picker
     * @deprecated
     */
    loadColorPicker(cbk?: Callback): UIEngine;
    /**
     * Load the workflow tools
     * @deprecated
     */
    loadWorkflow(cbk?: Callback): UIEngine;
    /**
     * Load the tray tools
     * @deprecated
     */
    loadTray(cbk?: Callback): UIEngine;
    /**
     * Load the map tools
     * @deprecated
     */
    loadMap(cbk?: Callback): UIEngine;
    /**
     * Load highlight tool
     * @deprecated
     */
    loadHighlight(cbk?: Callback, options?: {
        styles?: string;
    }): UIEngine;
    /**
     * Load Marked parser (Markdown to HTML)
     * @deprecated
     */
    loadMarked(cbk?: Callback): UIEngine;
    /**
     * Load leaflet maps library
     * @deprecated
     */
    loadLeaflet(cbk?: Callback): UIEngine;
    /**
     * Load the select box component (see https://select2.org)
     * @deprecated
     */
    loadSelectBox(cbk?: Callback): UIEngine;
    /**
     * Grid tool for JSON in a table
     * @deprecated
     */
    loadGridJson(cbk?: Callback): UIEngine;
    /**
     * Gridstack
     * @deprecated
     */
    loadGridStack(cbk?: Callback): UIEngine;
    /**
     * Load jqPlot
     * @deprecated
     */
    loadJqPlot(cbk?: Callback): UIEngine;
    /**
     * Fix the jqPlot canvas manager to prevent font rendering issues in Chrome
     * @deprecated jqPlot is no more maintained, use Chart.js with `$factory.ChartJS()` and `$ui.charts`
     */
    JQPlotFixCanvasManager(): void;
    /**
     * Load Mermaid charting
     * @deprecated
     */
    loadMermaid(cbk?: Callback): UIEngine;
    /**
     * Load Mustache template parser
     * @deprecated
     */
    loadMustache(cbk?: Callback): UIEngine;
    /**
     * Load Terminal (XTerm.js)
     * @deprecated
     */
    loadTerminal(cbk?: (r: KeyObject) => void): UIEngine;
    /**
     * Load ACE editor
     * @deprecated
     */
    loadAceEditor(cbk?: Callback): UIEngine;
}

/** Parameters of a question that the user may not want to be asked again */
interface DontAskAgainParam {
    /** Question name (stored as dontAskAgain_<name>) */
    name?: string;
    /** true to allow it, or the forced response to store */
    dontAskAgain?: boolean | string;
    /** Handler of a stored OK */
    onOk?: () => void;
    /** Handler of a stored CANCEL */
    onCancel?: () => void;
    /** Handler of a stored YES */
    onYes?: () => void;
    /** Handler of a stored NO */
    onNo?: () => void;
}
/** Parameters collecting promises to wait, or the array of promises itself */
type PromisesParam = {
    promises?: Promise<unknown>[];
} | Promise<unknown>[];
/** Point */
interface Point {
    /** Horizontal position */
    x: number;
    /** Vertical position */
    y: number;
}
/** Size */
interface Size {
    /** Width */
    w: number;
    /** Height */
    h: number;
}
/** Rectangle */
type Rect = Point & Size;
/** Mouse position */
type MousePos = Point;
/**
 * Media sizes: maximal widths in pixels of the responsive breakpoints
 * @enum
 */
declare const MediaSize: {
    /** Mobile */
    readonly XS: 576;
    /** Tablet */
    readonly SM: 768;
    /** Medium */
    readonly MD: 992;
    /** Large */
    readonly LG: 1200;
};
/**
 * UI common tools
 */
declare class UIUtil extends Legacy {
    /**
     * Execute a script in a local scope
     * @param script javascript
     * @param args list of argument names
     * @param vals list of argument values
     * @param scope optional scope (`this` of the script), default window
     * @param async asynchronous call (default false)
     */
    eval(script: string, args?: string[], vals?: unknown[], scope?: object, async?: boolean): unknown;
    /**
     * Random string
     * @param len Length
     * @returns Random string of specified length
     */
    randomString(len: number): string;
    /**
     * Random DOM ID
     * @returns Random unique element id in document
     */
    randomDomId(): string;
    private _domIdSeq;
    /**
     * Unique DOM ID
     * @param id id value to suffix to be unique
     * @returns The id itself if unique in page, otherwise the id with a suffix `id-<max+1>`
     */
    uniqueDomId(id: string): string;
    /**
     * Reset the uniqueDomId() sequence
     */
    resetUniqueDomIds(): void;
    /**
     * Compact a number
     * @param n number
     * @param p toFixed precision digits
     * @returns ex n=37215 p=1 returns 37.2k / n=2398123 p=2 returns 2.40M
     */
    compactNumber(n?: number, p?: number): string;
    /**
     * Test if the service is lost (call HTTP 0)
     */
    isServiceLost(err?: Error | string | MessageFromBack): boolean;
    /**
     * Read a cookie
     * @param name cookie name
     */
    readCookie(name: string): string | null | undefined;
    /**
     * Don't ask again a question
     * @param p question parameters
     * @returns true when a stored response has been applied, a function to store the response, or false
     */
    dontAskAgain(p: DontAskAgainParam): boolean | ((action: string) => void);
    /**
     * Copy a text to clipboard
     * @param text Text to copy
     * @param silent True to hide the toast
     * @example
     * $ui.copyToClipboard(obj.getFieldValue("myObjCode") as string);
     */
    copyToClipboard(text: string, silent?: boolean): UIEngine;
    /**
     * Media sizes (XS=576, SM=768, MD=992, LG=1200), see MediaSize
     */
    readonly MEDIA_SIZE: {
        /** Mobile */
        readonly XS: 576;
        /** Tablet */
        readonly SM: 768;
        /** Medium */
        readonly MD: 992;
        /** Large */
        readonly LG: 1200;
    };
    /**
     * Get the media size
     * @param w viewport width
     * @returns media size
     */
    mediaSize(w: number): 768 | 992 | 1200 | 576;
    /** @ignore */
    _mediaSize: number;
    /**
     * Is the media a mobile ?
     */
    isMediaMobile(): boolean;
    /**
     * Is the media a tablet ?
     */
    isMediaTablet(): boolean;
    /**
     * Is the media a desktop ?
     */
    isMediaDesktop(): boolean;
    /**
     * Open one object definition if granted
     * @param name Object name (Field...)
     * @param id Object id
     * @param btn true to get only a button access
     */
    gotoDefinition(name: string, id: string, btn?: boolean): JQuery<HTMLElement> | null | undefined;
    /**
     * Translate short keys
     * @param keys Ctrl+Shift+Alt+Left...
     */
    keysLabel(keys: string, lang?: string): string;
    /**
     * Set visible field messages and returns other/head messages
     * @param messages Backend messages <code>code:text#level[#field]</code> (or json object)
     * @param obj Optional object to affect message when #field matches
     */
    dispatchMessages(messages?: MessageAny[], obj?: BusinessObject): MessageJSON[] | null;
    /**
     * Concat all backend messages
     * @param r response with message or messages
     */
    concatMessages(r: string | MessageFromBack): MessageAny[];
    /**
     * Find an action in plain or plus actions
     * @param o Object
     * @param name Action name
     * @param list List of actions
     * @param plus List of 'plus' actions
     */
    findAction(o: BusinessObject, name: string, list?: Action[] | null, plus?: Action[] | null): Action | null;
    /**
     * Read a form input file
     * @param file Input file (jQuery, input or file)
     * @param cbk Required callback
     * @param output Base64 (default) | ArrayBuffer | File
     * @param progress Optional progress callback(loaded, total, percent)
     * @param limit optional size limit (Mo) 0:no error or null=MAX_UPLOAD_SIZE
     */
    readFile(file: Container | HTMLInputElement | File, cbk: (file: {
        id?: string;
        name: string;
        mime: string;
        content?: string | ArrayBuffer | null;
        file?: File;
    } | null) => void, output?: string, progress?: null | ((loaded: number, total: number, prct: number) => void), limit?: number | null): UIEngine | undefined;
    /**
     * Get icon from the file name
     * @param name File name
     * @param regular True to get regular icon or solid
     */
    getFileIcon(name: string, regular?: boolean): JQuery<HTMLElement>;
    /**
     * Convert bytes to Image (supports GIF, PNG and JPEG)
     * @param buffer Image as bytes
     * @param onload Optional callback
     * @returns Image
     */
    decodeImage(buffer: ArrayBuffer, onload?: ((this: GlobalEventHandlers, ev: Event) => void) | null): HTMLImageElement | null;
    /**
     * Convert SVG string to Image
     * @param data SVG image string (XML)
     * @returns Image
     */
    decodeSVGImage(data: string, onload?: ((this: GlobalEventHandlers, ev: Event) => void) | null): HTMLImageElement | null;
    /**
     * Get the mouse/touch position <code>\{x,y\}</code> on screen
     * @param e Mouse or touch event
     * @param offset Optional offset <code>\{left,top\}</code> to substract
     */
    mousePos(e: JQuery.Event, offset?: {
        left: number;
        top: number;
    }): MousePos;
    /**
     * Is UI point into the div?
     * @param pos x,y position
     * @param div rectanglet
     */
    isInside(pos: {
        x: number;
        y: number;
    }, div: JQuery): boolean;
    /**
     * Current screen size <code>\{w,h\}</code>
     */
    screenSize: {
        /** Width in px */
        w: number;
        /** Height in px */
        h: number;
    };
    /** Internal: resizing in progress */
    private _resizing;
    /**
     * Resize window handler
     * @param force True to force a full redraw
     */
    resize(force?: boolean): UIEngine;
    /**
     * Append a promise to parameters
     * @param p context parameters with array of promises
     * @param f a promise or a function(resolve, reject)
     * @returns the array of promises
     */
    addPromise(p: PromisesParam | undefined, f: Promise<unknown> | ((ok: (x?: unknown) => void, ko?: (x?: unknown) => void) => void)): Promise<unknown>[] | undefined;
    /**
     * Append a promise to wait for all async images (exclude sized .icon by css)
     * @param p context parameters with array of promises
     * @param ctn images container
     */
    addImagesPromise(p: PromisesParam | undefined, ctn: Container): void;
    /**
     * Wait for all async images (exclude sized .icon by css)
     * @param ctn images container
     * @returns Promise resolved when all images are loaded or not
     */
    waitImagesPromise(ctn: Container): Promise<unknown[]>;
    /**
     * Wait for all promises of parameters
     * @param p context parameters with array of promises
     * @param timeout optional timeout in ms
     * @returns Promise resolved when all contextual promises are settled and removed
     */
    waitPromises(p: PromisesParam, timeout?: number): Promise<unknown>;
    /**
     * Execute a promise with a timeout
     * @param p a promise
     * @param timeout optional timeout in ms
     * @param ex any exception
     * @returns Promise resolved when p is resolved or rejected on timeout
     */
    timeoutPromise(p: Promise<unknown>, timeout?: number, ex?: unknown): Promise<unknown>;
    /** Prefix of the Simplicite CSS variables */
    readonly CSS_VAR_PREFIX = "--simplicite-";
    /**
     * Get value of computed CSS variable
     * @param name Variable name (prefixed or not)
     * @param el Element (default applied to body)
     * @returns Variable value
     */
    getCSSVariable(name: string, el?: HTMLElement): string;
    /**
     * Set value of CSS variable
     * @param name Variable name (prefixed or not)
     * @param el Element (default applied to body)
     * @param val Value (undefined = remove)
     */
    setCSSVariable(name: string, val?: string | undefined, el?: HTMLElement): void;
    /**
     * Theme of the code editor, depending on the light/dark mode.
     * @returns Theme name
     */
    getEditorTheme(): any;
    /** Public ace options from ACE_OPTIONS */
    editorOptions?: KeyObject;
    /** Load Ace options */
    loadOptions(): KeyObject;
}

/**
 * Workflow and activities rendering
 */
declare class UIWorkflow {
    /**
     * Build the process road in the container
     * @param w workflow instance
     */
    road(ctn: Container, w: BusinessProcess, render: RoadRender, isStatic: boolean): JQuery<HTMLElement>;
    /**
     * Build the activity form in the container
     * @param ctn container
     * @param w workflow instance
     * @param af activity file
     * @param p optional parameters
     * @param cbk optional callback
     */
    activity(ctn: Container, w: BusinessProcess, af: ActivityFile, p: ProcessParam, cbk?: Callback): void;
}

interface A11yLevel {
    audit: boolean;
    score: number;
}
/**
 * Accessibility (a11y) mode: disables/adapts the UI (splitter, compact mode,
 * menu trays/metrics...) for a11y compliance. Preference is preserved in
 * localStorage and applied on a full page reload.
 */
declare class A11y {
    private static readonly KEY;
    private static readonly THEME_KEY;
    private static readonly THEME;
    private static overrides?;
    /**
     * Restore a11y mode from local preference into $ui.options.a11y.enabled.
     * Must run before UISplitter.init() and Menu.init(), since both consult
     * A11y.enabled() while building the UI. Called from UIViewer.initMain().
     */
    init(): void;
    /**
     * Is a11y mode currently enabled?
     */
    isEnabled(): boolean;
    /**
     * Get or set a11y mode. Setting it persists to localStorage.
     * @param enable optional to enable/disable
     * @returns true if a11y mode is enabled
     */
    static enabled(enable?: boolean): boolean;
    /**
     * Allows user to toggle a11y mode (config-level switch, distinct from
     * whether it's currently on)
     * @param toggleable optional to enable/disable
     * @returns true if the toggle is available to the user
     */
    static toggleable(toggleable?: boolean): boolean;
    /**
     * a11y preference in localStorage. Not scoped: unlike the splitter,
     * a11y is a personal need rather than a device/scope-specific setting.
     * @param enabled true to enable, false to disable or undefined to get the current preference
     * @returns the current preference or null
     */
    static localPreference(enabled?: boolean): string | null;
    /**
     * Do a11y restrictions apply to this UI element?
     * False when a11y mode is off, or when ACCESSIBILITY_OVERRIDE opts this element out
     * (i.e. the element keeps its standard behaviour despite a11y mode).
     * @param elt element key from the ACCESSIBILITY_OVERRIDE system parameter
     * @returns true if the a11y-specific behaviour should be applied
     */
    static applies(elt: string): boolean;
    /**
     * Store the current theme (to restore it on disable) then apply the high contrast one.
     * The theme is persisted server-side by $ui.setTheme, so the previous one is kept in localStorage.
     */
    private static applyHighContrast;
    /**
     * Set back the theme stored before high contrast was applied
     */
    private static restoreTheme;
    /**
     * Toggle button for accessibility mode. Toggling forces a full reload,
     * since menu structure and splitter mode are both decided at boot time.
     */
    a11yToggle(): JQuery;
}

/** Type of a record change */
type NotifyObjectType = "create" | "update" | "delete";
/** Notification of a record change to refresh the lists and forms */
interface NotifyObject {
    /** Type of change */
    type: NotifyObjectType;
    /** Sender container (not notified) */
    sender: JQuery;
    /** Object name or object */
    object: string | BusinessObject;
    /** Row ID */
    rowId: string;
    /** Record data */
    item?: KeyObject;
}
/** Shortcut */
interface Shortcut {
    /** Shortcut name */
    name: string;
    /** URL */
    url: string;
    /** Translated label */
    label: string;
    /** Tooltip */
    tooltip?: string;
    /** Target of the URL */
    target?: LoadTarget;
    /** Ex "20rem" */
    width?: string;
    /** Ex "20rem" */
    height?: string;
    /** Ex "Alt+C" */
    keys?: string;
    /** Icon name */
    icon?: string;
    /** In the plus menu */
    plus?: boolean;
    /** In the header */
    header?: boolean;
    /** On the home page */
    home?: boolean;
    /** Style on the home page: `CM` medium card, `CL` large card, `AB` action button, `SB` simple button */
    homeStyle?: "CM" | "CL" | "AB" | "SB";
    /** In the sitemap */
    sitemap?: boolean | "true" | "false";
}
/** Shortcuts or callbacks per keys */
interface ShortcutKeys {
    [keys: string]: Shortcut | Callback;
}
/** Keyboard shortcut */
interface ShortcutKey {
    /** Ctrl key */
    ctrl: boolean;
    /** Alt key */
    alt: boolean;
    /** Shift key */
    shift: boolean;
    /** Key */
    key: string;
    /** Shortcut to open */
    shortcut?: Shortcut;
    /** Callback */
    cbk?: (shortcut?: Shortcut) => void;
}
/** Progression status of a long service (see showProgress) */
interface ProgressStatus {
    /** Progression in percent */
    percent: number;
    /** Current step message */
    message: string;
}
/**
 * Main view renderer
 */
declare class UIViewer {
    constructor(tools: Bootstrap5);
    /** Bootstrap tools */
    tools: Bootstrap5;
    /** Work areas splitter */
    splitter: UISplitter;
    /** Accessibility mode */
    a11y: A11y;
    /** ZIP viewer, loaded on demand */
    zip?: ZIP;
    /**
     * Selected tab per view
     */
    _viewTab: KeyObject;
    /**
     * Menu renderer
     */
    readonly menu: Menu;
    /**
     * Widget renderer
     */
    readonly widget: Widget;
    /**
     * Board renderer
     */
    readonly board: Board;
    /**
     * List renderer
     */
    readonly list: List;
    /**
     * Form renderer
     */
    readonly form: Form;
    /**
     * Search renderer
     */
    readonly search: Search;
    /**
     * Update renderer
     */
    readonly update: Update;
    /**
     * Preferences renderer
     */
    readonly prefs: Prefs;
    /**
     * Index search renderer
     */
    readonly index: IndexSearch;
    /**
     * Trays renderer
     */
    readonly tray: UITray;
    /**
     * Tree renderer
     */
    readonly tree: Tree;
    /**
     * Import tool renderer
     */
    readonly importXML: Import;
    /**
     * Workflow renderer
     */
    readonly wkf: UIWorkflow;
    /**
     * Social renderer
     */
    readonly social: Social;
    /**
     * Crosstab renderer
     */
    readonly crosstab: Crosstab;
    /**
     * External object renderer
     */
    readonly external: External;
    /**
     * Merge object renderer
     */
    readonly merge: Merge;
    /**
     * Timesheet object renderer
     */
    readonly timesheet: Timesheet;
    /**
     * Addon bar renderer
     */
    readonly addons: AddonBar;
    /**
     * Color helpers
     */
    readonly color: UIColor;
    /**
     * Get a static image (located in root/images/image)
     * @param name image name
     * @example
     * $view.image("logo.png").appendTo(ctn); // <img> element
     */
    image(name: string): JQuery<HTMLElement>;
    /**
     * Set the window "title - page"
     * @param page optional contextual page name
     * @param title title (default $ui.options.title from WINDOW_TITLE)
     * @example
     * // Browser tab "Orders - My application"
     * $view.setWindowTitle("Orders");
     */
    setWindowTitle(page?: string | null, title?: string | null): void;
    /**
     * Prepare the main page when loaded
     * @param p launch parameters merged with Globals
     */
    initMain(p: KeyObject): void;
    /**
     * Reload UI data: refresh current page and treeviews
     * @example
     * $view.reload();
     */
    reload(): void;
    /**
     * Focus elmeent
     * @param x 'l'ist, 'm'enu, 'n'ext area, 'f'inder or element
     * @example
     * // Focus the menu, then the first list of the page
     * $view.focus("m");
     * $view.focus("l");
     */
    focus(x: string): void;
    /**
     * Change password
     * @example
     * $view.changePassword();
     */
    changePassword(): void;
    /**
     * Turn the container to compact mode
     * @param ctn Container
     * @param enable optional to enable or disable (default toggle the mode)
     * @returns true if compacted
     * @example
     * // Toggle the compact mode of the work area
     * $view.compact(null);
     * $view.compact(ctn, true);
     */
    compact(ctn: AnyContainer, enable?: boolean): boolean;
    /**
     * Zoom changes all relative styles based on font-size relative size (rem)
     * @param p relative number or absolute string percentage value ('100%' = original size = 1rem = 16px)
     * @example
     * $view.zoom("120%");
     * // relative zoom: -10%
     * $view.zoom(-10);
     */
    zoom(p: number | string): void;
    /**
     * Connect as other login
     * @example
     * $view.connectAs();
     */
    connectAs(): void;
    /**
     * Init the multi-apps popup
     * @param b Scopes container with apps
     * @param apps Array of granted scope { icon|logo, label, url, home }
     */
    setApps(b: JQuery, apps: Scope[]): void;
    /**
     * Displays the shortcuts
     * @param list Array of granted shortcut { name, icon, label, url, target, plus, header, home }
     * @param ctn UI container
     * @param opt option to display only 'plus', 'header' xor 'home' shortcuts
     * @param opt.plus display only 'plus' shortcuts
     * @param opt.header display only 'header' shortcuts
     * @param opt.home display only 'home' shortcuts as big buttons
     * @param opt.reset reset container first?
     * @example
     * // Home shortcuts as big buttons in a container
     * $view.shortcuts($grant.shortcuts || [], $("#myShortcuts"), { home: true, reset: true });
     */
    shortcuts(list: Shortcut[], ctn: Container, opt?: {
        plus?: boolean;
        header?: boolean;
        home?: boolean;
        reset?: boolean;
    }): JQuery | undefined;
    /**
     * Toogle bookmark action (star icon)
     * @param ctn container of bookmark action
     * @param obj object
     * @param rowid object row id
     * @param cbk optional callback(checked) on ui.bookmark.toggle
     * @example
     * // Star icon to (un)bookmark the record
     * $view.bookmarkToggle($("#bookmark", ctn), obj, obj.getRowId(), (checked: boolean) => $console.log(checked));
     */
    bookmarkToggle(ctn: Container, obj: BusinessObject, rowid: string, cbk?: (checked: boolean) => void): void;
    /**
     * Language selector
     * @param dflt Default language if not defined
     * @example
     * const lang: string = await $view.langPicker("FRA");
     */
    langPicker(dflt?: string): Promise<string>;
    /**
     * Get simple icon
     * @param icon prefixed icon name: from icon set 'name', from fontawesome solid 'fas/name' or regular 'far/name', bootstrap icon 'bi/name'
     * @param options | class name | size in px
     * @param options.size optional icon size (ex: "1rem")
     * @param options.cls optional icon class name (ex: "icon")
     * @param options.title optional title (default aria-hidden=true)
     * @example
     * // Font Awesome or Bootstrap icons
     * $view.icon("fas/check", { size: "1.5rem", cls: "text-success", title: "Done" }).appendTo(ctn);
     * $view.icon("bi/star", 24).appendTo(ctn);
     */
    icon(icon: string, options?: string | number | {
        size?: string;
        cls?: string;
        title?: string;
    }): JQuery;
    /**
     * Markdown to HTML
     * @param v Markdown text
     * @param cbk text or HTML compiled with marked plugin
     * @example
     * // Rendered markdown with a max height of 10rem
     * $view.markdownToHTML("# Title\nSome **bold** text", 10, (html: JQuery) => $("#doc", ctn).append(html));
     */
    markdownToHTML(v: string, h: number, cbk?: (html: JQuery) => void, label?: string): Promise<void>;
    /**
     * Find the first .content element if exists in container (or #work)
     * @param ctn container, null = #work
     * @returns the first .content element in container, or the container itself if not exist
     * @example
     * const content: JQuery = $view.getContent(); // .content of #work
     */
    getContent(ctn?: AnyContainer): JQuery;
    /**
     * Resolve on a next animation frame, once the optional element is attached to the page and laid out
     * (ex: draw charts that measure their final container), or after the frame paint
     * (ex: show a first part before a long rendering)
     * @param elt Optional element to wait for (none = next frame)
     * @param maxWait Maximum time in ms to wait for the attachment, then resolve anyway (default 1500)
     * @param painted Resolve after the paint of the frame, immediately in a hidden tab (default false = before the paint)
     * @returns Promise resolved once attached (or after maxWait)
     * @example
     * // Draw a chart once its container is in the page
     * const div: JQuery = $("<div/>").appendTo(ctn);
     * await $view.whenAttached(div);
     * drawChart(div);
     * // Show the header before inserting the rows
     * ctn.append(header);
     * await $view.whenAttached(header, undefined, true);
     * insertRows();
     */
    whenAttached(elt?: JQuery | HTMLElement | null, maxWait?: number, painted?: boolean): Promise<void>;
    /**
     * Checks if element is visible = not empty (without any visible field, action, external object, text or view)
     * @param x Element to test
     * @param slide Slide effect?
     * @param apply true to show/hide empty element or false to only check the visibility
     * @returns true if visible = contains something to display
     * @example
     * // Hide the area when all its fields are hidden
     * $view.isVisible($(".area[data-area='2']", ctn), true, true);
     */
    isVisible(x: JQuery, slide?: boolean, apply?: boolean): boolean;
    /**
     * Ensure element to be visible in container
     * @param el the element to show (must have a CSS position fixed or absolute)
     * @param ctn optional container (or default #work zone)
     * @example
     * $view.ensureVisible($("#myPopover"));
     */
    ensureVisible(el: JQuery, ctn?: AnyContainer): void;
    /**
     * Replace the content
     * @param ctn Container
     * @param html Optional HTML content (full page or embedded elements)
     * @param url Or optional URL to load in iframe .frame-wrapper
     * @param cbk Optional callback
     * @param options Optional options
     * @param options.title Title of the iframe (RGAA 2.1), default: label of the current navigation item, else the URL
     * @example
     * // HTML content
     * $view.setContent(ctn, "<h1>Hello</h1>");
     * // URL in an iframe
     * $view.setContent(ctn, null, "https://www.simplicite.io");
     * // URL in an iframe with a title
     * $view.setContent(ctn, null, "https://www.simplicite.io", undefined, { title: "Simplicité website" });
     */
    setContent(ctn: Container, html?: string | null, url?: string, cbk?: Callback, options?: {
        title?: string;
    }): void;
    /**
     * Create the dropup panel of FOOTER_ADDON
     * @param html HTML content to display
     */
    footerAddon(html: string): void;
    /**
     * Create a new navigation in a work area
     */
    createNav(work: JQuery, content: Container): void;
    /**
     * Put a skeleton loader in the container
     * @param ctn container
     * @param type optional type list|form
     * @example
     * // Skeleton while loading a list
     * $view.skeleton(ctn, "list");
     */
    skeleton(ctn?: Container, type?: string): void;
    /**
     * Content displayed while building (async contents): skeleton wave effect and no interaction until the end (see waitForBuilding)
     * @param div content to put in the page
     * @example
     * $view.startBuilding(div);
     * $view.getContent(ctn).empty().append(div);
     * // ... async contents
     * await $view.waitForBuilding(ctn, p, div);
     */
    startBuilding(div: JQuery): JQuery<HTMLElement>;
    /**
     * Wait the end of a content building (async contents and images) then remove the wave effect
     * and give the hand to the user (see startBuilding)
     * @param ctn container of the building content
     * @param p context parameters with array of promises
     * @param div displayed content, null = nothing to release, undefined = search in container (custom display)
     */
    waitForBuilding(ctn: Container, p: PromisesParam, div?: JQuery | null): Promise<void>;
    /**
     * Split the container in 2 parts (any previous part is removed)
     * @example
     * // Split the work area to display a list on the right
     * $view.split(null, "right", { width: "40%", resizable: true, collapsible: true });
     */
    split(ctn: AnyContainer, pos: Position, options: SplitPart): void;
    /**
     * Remove a splitted part
     * @example
     * $view.unsplit("#work");
     */
    unsplit(ctn: string | Container): void;
    /**
     * Resize event on .js-resizable with ui.resize handler
     * @param ctn optional container to resize (default all page)
     * @param w New viewport width
     * @param h New viewport height
     * @param reload true to force a redraw of components
     * @example
     * // Force the redraw of the resizable components
     * $view.resize(null, window.innerWidth, window.innerHeight, true);
     */
    resize(ctn: AnyContainer, w: number, h: number, reload?: boolean): void;
    /**
     * Notification handler
     * @param e Event { type:create|update|delete, object, rowId, item:when known } sent to '.js-notify' elements with 'ui.notify' handler
     * @example
     * // Notify the components (lists, forms...) that a record has changed
     * $view.notify({ type: "update", sender: ctn, object: "MyObject", rowId });
     */
    notify(e: NotifyObject): void;
    /**
     * UI trigger handler
     * @param target selector (ex js-notify)
     * @param event event name (ex ui-notify)
     * @param data trigger data
     * @example
     * $view.trigger(".js-notify", "ui.notify", [{ type: "delete", object: "MyObject", rowId }]);
     */
    trigger(target: string | JQuery, event: string, data: any[]): void;
    /**
     * Get field definition with UI extension
     * @param ctn Parent container where the field is displayed
     * @param obj Business object
     * @param field name or field
     * @param index Optional list index
     * @param silent true to ignore message 'unknown field'
     * @returns The field with field.ui = component implementation of Simplicite.UI.View.UIField
     * @example
     * // In a form hook: field with its UI interface (same as $ui.getUIField)
     * const f: ObjectField = $view.getField(ctn, obj, "myObjCode");
     * f.ui?.updatable(false);
     */
    getField(ctn: AnyContainer, obj?: BusinessObject | null, field?: string | ObjectField, index?: string | null, silent?: boolean): ObjectField;
    /**
     * Get UI extended action
     * @param ctn Container
     * @param obj Business object
     * @param action Name or action metadata
     * @param silent true to ignore message 'unknown action'
     * @returns The action with action.ui = instance of Simplicite.UI.View.UIAction
     * @example
     * $view.getAction(ctn, obj, "MyObjSendOrder")?.ui?.visible(false);
     */
    getAction(ctn: AnyContainer, obj: UIBusinessObject, action: string | Action, silent?: string): Action | undefined;
    /**
     * Get UI extended view
     * @param ctn Container
     * @param obj Business object
     * @param view Name or view metadata
     * @param silent true to ignore message 'unknown view'
     * @returns The view with view.ui = instance of Simplicite.UI.View.UIView
     * @example
     * const v: View | undefined = $view.getView(ctn, obj, "MyObjView");
     */
    getView(ctn: AnyContainer, obj: BusinessObject | null, view: string | View, silent?: boolean): View | undefined;
    /**
     * Get UI extended area
     * @param ctn Container
     * @param obj Business object
     * @param area Name or area metadata
     * @param silent true to ignore message 'unknown area'
     * @returns The area with area.ui = instance of Simplicite.UI.View.UIArea
     * @example
     * $view.getArea(ctn, obj, "MyObjDelivery")?.ui?.visible(false);
     */
    getArea(ctn: AnyContainer, obj: UIBusinessObject, area: string | number | Area, silent?: boolean): Area | undefined;
    /**
     * Show the loading spinner (widget waitdlg)
     * @param ctn optional container (full body if undefined or #work area if null)
     * <ul>
     * <li>explicit element in page</li>
     * <li>undefined: displayed on "body"</li>
     * <li>null: displayed on #work area</li>
     * </ul>
     * @example
     * $view.showLoading(null); // on the work area
     * try { await myLongTask(); }
     * finally { $view.hideLoading(null); }
     */
    showLoading(ctn?: AnyContainer): void;
    /**
     * Hide the loading spinner
     * @param ctn optional container
     * @example
     * $view.hideLoading(null);
     */
    hideLoading(ctn?: AnyContainer): void;
    /**
     * Show a job progression
     * @param ctn optional container (in a dialog if null)
     * @param params parameters
     * @param params.name optional job name (default 'progress')
     * @param params.title optional label
     * @param params.circular true for a circular bar
     * @param params.service required service(fn) to get progression
     * @param params.delay delay of refresh in ms (default 1000)
     * @param params.callback optional callback({percent,message}) during progression
     * @example
     * // Progress dialog polling a back-end service every 2 seconds
     * $view.showProgress(null, {
     * 	title: "Import",
     * 	delay: 2000,
     * 	service: (fn: (r: KeyObject) => void) => $app.getBusinessObject("MyImport").action("MyImpProgress")
     * 		.then((r: KeyObject | string) => fn(JSON.parse(r as string)))
     * });
     */
    showProgress(ctn: JQuery | null, params: {
        name?: string;
        title?: string;
        circular?: boolean;
        service: ((fn: (r: KeyObject) => void) => void);
        delay?: number;
        callback?: (p: ProgressStatus) => void;
    }): void;
    /**
     * ENTER KEY management = focus the next form-group, or call a function on the last input
     * @param ctn container
     * @param fg form-group with a field input
     * @param fn optional function to call after the last input
     */
    fieldEnter(ctn: Container, fg: JQuery, fn: Callback): void;
    /**
     * Init Undo/Redo controls
     * @param ctn Container
     * @param use true|false|'keys'
     */
    undoredo(ctn: Container, use: boolean | string): void;
    /**
     * Modules filtering for designers
     * @param params Options
     * @param params.init Only init the chooser (no display)
     */
    moduleChooser(params?: {
        init?: boolean;
    }): JQuery<HTMLElement>;
    private _lostDelay?;
    private _lostTimer?;
    private _lostDlg?;
    /**
     * Popup when service is lost (no internet or server down)
     */
    serviceLost(): void;
    private readonly lostSVG;
    private readonly waveSVG;
}

/** User of a record (concurrent usage) */
interface UsageUser {
    /** User row ID */
    userId?: string;
    /** User login */
    login?: string;
    /** First name */
    firstname?: string;
    /** Last name */
    lastname?: string;
    /** Avatar image URL */
    image?: string;
    /** Avatar image document */
    picture?: DocumentDB;
    /** Usage ID */
    usageId?: string;
}
/** Application scope (multi-apps) */
interface Scope {
    /** Scope name */
    scope: string;
    /** Icon name */
    icon: string;
    /** Logo URL */
    logo: string;
    /** Translated label */
    label: string;
    /** Home URL */
    url: string;
    /** Unique | multiple | switchable */
    workarea: "1" | "M" | "S";
}
/**
 * Action visibility:
 * - `L`: list
 * - `F`: row item + form
 * - `A`: list + row item + form
 * - `O`: form only
 * - `I`: row item only
 * - `B`: list + form only
 * - `H`: hidden
 */
type ActionType = "L" | "F" | "A" | "O" | "I" | "B" | "H";
/** Button level (style) */
type ActionLevel = "primary" | "secondary" | "default" | "info" | "success" | "warning" | "danger" | "action" | "transition" | "plus" | "icon" | "extend";
/** Button size */
type ActionSize = 'xs' | 'sm' | 'md' | 'lg' | 'icon';
/** Action of an object, a list, a row or a form */
interface Action {
    /** Mandatory name */
    name: string;
    /** Action row ID */
    id?: string;
    /** Visibility type */
    type?: ActionType;
    /** Container of the action */
    container?: Container;
    /** Translated label */
    label?: string;
    /** Show the label with the icon */
    showLabel?: boolean;
    /** Icon name */
    icon?: string;
    /** Translated help */
    help?: string;
    /** Custom action (not a generic one) */
    custom?: boolean;
    /** Executed on the back-end (else pure front URL or binded hook) */
    backend?: boolean;
    /** Action is granted */
    enabled?: boolean;
    /** Action is disabled */
    disabled?: boolean;
    /** In plus button */
    plus?: boolean;
    /** Close dialog on click */
    close?: boolean;
    /** Reload the form when the confirm dialog is canceled */
    reloadOnCancel?: boolean;
    /** Primary button */
    primary?: boolean;
    /** Primary | secondary... */
    level?: ActionLevel;
    /** Additional CSS class(es) */
    style?: string;
    /** Xs, sm... */
    size?: ActionSize;
    /** Background color */
    background?: string;
    /** Text color */
    color?: string;
    /** Background color from the enumeration item */
    enumBackground?: string;
    /** Text color from the enumeration item */
    enumColor?: string;
    /** Visible on form */
    formVisible?: boolean;
    /** Visible on list */
    listVisible?: boolean;
    /** Visible on row item */
    listItemVisible?: boolean;
    /** Count of rows to apply (2 = all rows when none selected) */
    countRows?: boolean;
    /** URL of a front action */
    url?: string;
    /** Target of the URL */
    target?: LoadTarget;
    /** Fields to confirm */
    fields?: ObjectField[];
    /** Parameters to send */
    params?: KeyObject;
    /** Ask a confirmation */
    confirm?: boolean;
    /** Javascript expression to evaluate before confirmation */
    confirmExpr?: string;
    /** HTML template of the confirm dialog */
    confirmUI?: string;
    /** State model transition name */
    transition?: string;
    /** Target state of the transition */
    toState?: string;
    /** Parent object context */
    parent?: ParentObject;
    /** Element of the action */
    element?: Container;
    /** Business object */
    object?: BusinessObject;
    /** Row ID */
    rowId?: string | null;
    /** UI action component */
    ui?: UIAction;
    /** Moved in template */
    moved?: boolean;
    /** Related DOM button */
    button?: JQuery;
    /** Binded click */
    callback?: ActionHandler | JQueryHandler;
}
/** Action of a state model transition */
type Transition = Action & {
    /** Background color of the target state */
    enumBackground?: string;
    /** Text color of the target state */
    enumColor?: string;
};
/** Group of actions in a dropdown */
interface ActionGroup {
    /** Group name */
    name: string;
    /** Icon name */
    icon?: string;
    /** Translated label */
    label: string;
    /** Show the label with the icon */
    showLabel?: boolean;
    /** Action names of the group */
    actions?: string[];
}
/** Where to open a new tab: a tab or a split position */
type NewTabPosition = "tab" | Position;
/**
 * Generic Action handler
 */
type ActionHandler = (action: Action, obj: UIBusinessObject, rowid?: string | null) => void;
/**
 * Generic action handlers binded per action name
 */
interface ActionHandlers {
    /** Handlers are enabled */
    enabled: boolean;
    /** List of handlers */
    handlers?: ActionHandler[];
}
/** Google parameters */
interface GoogleParam {
    /** Google API key */
    GOOGLE_API_KEY: string;
}
/** Theme palette */
interface Palette {
    /** Palette name */
    name?: string;
    /** Header */
    primary?: string;
    /** Title */
    secondary?: string;
    /** Background */
    base?: string;
    /** Text */
    text?: string;
    /** Accent */
    accent?: string;
}
/** Theme */
interface Theme {
    /** Theme row ID */
    id: string;
    /** Theme name */
    name: string;
    /** Base theme */
    base: 'light' | 'dark';
    /** Theme palette */
    palette?: Palette;
    /** Text font */
    font?: Font;
    /** Monospace font */
    monospaceFont?: Font;
}
/** Developer options */
interface DevOptions {
    /** ES version of JSHint */
    jshintESVersion: number;
    /** URL of the Javadoc */
    javadocLocation: string;
    /** URL of the JSDoc */
    jsdocLocation: string;
    /** Language Server Protocol options */
    LSP?: {
        /** LSP is enabled */
        enabled?: boolean;
        /** LSP is initialized */
        isInitialized?: boolean;
        /** LSP client */
        languageClient?: any;
        /** Delay before writing the file */
        writeFileDelay: number;
        /** Active session */
        activeSession: string;
        /** LSP server */
        server: null | {
            /** Server URL */
            url: string;
            /** Server module loader */
            module: () => Promise<KeyObject>;
            /** Language mode */
            modes: "java";
            /** Connection type */
            type: "socket";
            /** Web socket */
            socket: WebSocket;
        };
        /** Snippets enabled */
        snippetsEnabled: boolean;
        /** LSP state */
        state: {
            /** State title */
            title: "off";
            /** Update the state title */
            update: (title: string) => void;
        };
    };
}
/**
 * Simplicit&eacute; user's grant
 */
declare class Grant {
    /** Session */
    app: Session;
    /** Application version */
    version?: string;
    /** Platform version */
    sysversion?: string;
    /** Platform build date */
    sysversiondate?: string;
    /** Application title */
    title?: string;
    /** User login */
    login: string;
    /** User ID */
    userid: string;
    /** Email address */
    email?: string;
    /** First name */
    firstname?: string;
    /** Last name */
    lastname?: string;
    /** Picture */
    picture?: DocumentDB;
    /** User filters ID */
    filterId?: string;
    /** Login of the user connected as another user */
    connectAs?: string;
    /** Allow to change user */
    changeUser?: boolean;
    /** Allow to change password */
    changePwd?: boolean;
    /** Granted applications (scopes) */
    apps?: Scope[];
    /** Current scope name */
    scopeName?: string;
    /** Current scope */
    scope?: Scope;
    /** Home page */
    home?: string;
    /** Current disposition */
    disposition?: string;
    /** Current icons set */
    iconset?: string;
    /** Current theme */
    theme?: Theme;
    /** Granted themes in scope */
    themes?: Theme[];
    /** Colored themes for designer only */
    allThemes?: Theme[];
    /** Accessibility mode */
    a11y?: boolean;
    /** Language */
    lang: string;
    /** Preferred language */
    langpref?: string;
    /** All languages */
    langs?: {
        /** Language code (ENU, FRA...) */
        lang: string;
        /** Language label */
        label: string;
    }[];
    /** Date format */
    dateformat: string;
    /** UTC offset */
    utc?: string;
    /** Timezone */
    usertz?: boolean;
    /** Number format */
    numformat?: FieldNumFormat;
    /** Font */
    font?: string;
    /** Styles */
    styles?: boolean;
    /** Monitoring access */
    monitoring?: boolean;
    /** Minimum rows per page */
    minrows?: number;
    /** Maximum rows per page */
    maxrows?: number;
    /** Show the object About dialog */
    objectAbout?: boolean;
    /** Use the document preview */
    useDocPreview?: boolean;
    /** Use the HTML editor */
    htmleditor?: boolean;
    /** Code editor theme in light mode */
    codeEditorThemeLight?: string;
    /** Code editor theme in dark mode */
    codeEditorThemeDark?: string;
    /** Shortcuts preferences (`SHORTCUT_PREFS`) */
    shortcutPrefs?: KeyObject;
    /** Left menu collapsed */
    menuCollapsed?: boolean;
    /** Poi.. */
    libs?: {
        [key: string]: boolean;
    };
    /** User responsibilities */
    responsibilities?: string[];
    /** Available import adapters */
    adapters?: KeyObject[];
    /** Granted objects */
    objects?: KeyObject;
    /** Shortcuts */
    shortcuts?: Shortcut[];
    /** Main menu */
    menu?: MainMenu;
    /** System parameters */
    sysparams: KeyObject;
    /** Translated texts */
    texts?: KeyObject;
    /** Bookmarks */
    bookmarks?: Bookmarks;
    /** Dashboards */
    dashboard?: object;
    /** Guides */
    guides?: KeyObject;
    /** Resources location */
    resources?: string;
    /** Google parameters */
    google?: GoogleParam;
    /** Developer options */
    dev?: DevOptions;
    /**
     * Constructor
     * @param app Ajax services
     */
    constructor(app: Session);
    /**
     * Init
     * @param grant User rights meta-data
     */
    init(grant: KeyObject): void;
    /**
     * Get user ID
     */
    getUserID(): string;
    /**
     * Get user login
     */
    getLogin(): string;
    /**
     * Get user language
     */
    getLang(): string;
    /**
     * Get user email
     */
    getEmail(): string;
    /**
     * Get user first name
     */
    getFirstName(): string;
    /**
     * Get user last name
     */
    getLastName(): string;
    /**
     * Get user full name
     */
    getFullName(): string;
    /**
     * Check if user has responsibility on specified group
     * @param group Group name
     * @example
     * if ($grant.hasResponsibility("MY_GROUP")) {
     * 	// ...
     * }
     */
    hasResponsibility(group: string): boolean;
    /**
     * Is user an ADMIN or a DESIGNER ?
     */
    isAdmin(): boolean;
    /**
     * Get a session parameter from server-side
     * @param name Parameter name
     * @example
     * const value: string = await $grant.getParameter("MY_SESSION_PARAM");
     */
    getParameter(name: string): Promise<string>;
    /**
     * Set a session parameter to server-side
     * @param name Parameter name
     * @param value Parameter value
     */
    setParameter(name: string, value: string): Promise<string>;
    /**
     * Get text alias (constraint usage)
     * @param code text code
     * @param plural look for the plural label
     */
    getText(code: string, plural?: boolean): string;
    /**
     * Get text alias (constraint usage)
     * @param code text code
     * @param plural look for the plural label
     */
    T(code: string, plural?: boolean): string;
    /**
     * Get object wrapper
     * @param inst instance name
     * @param name object name
     */
    getObject(inst: string, name: string): BusinessObject;
    /**
     * Get main object wrapper
     * @param obj object name
     */
    getMainObject(obj: string): BusinessObject;
    /**
     * Get home object wrapper
     * @param obj object name
     */
    getHomeObject(obj: string): BusinessObject;
    /**
     * Get temporary object wrapper
     * @param obj object name
     */
    getTmpObject(obj: string): BusinessObject;
    /**
     * Get panel wrapper
     * @param obj object name
     * @param fk optional foreign-key name
     */
    getPanelObject(obj: string, fk: string): BusinessObject;
    /**
     * Get merge wrapper
     * @param obj object name
     */
    getMergeObject(obj: string): BusinessObject;
    /**
     * Get merge panel wrapper
     * @param obj object name
     * @param fk optional foreign-key name
     */
    getMergePanelObject(obj: string, fk: string): BusinessObject;
    /**
     * Get reference object wrapper
     * @param obj object name
     */
    getRefObject(obj: string): BusinessObject;
    /**
     * Get datamap object wrapper
     * @param obj object name
     */
    getDataMapObject(obj: string): BusinessObject;
    /**
     * Get object label
     * @param name object or name
     */
    objectLabel(name: string | BusinessObject): string;
    /**
     * JS class for UI usage
     * @param name Object name
     */
    getUIObjectClass(name: string): typeof UIBusinessObject;
    /**
     * JS class for UI usage
     * @param name Object name
     * @param js Class script
     */
    setUIObjectClass(name: string, js: string): void;
    /**
     * Check access to object
     * @param name object or name
     * @param prop optional property to check 'c'=create 'u'=update 'd'=delete 'i'=indexable
     */
    checkAccess(name: string | BusinessObject, prop?: string): boolean;
    /**
     * Can access/read object
     * @param name object or name
     * @example
     * if ($grant.accessObject("MyObject"))
     * 	$ui.displayList(null, "MyObject");
     */
    accessObject(name: string | BusinessObject): boolean;
    /**
     * Add access/read object
     * @param name object or name
     */
    addAccessObject(name: string | BusinessObject): void;
    /**
     * Can create object
     * @param name object or name
     * @example
     * if ($grant.accessCreate("MyObject"))
     * 	$ui.displayForm(null, "MyObject", $app.DEFAULT_ROW_ID, { nav: "add" });
     */
    accessCreate(name: string | BusinessObject): boolean;
    /**
     * Can update object
     * @param name object or name
     * @example
     * const editable: boolean = $grant.accessUpdate("MyObject");
     */
    accessUpdate(name: string | BusinessObject): boolean;
    /**
     * Can delete object
     * @param name object or name
     */
    accessDelete(name: string | BusinessObject): boolean;
    /**
     * Get filtered objects on index search
     */
    getIndexFilteredObjects(cbk: (list: string[]) => void): void;
    /**
     * Set filtered objects on index search
     */
    setIndexFilteredObjects(list: string[], cbk: Callback): void;
}

/** Document stored in database (document or image field value) */
interface DocumentDB {
    /** Document ID */
    docId: string;
    /** DocId alias */
    id?: string;
    /** Row ID of the record */
    rowId: string;
    /** RowId alias */
    rowid?: string;
    /** Field name */
    field: string;
    /** Object name */
    object: string;
    /** File name */
    name?: string;
    /** MIME type */
    mime?: string;
    /** Base64 */
    content?: string;
    /** Or textual content */
    text?: string;
    /** Or file to upload */
    file?: File;
    /** Document has been deleted */
    deleted?: boolean;
    /** Document is being loaded */
    loading?: boolean;
    /** Image source URL */
    src?: string;
    /** Alt from DB */
    alt?: string;
    /** Alt to update */
    newAlt?: string;
    /** Long description from DB */
    longDesc?: string;
    /** Long description to update */
    newLongDesc?: string;
    /** Base64 thumbnail of an image */
    thumbnail?: string;
}
/** Item of an enumeration */
interface EnumItem {
    /** Code */
    code: string;
    /** Translated value */
    value: string;
    /** Optional label */
    label?: string;
    /** Hide the label (icon only) */
    hideLabel?: boolean;
    /** Disabled item */
    disabled?: boolean;
    /** Enabled item */
    enabled?: boolean;
    /** State model transition to reach this item */
    transition?: string;
    /** Icon name */
    icon?: string;
    /** Display as a tag */
    tag?: boolean;
    /** Background color */
    bgcolor?: string;
    /** Text color */
    color?: string;
}
/** Field value: text, number, boolean, enumeration codes, documents or meta-object */
type FieldValue = null | string | string[] | number | boolean | MetaObject | DocumentDB | DocumentDB[];
/** Search filter value */
type FieldFilter = string | number | boolean | string[];
/** Display mode of a field */
type FieldDisplay = '' | 'full' | 'label' | 'input' | 'preview' | 'image' | 'value' | 'help';
/** Case of a text field: `U` upper, `L` lower, `C` capitalize */
type FieldCase = "U" | "L" | "C";
/** Fixed search filter: `read` = read only, `hide` = hidden */
type FieldSearchFixed = "read" | "hide";
/** Link map of a reference field: filter the `target` field of the referenced object with a `host` field value or a fixed `value` */
interface FieldLinkMap {
    /** Filtered field of the referenced object */
    target: string;
    /** Field of the host object providing the filter value */
    host: string;
    /** Fixed filter value when no host field */
    value: string;
}
/**
 * Field number format
 * - SC = space as thousand separator, dot as decimal separator
 * - DC = dot as thousand separator, comma as decimal separator
 * - CD = comma as thousand separator, dot as decimal separator
 */
type FieldNumFormat = "SC" | "DC" | "CD";
/** Link to the referenced record */
interface FollowLink {
    /** Referenced object name */
    object: string;
    /** Referenced row ID */
    rowId: string;
    /** Link is enabled */
    enabled?: boolean;
}
/** Creation of a referenced record */
interface CreateLink {
    /** Referenced object name */
    object: string;
    /** Creation is enabled */
    enabled?: boolean;
}
/** Rendering metrics of a field */
interface FieldMetrics {
    /** Minimum value */
    min?: number;
    /** Maximum value */
    max?: number;
    /** Step between values */
    step?: number;
    /** Width in form */
    formWidth?: number;
    /** Height in form */
    formHeight?: number;
    /** Width in list */
    listWidth?: number;
    /** Height in list */
    listHeight?: number;
}
/** Order of null values in a sorted list */
type FieldOrderNulls = null | "first" | "last";
/**
 * Simplicit&eacute; field
 */
declare class ObjectField {
    /** Session */
    app: Session;
    /** Business object of the field */
    object?: BusinessObject;
    /** Field row ID */
    id?: string;
    /** Field name */
    name: string;
    /** Field type (one of `Simplicite.Ajax.TYPE_*` constants) */
    type: number;
    /** Field length */
    length: number;
    /** Field precision (decimals) */
    precision: number;
    /** Object name the field is inherited from */
    inheritedFrom?: string;
    /** Database column */
    column?: string;
    /** Language */
    lang: string;
    /** Translated label */
    label: string;
    /** Translated short label */
    shortlabel?: string;
    /** Translated help */
    help?: string;
    /** Copy to clipboard button */
    clipboard?: boolean;
    /** Help in list header */
    helplist?: string;
    /** Tooltip */
    tooltip?: string;
    /** Placeholder */
    placeholder?: string;
    /** Right to left text */
    rightToLeft?: boolean;
    /** Text case */
    case?: FieldCase;
    /** Accessibility compliance: `NA`, `C` compliant, `NC` non compliant, `PC` partially compliant, `NE` not evaluated */
    compliance?: "NA" | "C" | "NC" | "PC" | "NE";
    /** Hint about the accessibility compliance */
    complianceHint?: string;
    /** Regular expression to validate the value */
    regexp?: string;
    /** Message when the regular expression does not match */
    regexpmsg?: string;
    /** Calculated expression */
    calcExpr?: string;
    /** Date format */
    dateformat?: string;
    /** UTC offset */
    utc?: string;
    /** Date units */
    dateUnits?: {
        /** Unit code: `d` day, `dw` day without weekend, `w` week, `m` month, `y` year */
        u: string;
        /** Unit text code */
        t: string;
    }[];
    /** Time units */
    timeUnits?: {
        /** Unit code: `s` second, `mi` minute, `h` hour */
        u: string;
        /** Unit text code */
        t: string;
    }[];
    /** Number format */
    numformat?: FieldNumFormat;
    /** Big decimal value */
    bigdec?: string;
    /** Rendering metrics */
    metrics?: FieldMetrics;
    /** Label of the true value */
    yes?: string;
    /** Label of the false value */
    no?: string;
    /** Code editor modes by rendering */
    modes?: KeyObject;
    /** Accepted file types */
    fileAccept?: string | string[];
    /** Minimum number of documents */
    docmin?: number;
    /** Maximum number of documents */
    docmax?: number;
    /** Preview the document */
    preview?: boolean;
    /** Default value */
    defaultValue?: string;
    /** CSS class(es) */
    style?: string;
    /** Icon name */
    icon?: string | null;
    /** Visibility (one of `Simplicite.Ajax.VIS_*` constants) */
    visible?: number;
    /** Default visibility */
    visibleDefault?: null;
    /** Field is updatable */
    updatable: boolean;
    /** Default updatability */
    updatableDefault?: number;
    /** Bulk update allowed */
    updateAll?: boolean;
    /** Field is required */
    required: boolean;
    /** Default required flag */
    requiredDefault?: boolean;
    /** User key */
    key: boolean;
    /** Search mode (one of `Simplicite.Ajax.SEARCH_*` constants) */
    searchable?: number;
    /** Required search filter */
    searchReq?: number;
    /** Order in the search form */
    searchOrder?: number;
    /** Fixed search filter */
    searchFixed?: FieldSearchFixed;
    /** Rendering code */
    rendering?: string;
    /** Specific settings of the rendering (ex: Quill options) */
    settings?: KeyObject;
    /** Editable cell in list */
    editCell: boolean;
    /** Auto-completion */
    completion: boolean;
    /** Is extended in form */
    extended: boolean;
    /** Is extended in list */
    extList?: boolean;
    /** Area number (0 = technical field) */
    area: number;
    /** Area row ID */
    areaId?: string;
    /** Sort mode (`0` = not sortable) */
    sort?: string;
    /** Order rank in list, negative = descendant order */
    order?: number;
    /** Nulls 'first' or 'last' in list */
    nulls?: FieldOrderNulls;
    /** List can be used with group-by */
    canGroupBy?: boolean;
    /** Name of the list of values */
    listOfValuesName?: string;
    /** Items of the list of values */
    listOfValues?: EnumItem[];
    /** Label of the empty item */
    listDefaultLabel?: string;
    /** Select all/none buttons on a multi-enumeration */
    listOfValueWithAllButtons?: boolean;
    /** Linked lists: fields of other objects filtered by this value */
    linkedFields?: {
        /** Object name */
        object: string;
        /** Field name */
        field: string;
    }[];
    /** Multi-document field */
    docmulti?: boolean;
    /** Related start-date field of end-date field */
    startDate?: string;
    /** Auto-select the single completion item */
    completionAuto?: boolean;
    /** Speech recognition */
    speechRecognition?: boolean;
    /** Speech synthesis */
    speechSynthesis?: boolean;
    /** Related action in confirm dialog */
    inAction?: Action;
    /** Related external object in widget settings */
    inExternal?: ExternalObject;
    /** Referenced field? */
    ref?: boolean;
    /** Foreign-key? */
    refId?: boolean;
    /** Foreign-key name */
    refName?: string;
    /** Referenced field name */
    refField?: string;
    /** Ref object */
    refObject?: string;
    /** Ref user key label */
    refUserKey?: string;
    /** User key of the referenced record */
    foreignUserKey?: string;
    /** Meta-objects that can be referenced */
    refMetaObjects?: {
        /** Object name */
        name: string;
        /** Object label */
        label: string;
    }[];
    /** Object field row_id */
    obfId?: string;
    /** Data map index */
    datamap?: number;
    /** Link maps */
    linkDataMap?: FieldLinkMap[];
    /** Creation of a referenced record */
    createLink?: CreateLink;
    /** Link to the referenced record */
    followLink?: FollowLink;
    /** Current field value (server format) */
    v: FieldValue;
    /** Old value = backend value */
    oldv: FieldValue;
    /** Field message to display */
    m?: MessageAny;
    /** UI rendering */
    ui?: UIField;
    /** If moved in the template/area */
    moved?: boolean;
    /** Column <th> id */
    _thId?: string;
    /** Optional transition name */
    _tran?: string;
    /** Input field of the foreign key to redraw */
    _refInputField?: ObjectField;
    /** Ace params */
    _editor?: KeyObject;
    /** Ace params for long string */
    _ace?: KeyObject;
    /** Grid params */
    _grid?: GridEditorParam;
    /** For timesheet from default value */
    periodMax?: number;
    /** Quill params */
    _quillParams?: KeyHash<QuillOptions>;
    /**
     * Constructor
     * @param app Ajax services
     * @param field Field metadata
     * @param obj Optional related business object
     */
    constructor(app: Session, field: ObjectField, obj?: BusinessObject);
    /**
     * Get label of field type
     * @param type optional type (default this type)
     * @param cc optional Camel case (default lower case)
     */
    typeLabel(type?: number, cc?: boolean): string;
    /**
     * Eval formula when value starts with the equals sign "=3*5+2", ignore syntax error
     */
    evalCalc(v: string): string;
    /**
     * Convert the date to UI format
     * @param v value YYYY-MM-DD
     * @param df user date format
     * @param r optional rendering Y|M|D|H|I|S
     */
    dateToUI(v?: string | null, df?: string, r?: string): string;
    /**
     * Convert the time to UI format
     * @param v value HH:MI:SS
     * @param r optional rendering Y|M|D|H|I|S
     */
    timeToUI(v: string, r?: string): string;
    /**
     * Filter in user language
     * @param flt filter
     * @param dmin optional date min filter
     * @param dmax optional date max filter
     * @param g grant
     */
    filterLabel(flt: string, dmin: string, dmax: string, g: Grant): string;
    /**
     * Convert the datetime to UI format
     * @param v value YYYY-MM-DD HH:MI:SS or ISO-8601
     * @param df datetime format DD/MM/YYYY HH:MI:SS or MM/DD/YYYY HH:MI:SS
     * @param r optional rendering Y|M|D|H|I|S
     */
    datetimeToUI(v: string, df?: string, r?: string): string;
    /**
     * Format a float "1234567.8" => FRA or SC: "1 234 567,80000" - ENU or CD: "1,234,567.80000" - DC: "1.234.567,80000"
     * @param v value "1234567.8"
     * @param lang user language (FRA, ENU) or number format (SC, DC, CD)
     * @param prec precision (ex: 5)
     * @param num simple number = no thousand separator
     */
    formatFloat(v: string | number, lang?: string | FieldNumFormat, prec?: number, num?: boolean): string;
    /**
     * Convert UI date to service format YYYY-MM-DD
     * @param v date from UI format
     * @param df user date format
     */
    toServiceDate(v: string, df?: string): string;
    /**
     * Convert UI time to service format HH:MM:SS
     * @param v time from UI rendering
     */
    toServiceTime(v: string): string;
    /**
     * Convert service date to ISO-8601 when user has a specific timezone (exclude timestamp fields)
     * @param v datetime YYYY-MM-DD HH:MM:SS
     */
    tz(v: string): string;
    /**
     * Convert UI datetime to service format YYYY-MM-DD HH:MI:SS (or ISO-8601 with user time zone)
     * @param v datetime from UI format
     * @param df user date format
     */
    toServiceDatetime(v: string, df?: string): string;
    /**
     * Convert UI float to service format (as string to keep decimal precision)
     * FRA or SC: "1 234 567,80808080808" - ENU or CD: "1,234,567.80808080808" - DC 1.234.567,80808080808 => "1234567.80808080808"
     * @param v UI value
     * @param lang user language (FRA, ENU) or number format (SC, CD, DC)
     */
    toServiceFloat(v: string, lang?: string): string | null;
    /**
     * Convert the date value to javascript Date
     * @param v service date YYYY-MM-DD or datetime YYYY-MM-DD HH:MI:SS
     */
    getDate(v: string): Date | null;
    /**
     * Convert javascript Date
     * @param dt Date
     * @deprecated use convertDate
     */
    setDate(dt: Date): string | undefined;
    /**
     * Convert javascript Date to service value
     * @param dt Date
     * @returns YYYY-MM-DD or YYYY-MM-DD HH:MI:SS when field is a datetime
     */
    convertDate(dt: Date): string | undefined;
    /**
     * Test if YYYY-MM-DD exists ?
     * @param v date
     */
    isDate(v: string): boolean;
    /**
     * Test if YYYY-MM-DD HH:MI:SS exists ?
     * @param v datetime
     */
    isDatetime(v: string): boolean;
    /**
     * Value in user language (enum label, boolean as yes/no, format date integer and float with the rendering)
     * @param v Backend value to display in user language (default is current value)
     * @param rendering true to apply the rendering
     * @returns the text to display, or the texts of a multiple value (empty string when no value)
     */
    displayValue(v?: FieldValue, rendering?: boolean): string | string[];
    /**
     * Raw value as text(s) to display
     * @param v Value
     * @returns the text, or the texts of an array
     */
    private static toDisplay;
    /**
     * displayValue alias
     */
    getDisplayValue: (v?: FieldValue, rendering?: boolean) => string | string[];
    /**
     * Convert displayed value to service format
     * @param v Front-end value
     */
    toService(v: string): string | number | boolean | null;
    /**
     * Get or set the service value
     * @param v Optional service value to set
     * @param old Copy value into old value?
     */
    value(v?: FieldValue, old?: boolean): FieldValue;
    /**
     * Get the service value
     */
    getValue(): FieldValue;
    /**
     * Set the service value
     * @param v Optional service value to set
     * @param old Copy value into old value?
     */
    setValue(v: FieldValue, old?: boolean): void;
    /**
     * Get or set the old service value
     * @param v Optional value to set
     */
    oldvalue(v?: FieldValue): FieldValue;
    /**
     * Get the service old value
     */
    getOldValue(): FieldValue;
    /**
     * Set the service old value
     * @param v Optional service value to set
     */
    setOldValue(v: FieldValue): void;
    /**
     * Get value as percentage value
     * @param v optional value
     * @param t optional type (Simplicite.TYPE_INT, Simplicite.TYPE_FLOAT or Simplicite.TYPE_BIGDECIMAL)
     */
    percentage(v?: string, t?: number): number;
    /**
     * Compare old and current value
     */
    hasChanged(): boolean;
    /**
     * UI message to display on field
     * @param msg Optional message to set
     */
    message(msg?: MessageAny): MessageAny | undefined;
    /**
     * Test if value is empty (or null/undefined, or empty array or not a number)
     */
    isEmpty(): boolean;
    /**
     * Test if value is true or equals to "1"
     */
    isTrue(): boolean;
    /**
     * Test if value or multi-enum contains a code
     * @param code list code
     */
    contains(code: string): boolean;
    /**
     * Test if the field is visible on list
     * @param obj optional object to test if foreign-key is also visible
     */
    isVisibleOnList(obj?: BusinessObject | null): boolean;
    /**
     * Test if the field is visible on form
     * @param obj optional object to test if foreign-key is also visible
     */
    isVisibleOnForm(obj?: BusinessObject | null): boolean;
    /**
     * Test if the field is hidden
     * @param obj optional object to test if foreign-key is also visible
     */
    isHidden(obj?: BusinessObject): boolean;
    /**
     * Test if the field is forbidden
     */
    isForbidden(): boolean;
    /**
     * Change visibility
     * @param vis true=both, false=hidden, or Simplicite.VIS_BOTH | VIS_HIDDEN | VIS_FORM | VIS_LIST
     */
    setVisible(vis: boolean | number): void;
    /**
     * Set the field updatable
     * @param upd updatable ? true/false or Simplicite.UPD_READ_ONLY|ALWAYS|FORM_ONLY|LIST_ONLY
     */
    setUpdatable(upd: boolean | number): void;
    /**
     * Test if the field is updatable
     */
    isUpdatable(): boolean;
    /**
     * isUpdatable alias
     */
    isUpdatableOnForm(): boolean;
    /**
     * isUpdatable alias
     */
    isUpdatableOnList(): boolean;
    /**
     * Is the field a timestamp (created_by, created_dt, updated_by or updated_dt)
     */
    isTimestamp(): boolean;
    /**
     * Is a document or image?
     */
    isFile(): boolean;
    /**
     * Is a document?
     */
    isDoc(): boolean;
    /**
     * Is an image?
     */
    isImage(): boolean;
    /**
     * Test if the field is required
     * @param obj optional object to test if foreign-key is also required
     */
    isRequired(obj?: BusinessObject | null): boolean;
    /**
     * Is a functional Id?
     */
    isFunctId(): boolean;
    /**
     * Is a foreign key? (reference field belonging to object)
     */
    isForeignKey(): boolean;
    /**
     * Referenced/Belongs to other object?
     */
    isReferenced(): boolean;
    /**
     * Search the list code of a translated value
     */
    getCodeFromValue(v: string): string | null;
    /**
     * Get the list item by code (or value)
     * @param c search by code
     * @param v or search by value if c is null
     */
    getEnumItem(c?: string | null, v?: string | null): EnumItem | undefined;
    /**
     * Field label in user language
     */
    getDisplay(): string;
    /**
     * Apply a function to all referenced fields
     * @param obj Object
     * @param fn function to apply to all referenced fields
     */
    applyToReferences(obj: BusinessObject, fn: (f: ObjectField) => void): void;
    /**
     * Is the field filtered?
     * @param v optional value to test (default use current object filter)
     */
    isFiltered(v?: string): boolean;
    /**
     * Is the filter an expression?
     * @param v optional value to test (default use current object filter)
     * @returns true if the filter is an expression
     */
    isFilterExpr(v?: string): boolean;
    /**
     * Convert UI wildcard filter to service LIKE pattern
     * @param s UI filter
     */
    static convertWildcardToService(s: string | null): string;
    /**
     * Convert service LIKE pattern to UI wildcard filter
     * @param s Service filter
     */
    static convertWildcardToUI(s: string | null): string;
}

/** User who acted on a record */
declare type TrayActor = {
    /** Login */
    login: string;
    /** First name */
    firstname?: string;
    /** Last name */
    lastname?: string;
    /** Avatar URL */
    avatar?: string;
    /** Picture */
    picture?: DocumentDB;
};
/** Card of a tray (kanban) */
declare type TrayCard = {
    /** Object name */
    object: string;
    /** Row ID */
    rowid: string;
    /** Label */
    label: string;
    /** Icon name */
    icon: string;
    /** Thumbnail URL */
    thumbnail?: string;
    /** Counter */
    social: number;
    /** Actors of the record */
    actors: TrayActor[];
};
/** Column of a tray (one state of the status field) */
declare type TrayColumn = {
    /** Column name */
    name: string;
    /** Column title */
    title: string;
    /** Actions of the column */
    actions: Action[];
    /** Business object */
    object: BusinessObject;
    /** Status field name */
    field?: string;
    /** State of the column */
    status: EnumItem;
    /** Cards */
    items: TrayCard[];
    /** Page index */
    page: number;
    /** Max page index */
    maxpage: number;
    /** Count of records */
    count: number;
};
/**
 * Tray controller
 */
declare class Tray {
    /**
     * Display a tray based on a state-model
     * @param ctn Container
     * @param obj Business object or name
     * @param options Optional
     * @param cbk Optional callback
     */
    displayStateModel(ctn: Container, obj: BusinessObject, options?: KeyObject, cbk?: Callback): this;
    /**
     * Display a tray based on a enum field
     * @param ctn Container
     * @param object Business object or name
     * @param enumField Optional enum field (default = status field)
     * @param options Optional
     * @param cbk Optional callback
     */
    display(ctn: Container, object: string | BusinessObject, enumField?: string, options?: KeyObject, cbk?: Callback): this;
    /**
     * Manage the drag & drop
     */
    dragDrop(ctn: Container, p: KeyObject): this;
}

/** Temporary pillbox of a N,N relationship during parent creation or copy */
interface TempPillbox {
    /** Linked object */
    object: BusinessObject;
    /** Row ID of the linked record */
    id: string;
    /** Label of the linked record */
    label: string;
    /** Parent object */
    parent: ParentObject;
    /** Foreign key to the linked object */
    childfk: string;
    /** Create the N,N record when the parent is saved */
    create: (o: BusinessObject, field: string, pid: string, child: string, id: string) => Promise<KeyObject>;
}
/** Temporary pillboxes per link */
type TempPillboxes = KeyHash<TempPillbox[]>;
/**
 * UI rendering, part of the UI engine `$ui` (see UIEngine): references: object selection, pillboxes, referenced objects, data maps, associations, merge
 */
declare class UIRenderReference {
    /**
     * Object picker: default open a popup to select object(s) (used by pillbox, modeler, associate and merge)
     * @param ctn Parent container
     * @param object Object name or business object
     * @param options List additive options <code>\{ context, filters, parent, minified, layout... \}</code>, with optional keys:
     * `selectRows` (true to allow multiple selections),
     * `selectedIds` (optional row Ids to pre-select),
     * `highlightIds` (optional row Ids to highlight, no pre-select, or function)
     * @param cbk Callback(obj, id or array of ids) called on selection
     * @example
     * // Pick several records in a popup
     * $ui.selectObject(null, "MyProduct", { selectRows: true, filters: { prdActive: true } }, (o: BusinessObject, ids?: string | string[]) => {
     * 	$console.log("selected", ids);
     * });
     */
    selectObject(ctn: AnyContainer, object: string | BusinessObject, options: KeyObject, cbk: (obj: BusinessObject, id?: string | string[]) => void): Promise<void>;
    /**
     * Display references in a pillbox control
     * @param ctn Container
     * @param o N,N object
     * @param params Reference data, with optional keys:
     * `parent` (parent object `{ name, inst, field, rowId, object }`),
     * `link` (link metadata with child name and child foreign-key),
     * `read` (read only?), `title` (optional link title, empty = no title)
     * @example
     * // Pillbox of the N,N link MyObjTag in the form
     * const tags: UIBusinessObject = $app.getBusinessObject("MyObjTag", "pillbox_MyObjTag");
     * $ui.displayReferencePillbox($("#tags", ctn), tags, {
     * 	parent: { name: obj.getName(), inst: obj.getInstanceName(), field: "myObjTagObjId", rowId: obj.getRowId(), object: obj },
     * 	link: { object: "MyObjTag", field: "myObjTagObjId", child: "MyTag", childfk: "myObjTagTagId", order: 1 }
     * });
     */
    displayReferencePillbox(ctn: AnyContainer, o: BusinessObject, params?: ListParam, cbk?: (obj?: UIBusinessObject) => void): Promise<void>;
    /**
     * Display referenced object as panel list, inlined form or pillbox
     * @param ctn Container
     * @param object Referenced object or name
     * @param p List options + parent object + link metadata, with optional keys:
     * `parent` (parent object `{ name, inst, field, rowId, object }`),
     * `link` (optional link metadata with `{ child, childfk, rendering }`),
     * `embedded` (unset or true to apply rendering of link, false to ignore the rendering and display a list)
     * @example
     * // Children of the current record as a panel list
     * $ui.displayReferenceList($("#children", ctn), "MyChild", {
     * 	parent: { name: obj.getName(), inst: obj.getInstanceName(), field: "myChildParentId", rowId: obj.getRowId(), object: obj },
     * 	embedded: false
     * });
     */
    displayReferenceList(ctn: Container, object: string | BusinessObject, p: ListParam, cbk?: (obj?: UIBusinessObject) => void): Promise<void>;
    /**
     * Object reference picker: default open a popup to select a reference
     * @param ctn Parent container of referenced fields to set
     * @param obj Object
     * @param refObject Referenced object name or business object (list popup)
     * @param refField Foreign key (or meta object) field to select (name or field)
     * @param index Optional row index (edit list)
     * @param cbk Optional callback (will replace all change events on each field)
     * @param userKey Optional to get foreign user-key
     * @example
     * // Open the popup to select the customer of the order
     * $ui.selectReference(ctn, obj, "MyCustomer", "myOrdCustomerId");
     */
    selectReference(ctn: Container, obj: UIBusinessObject, refObject: string | BusinessObject, refField: string | ObjectField, index?: string | null, cbk?: Callback, userKey?: boolean): void;
    /**
     * Multiple object references picker : used to search multiple references in a single field
     * @param ctn Parent container of referenced fields to set
     * @param obj Object
     * @param refObject Referenced object name or business object (list popup)
     * @param refField Foreign key field to select (name or field)
     * @param cbk Optional callback
     * @example
     * // Search several customers in a single search field
     * $ui.selectReferences(ctn, obj, "MyCustomer", "myOrdCustomerId", () => $console.log("selected"));
     */
    selectReferences(ctn: Container, obj: BusinessObject, refObject: string | BusinessObject, refField: string | ObjectField, cbk?: Callback): void;
    /**
     * Create an object in a dialog
     * @param ctn Parent container
     * @param object Object
     * @param cbk Callback with the created object
     * @example
     * // Quick creation in a dialog
     * $ui.createObjectDialog(null, "MyCustomer", (o: BusinessObject) => $ui.toast("Created " + o.getRowId()));
     */
    createObjectDialog(ctn: AnyContainer, object: string | BusinessObject, cbk?: (o: BusinessObject) => void): Promise<void>;
    /**
     * Create an object in a dialog to populate a reference
     * @param ctn Parent container to populate
     * @param obj Object
     * @param refField Referenced field or FK itself
     * @param index Optional row index (edit list)
     * @example
     * // Create a new customer and set the foreign key of the order
     * $ui.createReference(ctn, obj, "myOrdCustomerId");
     */
    createReference(ctn: AnyContainer, obj: BusinessObject, refField: string | ObjectField, index?: string): void;
    /**
     * Meta-object picker: default open a popup to select a reference
     * @param ctn Parent container of referenced fields to set
     * @param obj Object
     * @param field Field of meta-object to select
     * @param index Optional row index (edit list)
     * @example
     * $ui.selectMetaObject(ctn, obj, "myObjTarget");
     */
    selectMetaObject(ctn: AnyContainer, obj: UIBusinessObject, field: string | ObjectField, index?: string): void;
    /**
     * Object datamap picker: default open a popup to select data
     * @param ctn Parent container of referenced fields to set
     * @param obj Object
     * @param field Mapped field
     * @param index Optional row index (edit list)
     * @param cbk Optional callback to override fields change
     * @param reset True to only reset all datamap fields
     * @example
     * $ui.selectDatamap(ctn, obj, obj.getField("myObjZipCode")!);
     */
    selectDatamap(ctn: AnyContainer, obj: UIBusinessObject, field: ObjectField, index?: string | null, cbk?: Callback, reset?: boolean): void;
    /**
     * Reset datamap fields
     * @param ctn Parent container of referenced fields to set
     * @param obj Object
     * @param field Mapped field
     * @param index Optional row index (edit list)
     * @param cbk Optional callback to override fields change
     * @example
     * $ui.resetDatamap(ctn, obj, obj.getField("myObjZipCode")!);
     */
    resetDatamap(ctn: AnyContainer, obj: UIBusinessObject, field: ObjectField, index?: string | null, cbk?: Callback): void;
    /**
     * Bulk association between objects
     * @param ctn Parent container
     * @param obj Object from panel instance
     * @param def Associate definition
     * @param def.parent Parent object name
     * @param def.parentRefField Foreign key field to parent
     * @param def.child Optional child object name (when obj is a N,N relationship)
     * @param def.childRefField Foreign key field to child
     * @example
     * // Associate products to the current order thru the N,N object MyOrderProduct
     * $ui.displayAssociate(null, $app.getBusinessObject("MyOrderProduct"), {
     * 	parent: "MyOrder",
     * 	parentRefField: "myOrdPrdOrderId",
     * 	child: "MyProduct",
     * 	childRefField: "myOrdPrdProductId"
     * });
     */
    displayAssociate(ctn: AnyContainer, obj: BusinessObject, def: Associate): void;
    /**
     * Merge object records into the master one (at least 2 records, and limited to max 5 records)
     * @param ctn Container
     * @param obj Object with merge access
     * @param options Options <code>\{ ids \}</code>
     * @param options.ids Optional list of ids to merge (use selected rows if unset)
     * @param cbk Optional callback
     * @example
     * // Merge 2 duplicates (default the selected rows)
     * $ui.displayMerge(null, obj, { ids: ["12", "34"] }, () => $ui.toast("Merged"));
     */
    displayMerge(ctn: AnyContainer, obj: BusinessObject, options?: MergeParam, cbk?: Callback): void;
}

/** Area of fields in a form */
interface Area {
    /** Area row ID */
    id?: string;
    /** Area number (0 = technical fields) */
    area: number;
    /** Area name */
    name: string;
    /** Icon name */
    icon?: string;
    /** Show the area title */
    title?: boolean;
    /** Translated title */
    label?: string;
    /** Area is visible */
    visible: boolean;
    /** HTML template of the area */
    uiTemplate?: string;
    /** Field names of the area */
    fields?: string[];
    /** Front: area title <th> id (list with area titles) */
    _areaId?: string;
    /** Compact rendering */
    compact?: boolean;
    /** Position of the tabs */
    tabsPosition?: string;
    /** Show the tab labels */
    tabsLabel?: boolean;
    /** UI area component */
    ui?: UIArea;
    /** Area container */
    div?: Container;
    /** Tab index of the area */
    _tab?: number;
    /** Index of the area in its tabs */
    _tabIndex?: number;
}
/** Link to a child object */
interface Link {
    /** Child object name */
    object: string;
    /** Foreign key of the child object to the parent object */
    field: string;
    /** Foreign key of the N,N relationship to the linked object */
    childfk?: string;
    /** Linked object of a N,N relationship */
    child?: string;
    /** Inlined link (0,1 or 1,1) displayed as a form in the parent form */
    inline?: boolean;
    /** Icon name */
    icon?: string;
    /** Translated label */
    label?: string;
    /** Translated plural label */
    plurallabel?: string;
    /** Minimum number of links */
    minOccurs?: number;
    /** Maximum number of links */
    maxOccurs?: number;
    /** Display order in the parent form */
    order: number;
    /** Link rendering code (`P` or `C` are inserted in the parent list/form) */
    rendering?: string;
    /** Reflexive field of a tree */
    reflexiveField?: string;
    /** Depth of a reflexive tree */
    reflexiveDepth?: number;
    /** Search depth */
    depth?: number;
    /** Number of linked records to merge */
    mergeCount?: number;
    /** Optional selected link ids to merge */
    _ids?: KeyObject;
}
/** Key of a group-by section */
interface RowGroupByKey {
    /** Referenced object name */
    refobj: string;
    /** Referenced row ID */
    refid: string;
    /** Displayed value */
    label: string;
    /** Raw value */
    value: string;
}
/** Group-by section of a list */
interface RowGroupBy {
    /** Group-by keys */
    key?: RowGroupByKey[];
    /** Group-by label */
    label?: string;
    /** Total per field */
    totals?: KeyNumber;
    /** Group-by count */
    count?: number;
}
/** Node of a reflexive tree or a tree view */
interface RowTree {
    /** Sub-tree count */
    count?: number;
    /** Treeview node id */
    nid?: string;
    /** Object metadata */
    meta?: ObjectMetadata;
    /** Record data */
    data?: KeyObject;
    /** Reflexive sub-tree */
    list?: RowTree[];
}
/** Record of field values */
type RowData = KeyHash<FieldValue>;
/** Record with data + metadata */
interface RowDataMeta {
    /** Field values */
    data: RowData;
    /** Row metadata */
    meta: ObjectMetadata;
    /** Multi creation 00 01.. */
    _index?: string;
    /** To delete flag during upsert list */
    _toDelete?: boolean;
}
/** Search item = plain object | data+metadata | tree | group-by */
type RowItem = RowData | RowDataMeta | RowTree | RowGroupBy;
/** Page of a partial list (group-by section) */
interface RowPartial {
    /** Page index */
    page: number;
    /** Max page index */
    maxpage: number;
    /** Records of the page */
    list: RowDataMeta[];
}
/** Print template */
interface PrintTemplate {
    /** Template name */
    name: string;
    /** Usage codes (ex: `E` for export) */
    usage: string;
    /** Template is enabled */
    enabled: boolean;
}
/** Data map between two objects */
interface Datamap {
    /** Source object name */
    objectA: string;
    /** Referenced object name */
    objectB: string;
    /** Mapping of fields `inputA` of object A to `inputB` of object B */
    maps: {
        /** Direction: `1` input, `2` output, `3` input/output */
        type: string;
        /** Field of object A */
        inputA: string;
        /** Field of object B */
        inputB: string;
    }[];
}
/** Association definition */
interface Associate {
    /** Parent object name */
    parent: string;
    /** Reference field to the parent object */
    parentRefField: string;
    /** Optional child object name (when obj is a N,N relationship) */
    child?: string;
    /** Reference field to the child object (N,N relationship) */
    childRefField?: string;
}
/** Target object of a record (ex: object behind a data map or a union) */
interface TargetObject {
    /** Target object name */
    object: string;
    /** Target instance name */
    inst: string;
    /** Target row ID */
    rowId: string;
}
/** Parent object context of a child list or form */
interface ParentObject {
    /** Parent object name */
    name: string;
    /** Parent instance name */
    inst?: string;
    /** Foreign key field to the parent */
    field: string;
    /** Parent row ID */
    rowId: string;
    /** Parent object */
    object?: BusinessObject;
    /** Parent values */
    values?: KeyObject;
    /** Parent row index (multi-creation) */
    index?: string;
    /** Parent container */
    container?: JQuery;
}
/** Meta-object: data to display a record summary */
interface MetaObject {
    /** Object name */
    object?: string;
    /** Row ID */
    row_id?: string;
    /** Key = "<object>:<row_id>" */
    key?: string;
    /** Parent object */
    parent?: ParentObject;
    /** Record data */
    item?: KeyObject;
    /** Fields to display */
    fields?: string[];
    /** Addons to append */
    addons?: JQuery[];
    /** Row actions */
    actions?: RowActions | null;
    /** Image URL */
    image?: string;
    /** Show the place map */
    placemap?: boolean;
    /** Title */
    label?: string;
    /** User key label */
    userkeylabel?: string;
    /** Count */
    count?: number;
    /** Displayed in a tray (kanban) */
    tray?: boolean;
    /** Icon name */
    icon?: string;
    /** Thumbnail URL */
    thumbnail?: string;
    /** Open handler: undefined = open the object form, `false` or `null` = not clickable */
    onopen?: false | null | ((ctn: AnyContainer, obj: string | BusinessObject, id: string) => void);
}
/** Inlined parameters for documents, thumbnails and meta-object */
interface InlineParam {
    /** Inline documents (`true` or `'images'` for images only or `'infos'` for documents data without content or array of field names) ? */
    inlineDocs?: boolean | "images" | "infos" | string[];
    /** Inline image documents thumbnails (true | array of fields) ? */
    inlineThumbs?: boolean | string[];
    /** Inline objects fields items (true|false) ? */
    inlineObjs?: boolean;
}
/** Data of inlined (0,1) or (1,1) link in form */
interface InlineObject {
    /** Inlined object */
    object: BusinessObject;
    /** Parent object */
    parent: ParentObject;
    /** Link definition */
    link: Link;
    /** Link is enabled (to delete it on save when disabled) */
    enabled?: boolean;
    /** Number of linked records (0 or 1) */
    count?: number;
    /** Mandatory link (1,1) */
    mandatory?: boolean;
    /** Row ID of the linked record */
    rowId?: string;
    /** Metadata of the inlined object */
    metadata?: ObjectMetadata;
}
/** Resource of an object */
interface Resource {
    /** Resource type */
    type: 'JS' | 'TS' | 'CSS';
    /** Base64 encoded content */
    data?: string;
    /** Resource code */
    code: string;
    /** Resource row ID */
    id: string;
}
/** Front-end public metadata of object */
interface ObjectMetadata {
    /** Object name */
    name: string;
    /** Instance name */
    instance: string;
    /** Object row ID */
    id?: string;
    /** Row ID of the copied record */
    copyId?: string;
    /** Row ID field name */
    rowidfield: string;
    /** Icon name */
    icon?: string;
    /** Translated label */
    label?: string;
    /** Translated plural label */
    plurallabel?: string;
    /** Translated help */
    help?: string;
    /** Translated long help */
    longhelp?: string;
    /** User key */
    userKey?: string;
    /** Form template */
    uiTemplate?: string | JQuery;
    /** List row template */
    uiListTemplate?: string;
    /** Summary template */
    uiSummary?: string;
    /** Default view name */
    defaultView?: string;
    /** Views display mode */
    showViews?: ShowViewsMode;
    /** State model navbar */
    navbar?: KeyObject;
    /** Use HTML editor */
    useHTML?: boolean;
    /** Use Ace code editor */
    useAce?: boolean;
    /** Object resources */
    resources?: Resource[];
    /** Current context (one of `Simplicite.Ajax.CONTEXT_*` constants) */
    context?: number;
    /** Messages */
    msg?: MessageJSON[];
    /** Undo/redo service URL */
    undoredo?: {
        /** Service URL */
        url: string;
    };
    /** Lock the record during update */
    useLock?: boolean;
    /** Users of the record */
    usage?: UsageUser[];
    /** "select" object */
    query?: boolean;
    /** Create right */
    create?: boolean;
    /** Copy right */
    copy?: boolean;
    /** Update right */
    update?: boolean;
    /** Delete right */
    del?: boolean;
    /** Use a form */
    useForm?: boolean;
    /** Open the form on click */
    open?: boolean;
    /** Allow to create a new record in a form */
    accessNewForm?: boolean;
    /** Stay on the creation list after save */
    accessNewLoop?: boolean;
    /** Social posts options */
    social?: {
        /** Thru popup ? */
        popup?: boolean;
        /** Or in form ? */
        inline?: boolean;
        /** Social share */
        share?: boolean;
    };
    /** Save button */
    canSave?: boolean;
    /** Save & New button */
    canSaveNew?: boolean;
    /** Save & Copy button */
    canSaveCopy?: boolean;
    /** Save & Close button */
    canSaveClose?: boolean;
    /** Close button */
    canClose?: boolean;
    /** Export the timestamps */
    exportTimestamp?: boolean;
    /** PDF, CSV, ZIP, XLS */
    exportMedias?: string[];
    /** Search options */
    search?: ListSearchMode;
    /** Minimum rows per page */
    minrows?: number;
    /** Maximum rows per page */
    maxrows?: number;
    /** Predefined searches usage (1 = editable) */
    predefSearchUsage?: number;
    /** Predefined searches */
    predefSearch?: PredefSearch[];
    /** Fulltext indexable */
    indexable?: boolean;
    /** Sortable list */
    listSortable?: boolean;
    /** Minified list by default */
    listMinified?: boolean;
    /** Layout of the minified list (enables the list/summaries toggle) */
    listMinifiable?: ListLayout;
    /** Allow rows selection */
    selectRows?: boolean;
    /** Rows reordering by drag & drop on an order field */
    reorder?: {
        /** Order field name */
        field: string;
        /** Rows can be moved by drag & drop */
        move?: boolean;
        /** Rows can be renumbered in bulk */
        bulk?: boolean;
    };
    /** Allow group-by */
    canGroupBy?: boolean;
    /** Group by fields */
    groupBy?: string[];
    /** Has extended list fields */
    hasMoreList?: boolean;
    /** Search template */
    uiSearchTemplate?: string;
    /** Position of the search template */
    uiSearchTemplatePos?: Position;
    /** Search box to filter the form fields */
    formSearchable?: boolean;
    /** Fields */
    fields: ObjectField[];
    /** Views */
    views: View[];
    /** Links to child objects */
    links: Link[];
    /** Data maps by name */
    datamaps?: {
        [key: string]: Datamap;
    };
    /** Actions */
    actions?: Action[];
    /** Groups of actions */
    actionGroups?: ActionGroup[];
    /** Areas of fields */
    areas?: Area[];
    /** Show the areas in list */
    listAreas?: boolean;
    /** Target object */
    target?: TargetObject;
    /** Status field of the state model */
    statusfield?: string;
    /** State model transitions */
    transitions?: Transition[];
    /** Crosstabs */
    crosstabs?: CrosstabMetadata[];
    /** Place maps */
    placemaps?: Placemap[];
    /** Agendas */
    agendas?: Agenda[];
    /** Print templates */
    printtemplates?: PrintTemplate[];
    /** Guides */
    guides?: GuideMetadata[];
    /** Master record of a merge */
    mergeMaster?: boolean;
    /** Records to merge */
    mergeMetaObjects?: MetaObject[];
}
/** Get a record parameters */
type GetParam = InlineParam & {
    /** Init context (one of `Simplicite.Ajax.CONTEXT_CREATE/UPDATE/DELETE/COPY` constants) */
    context?: number;
    /** true to update the metadata in context */
    metadata?: boolean;
    /** Array of field names to retrieve (if absent or undefined, all fields are retrieved) */
    fields?: string[];
    /** Optional field values to set and foreign keys to populate */
    values?: KeyObject;
    /** Optional parent context `{name,inst,field,rowId}` to populate related fields (useful in CONTEXT_CREATE) */
    parent?: ParentObject;
    /** true to get posts count */
    social?: boolean;
    /** true to get social share data */
    share?: boolean;
    /** Optional treeview name to get a tree from this root */
    treeView?: string;
    /** Search depth in tree */
    treeDepth?: number;
    /** true update and get the user's trees history */
    treeHistory?: boolean;
    /** optional tree path */
    treePath?: string;
    /** true to get the user keys */
    userKeys?: boolean;
};
/** Create a record parameters */
interface CreateParam extends InlineParam {
    /** true to update the metadata in context UPDATE when created */
    metadata?: boolean;
    /** true to set target object in metadata if any */
    target?: boolean;
    /** Optional parent object */
    parent?: ParentObject;
    /** true if called from a list */
    list?: boolean;
    /** Optional progress callback */
    progress?: ProgressHandler;
}
/** Update a record parameters */
interface UpdateParam extends CreateParam {
    /** Optional editable field name */
    edit?: string;
    /** false to bypass the timestamp check and update (silent update) */
    timestamp?: boolean;
    /** Optional transition name */
    transition?: string;
    /** Optional action parameters of the transition */
    itemAction?: KeyObject;
    /** true to get the social posts */
    social?: boolean;
    /** true to get the sharing data */
    share?: boolean;
}
/** Save (create or update) a record parameters */
interface SaveParam extends UpdateParam {
    /** Context `Simplicite.Ajax.CONTEXT_CREATE` to force a creation (else depends on the row ID) */
    context?: number;
}
/** Search records parameters */
type SearchAjax = InlineParam & {
    /** Context (one of `Simplicite.Ajax.CONTEXT_*` constants) */
    context?: number;
    /** Page index */
    page?: number;
    /** true to get the metadata */
    metadata?: boolean;
    /** Parent object context */
    parent?: ParentObject;
    /** Group-by search: true/false = forced, auto = by default when the object is groupable (decided by the server) */
    groupby?: boolean | "auto";
    /** Partial list of a group-by section */
    partial?: boolean;
    /** Group-by fields */
    groupbyfields?: string[];
    /** History search */
    history?: boolean;
    /** Get the totals */
    totals?: boolean;
    /** Get the page totals */
    pageTotals?: boolean;
    /** Get the social posts count */
    social?: boolean;
    /** Edit list mode */
    edit?: string;
    /** View item context */
    view?: {
        /** View name */
        name: string;
        /** Item index in the view */
        item?: number;
        /** View is the home page */
        home?: boolean;
    };
    /** Only visible fields */
    visible?: boolean;
    /** Depth of a reflexive tree */
    treeDepth?: number;
    /** Predefined search row ID */
    searchId?: string;
};
/** Search param for simple list or records */
type SearchAjaxList = Omit<SearchAjax, "metadata" | "groupby" | "partial" | "treeDepth">;
/** Search param with metadata */
type SearchAjaxMetadata = Omit<SearchAjax, "metadata"> & {
    /** Return the metadata */
    metadata: true;
};
/** Search param for group-by items */
type SearchAjaxGroupBy = Omit<SearchAjax, "groupby" | "partial"> & {
    /** Search the group-by items */
    groupby: true;
};
/** Search param for partial list of group-by item */
type SearchAjaxPartial = Omit<SearchAjax, "groupby" | "partial"> & {
    /** Not the group-by items */
    groupby: false;
    /** Partial list of one group-by item */
    partial: true;
};
/** Search param for reflexive tree */
type SearchAjaxTree = Omit<SearchAjax, "treeDepth"> & {
    /** Depth of the reflexive tree */
    treeDepth: number;
};
/** Predefined search */
interface PredefSearch {
    /** Row ID */
    id?: string;
    /** Name */
    name?: string;
    /** Label */
    label?: string;
    /** Search filters */
    filters?: KeyObject;
    /** Public search */
    pub?: boolean;
}
/**
 * Simplicit&eacute; business object.
 * - Getting a new business object should use the `Simplicite.Ajax.getBusinessObject()` function instead of this constructor
 */
declare class BusinessObject {
    /**
     * Shorthand to `Simplicite.Ajax` instance.
     * Kept for backward compatibility, same as global `$app` in the application code.
     */
    _app: Session;
    /**
     * Current contextual meta data of form, list, row...
     */
    metadata: ObjectMetadata;
    /**
     * Current item. Use `item["fieldname"]` or `item.fieldname` to access to the field value
     */
    item: RowItem;
    /**
     * Current item data of action with fields.
     */
    itemAction?: KeyObject;
    /**
     * Current search filters. Use `filters["fieldname"]` or `filters.fieldname` to access to the filter value
     */
    filters: Filters;
    /**
     * Current selected row ids in list (for multi-selection).
     * Use `selectedIds` array to access to the selected row ids (undefined if no selection, null if all selected, explicitly set with rowIds otherwise).
     */
    selectedIds?: string[];
    /**
     * Current search result array of items.
     */
    list: RowItem[];
    /**
     * Current search result count.
     */
    count: number;
    /**
     * Current search result max page index (for paginated searches).
     */
    maxpage: number;
    /**
     * Current search result page index (for paginated searches).
     */
    page: number;
    /**
     * Current search result page index (for paginated searches).
     */
    pagesize: number;
    /**
     * Social counter(s) from get or search
     */
    social?: number | number[];
    /**
     * Count of group-by items (for group-by searches).
     */
    countGroupBy?: number;
    /**
     * Store sum/avg/min/max... of the bottom row "Total" per field on list.
     */
    totals?: KeyObject;
    /**
     * Store sum/avg/min/max... of the "Page total" row per field on list
     */
    pageTotals?: KeyObject;
    /**
     * Crosstab data (if requested with `crosstab=true` in search params).
     */
    crosstabdata?: CrosstabData;
    /**
     * Social share data (if requested with `share=true` in get or search params).
     */
    share?: KeyObject;
    /**
     * Parent object of child instance
     */
    parent?: ParentObject;
    /**
     * Reference field to parent object of child instance
     */
    parentRefField?: string;
    /**
     * History of items (for history searches).
     */
    hist?: {
        /** History records per row */
        list: KeyObject[][];
        /** Actors of the history */
        actors: TrayActor[];
    };
    /**
     * Local data get/set thru `localParameter(code, value)`
     * (e.g. cloned UI globals, hasChanged flag, hasChangedFields list, etc.)
     * - Public usage in applicaiton and hooks, to preserve some context on client-side.
     * - Used to store contextual data during UI rendering.
     * - Beware, local data are not sent or persisted in the server, use `$app.setSysParam(...)` and `$app.getSysParam(...)` to send/receive data from server-side.
     */
    locals: {
        /** Cloned UI globals */
        ui?: typeof Globals;
        /** Record has changed flag */
        hasChanged?: boolean;
        /** Record has changed fields */
        hasChangedFields?: string[];
    };
    /**
     * Contextual cached data during UI rendering
     * (e.g. treeview definitions, prepared metrics, trays built from enum codes, opened nodes, tmppb cache for pillbox, etc.)
     * - Platform internal usage. Do not use it in the application code, use `localParameter(code, value)` instead.
     * - It can evolve to become breaking changes in future versions.
     */
    context: {
        /** Current list metadata to be restored after row metadata */
        listMeta?: ObjectMetadata;
        /** Current selected predefined search */
        predefSearch?: PredefSearch;
        /** Current search params to reload the list */
        navParams?: SearchAjax;
        /** Cached treeviews */
        treeviews?: {
            [key: string]: TreeView;
        };
        /** Cached metrics params and last rendered metrics */
        metrics?: ContextMetrics;
        /** Show/hide documents per multi-documents field name */
        showDocs?: KeyString;
        /** Current column trays based on enum codes */
        trays?: TrayColumn[];
        /** Current opened nodes in list as panel reflexive tree */
        treeOpened?: KeyBoolean;
        /** Cached new item from getForCreate for multi-creation in list */
        newItem?: KeyObject;
        /** Current inline values of 0,1 link displayed as form */
        inlineValues?: KeyObject;
        /** Cached temporary pillboxes for N,N relationships during parent creation or copy */
        tmppb?: TempPillboxes;
        /** Flag to show toast once when no row found on new search */
        toastNoRowFound?: boolean;
    };
    /**
     * Constructor
     * @param app Application `Simplicite.Ajax` instance
     * @param objName Object name
     * @param objInstName Object instance name, optional (default to `the_ajax_<object name>`)
     */
    constructor(app: Session, objName: string, objInstName?: string);
    /**
     * Gets Id from meta data.
     */
    getId(): string | undefined;
    /**
     * Gets name from meta data.
     */
    getName(): string;
    /**
     * Gets instance name from meta data.
     */
    getInstance(): string;
    /**
     * Gets instance name from meta data (alias to getInstance).
     */
    getInstanceName(): string;
    /**
     * Is main instance?
     * @example
     * // In a CLASS hook: behavior only for the main form/list
     * if (obj.isMainInstance()) {
     * 	// ...
     * }
     */
    isMainInstance(): boolean;
    /**
     * Is panel instance?
     */
    isPanelInstance(): boolean;
    /**
     * Is reference selection instance?
     */
    isRefInstance(): boolean;
    /**
     * Is datamap selection instance?
     */
    isDataMapInstance(): boolean;
    /**
     * Is home instance?
     */
    isHomeInstance(): boolean;
    /**
     * Is ajax instance?
     */
    isAjaxInstance(): boolean;
    /**
     * Is temporary instance?
     */
    isTmpInstance(): boolean;
    /**
     * Is process instance?
     */
    isProcessInstance(): boolean;
    /**
     * Are metadata loaded ?
     */
    isLoaded(): string | undefined;
    /**
     * Gets label from meta data (is undefined as long as meta data are not loaded using `getMetaData()`).
     * @param plural Get plural label if defined
     */
    getLabel(plural?: boolean): string | undefined;
    /**
     * Gets context help from meta data (is undefined as long as meta data are not loaded using `getMetaData()`).

     */
    getHelp(): string | undefined;
    /**
     * Gets fields array from meta data (is undefined as long as meta data are not loaded using `getMetaData()`).
     */
    getFields(): ObjectField[];
    /**
     * Gets an Object Field
     * @param field Field name or metadata
     * @param data Optional contextual data { value, message }
     */
    getObjectField(field: string | ObjectField, data?: {
        value: string;
        message: string;
    }): ObjectField | undefined;
    /**
     * Gets links array from meta data (is undefined as long as meta data are not loaded using `getMetaData()`).
     */
    getLinks(): Link[];
    /**
     * Gets a link definition.
     * @param object Referenced object or name
     * @param field Foreign key field or name
     */
    getLink(object: string | KeyObject, field: string | ObjectField): Link | undefined;
    /**
     * Gets views array from meta data (is undefined as long as meta data are not loaded using `getMetaData()`).
     */
    getViews(): View[];
    /**
     * Gets a view definition.
     * @param name View name
     */
    getView(name: string): View | undefined;
    /**
     * Gets field from fields array in meta-data (returns undefined if field is not found).
     * @param name Field name or Field
     * @param id Optional list index/rowId
     * @example
     * const f: ObjectField | undefined = obj.getField("myObjAmount");
     * if (f?.required)
     * 	$console.log(f.label + " is required");
     */
    getField(name: string | ObjectField, id?: string): ObjectField | undefined;
    /**
     * Gets the field index in object
     * @param name Field name or Field
     */
    getFieldIndex(name: string | ObjectField): number | undefined;
    /**
     * Get field value shorthand
     * @param name Field name or Field
     * @param id Optional list rowId
     * @example
     * await obj.get(rowId);
     * const amount = obj.getFieldValue("myObjAmount") as number;
     */
    getFieldValue(name: string | ObjectField, id?: string): FieldValue | null;
    /**
     * Set field value shorthand
     * @param name Field name or a field
     * @param val Value
     * @param id Optional list rowId
     * @example
     * obj.setFieldValue("myObjStatus", "DONE");
     * const status = obj.getFieldValue("myObjStatus") as string; // "DONE"
     */
    setFieldValue(name: string | ObjectField, val: FieldValue, id?: string): void;
    /**
     * Get old field value shorthand
     */
    getFieldOldValue(name: string | ObjectField, id?: string): FieldValue | null;
    /**
     * Set old field value shorthand
     */
    setFieldOldValue(name: string | ObjectField, val: FieldValue, id?: string): FieldValue;
    /**
     * Get the root field of reference, null when field belongs to object
     * @param field Field or name
     */
    getRootField(field: string | ObjectField): ObjectField | undefined;
    /**
     * Get user-key fields
     */
    getUserKeyFields(): ObjectField[];
    /**
     * Get foreign-key fields
     */
    getForeignKeys(): ObjectField[];
    /**
     * Get URL of first image field
     * @param item optional item (use field values if unset)
     */
    getImageURL(item?: KeyObject): string | undefined;
    /**
     * Set values (item into fields)
     * @param item values per field name, default: current item
     * @param old true to copy values into old values ?
     * @param id optional list index/rowId
     */
    setValues(item: RowItem, old?: boolean, id?: string): void;
    /**
     * Gets the current item
     * @param id Optional index/rowId to get data+meta in current list
     */
    getItem(id?: string): RowItem | undefined;
    /**
     * Gets the current item index
     * @param id index/rowId to look in current list
     */
    getItemIndex(id: string): number;
    /**
     * Add item to list
     * @param item list item
     * @param index optional creation index 00 01...
     */
    addItem(item: RowData, index?: string): void;
    /**
     * Remove item from list
     * @param id index/rowId in current list
     */
    removeItem(id: string): boolean | undefined;
    /**
     * reset values (item into fields)
     * @param old true to reset old values
     */
    resetValues(old?: boolean): void;
    /**
     * Get values (fields into item)
     */
    getValues(): RowData;
    /**
     * Get old values
     */
    getOldValues(): RowData;
    /**
     * Gets row Id field name from meta data (is undefined as long as meta data are not loaded using `getMetaData()`).
     */
    getRowIdFieldName(): string;
    /**
     * Gets row Id field from meta data (returns undefined if row Id field name is undefined).
     */
    getRowIdField(): ObjectField | undefined;
    /**
     * Gets value from list for specified code (returns undefined if code is not in list).
     * @param list List metadata (typically from a field metadata)
     * @param code Code
     */
    getListValue(list: EnumItem[], code: string): string | undefined;
    /**
     * Store parent object in panel instance `{ name, inst, field, rowId, object`}
     */
    setParent(parent: ParentObject): void;
    /**
     * Get parent object
     */
    getParent(): ParentObject | undefined;
    /**
     * Get parent business object of panel instance
     */
    getParentObject(): BusinessObject | null | undefined;
    /**
     * Get foreign key of panel instance
     */
    getParentObjectRefField(): string | null;
    /**
     * Is new record?
     */
    isNew(): boolean;
    /**
     * Is copied record?
     */
    isCopied(): string | false | undefined;
    /**
     * Get display label
     */
    getDisplay(): string | undefined;
    /**
     * Is child of?
     */
    isChildOf(parent: string, ref?: string): boolean | undefined;
    /**
     * Is panel of?
     */
    isPanelOf(parent: string, ref?: string): boolean | undefined;
    /**
     * Is referenced from?
     */
    isReferencedFrom(parent: string, ref?: string): boolean | undefined;
    /**
     * Is data-mapped from?
     */
    isDataMappedFrom(parent: string): boolean | undefined;
    /**
     * Get status field
     */
    getStatusField(): ObjectField | undefined;
    /**
     * Get action definition
     * @param name Action name
     * @example
     * const a: Action | undefined = obj.getAction("MyObjAction");
     * if (a)
     * 	$console.log(a.label);
     */
    getAction(name: string): Action | undefined;
    /**
     * Get transition definition
     * @param name Transition name
     */
    getTransition(name: string): Transition | undefined;
    /**
     * Get area definition
     * @param n Area position
     */
    getArea(n: number): Area | undefined;
    /**
     * Remove area in metadata if position exists
     * @param n Area position
     */
    removeArea(n: number): void;
    /**
     * Get field area definition
     * @param n Area name or position
     */
    getFieldArea(n: number | string): Area | undefined;
    /**
     * Get crosstab definition
     * @param name Crosstab name
     */
    getCrosstab(name: string): CrosstabMetadata | undefined;
    /**
     * Alias for getCrosstab
     */
    getPivotTable: (name: string) => CrosstabMetadata | undefined;
    /**
     * Set crosstab definition
     * @param name Crosstab name
     * @param meta Crosstab metadata
     */
    setCrosstab(name: string, meta: CrosstabMetadata): void;
    /**
     * Alias for setCrosstab
     */
    setPivotTable: (name: string, meta: CrosstabMetadata) => void;
    /**
     * Get placemap definition
     * @param name Placemap name
     */
    getPlacemap(name: string): Placemap | undefined;
    /**
     * Get agenda definition
     * @param name Agenda name
     */
    getAgenda(name: string): Agenda | undefined;
    /**
     * Get print definition
     * @param name Print template name
     */
    getPrintTemplate(name: string): PrintTemplate | undefined;
    /**
     * Gets list of values field value from code (returns code if not found or not a list of value field)
     * @param field Field
     * @param code Field code
     */
    getValueForCode(field: ObjectField, code: string): string;
    /**
     * Gets current item row Id value (returns undefined if not current item is loaded).
     */
    getRowId(): string;
    /**
     * Sets current item row Id value.
     */
    setRowId(rowId: string): void;
    /**
     * Checks whether a field is the row ID field.
     * @param f Field meta data
     */
    isRowIdField(f: ObjectField): boolean;
    /**
     * Checks whether a field is a timestamp field.
     * @param f Field meta data
     */
    isTimestampField(f: ObjectField): boolean;
    /**
     * Is object filtered ?
     * @param exclude Optional filters to ignore `{ fieldname: value`}
     */
    isFiltered(exclude?: KeyObject): boolean;
    /**
     * Reset filters (not orders, nulls and groups)
     * @example
     * obj.resetFilters();
     * obj.filters.myObjStatus = "OPEN";
     * const rows: KeyObject[] = await obj.search();
     */
    resetFilters(): void;
    /**
     * Is object ordered ?
     */
    isOrdered(): boolean;
    /**
     * Reset orders (not filters)
     */
    resetOrders(): void;
    /**
     * Reset group by fields
     */
    resetGroupByFields(): void;
    /**
     * Loads meta data for specified context.
     * @param params Optional parameters
     * @param params.context Context (one of `Simplicite.Ajax.CONTEXT_*` constants)
     * @param params.contextParam Context single parameter (agenda name...)
     * @param params.parent Parent of PANELLIST `{ name, inst, field, rowId }`
     * @example
     * obj.getMetaData({ context: $app.CONTEXT_UPDATE }).then((meta: ObjectMetadata) => {
     * 	$console.log("Meta data loaded for update of object " + obj.getName());
     * });
     */
    getMetaData(params?: {
        context?: number;
        contextParam?: string;
        parent?: ParentObject;
    }): Promise<ObjectMetadata>;
    /**
     * Get crosstab cubes (data)
     * @param name Crosstab name
     */
    getCrosstabCubes(name: string): Promise<any>;
    /**
     * Alias for getCrosstabCubes
     */
    getPivotTableData: (name: string) => Promise<any>;
    /**
     * Gets a linked list of an enum field
     * @param field Enum field name
     * @param value Selected value(s) separated with ";"
     * @param target Linked field
     * @param lov Current linked list name
     * @param params Options
     * @param params.all Get all linked values when value is empty
     */
    getLinkedList(field: string, value: string, target: string, lov: string, params?: {
        all?: boolean;
    }): Promise<KeyObject>;
    /**
     * Set a new list to field
     * @param field Enum field name
     * @param list List name to load
     */
    setList(field: string | ObjectField, list: string): Promise<KeyObject>;
    /**
     * Gets the style of a field for a given value
     * @param field Field name or field object
     * @param value Value (defaults to the field's current value)
     * @returns CSS class(es), empty string when none applies
     */
    getStyle(field: string | ObjectField, value?: string): Promise<string>;
    /**
     * Select row(s)
     * @param sel selected = `all`, `page`, `none` or specific row IDs (single or array or semicolon-separated)
     * @param params `{ replace: boolean`}
     */
    selectRow(sel: ListSelection, params?: {
        replace?: boolean;
    }): Promise<string[]>;
    /**
     * Invoke method (unsupported on client side)
     */
    invokeMethod(): boolean;
    /**
     * Selects and loads an item for designated row ID (if row ID is `Simplicite.Ajax.DEFAULT_ROW_ID`,
     * a default item for creation is returned with all default values applied).
     * @param rowId Row ID, mandatory (use current item ID if unset)
     * @param params Optional parameters
     * @example
     * const item: KeyObject = await obj.get(rowId);
     * $console.log(item.myObjField1); // also available in obj.item
     */
    get(rowId: string, params?: GetParam): Promise<KeyObject>;
    /**
     * Same as get function
     */
    select: (rowId: string, params?: GetParam) => Promise<KeyObject>;
    /**
     * Loads default item for creation (equivalent to a get done on default row ID with the create init context `Simplicite.Ajax.CONTEXT_CREATE`).
     * @param params Optional parameters (same as for get function)
     * @example
     * const item: KeyObject = await obj.getForCreate(); // with default values
     * item.myObjCode = "ABC";
     * await obj.create(item);
     */
    getForCreate(params?: GetParam): Promise<KeyObject>;
    /**
     * Same as getForCreate function
     */
    selectForCreate: (params?: GetParam) => Promise<KeyObject>;
    /**
     * Loads item for designated row ID for update (equivalent to a get done with the update init context `Simplicite.Ajax.CONTEXT_UPDATE`).
     * @param rowId Row ID, mandatory
     * @param params Optional parameters (same as for get function)
     * @example
     * const item: KeyObject = await obj.getForUpdate(rowId);
     * item.myObjStatus = "DONE";
     * await obj.update(item);
     */
    getForUpdate(rowId: string, params?: GetParam): Promise<KeyObject>;
    /**
     * Same as getForUpdate function
     */
    selectForUpdate: (rowId: string, params?: GetParam) => Promise<KeyObject>;
    /**
     * Loads item for designated row ID for copy (equivalent to a get done with the copy init context `Simplicite.Ajax.CONTEXT_COPY`).
     * @param rowId Row ID, mandatory
     * @param params Optional parameters (same as for get function)
     * @example
     * const copy: KeyObject = await obj.getForCopy(rowId);
     * copy.myObjCode = "COPY";
     * await obj.create(copy);
     */
    getForCopy(rowId: string, params?: GetParam): Promise<KeyObject>;
    /**
     * Same as getForCopy function
     */
    selectForCopy: (rowId: string, params?: GetParam) => Promise<KeyObject>;
    /**
     * Loads item for designated row ID for delete (equivalent to a get done with the delete init context `Simplicite.Ajax.CONTEXT_DELETE`).
     * @param rowId Row ID, mandatory
     * @param params Optional parameters (same as for get function)
     */
    getForDelete(rowId: string, params: GetParam): Promise<KeyObject>;
    /**
     * Same as getForDelete function
     */
    selectForDelete: (rowId: string, params: GetParam) => Promise<KeyObject>;
    /**
     * Populate item (e.g. after getForCreate and after having set foreign keys)
     * @param item Item to be populated, optional (if absent current item is used)
     * @param params Optional parameters
     */
    populate(item?: KeyObject, params?: GetParam): Promise<KeyObject>;
    /**
     * Reorder rows from reorderable list
     * @param field reorderable field name
     * @param service move or bulk
     * @param params service parameters
     * @param params.type renum type (S or R, for bulk service)
     * @param params.incr increment (bulk service)
     * @param params.ids list of row Ids to reorder (move service)
     * @param params.targetId target row Id (move service)
     * @param params.before true to insert before the target (move service)
     * @returns Promise
     */
    reorder(field: string, service: string, params?: {
        type?: string;
        incr?: number;
        ids?: string[];
        targetId?: string;
        before?: boolean;
    }): Promise<any>;
    /**
     * Loads current filters
     * @param params Optional parameters
     * @param params.context Init context (normally `Simplicite.Ajax.CONTEXT_SEARCH` constant), optional
     * @param params.reset Reset filters, optional
     */
    getFilters(params?: {
        context?: number;
        reset?: boolean;
    }): Promise<KeyObject>;
    /**
     * Loads current filters for search (equivalent to a getFilters done with the search init context `Simplicite.Ajax.CONTEXT_SEARCH`).
     * @param params Optional parameters
     */
    getFiltersForSearch(params?: {
        context?: number;
        reset?: boolean;
    }): Promise<KeyObject>;
    /**
     * Apply user's filters to `this.filters`
     * @param filters Set of filters (ex from a view item), as a map of field name to value. Special keys:
     * `fromDate` (optional date min YYYY-MM-DD applied on the object period or the first date field, excluding timestamp),
     * `toDate` (optional date max YYYY-MM-DD applied on the object period or the first date field, excluding timestamp),
     * or any field name to filter (may not exist in object).
     */
    applyFilters(filters: KeyObject): void;
    /** Search overload to list data and metadata */
    search(filters: KeyObject | null, params: SearchAjaxMetadata): Promise<RowDataMeta[]>;
    /** Search overload to list group-by items */
    search(filters: KeyObject | null, params: SearchAjaxGroupBy): Promise<RowGroupBy[]>;
    /** Search overload for partial list of group-by item */
    search(filters: KeyObject | null, params: SearchAjaxPartial): Promise<RowPartial>;
    /** Search overload to get a reflexive tree */
    search(filters: KeyObject | null, params: SearchAjaxTree): Promise<RowTree>;
    /**
     * Search to list simple records
     * @example
     * const obj: UIBusinessObject = $app.getBusinessObject("MyObject");
     * // Search with filters (see the search syntax)
     * obj.search({
     * 	myObjCode: "ABC%",                  // starts with
     * 	myObjStatus: "in ('OPEN','PENDING')",
     * 	myObjAmount: ">100 and <200"
     * }).then((rows: KeyObject[]) => {
     * 	for (const row of rows)
     * 		$console.log(row.myObjCode, row.myObjFkId__linkedFieldName);
     * });
     * // Paginated search: obj.count and obj.maxpage are set
     * const page0: KeyObject[] = await obj.search(null, { page: 0 });
     */
    search(filters?: KeyObject | null, params?: SearchAjaxList): Promise<KeyObject[]>;
    /**
     * Search and loads search result items for list (equivalent to a search done with the list init context `Simplicite.Ajax.CONTEXT_LIST`)
     * @param filters Filters to be applied, optional (if absent, current filters are used)
     * @param params Optional parameters
     */
    searchForList(filters?: KeyObject, params?: SearchAjax): Promise<KeyObject[]>;
    /**
     * Search and loads search result items for panel list (equivalent to a search done with the list init context `Simplicite.Ajax.CONTEXT_PANELLIST`)
     * @param filters Filters to be applied, optional (if absent, current filters are used)
     * @param params Optional parameters
     */
    searchForPanelList(filters?: KeyObject, params?: SearchAjax): Promise<KeyObject[]>;
    /**
     * Gets item in the current list
     * @param i index
     */
    getListItem(i: number): KeyObject | undefined;
    /**
     * Gets the position in current list, -1 if not found
     * @param rowId row Id to find
     */
    getListPos(rowId: string): number;
    /**
     * Count rows with filters and set count and maxpage in object
     * @param filters Filters to be applied, optional (if absent, current filters are used)
     * @param params Optional parameters <code>\{ context, parent, view, operations, metadata \}</code>
     * @example
     * await obj.getCount({ myObjStatus: "OPEN" });
     * $console.log(obj.count + " open records");
     */
    getCount(filters?: KeyObject, params?: {
        context?: number;
        parent?: ParentObject;
        view?: {
            name: string;
            item: number;
            home?: boolean;
        };
        operations?: boolean;
        metadata?: boolean;
    }): Promise<KeyObject>;
    /**
     * Search from index and loads search result items
     * @param request Index search request string
     * @param params Optional parameters
     * @param params.inlineDocs Inline documents (`true` | `'images'` only | `'infos'` without content | array of fields) ?
     * @param params.inlineThumbs Inline image documents thumbnails (`true | array of fields`) ?
     * @param params.inlineObjs Inline objects fields items (`true|false`) ?
     * @param params.context optional context
     * @param params.parent optional parent `\{ name, inst, field, rowId \`} to search references
     * @param params.filters optional linkmap filters to limit search
     */
    indexsearch(request?: string, params?: {
        context?: number;
        parent?: ParentObject;
        filters?: KeyObject;
    } & InlineParam): Promise<RowDataMeta[]>;
    /**
     * Saves (create or update) and loads an item
     * @param item Item to be saved, optional (if absent current item is used)
     * @param params Optional parameters (see create or update method)
     * @example
     * // Creates the record when its row_id is $app.DEFAULT_ROW_ID, else updates it
     * const newitem: KeyObject = await obj.save(item);
     */
    save(item?: KeyObject, params?: SaveParam): Promise<KeyObject>;
    /**
     * Creates and loads an item
     * @param item Item to be created (row ID field of the item must be set to `Simplicite.Ajax.DEFAULT_ROW_ID`), optional (if absent current item is used)
     * @param params Optional parameters
     * @param params.inlineDocs Inline documents (`true` | `'images'` only | `'infos'` without content | array of fields) ?
     * @param params.inlineThumbs Inline image documents thumbnails (`true` | array of fields) ?
     * @param params.inlineObjs Inline objects fields items (`true|false`) ?
     * @param params.metadata true to update the metadata in context UPDATE when created
     * @param params.target true to set target object in metadata if any
     * @param params.parent optional parent object
     * @param params.list true if called from a list
     * @param params.progress Optional progress callback
     * @example
     * const item: KeyObject = await obj.getForCreate();
     * item.myObjCode = "ABC";
     * const created: KeyObject = await obj.create(item);
     * $console.log(created.row_id);
     */
    create(item?: KeyObject, params?: CreateParam): Promise<KeyObject>;
    /**
     * Updates and loads an item
     * @param item Item to be updated, optional (if absent current item is used)
     * @param params Optional parameters
     * @param params.inlineDocs Inline documents (`true` | `'images'` only | `'infos'` without content | array of fields) ?
     * @param params.inlineThumbs Inline image documents thumbnails (`true` | array of fields) ?
     * @param params.inlineObjs Inline objects fields items (`true|false`) ?
     * @param params.metadata true to update the metadata
     * @param params.target true to set target object in metadata if any
     * @param params.list true if called from a list
     * @param params.edit optional to specify the editable field name
     * @param params.timestamp false to bypass timestamp check and update (silent update)
     * @param params.social get social posts
     * @param params.share get sharing data
     * @param params.transition optional transition name
     * @param params.itemAction optional action parameters of transition
     * @param params.progress Optional progress callback
     * @example
     * const item: KeyObject = await obj.getForUpdate(rowId);
     * item.myObjAmount = 1000;
     * await obj.update(item);
     */
    update(item?: KeyObject, params?: UpdateParam): Promise<KeyObject>;
    /**
     * Deletes item. Current item is set to undefined
     * @param item optional item to be deleted or rowId (if absent current item is used)
     * @example
     * await obj.del(rowId);
     */
    del(item?: string | KeyObject, params?: {
        metadata?: boolean;
    }): Promise<KeyObject>;
    /**
     * Same as del function
     */
    remove: (item?: string | KeyObject, params?: {
        metadata?: boolean;
    }) => Promise<KeyObject>;
    /**
     * Updates all (selected) items
     * @param item Item with fields to be updated for each selected Ids
     * @param params Optional parameters
     * @param params.transition optional transition name
     * @param params.progress Optional progress callback
     */
    updateAll(item: KeyObject, params?: {
        transition?: string;
        progress?: ProgressHandler;
    }): Promise<KeyObject>;
    /**
     * Deletes all selected items
     */
    deleteAll(): Promise<KeyObject>;
    /**
     * Service to merge items
     * @param data merge data
     */
    merge(data: MergeSaveParam): Promise<KeyObject>;
    /**
     * Timesheet service
     * @param data timesheet data `{ action, name, resId, start, end`}
     */
    timesheet(data: TimesheetData): Promise<KeyObject>;
    /**
     * Preferences service
     * @param prefs optional preferences to save `{ list, search, actions`}
     */
    preferences(prefs?: {
        list?: object;
        search?: object;
        actions?: object;
    }): Promise<KeyObject>;
    /**
     * Gets the long help
     */
    help(): Promise<KeyObject>;
    /**
     * Loads cross table data for search filters
     * @param ctb Cross table name
     * @param filters Filters to be applied, optional (if absent, current filters are used)
     * @param params Optional parameters
     * @param params.ztree get lines tree with sums and metadata
     * @param params.zstotal get sub-totals ?
     * @param params.zstcolor sub-totals color
     * @param params.zaxis change axis ordering `[{name, order, type, method`]}
     * @param params.zgraph optional graph (or multiple zgraph_name)
     * @param params.zwidth optional graph width
     * @param params.zheight optional graph height
     */
    crosstab(ctb: string, filters?: KeyObject, params?: CrosstabParam): Promise<CrosstabData>;
    /**
     * Calls an object action and loads action result.
     * @param act Action name
     * @param params Optional parameters
     * @param params.values pairs of field/value
     * @param params.metadata true to update the metadata in context UPDATE on form action or LIST on list action
     * @param params.init true to initAction only on server side and get Action fields metadata in callback
     * @param params.transition optional transition name to init its action
     * @param params.track async tracking of action status|stop|minify
     * @example
     * // Call the action on a record
     * await obj.get(rowId);
     * const result: KeyObject | string = await obj.action("MyObjAction");
     * // with action fields
     * await obj.action("MyObjAction", { values: { myActField: "value" } });
     */
    action(act: string, params?: {
        values?: KeyObject;
        metadata?: boolean;
        init?: boolean;
        transition?: string;
        track?: string;
    }): Promise<KeyObject | string>;
    /**
     * Calls an object publication and loads publication result
     * @param prt Print template name
     * @param params Optional parameters
     * @param params.all Apply template to all items matching current filters (false by default, which means apply template only to current item) ?
     * @param params.mailing Apply template individually to all items matching current filter (false by default) ?
     */
    print(prt: string, params?: {
        all?: boolean;
        mailing?: boolean;
    }): Promise<any>;
    /**
     * Calls an object place map and loads places data
     * @param pcm Place map name
     * @param filters Optional filters to apply (if absent, current filters are used)
     */
    placemap(pcm: string, filters?: KeyObject): Promise<Placemap>;
    /**
     * Sets (or remove) an object parameter and loads it back
     * @param name Parameter name
     * @param value Parameter value (unset if null)
     */
    setParameter(name: string, value?: string | null): Promise<any>;
    /**
     * Remove an object parameter
     * @param name Parameter name
     */
    removeParameter(name: string): Promise<any>;
    /**
     * Loads an object parameter
     * @param name Parameter name
     */
    getParameter(name: string): Promise<any>;
    /**
     * Local parameter in object instance
     * @param name Parameter key name
     * @param value Optional value (to get or set, null to delete)
     * @returns local value
     */
    localParameter(name: string, value?: unknown | null): any;
    /**
     * Remove a local parameter in object instance
     * @param name Parameter key name
     * @returns local value
     */
    removeLocalParameter(name: string): any;
    /**
     * Initialize the local parameters `this.locals.hasChanged` and `this.locals.hasChangedFields`
     */
    initChangedFields(): void;
    /**
     * Add a field when has changed
     * @param f field or name
     * @param id optional id (edit list)
     */
    addChangedField(f: string | ObjectField, id?: string): void;
    /**
     * Remove a field when has not changed
     * @param f field or name
     * @param id optional id (edit list)
     */
    removeChangedField(f: string | ObjectField, id?: string): void;
    /**
     * Trigger the has changed flag
     * @param v optional to set the hasChanged value (true when the array of `this.locals.hasChangedFields` is not empty)
     * @returns the local parameter `this.locals.hasChanged`
     */
    hasChanged(v?: boolean | string[]): any;
    /**
     * Calls an object completion for specified field and loads action result.
     * @param field Field name
     * @param req Completion request
     * @param params Optional parameters
     * @param params.max Optional max size, default 15
     * @param params.context Optional context `CONTEXT_SEARCH` or `CONTEXT_UPDATE`
     * @param params.values Optional current fields values
     */
    completion(field: string, req: string, params?: {
        max?: number;
        context?: number;
        values?: KeyObject;
    }): Promise<KeyObject[]>;
    /**
     * Predefined search service (of user's private searches, public searches are protected)
     * @param method `"create" | "update" | "delete" | "select"`
     * @param ps Predefined search to save `{ id, name, filters`}
     */
    predefSearch(method: string, ps: PredefSearch): Promise<PredefSearch>;
    /**
     * Associate service
     * @param def Associate definition
     * @param def.parent Parent object name
     * @param def.parentRefField Foreign key field to parent
     * @param def.child Optional child object name (when obj is a N,N relationship)
     * @param def.childRefField Foreign key field to child
     * @param parentId parent object Id
     * @param ids selected Ids to associate to parent
     * @param item optional item for N,N data
     */
    associate(def: {
        parent: string;
        parentRefField: string;
        child?: string;
        childRefField?: string;
    }, parentId: string, ids: string[], item?: KeyObject): Promise<KeyObject>;
}

/** Parameters of the fulltext index search */
type IndexParam = NavParam & {
    /** Optional title */
    title?: string;
    /** Optional object name */
    object?: string;
    /** Optional domain */
    domain?: string;
};
/** Parameters of a place map display */
type MapParam = NavParam & {
    /** Optional display mode */
    mode?: string;
    /** Optional object name */
    obj?: string;
    /** Optional instance name */
    inst?: string;
    /** Optional placemap */
    placemap?: string;
    /** Optional coordinates */
    coords?: string;
    /** Optional move handler */
    onMove?: (lat: string, lng: string) => void;
};
/**
 * UI rendering, part of the UI engine `$ui` (see UIEngine): views: home page, views and dashboards, index search, crosstabs, tree views, calendars, timesheets, metrics, maps, trays, workflows, site map
 */
declare class UIRenderView {
    /**
     * Home page
     * @param ctn Container
     * @param options Options <code>\{ nav, showNav \}</code>
     * @param cbk Optional callback
     * @example
     * $ui.displayHome();
     * // with the navigation bar
     * $ui.displayHome(null, { nav: "new", showNav: true });
     */
    displayHome(ctn?: AnyContainer, options?: NavParam | null, cbk?: Callback): void;
    /**
     * Display a view
     * @param ctn Container
     * @param view View definition or name
     * @param options View options
     * @param cbk Optional callback
     * @example
     * // Display the view MyView in the work area
     * $ui.displayView(null, "MyView", {
     * 	onload: (ctn: Container, view?: View) => $console.log("loaded", view?.name)
     * });
     */
    displayView(ctn: AnyContainer, view: View | string, options?: ViewParam, cbk?: (ctn?: Container, view?: View) => void): void;
    /**
     * Display the user dashboard
     * @param ctn Container
     * @param view Optional dashboard name / null = overview
     * @param options View options
     * @param options.beforeload Optional before load callback
     * @param options.onload Optional onload callback
     * @param options.onunload Optional unload callback
     * @param cbk Optional callback
     * @example
     * // Dashboard overview
     * $ui.displayDashboard(null);
     * // A named dashboard
     * $ui.displayDashboard(null, "MyDashboard", { onload: () => $console.log("loaded") });
     */
    displayDashboard(ctn: AnyContainer, view?: string | null, options?: {
        beforeload?: Callback;
        onload?: (ctn: Container, view?: View) => void;
        onunload?: (ctn: Container, view?: View) => void;
    }, cbk?: (ctn?: Container, view?: View) => void): void;
    /**
     * Crosstab
     * @param ctn Container
     * @param object Name or Object
     * @param name Crosstab name
     * @param options Options <code>\{ inst, filters, options, nav, showNav \}</code>
     * @param cbk Optional callback
     * @example
     * // Crosstab "MyObjCrosstab" filtered on the year
     * $ui.displayCrosstab(null, "MyObject", "MyObjCrosstab", {
     * 	nav: "add",
     * 	filters: { myObjYear: "2026" }
     * });
     */
    displayCrosstab(ctn: AnyContainer, object: string | BusinessObject, name: string, options?: CrosstabNavParam, cbk?: Callback): void;
    /**
     * Index search form
     * @param ctn Container
     * @param options Options
     * @param cbk Optional callback
     * @example
     * $ui.displayIndex(null, { title: "Search", nav: "add" });
     */
    displayIndex(ctn?: AnyContainer, options?: IndexParam | null, cbk?: Callback): void;
    /**
     * Session index
     * @param ctn Container for result
     * @example
     * $ui.displayIndexSearchSession($("#result"));
     */
    displayIndexSearchSession(ctn: AnyContainer): void;
    /**
     * Index search in domain
     * @param ctn Container for result
     * @param domain Domain name
     * @param filter Optional filter
     * @param all False to limit search to objects updated by the user
     * @param options Options <code>\{ object, nav, showNav \}</code>
     * @example
     * // Records of the domain updated by the user
     * $ui.displayIndexSearchDomain($("#result"), "MyDomain", "", false);
     */
    displayIndexSearchDomain(ctn: Container, domain: string, filter?: string, all?: boolean, options?: IndexParam): void;
    /**
     * Index search in documents
     * @param ctn Container for result
     * @param req User request
     * @param list Array of objects with documents
     * @param options Options <code>\{ object, nav, showNav \}</code>
     * @example
     * $ui.displayIndexSearchDocs($("#result"), "contract", ["MyContract", "MyInvoice"]);
     */
    displayIndexSearchDocs(ctn: Container, req: string, list: string[], options?: IndexParam): void;
    /**
     * Index search result
     * @param ctn Container
     * @param req User request (see Simplicite.Ajax.indexsearch service)
     * @param options Options <code>\{ object, nav, showNav \}</code>
     * @param cbk Optional callback
     * @example
     * // Full-text search limited to an object
     * $ui.displayIndexSearch(null, "dupont", { object: "MyCustomer", nav: "add" });
     */
    displayIndexSearch(ctn: AnyContainer, req: string, options?: IndexParam, cbk?: Callback): void;
    /**
     * Display a tree view
     * @param ctn Optional container
     * @param object Root object
     * @param rowId Row ID of the record
     * @param name Treeview name
     * @param options Optional parameters <code>\{ inst, depth, display, menu, docked, onOpen, addMenu, delMenu, onPage \}</code>
     * @param options.inst optional instance name (default <code>tree_ajax_[tvname]_[object]</code>)
     * @param options.depth Max deep search (default <code>2</code>)
     * @param options.menu Add the tree in main menu (default open in container)
     * @param options.docked Open tree in left dock (default open in container)
     * @param options.display Optional to override default menu.treeview renderer
     * @param options.onOpen Optional open node handler <code>function(n,cbk)</code>
     * @param options.addMenu Optional add to menu handler
     * @param options.delMenu Optional remove from menu handler
     * @param options.onPage Optional add page handler
     * @param cbk Optional callback
     * @example
     * // Tree view of a record docked on the left
     * $ui.displayTreeView(null, "MyObject", rowId, "MyObjTree", { depth: 3, docked: true });
     */
    displayTreeView(ctn: AnyContainer, object: string | BusinessObject, rowId: string, name: string, options?: TreeParam, cbk?: Callback): void;
    /**
     * Timesheet of object
     * @param ctn Container
     * @param object Resource object 1 or 2, or panel instance of assign object
     * @param rowId Optional resource row ID
     * @param tsName Timesheet name
     * @param options Options
     * @param cbk Optional callback
     * @example
     * $ui.displayTimesheet(null, "MyResource", rowId, "MyTimesheet", {
     * 	nav: "add",
     * 	onload: (ctn: Container, obj: UIBusinessObject, ts: TimesheetMetadata) => $console.log("loaded", ts)
     * });
     */
    displayTimesheet(ctn: AnyContainer, object: string | BusinessObject, rowId: string, tsName: string, options?: TimesheetOptions, cbk?: Callback): void;
    /**
     * Gantt diagram based on timesheet data
     * @param ctn Container
     * @param object Assignment object
     * @param tsName Timesheet name
     * @param params Options
     * @param cbk Optional callback
     * @example
     * // Gantt of the assignments over a period
     * $ui.displayGantt(null, "MyAssignment", "MyTimesheet", { start: "2026-01-01", end: "2026-03-31" });
     */
    displayGantt(ctn: AnyContainer, object: string | BusinessObject, tsName: string, params?: TimesheetGanttParam, cbk?: Callback): void;
    /**
     * Calendar rendering
     * @param ctn Container
     * @param object Name or Business object
     * @param agenda Agenda name
     * @param params Options
     * @param cbk Optional callback
     * @example
     * $ui.displayCalendar(null, "MyMeeting", "MyMeetingAgenda", { nav: "add" });
     */
    displayCalendar(ctn: AnyContainer, object: string | BusinessObject, agenda: string, params?: KeyObject | null, cbk?: (obj: UIBusinessObject, agd: Agenda, p: KeyObject) => void): void;
    /**
     * Status metrics
     * @param c Container
     * @param object Name or Business object
     * @param params Options, with optional keys:
     * `fromDate` (from date search YYYY-MM-DD, default 1 week ago or obj.locals.ui.metrics.fromDate),
     * `toDate` (to date search YYYY-MM-DD, default today or obj.locals.ui.metrics.toDate),
     * `period` (group by period: 1=hour, 2=day, 3=week, 4=month, 5=quarter, 6=semester, 7=year / default 2=day or obj.locals.ui.metrics.period),
     * `palette` (palette name, default sysparam CHART_PALETTE or obj.locals.ui.metrics.palette),
     * `show` (options to show/hide elements, all visible by default: `count`, `duration`, `history`, `terminal`, `palette`, `statusColors` as booleans, and `period`/`fromDate`/`toDate` as true|false or 'read')
     * @param cbk Optional callback
     * @example
     * // Duration per status by week, without the palette selector
     * $ui.displayStatusMetrics(null, "MyObject", {
     * 	fromDate: "2026-01-01",
     * 	period: 3,
     * 	show: { palette: false }
     * });
     */
    displayStatusMetrics(c: AnyContainer, object: string | BusinessObject, params?: StatusMetricsDisplayParam, cbk?: Callback): void;
    /**
     * Trays based on a state model
     * @param ctn Container
     * @param obj Name or Business object
     * @param field Optional enum name (default is the status field)
     * @param options Optional parameters
     * @param cbk Optional callback
     * @example
     * // Trays on the status field
     * $ui.displayTray(null, "MyObject");
     * // Trays on another enumeration
     * $ui.displayTray(null, "MyObject", "myObjPriority");
     */
    displayTray(ctn: AnyContainer, obj: string | BusinessObject, field?: string, options?: KeyObject, cbk?: Callback): void;
    /**
     * Map service.
     * Loads object data to pass to the map renderer.
     * Can be a single object or multi-object
     * @param ctn Container to append the map to
     * @param params Options
     * @example
     * // Records of a place map
     * $ui.displayMap(null, { mode: "placemap", obj: "MyStore", placemap: "MyStoreMap", nav: "add" });
     * // One point
     * $ui.displayMap($("#map", ctn), { mode: "point", coords: "48.8566;2.3522" });
     */
    displayMap(ctn: AnyContainer, params: MapParam): void;
    /**
     * Workflow wrapper
     * @param ctn Container
     * @param wkf Business process or name
     * @param action Action <code>start|abort|lock|unlock|validate|cancel|back|list</code>
     * @param options Optional activity <code>\{ step \}</code>
     * @param cbk Optional callback
     * @example
     * // Start a process
     * $ui.displayWorkflow(null, "MyProcess", "start");
     * // Resume an activity
     * $ui.displayWorkflow(null, "MyProcess", "list", { step: "MyProcess-ACT1" });
     */
    displayWorkflow(ctn: AnyContainer, wkf: string | BusinessProcess | null, action?: ProcessActionType, options?: ProcessParam, cbk?: Callback): void;
    /**
     * Display the site map (plan du site) in the work area.
     * @example
     * $ui.displaySitemap();
     */
    displaySitemap(ctn?: AnyContainer): UIEngine;
}

/** Fulltext index metadata */
interface IndexMetadata {
    /** Objects with indexed documents */
    withDocs: ObjectMetadata[];
}
/**
 * Index search rendering
 */
declare class IndexSearch {
    /** current tab */
    private tab;
    /** user request */
    private req;
    /** selected domain */
    private domain;
    private domainFilter?;
    /** selected objects with docs */
    private docs;
    /** index search result */
    readonly searchResult: JQuery<HTMLElement>;
    /** domain search result */
    readonly domResult: JQuery<HTMLElement>;
    /** doc search result */
    readonly docResult: JQuery<HTMLElement>;
    /** session history */
    readonly histResult: JQuery<HTMLElement>;
    /** Search button */
    button?: JQuery;
    /** Search button DOM ID */
    private searchButtonId?;
    /** Hide the current searches */
    private save;
    /** Init the current searches */
    private init;
    /**
     * Index search form
     * @param ctn container
     * @param md search metadata
     * @param md.withDocs List of business objects with documents
     * @param p optional parameters
     */
    form(ctn: Container, md?: IndexMetadata, p?: IndexParam): void;
    /**
     * Search result rendering in a grid
     * @param ctn container
     * @param req user request
     * @param result search result
     * @param p optional parameters
     * @param p.msg TEXT code or message
     * @param p.layout grid layout (masonry, float, inline, article)
     */
    result(ctn: Container, req: string, result: KeyObject, p: {
        msg?: string;
        layout?: string;
    }, cbk?: Callback): void;
    /**
     * Filter dialog to pick some objects from user's menu
     * @param list list of selected objects (all if empty)
     * @param indexable true to list indexable objects only
     * @param cbk callback(list) with selected objects
     */
    filterDialog(list: string[], indexable: boolean, cbk?: (list?: string[]) => void): void;
    /**
     * Init index search widget
     * @param ctn div.searchbox container
     */
    searchBox(ctn: JQuery): void;
    private easterEgg;
    private handleSearchInput;
    /**
     * Move the virtual cursor in the listbox (APG combobox pattern)
     * @param input the combobox input
     * @param $items the option items collection
     * @param idx target index, or -1 to clear the selection
     */
    private setActive;
}

/**
 * Generic progess handler for XHR call
 */
type ProgressHandler = (this: XMLHttpRequestUpload, ev: ProgressEvent<XMLHttpRequestEventTarget>) => void;
/** JSON message */
interface MessageJSON {
    /** Level: `E` error, `W` warning, `I` info... */
    level?: string;
    /** Label */
    label?: string;
    /** Error message */
    error?: boolean;
    /** Message code */
    code?: string;
    /** Message text */
    text?: string;
    /** Related field name */
    field?: string;
    /** URL to redirect */
    redirect?: string;
    /** Javascript to execute */
    javascript?: string;
    /** Message parameters */
    params?: {
        /** Suggested value */
        suggest?: string;
    };
    /** Call to actions */
    actions?: Action[];
}
/**
 * Plain text message
 * - "message"
 * - "code:text#level#field..."
 * - "javascript: ..."
 * - "redirect: ..."
 */
type MessageText = string;
/** Plain text message "code:text#level#field..." or JSON */
type MessageAny = MessageText | MessageJSON;
/** Messages per rowId on list */
interface MessagesPerRow {
    [rowId: string]: MessageAny[];
}
/** Save list returns per rowId */
interface MessageSaveRows {
    /** Messages per row ID */
    messages?: MessagesPerRow;
    /** Errors per row ID */
    errors?: MessagesPerRow;
}
/** Back-end message(s) */
interface MessageFromBack {
    /** Message level */
    level?: number | string;
    /** Single message from action/save/delete */
    message?: MessageAny;
    /** Multiple messages from validate */
    messages?: MessageAny[];
    /** Description */
    description?: string;
    /** Details */
    details?: string | object;
    /** HTTP status */
    status?: number;
}
/** Generic response from server */
interface CallResponse {
    /** Service name or "error" */
    type: string;
    /** Service response */
    response: any;
    /** Error flag */
    error?: boolean;
}
/** JSON for module service */
interface ModuleAjax {
    /** Module row ID */
    row_id?: string;
    /** Delete flag */
    del?: string;
    /** Confirmation flag */
    confirm?: boolean;
    /** Application name */
    application?: string;
    /** Method */
    method?: string;
    /** Format */
    format?: string;
    /** Exploded format */
    exploded?: boolean;
}
/** Session typed with the legacy constants (see AppConstants) */
declare const SessionBase: new () => Readonly<typeof AppConstants>;
/**
 * Simplicit&eacute; Session to application.
 * @example
 * // Using within the generic UI
 * const app: Session = $app;
 * // Application root: "" (or "/myapp" if not deployed as root, or an absolute base URL)
 * // Using user thru the UI gateway (e.g. within a custom disposition)
 * const uiApp: Session = new Simplicite.Ajax("/myapp");
 * // Using public user thru the public UI gateway (e.g. from a public web site)
 * const publicApp: Session = new Simplicite.Ajax("/myapp", "uipublic");
 * // Using website user thru the API gateway (e.g. from a custom frontend)
 * const apiApp: Session = new Simplicite.Ajax("https://myhost/myapp", "api", "myuser", "mypassword");
 */
declare class Session extends SessionBase {
    /** Alias `Simplicite.Ajax.Grant` (6.3 compat) */
    static Grant: typeof Grant;
    /** Alias `Simplicite.Ajax.BusinessObject` (6.3 compat) */
    static BusinessObject: typeof BusinessObject;
    /** Alias `Simplicite.Ajax.BusinessProcess` (6.3 compat) */
    static BusinessProcess: typeof BusinessProcess;
    /** Alias `Simplicite.Ajax.ExternalObject` (6.3 compat) */
    static ExternalObject: typeof ExternalObject;
    /** Alias `Simplicite.Ajax.ObjectField` (6.3 compat) */
    static ObjectField: typeof ObjectField;
    /** Alias `Simplicite.Ajax.TreeView` (6.3 compat) */
    static TreeView: typeof TreeView;
    /** Alias `Simplicite.Ajax.View` (6.3 compat) */
    static View: typeof View;
    /** Alias `Simplicite.Ajax.SyncQueue` (6.3 compat) */
    static SyncQueue: typeof SyncQueue;
    /** Internal: error logs are active */
    private _errorActive;
    /** Internal: warning logs are active */
    private _warningActive;
    /** Internal: info logs are active */
    private _infoActive;
    /** Internal: debug logs are active */
    private _debugActive;
    /** Internal: application root */
    private _approot;
    /** Internal: base URL */
    private _baseURL;
    /** Internal: gateway (`ui`, `uipublic`, `api`...) */
    private _gateway;
    /** Internal: login service URL */
    private _loginURL?;
    /** Internal: logout service URL */
    private _logoutURL?;
    /** Internal: application service URL */
    private _appURL?;
    /** Internal: object service URL */
    private _objURL?;
    /** Internal: process service URL */
    private _pcsURL?;
    /** Internal: external object service URL */
    private _extURL?;
    /** Internal: I/O service URL */
    private _ioURL?;
    /** Internal: document service URL */
    private _documentURL?;
    /** Internal: content service URL */
    private _contentURL?;
    /** Internal: resource service URL */
    private _resourceURL?;
    /** Internal: login of the API gateway */
    private _login?;
    /** Internal: password of the API gateway */
    private _password?;
    /** Internal: session timeout */
    private _timeout;
    /** Internal: session has expired */
    private _expired;
    /** Internal: browser tab ID */
    private _clientTabId?;
    /** Internal: cache of business objects */
    private _businessObjectsCache;
    /** Internal: cache of business processes */
    private _businessProcessCache;
    /** Session has expired (unauthorized response) */
    get expired(): boolean;
    /** Application root */
    get approot(): string;
    /** Base URL */
    get baseURL(): string;
    /** Application service URL */
    get appURL(): string | undefined;
    /** Object service URL */
    get objURL(): string | undefined;
    /** Process service URL */
    get pcsURL(): string | undefined;
    /** I/O service URL */
    get ioURL(): string | undefined;
    /** User login name of the API gateway */
    get userName(): string | undefined;
    /** Info logs are active */
    get infoActive(): boolean;
    /** Warning logs are active */
    get warningActive(): boolean;
    /** Debug logs are active */
    get debugActive(): boolean;
    /** Session ID */
    sessionId?: string;
    /** Authentication token */
    authToken?: string;
    /** Expiry date of the token */
    authTokenExpiryDate?: Date;
    /** Expiry delay of the token */
    authTokenExpiryIn?: string;
    /** Application information */
    appinfo: KeyObject;
    /** Application version */
    version?: string;
    /** Platform revision */
    revision?: string;
    /** Ajax key */
    ajaxkey?: string;
    /** User grant */
    grant?: Grant;
    /** System parameters */
    sysparams: KeyObject;
    /** Translated texts */
    texts?: KeyString;
    /** Main menu */
    menu?: MainMenu;
    /** News */
    news: KeyObject[];
    /** Fulltext index metadata */
    indexMetadata?: IndexMetadata;
    /** Loaded views by name */
    views: {
        [key: string]: View;
    };
    /**
     * Without parameter for the global $app (initialized later)
     * @param approot Application root (either "/&lt;context root&gt;" or an absolute base URL)
     * @param gateway Gateway type to use :
     * <ul>
     * <li>1 or &quot;ui&quot;: Authenticated UI gateway (default)</li>
     * <li>2 or &quot;uipublic&quot; : Public UI gateway</li>
     * <li>4 or &quot;api&quot; : API gateway</li>
     * </ul>
     * @param login User's login (not required for UI gateways)
     * @param password User's password (not required for UI gateways)
     */
    constructor(approot?: string, gateway?: string, login?: string, password?: string);
    /**
     * Initialize Ajax contexts
     * @param approot Application root (either "/&lt;context root&gt;" or an absolute base URL)
     * @param gateway Gateway type to use :
     * <ul>
     * <li>1 or &quot;ui&quot;: Authenticated UI gateway (default)</li>
     * <li>2 or &quot;uipublic&quot; : Public UI gateway</li>
     * <li>4 or &quot;api&quot; : API gateway</li>
     * </ul>
     * @param login User's login (not required for UI gateways)
     * @param password User's password (not required for UI gateways)
     */
    init(approot: string, gateway?: string, login?: string, password?: string): void;
    /**
     * Get type from type label
     * @param name Type label from the <code>TYPES</code> constant)
     * @returns Type (one of <code>TYPE_*</code> contants)
     */
    getType(name: string): number;
    /**
     * Set timeout
     * @param timeout Timeout (seconds)
     */
    setTimeout(timeout: number): void;
    /**
     * Get timeout
     * @returns Timeout
     */
    getTimeout(): number;
    /**
     * Is Windows Internet Explorer?
     * @returns True if is Windows Internet Explorer
     */
    isWinIE(): boolean;
    /**
     * Get Windows Internet Explorer version
     * @returns Version
     */
    winIEVersion(): number;
    /**
     * Is Firefox?
     * @returns True if is Firefox
     */
    isFirefox(): boolean;
    /**
     * Is WebKit?
     * @returns True if is WebKit
     */
    isWebkit(): boolean;
    /**
     * Set gateway and credentials
     * @param gateway Gateway (one of <code>GATEWAY_*</code> constants)
     * @param login Login
     * @param password Password
     */
    setGateway(gateway?: number | string, login?: string, password?: string): void;
    /**
     * Get gateway
     * @returns Gateway (one of <code>GATEWAY_*</code> constants)
     */
    getGateway(): string;
    /**
     * Error handler
     * @param err Error message or error object
     * @param e Optional catched error
     */
    error(err: string | MessageFromBack, e?: unknown): void;
    /**
     * Warning handler
     * @param msg Message
     * @param e Optional catched error
     */
    warning(msg: string, e?: unknown): void;
    /**
     * Info handler
     * @param msg Message
     */
    info(msg: string): void;
    /**
     * Debug handler
     * @param msg Message
     */
    debug(msg: string): void;
    /**
     * Mark the session as expired (see the `expired` getter): the background calls are stopped
     */
    setExpired(): void;
    /**
     * Handler when session has expired on server side, by default throws HTTP 401 in console.
     * It can be overridden to return on the logon form in a UI context.
     */
    onExpiredSession(): void;
    /**
     * JSON message
     * @param level Error level
     * @param message Error message
     * @param details Error details
     */
    getStandardError(level: number | string, message: string, details: string | object): {
        /** Error level */
        level: number | string;
        /** Error message */
        message: string;
        /** Error details */
        details: string | object;
    };
    /**
     * Get the message in error
     * @param err with message, messages or description
     * @example
     * obj.save(item).catch((err: MessageFromBack) => $ui.alert({
     * 	type: "error",
     * 	content: String($app.getErrorMessage(err))
     * }));
     */
    getErrorMessage(err: string | MessageFromBack): MessageAny | undefined;
    /**
     * Set default global error handler active or inactive.
     * @param active Active status
     */
    setErrorHandlerActive(active: boolean): void;
    /**
     * Change default global error handler.
     * @param errorHandler Error handler function
     */
    setErrorHandler(errorHandler: (m: string | MessageFromBack, e?: unknown) => void): void;
    /**
     * Set default global warning handler active or inactive.
     * @param active Active status
     */
    setWarningHandlerActive(active: boolean): void;
    /**
     * Change default global warning handler.
     * @param warningHandler Warning handler function
     */
    setWarningHandler(warningHandler: (m: string, e?: unknown) => void): void;
    /**
     * Set default global information handler active or inactive.
     * @param active Active status
     */
    setInfoHandlerActive(active: boolean): void;
    /**
     * Change default global information handler.
     * @param infoHandler Information handler function
     */
    setInfoHandler(infoHandler: (m: string) => void): void;
    /**
     * Set default global debug handler active or inactive.
     * @param active Active status
     */
    setDebugHandlerActive(active: boolean): void;
    /**
     * Change default global debug handler.
     * @param debugHandler Debug handler function
     */
    setDebugHandler(debugHandler: (m: string) => void): void;
    /**
     * Convert a textual backend message to json { code, text, level, field, label, error }
     * or technical statement { redirect } or { javascript }
     * <ul>
     * <li>code: message code</li>
     * <li>text: optional contextual details</li>
     * <li>level: 'I'nfo, 'W'arning, 'E'rror, 'F'atal</li>
     * <li>field: optional field name of message</li>
     * <li>label: default text to display in user language</li>
     * <li>error: true when level is fatal or error</li>
     * <li>params: optional parameter key/value (suggest)</li>
     * <li>actions: optional call to actions</li>
     * </ul>
     * @param msg formatted backend message JSON or 'code:text#level#field#param:value' or 'redirect:url' or 'javascript:code'
     */
    messageToJson(msg: MessageAny): MessageJSON;
    /** @ignore */
    _url(url?: string, tokenAsParam?: boolean): string;
    /** @ignore */
    _ajaxkey(key?: string | null): string;
    /**
     * Identify the client tab
     * @param id optional Id to force the value (null to remove)
     * @returns tab unique Id
     */
    clientTabId(id?: string): string;
    /**
     * Random string
     * @param len Length
     * @returns Random string of specified length
     */
    randomString(len: number): string;
    /**
     * Returns local data URL (e.g. suitable for src of img tags).
     * @param doc Document with mime type and base64 image or thumbnail
     * @param thumb Return document thumbnail?
     * @example
     * // Image document inlined in the record
     * const item: KeyObject = await obj.get(rowId, { inlineDocs: ["myObjImage"] });
     * $("<img/>").attr("src", $app.dataURL(item.myObjImage) || "").appendTo(ctn);
     */
    dataURL(doc: {
        mime?: string;
        thumbnail?: string;
        content?: string;
    }, thumb?: boolean): string | undefined;
    /**
     * Returns the URL of a document.
     * @param object Document with `object`, `field`, `rowId` and `docId`
     */
    documentURL(object: DocumentDB): string;
    /**
     * Returns the URL of a document.
     * @param object Object name
     * @param field Field name
     * @param rowId Object record row ID
     * @param docId Document ID (can be omitted then a lookup is done on record matching rowId)
     * @param cdisp Disposition: attachment or inline (defaults to inline)
     * @example
     * const url: string = $app.documentURL("MyObject", "myObjDocument", rowId);
     * $("<a/>").attr("href", url).text($T("DOWNLOAD")).appendTo(ctn);
     */
    documentURL(object: string, field: string, rowId: string, docId?: string, cdisp?: string): string;
    /**
     * Returns image URL.
     * @param object Object name
     * @param field Field name
     * @param rowId Object record row ID
     * @param docId Document ID
     * @param thumb Return thumbnail image
     * @example
     * // Thumbnail of an image field
     * const src: string = $app.imageURL("MyObject", "myObjImage", rowId, docId, true);
     * $("<img/>").attr("src", src).appendTo(ctn);
     */
    imageURL(object: string, field: string, rowId: string, docId: string, thumb?: boolean): string;
    /**
     * Returns content URL.
     * @param file Content file name
     */
    contentURL(file: string): string;
    /**
     * Returns disposition resource URL.
     * @param code Resource code
     * @param type Resource type (IMG=image (default), ICO=Icon, CSS=stylesheet, JS=Javascript, HTML=HTML)
     */
    dispositionResourceURL(code: string, type: string): string;
    /**
     * Returns resource URL.
     * @param resId Resource ID (e.g. taken from business object or external object resources list in metadata)
     */
    resourceURL(resId: string): string;
    /**
     * Returns Object resource URL.
     * @param code Resource code
     * @param type Resource type (IMG=image (default), ICO=Icon, CSS=stylesheet, JS=Javascript, HTML=HTML)
     * @param object Object name: ObjectInternal or ObjectExternal (for Disposition use dispositionResourceURL)
     * @param objId Object row ID (not the resource row ID)
     */
    getResourceURL(code: string, type: string, object?: string, objId?: string, nologs?: boolean): string;
    /**
     * Returns Static resource URL
     * @param path
     */
    getStaticRootResourceURL(path: string): string;
    /**
     * Icon URL
     * @param name Resource icon name
     */
    getIconURL(name: string): string;
    /**
     * Internal: log a deprecation warning.
     * @param exception Deprecated feature
     * @param message Message to log
     * @param outdated true to log as an error
     */
    _deprecated(exception?: string, message?: string, outdated?: boolean): void;
    static deprecated(exception?: string, message?: string, outdated?: boolean): void;
    /**
     * Internal: warn when a callback function is passed instead of using the returned Promise.
     * @param arg Argument to check
     */
    _deprecCall(arg: unknown): void;
    /**
     * Legacy call parameter URL encoded
     * @ignore
     */
    _callParams(data: KeyObject | null): string;
    /**
     * Call parameter
     * @returns FormData
     * @ignore
     */
    _callFormData(data: KeyObject | null): FormData;
    /** @ignore */
    _callAuth(login: string, password: string): string;
    /** @ignore */
    _credentials(xhr: XMLHttpRequest): void;
    /**
     * Authorization headers of the session (for XHR or fetch)
     * @ignore
     */
    _authHeaders(): KeyString;
    /** @ignore */
    _call(url: string, params: KeyObject | null, callback?: (r: CallResponse) => void, scope?: object, progress?: ProgressHandler): void;
    /**
     * Promise of the raw service response (never rejected)
     * @ignore
     */
    _callRaw(url: string, params: KeyObject | string | null, progress?: ProgressHandler): Promise<CallResponse>;
    /**
     * Promise of the service response, rejected with the error response
     * @ignore
     */
    _callAsync(url: string, params: KeyObject | string | null, progress?: ProgressHandler): Promise<any>;
    /** @ignore */
    _callResponse(xhr: XMLHttpRequest, callback?: (r: CallResponse) => void, scope?: object): any;
    /**
     * Internal import service: read the first lines of a URL
     * @param url URL to read
     * @param params Optional parameters posted to a local URL
     * @param maxLines Max number of lines
     * @returns Promise of the first lines, rejected on error or timeout
     * @ignore
     */
    _readLines(url: string, params: KeyObject, maxLines: number): Promise<string[]>;
    /**
     * Loads application info data.
     */
    getAppInfo(): Promise<object>;
    /**
     * Loads system info data.
     */
    getSysInfo(): Promise<object>;
    /**
     * Loads grant data.
     * @param params Optional parameters
     * @param params.inlinePicture Inline picture (false if absent or undefined)
     * @param params.web true to load UI stuff
     * @param params.texts true to TEXTs
     * @example
     * // User rights are already loaded in the UI
     * if ($grant.hasResponsibility("MY_GROUP")) {
     * 	// ...
     * }
     * // Reload them from the server
     * $app.getGrant().then((grant: Grant) => $console.log(grant.login));
     */
    getGrant(params?: {
        inlinePicture?: boolean;
        web?: boolean;
        texts?: boolean;
    }): Promise<Grant>;
    /**
     * Set password.
     * @param password Password
     */
    setPassword(password: string): Promise<object>;
    /**
     * Loads basic user data (login, name, email, picture).
     * @param login User login
     * @param params Optional parameters
     * @param params.inlinePicture Inline picture (false if absent or undefined)
     * @example
     * const user: KeyObject = await $app.getUserInfo($grant.login, { inlinePicture: true });
     */
    getUserInfo(login: string, params?: {
        inlinePicture?: boolean;
    }): Promise<object>;
    /**
     * Change user's language
     * @param lang language code (FRA, ENU...)
     * @param params Optional parameters
     * @param params.pref Update also the preferred language
     */
    changeLang(lang: string, params?: {
        pref?: boolean;
    }): Promise<boolean>;
    /**
     * Loads menu data.
     */
    getMenu(): Promise<KeyObject>;
    /**
     * Get alls granted crosstabs
     */
    getCrosstabs(): Promise<CrosstabMetadata[]>;
    /**
     * Get alls granted external objects
     * @param widget only UI widgets?
     */
    getExternalObjects(widget: boolean): Promise<ExternalMetadata>;
    /**
     * Loads view definition.
     * @param name View name
     * @param params Optional parameters
     * @param params.home Optional for home or panel instance (default true to get home object instances)
     */
    getView(name: string, params?: {
        home?: boolean;
    }): Promise<View>;
    /**
     * Upgrade view raw JSON into View instance and set the cache
     * @param name View name
     * @param view View definition
     */
    setView(name: string, view: KeyObject | View): View;
    /**
     * Treeview services
     * @param name Treeview name
     * @param params Optional parameters
     * @param params.service metadata (default), page, getmenu, addmenu, delmenu
     * @param params.object optional object name
     * @param params.rowid optional object rowId
     * @param params.child child object of page service
     * @param params.page page number of page service
     */
    treeview(name: string, params?: {
        service?: string;
        object?: string;
        rowid?: string;
        child?: string;
        page?: number;
    }): Promise<KeyObject[]>;
    /**
     * Loads system parameters.
     */
    getSysParams(): Promise<object>;
    /**
     * Get system parameter value.
     * @param name System parameter name
     * @param params Optional parameters
     * @param params.force Force read system parameter value from the database?
     * @example
     * $app.getSysParam("MY_SYSTEM_PARAM").then((value: string) => {
     * 	// ...
     * });
     * // Force the reading from the database
     * const value: string = await $app.getSysParam("MY_SYSTEM_PARAM", { force: true });
     */
    getSysParam(name: string, params?: {
        force?: boolean;
    }): Promise<string>;
    /**
     * Set a user system parameter.
     * @param name Parameter name
     * @param value Parameter value (if undefined parameter is unset)
     * @param save Save parameter in user parameters (if undefined parameter is not saved)
     * @example
     * // Set a user parameter for the session only
     * $app.setSysParam("MY_USER_PARAM", "value");
     * // Set and save it in the user parameters
     * $app.setSysParam("MY_USER_PARAM", "value", true);
     */
    setSysParam(name: string, value?: string, save?: boolean): Promise<string>;
    /**
     * Loads texts.
     */
    getTexts(): Promise<object>;
    /**
     * Get a field definition.
     * @param name Field name
     */
    getField(name: string): Promise<object>;
    /**
     * Get a list of value.
     * @param name List of values name
     */
    getListOfValues(name: string): Promise<object>;
    /**
     * Get instance of business object.
     * @example
     * // app is a Simplicite.Ajax instance
     * const obj: UIBusinessObject = app.getBusinessObject("MyObject");
     * // other instance of obj
     * const tmp: UIBusinessObject = app.getBusinessObject("MyObject", "tmpObj");
     * @param obj Object name or business object
     * @param inst Optional instance name (default main instance: the_ajax_&lt;object name&gt;)
     */
    getBusinessObject(obj: string | BusinessObject, inst?: string): UIBusinessObject;
    /**
     * Remove objects from cache
     * @param obj Object name or business object
     */
    clearCache(obj: string | BusinessObject): void;
    /**
     * Get a new business process.
     * @example
     * // app is a Simplicite.Ajax instance
     * const pcs: BusinessProcess = app.getBusinessProcess("MyProcess");
     * @param name Business process name
     */
    getBusinessProcess(name: string): BusinessProcess;
    /**
     * Returns true if value is <code>1|true|yes|y</code>
     * @param value parameter value
     * @returns Is value true?
     */
    isTrue(value: unknown): boolean;
    /**
     * Returns true if value is <code>0|false|no|n</code>
     * @param value parameter value
     * @returns Is value false?
     */
    isFalse(value: unknown): boolean;
    /**
     * Get text value. Same as global <code>$T</code>
     * @param code Text code
     * @param plural True to get the plural value if known
     * @returns Text value
     */
    static getText(code: string, plural?: boolean, texts?: KeyString): string;
    /**
     * Get text value.
     * @param code Text code
     * @param plural True to get the plural value if known
     * @returns Text value
     * @example
     * // Translated text (same as $T(code) and $app.T(code))
     * const label: string = $app.getText("MY_TEXT_CODE");
     * // Plural value of a "singular|plural" text
     * const days: string = $app.getText("DAY", true);
     */
    getText(code: string, plural?: boolean, texts?: KeyString): string;
    /**
     * Get text value (alias to <code>getText</code>).
     * @param code Text code
     * @param plural True to get the plural value if known
     * @returns Text value
     * @example
     * const label: string = $app.T("MY_TEXT_CODE");
     * // or with the global shorthand
     * const label2: string = $T("MY_TEXT_CODE");
     */
    T: (code: string, plural?: boolean, texts?: KeyString) => string;
    /**
     * Loads news.
     * @param params Optional parameters
     * @param params.count Return news count only (false if absent or undefined)
     * @param params.inlineImages Inline news image (false if absent or undefined, not taken into account if count is true)
     */
    getNews(params?: {
        count?: boolean;
        inlineImages?: boolean;
    }): Promise<object>;
    /**
     * Loads external object definition.
     * @param name External object name
     */
    getExternalObject(name: string): Promise<ExternalMetadata>;
    /**
     * External object URL.
     * @param name Object name
     * @param params Optional parameters (object or string)
     * @param embedded True to get a relative URL, false to get the full http URL (loadURL will create an iframe)
     * @example
     * // Display an external object in the work area
     * $ui.loadURL(null, $app.getExternalObjectURL("MyExternalObject", { param1: "value" }));
     */
    getExternalObjectURL(name: string, params?: string | object, embedded?: boolean): string;
    /**
     * Search from index.
     * @param request Index search request string
     * <ul>
     * <li>simple text with wildcards and operators</li>
     * <li>in:domain:xxx[:all] = to get recent objects in a specific domain 'xxx', 'all' or by default those updated by the user</li>
     * <li>in:docs:obj1[;obj2;obj3...] text = to search the text in joined documents of listed objects</li>
     * </ul>
     * @param params Optional parameters
     * @param params.inlineDocs Inline documents (false if absent or undefined, can be a boolean or an array of document fields to inline) ?
     * @param params.inlineThumbs Inline image documents thumbnails (false if absent or undefined) ?
     * @param params.inlineObjs Inline objects fields items (false if absent or undefined, can be a boolean or an array of object fields to inline) ?
     * @param params.metadata gets the search engine metadata <code>{ indexed:[{name,label},...], withDocs:[{name,label},...] }</code>
     * @param params.useFilter apply user preference INDEX_OBJ_FILTER to limit search
     */
    indexsearch(request: string, params?: InlineParam & {
        metadata?: boolean;
        useFilter?: boolean;
    }): Promise<KeyObject[]>;
    /**
     * Bookmark service
     * @param method show, add, delete, toggle
     * @param params method parameters data or show
     */
    bookmark(method: string, params?: {
        data?: object;
        show?: boolean | string;
    }): Promise<KeyObject>;
    /**
     * Dashboard service
     * @param method list | delete | rename
     * @param params method parameters
     */
    dashboard(method: string, params?: KeyObject): Promise<KeyObject>;
    /**
     * User guide service
     * @param method tour
     * @param params method parameters
     */
    guide(method: string, params?: {
        name?: string;
        step?: string;
        usageId?: string;
        tour?: KeyObject;
    }): Promise<KeyObject>;
    /**
     * Social post service.
     * @param params Optional parameters
     * @param params.counters true to get counters without posts
     * @param params.object Optional object name
     * @param params.rowId Optional row ID
     * @param params.page Optional page to search, -1=no search
     * @param params.activity true to include activity message
     * @param params.level optional level filter
     * @param params.audit to list audit message only
     * @param params.del true to delete the post (default the service upsert the post)
     * @param params.like Optional true to like, false to unlike
     * @param params.status Optional status to update
     * @param params.follow true to get follow counters
     * @param post optional post to save or delete <code>{ id, userId, message, pub, object, rowId }</code>
     */
    social(params: {
        counters?: boolean;
        object?: string;
        rowId?: string;
        page?: number;
        activity?: boolean;
        level?: string;
        audit?: boolean;
        auditAction?: string;
        del?: boolean;
        like?: boolean;
        status?: string;
        follow?: boolean;
    }, post?: object): Promise<KeyObject>;
    /**
     * Social follow service.
     * @param params parameters
     * @param params.method follow|unfollow|accept|deny|search
     * @param params.param related userId or search request
     * @param params.object optional User object to use
     * @param params.all optional to search all authors or not
     */
    follow(params?: {
        method: string | null;
        param?: string | null;
        object?: string;
        all?: boolean;
    }): Promise<KeyObject>;
    /**
     * Firebase service to send mobile notification
     * @param data Parameters
     * @param data.title Optional title
     * @param data.message Message body
     * @param data.to <code>\{users, groups\}</code> list of logins or groups, or <code>'all'</code> to notify all users
     * @param data.token Optional refresh device token
     * @param data.oldtoken Optional previous token to remove
     */
    firebase(data: {
        title?: string;
        message?: string;
        to?: FirebaseRecipients;
        token?: string;
        oldtoken?: string;
    }): Promise<object>;
    /**
    TODO
    */
    webpush(data: object): Promise<object>;
    /**
     * Syntax service: will return an object with the results
     * @param data parameters
     * @param data.type type of syntax service: field
     * @param data.objectid object id for field name
     * @param data.value value to validate or transform
     */
    syntax(data: {
        type: string;
        objectid: string;
        value: any;
        refobjectid?: string;
    }): Promise<KeyObject>;
    /**
     * Palette service
     */
    palette(): Promise<Palette[]>;
    /**
     * Module services
     * @param params parameters
     * @param params.row_id Module row ID
     * @param params.del Deletion action <code>start|status</code>
     * @param params.confirm Confirm deletion?</li>
     * @param params.application or Application name
     * @param params.method import, export, status
     * @param params.format export to xml or json
     * @param params.exploded exploded files in export?
     */
    module(params: ModuleAjax): Promise<KeyObject>;
    /**
     * Session init (retrieves server side session identifier and auth token).
     * @param authToken Auth token to (re)use (in case of persistent tokens)
     * @param params Optional parameters
     * @param params.scope Optional session scope
     * @param params.clientId Optional client Id
     */
    session(authToken: string, params?: {
        scope?: string;
        clientId?: string;
    }): Promise<KeyObject>;
    /**
     * Login (same as session()).
     * @param authToken Auth token to (re)use (in case of persistent tokens)
     * @param params Optional parameters
     * @param params.scope Optional session scope
     */
    login: (authToken: string, params?: {
        scope?: string;
        clientId?: string;
    }) => Promise<KeyObject>;
    /**
     * Logout (in case of a persistent token it is deleted)
     */
    logout(): Promise<object>;
    /**
     * Monitoring service
     * @param m Monitoring service or plain JSON object to store
     * @param params Optional parameters <code>\{ session \}</code>
     * @param cbk Optional callback for response
     */
    monitor(m: string | object, params?: object, cbk?: (r: KeyObject[]) => void): void;
    /**
     * Parse a date value into a Javascript Date
     * @param v Date value (<code>YYYY-MM-DD</code>)
     * @returns Javascript date
     */
    parseDateValue(v: string): Date;
    /**
     * Parse a date time value into a Javascript Date
     * @param v Date time value (<code>YYYY-MM-DD HH:mm:ss</code>)
     * @returns Javascript date
     */
    parseDateTimeValue(v: string): Date;
    /**
     * Parse a Javascript Date into a date value
     * @param d Javascript date
     * @returns Date value (<code>YYYY-MM-DD</code>)
     */
    toDateValue(d: Date): string;
    /**
     * Parse a Javascript Date into a time value
     * @param d Javascript date
     * @returns Time value (<code>HH:mm:ss</code>)
     */
    toTimeValue(d: Date): string;
    /**
     * Parse a Javascript Date into a date time value
     * @param d Javascript date
     * @returns Date time value (<code>YYYY-MM-DD HH-mm-ss</code>)
     */
    toDateTimeValue(d: Date): string;
    /**
     * Encode a string to base64
     * @param s Input string
     * @returns Base64-encoded string
     */
    base64Encode(s: string): string;
    /**
     * Encode an array buffer (such as got from a local file read) to to base64
     * @param b Array buffer
     * @returns Base64-encoded string
     */
    base64EncodeArrayBuffer(b: ArrayBuffer): string;
    /**
     * Decode a base64 string to string
     * @param s Base64-encoded string
     * @returns Decoded string
     */
    base64Decode(s: string): string;
    /**
     * Checks if a value is empty
     * @param x Value
     */
    isEmpty(x: unknown): boolean;
}

/**
 * Websocket tools used by responsive UI
 */
declare class EventWebSocket {
    /** Web socket */
    ws?: WebSocket;
    /** Web socket URL */
    url?: string;
    /** Handlers per message type */
    handlers: KeyObject;
    /** Web socket is started */
    started: boolean;
    /** Handlers to bind when started */
    toBind: {
        /** Event type */
        type: string;
        /** Event handler */
        handler: (msg: KeyObject) => void;
    }[];
    /** Retry counter of the connection */
    retry: number;
    constructor();
    /**
     * Binds a handler for specified event type
     * @param type Event type (log, notification, object...)
     * @param handler Handler function
     */
    bind(type: string, handler: (msg: KeyObject) => void): void;
    /**
     * Unbind a handler.
     * @param type Message type
     * @param handler Handler to remove (all handlers of the type if undefined)
     */
    unbind(type: string, handler: (msg: KeyObject) => void): void;
    /**
     * Restart websocket and rebind all handlers when the service has been closed.
     * (invalidated old HTTPSession on server side, but UI is still alive with the user-token/cookie)
     */
    rebind(): void;
    /**
     * Reason of a web socket close code.
     * @param code Close code
     * @returns Reason
     */
    getReason(code: number): string;
    /**
     * Starts event websocket
     */
    start(uri?: string, cbk?: Callback): void;
    /**
     * Open the web socket (when enabled on server side).
     * @param cbk Optional callback when started
     */
    init(cbk?: Callback): void;
    /**
     * Stops event websocket
     */
    stop(): void;
    /**
     * Sends message to event websocket
     */
    send(msg: string): void;
    /**
     * Called when the web socket is started.
     * @param cbk Optional callback
     */
    onStart(cbk?: Callback): void;
}

/**
 * UI rendering, part of the UI engine `$ui` (see UIEngine): lists: object summary, search, fields, lists and rows
 */
declare class UIRenderList {
    /**
     * Object summary
     * @param ctn Container
     * @param object Object
     * @param rowId Object row ID
     * @param options Optional parameters
     * @param options.inst Optional instance name
     * @param options.parent Optional parent context
     * @param options.icon Display the object icon or image thumbnail, default true
     * @param options.image Display the object image if any, default true
     * @param options.label Optional label, default: object label
     * @param options.userKey Optional user key, default: object user key
     * @param options.fields Optional array of fields to display
     * @param options.onopen Optional handler on open, default: engine.openObject
     * @param options.actions Optional array of row/rowPlus actions, default row actions
     * @param options.item Optional object values
     * @param options.maxFields Optional max fields to display
     * @example
     * // Summary card of a record with 3 fields
     * $ui.displaySummary($("#summary", ctn), "MyObject", rowId, {
     * 	fields: [obj.getField("myObjCode")!, obj.getField("myObjStatus")!, obj.getField("myObjAmount")!],
     * 	maxFields: 3,
     * 	image: false
     * });
     */
    displaySummary(ctn: AnyContainer, object: string | UIBusinessObject, rowId: string, options?: SummaryParam): Promise<void>;
    /**
     * Search form
     * @param ctn Parent container
     * @param object Name or Business Object
     * @param options Options to override Globals
     * @param cbk Optional callback
     * @example
     * $ui.displaySearch(null, "MyObject", { position: "popup" });
     */
    displaySearch(ctn: AnyContainer, object: string | BusinessObject, options?: SearchParam, cbk?: (obj: UIBusinessObject, p: SearchParam) => void): Promise<void>;
    /**
     * Display a field in the container
     * @param ctn Target container
     * @param obj Business Object
     * @param field Field definition
     * @param index Optional index for edit list
     * @param disp optional display 'full' (default = label+input+help) | 'label' | 'input' | 'preview' | 'value' | 'help'
     * @param p context parameters (form, formTab to focus, inline field of link, parent object, isExtended, hasMore, refb buttons, promises...)
     * @returns Field with 'ui' initialized
     * @example
     * // Field input only, in a custom container of the form
     * $ui.displayField($("#myCustomZone", ctn), obj, obj.getField("myObjComment")!, undefined, "input");
     * // Read-only value
     * $ui.displayField($("#myValue", ctn), obj, obj.getField("myObjAmount")!, undefined, "value");
     */
    displayField(ctn: AnyContainer, obj: BusinessObject, field: KeyObject | ObjectField, index?: string, disp?: FieldDisplay | null, p?: KeyObject): ObjectField;
    /**
     * Build a list with the object search
     * @param ctn Target container
     * @param object Name or Business Object
     * @param options Options to override Globals
     * @param cbk Optional callback
     * @example
     * $ui.displayList(null, "MyObject", {
     * 	nav: "add",
     * 	filters: { myObjStatus: "OPEN" },     // changeable by the user
     * 	fixedFilters: { myObjType: "A" }      // not changeable by the user
     * });
     */
    displayList(ctn: AnyContainer, object: string | BusinessObject, options?: ListParam | null, cbk?: (obj?: UIBusinessObject, p?: ListParam) => void): void;
    /**
     * Copy context messages from metadata to parameters
     * @param md Object metadata
     * @param p Parameters with messages (form, list...)
     */
    copyMsg(md: ObjectMetadata, p: {
        msg?: MessageAny | MessageAny[];
    }): void;
    /**
     * Build a record of list
     * @param ctn Nav container
     * @param elt row container (tr or div)
     * @param object Object
     * @param rowId Object row Id
     * @param options List options to override global row options
     * @example
     * // Rebuild one row of a list after an update
     * const row: JQuery = $("tr[data-rowid='" + rowId + "']", ctn);
     * $ui.displayRow(ctn, row, obj, rowId, { inst: obj.getInstanceName() });
     */
    displayRow(ctn: Container, elt: AnyContent, object: BusinessObject, rowId: string, options: ListParam): Promise<void>;
    /**
     * Merge the partial metadata of the current row with the object metadata.
     * @param obj Business object with the current row
     * @param p Row parameters (the multi-creation `index` is forced)
     */
    mergeRowMeta(obj: BusinessObject, p: {
        index?: string;
    }): void;
}

/**
 * UI rendering, part of the UI engine `$ui` (see UIEngine): forms: forms, inlined and bulk update forms, completion, help
 */
declare class UIRenderForm {
    /**
     * Open object form: default displayForm with nav add
     * @param ctn Target container
     * @param obj Name or Business Object
     * @param rowId Referenced row ID
     * @param nav 'new' or 'add' (default)
     * @example
     * // Open the form in the work area and add it to the navigation history
     * $ui.openForm(null, "MyObject", rowId);
     * // as a new navigation entry
     * $ui.openForm(null, "MyObject", rowId, "new");
     */
    openForm(ctn: AnyContainer, obj: string | BusinessObject, rowId: string, nav?: NavAction): void;
    /**
     * Build a form with the object item
     * @param ctn Target container
     * @param object Object
     * @param rowId Row ID to get
     * @param options Options to override globals
     * @param cbk Optional callback(obj, params)
     * @example
     * // Display a record in the work area
     * $ui.displayForm(null, "MyObject", rowId, { nav: "add" });
     * // Creation form
     * $ui.displayForm(null, "MyObject", $app.DEFAULT_ROW_ID, { nav: "add" });
     */
    displayForm(ctn: AnyContainer, object: string | BusinessObject, rowId: string, options?: FormParam | null, cbk?: (obj: UIBusinessObject, p: FormParam) => void): void;
    /**
     * Display form of inlined link (cardinality 0,1 or 1,1 with inline rendering)
     * @param ctn Container
     * @param o object
     * @param params Reference data, with optional keys:
     * `inline` (true), `parent` (parent object `{ name, inst, field, rowId, object }`),
     * `link` (link metadata), `title` (optional link title, empty = no title)
     * @example
     * // Inlined form of a 0,1 link in a parent form
     * const child: UIBusinessObject = $app.getBusinessObject("MyChild", "inline_MyChild");
     * $ui.displayInlinedForm($("#myChild", ctn), child, {
     * 	parent: { name: obj.getName(), inst: obj.getInstanceName(), field: "myChildParentId", rowId: obj.getRowId(), object: obj }
     * });
     */
    displayInlinedForm(ctn: AnyContainer, o: BusinessObject, params: ListParam, cbk?: Callback): void;
    /**
     * Build a form for bulk update
     * @param ctn Target container
     * @param object Name or BusinessObject
     * @param options See Globals.form
     * @param cbk Optional callback
     * @example
     * // Bulk update of the selected rows of a list
     * $ui.displayUpdateForm(null, "MyObject", {
     * 	title: "Update the status",
     * 	onsave: (ctn: Container, o: BusinessObject, cbk?: Callback) => { $ui.toast("Updated"); cbk?.(); }
     * });
     */
    displayUpdateForm(ctn: AnyContainer, object: string | BusinessObject, options?: UpdateFormParam, cbk?: (obj: UIBusinessObject, p: UpdateFormParam) => void): void;
    /**
     * Field completion on field
     * @param ctn Container
     * @param object Object or name
     * @param field Field or name
     * @param index Optional row index (edit list)
     * @param req User request
     * @param cbk Callback with search result
     * @param ctx Optional context CONTEXT_SEARCH or UPDATE
     * @example
     * // Values starting with "Par" for the field myObjCity
     * $ui.displayCompletion(ctn, obj, "myObjCity", null, "Par", (list: KeyObject[]) => $console.log(list));
     */
    displayCompletion(ctn: AnyContainer, object: string | BusinessObject, field: string | ObjectField, index?: string | null, req?: string, cbk?: (p: KeyObject[]) => void, ctx?: number): Promise<void>;
    /**
     * Foreign-key completion
     * @param ctn Container
     * @param obj Object
     * @param field Referenced field
     * @param index Optional index (edit list rowId or action name)
     * @param sel Optional select item callback(item)
     * @param disp Optional display item callback(item, ref)
     * @example
     * // Foreign-key completion with a custom item rendering
     * $ui.fkCompletion(ctn, obj, obj.getField("myObjCustomerId")!, undefined,
     * 	(item: KeyObject) => $console.log("selected", item),
     * 	(item: KeyObject, ref: BusinessObject) => $("<span/>").text(item.label + " (" + ref.getLabel() + ")"));
     */
    fkCompletion(ctn: AnyContainer, obj: BusinessObject, field: ObjectField, index?: string, sel?: (item: KeyObject) => void, disp?: (item: KeyObject, ref: BusinessObject) => string | JQuery): Promise<void>;
    /**
     * Link map filters
     * @param ctn Container
     * @param obj Business Object
     * @param fk Foreign key
     * @param index Index
     * @returns Filters
     */
    linkMapFilters(ctn: AnyContainer, obj: BusinessObject, fk: KeyObject, index?: string): KeyObject;
    /**
     * Datamap completion
     * @param ctn Container
     * @param obj Object
     * @param fld Referenced field
     * @param index Optional row index (edit list)
     * @param sel Optional select item callback(item)
     * @param disp Optional display item callback(item, ref)
     * @example
     * $ui.datamapCompletion(ctn, obj, "myObjZipCode", undefined, (item: KeyObject) => $console.log("selected", item));
     */
    datamapCompletion(ctn: Container, obj: BusinessObject, fld: string | ObjectField, index?: string, sel?: (item: KeyObject) => void, disp?: (item: KeyObject, ref: BusinessObject) => string | JQuery): Promise<void>;
    /**
     * Object help: call the help service and open a dialog
     * @param obj Object
     * @example
     * $ui.displayHelp(obj);
     */
    displayHelp(obj: BusinessObject): void;
}

/**
 * UI rendering, part of the UI engine `$ui` (see UIEngine): tools dedicated to the end-users (user filters, mentions,
 * bookmarks, social posts, web news, preferences, guides)
 */
declare class UIRenderUser {
    /**
     * Display the user filters: date range and fields
     * @param ctn Optional container (dialog if null)
     * @param options Options <code>\{ bar \}</code>
     * @example
     * // User filters in a dialog
     * $ui.displayUserFilters(null);
     * // as a bar in a container
     * $ui.displayUserFilters($("#filters"), { bar: true });
     */
    displayUserFilters(ctn: AnyContainer | null, options?: UserFilterParam): Promise<void>;
    /**
     * Display a mentions resource
     * @param ctn Optional container (dialog if unset)
     * @param options Options
     * @param options.name HTML content name (default 'MENTIONS')
     * @param options.title Optional dialog title (default name translation)
     * @param options.width Optional dialog width (default 70%)
     * @example
     * $ui.displayMentions(null, { name: "MY_LEGAL_NOTICE", title: "Legal notice", width: "50%" });
     */
    displayMentions(ctn?: AnyContainer, options?: {
        name?: string;
        title?: string;
        width?: string;
    }): Promise<void>;
    /**
     * Display the bookmarks
     * @param ctn Optional container
     * @param options <code>\{show:top|bottom|true|false\}</code> or <code>\{action,object,rowId,element\}</code> to delete/toggle the object bookmark
     * @example
     * // Show the bookmarks on top
     * $ui.displayBookmarks(null, { show: "top" });
     * // Toggle the bookmark of a record
     * $ui.displayBookmarks(null, { action: "toggle", object: obj, rowId: obj.getRowId() });
     */
    displayBookmarks(ctn?: AnyContainer, options?: {
        show?: boolean | string;
        action?: string;
        object?: BusinessObject;
        rowId?: string;
        element?: JQuery;
    }): void;
    /**
     * Displays social posts
     * @param ctn Container
     * @param options Social options
     * @param options.object Optional object to limit search
     * @param options.rowId Optional object ID to limit search
     * @param options.activity True to display object activities
     * @param options.onpost Social service(item) to upsert post
     * @param options.ondel Social service(id) to delete post
     * @param options.onlist Social service(page,act) to search posts
     * @param options.onlike Social service(id,like) to (un)like a post
     * @param options.onfollow Follow service
     * @param options.follow Follow?
     * @param options.embedded Default false = modal dialog
     * @param cbk Optional callback
     * @example
     * // Social posts of a record in a modal dialog
     * $ui.displaySocial(null, { object: "MyObject", rowId: obj.getRowId(), activity: true });
     * // Embedded in a container
     * $ui.displaySocial($("#posts", ctn), { object: "MyObject", rowId: obj.getRowId(), embedded: true });
     */
    displaySocial(ctn: AnyContainer, options: {
        object?: string;
        rowId?: string;
        activity?: boolean;
        onpost?: Callback;
        ondel?: Callback;
        onlist?: Callback;
        onlike?: Callback;
        onfollow?: Callback;
        follow?: boolean;
        embedded?: boolean;
    }, cbk?: Callback): Promise<void>;
    /**
     * Display the web news (user needs read access to WebNews)
     * @param ctn Container (new area if undefined)
     * @param options Optional parameters
     * @param options.filters Optional filters on WebNews
     * @param options.template Optional template (default Simplicite.UI.Globals.news.template)
     * @param options.popup true to get only news to display (on logon) in a modal dialog
     * @param options.ticker true to get only news to display on a footer ticker
     * @example
     * // News in a new area
     * $ui.displayWebNews(null);
     * // News to display at logon in a popup
     * $ui.displayWebNews(null, { popup: true });
     */
    displayWebNews(ctn: Container | null, options?: {
        filters?: KeyObject;
        template?: string;
        popup?: boolean;
        ticker?: boolean;
    }): void;
    /**
     * Object preferences
     * @param ctn Container
     * @param object Name or Business Object
     * @example
     * $ui.displayPreferences(null, "MyObject");
     */
    displayPreferences(ctn: AnyContainer, object: string | BusinessObject): Promise<void>;
    /**
     * User guide/onboarding rendering
     * @param ctn object container
     * @param options Options
     * @param options.play list of guides to play
     * @param options.view optional view instance of guide
     * @param options.object optional business object of guide
     * @param options.context optional context (create or update...)
     * @param options.recorder true to display the recorder
     * @example
     * // Guide recorder on a form
     * $ui.displayGuide(ctn, { object: obj, recorder: true });
     */
    displayGuide(ctn: Container, options?: {
        play?: GuideMetadata[];
        view?: View;
        object?: BusinessObject;
        external?: ExternalMetadata;
        context?: string;
        recorder?: boolean;
    }): void;
    /**
     * Play a guide by name, meant to be called from shortcuts as "$ui.playGuide('myguide')"
     * @param name the guide to be played
     * @example
     * $ui.playGuide("MyObjGuide");
     */
    playGuide(name: string): Promise<void>;
}

/**
 * Generic DOM container as JQuery object
 */
type Container = JQuery<HTMLElement>;
/**
 * Generic DOM container as JQuery object or selector
 */
type AnyContainer = JQuery<HTMLElement> | string | null;
/**
 * Generic DOM content as JQuery element or string
 */
type AnyContent = JQuery<HTMLElement> | string;
/**
 * Addon action
 */
interface Addon {
    /** Addon name */
    name: string;
    /** Label */
    label?: string;
    /** Optional full contextual name: name of the standalone icon button, or aria-label of the "plus" menu item (visible text = label) */
    title?: string;
    /** Icon name */
    icon?: string;
    /** In the plus menu */
    plus?: boolean;
    /** Handler on click */
    cbk: Callback;
}
/**
 * Data to confirm one action to run
 */
interface ConfirmRun {
    /** Values to send to the back-end */
    values?: KeyObject;
    /** Callback with the back-end message (error keeps the dialog open) */
    cbk?: (msg?: MessageJSON) => void;
}
/**
 * Can close paremeters
 */
interface EventCloseParam {
    /** Handler to test if something has changed */
    hasChanged?: () => boolean;
    /** Save method if requested */
    save?: (saved: Callback) => void;
    /** Confirm dialog if has changed or auto-save */
    confirm: boolean;
    /** Optional CSS class to add to dialog */
    cls?: string;
    /** Optional data-context to add to dialog */
    context?: string;
}
/**
 * Display services of the UI engine: independent render classes aggregated into UIEngine
 */
interface UIRenders extends UIRenderDialog, UIRenderView, UIRenderList, UIRenderForm, UIRenderReference, UIRenderMaker, UIRenderUser {
}
/** Base class of the engine: UILoader typed with the render services */
declare const UIEngineBase: new () => UILoader & UIRenders;
/**
 * Main UI Controller with abstract view to display components.
 * <ul>
 * <li>Controller implements the UI logic with interactions between components (list, form, menu...) and the data (ajax).
 * <li>It does not contain UI drawing and must load the view service to display controls.
 * <li>Each View engine implements the UI interfaces (without data access) and interacts with the controller (to access to data).
 * </ul>
 * The display services are aggregated from independent classes (sub-folder render, see UIRenders):
 * - UIRenderDialog: dialogs and messages, export, print and imports
 * - UIRenderView: home, views, dashboards, index search, crosstabs, tree views, calendars, timesheets, metrics, maps, trays, workflows
 * - UIRenderList: object summary, search, fields, lists and rows
 * - UIRenderForm: forms, completion, help
 * - UIRenderReference: object selection, pillboxes, references, data maps, associations, merge
 * - UIRenderMaker: tools dedicated to the makers
 * - UIRenderUser: tools dedicated to the end-users
 */
declare class UIEngine extends UIEngineBase implements UIRenders {
    /** User rights */
    grant?: Grant;
    /** Ajax session */
    app?: Session;
    /** View: main renderer */
    view: UIViewer;
    /** Global options: merge of the launch parameters with Simplicite.UI.Globals */
    options: typeof Globals;
    /** Main menu */
    menu?: MainMenu;
    /** Top menu */
    menuTop?: MainMenu;
    /** Right menu */
    menuRight?: MainMenu;
    /** Event web socket */
    ews?: EventWebSocket;
    /** Server-sent events */
    sse?: EventSource;
    /** Place map renderer */
    map?: UIMap;
    /** Calendar renderer */
    calendar?: UICalendar;
    /** Guide player */
    guide?: Guide;
    /** Workflow controller */
    workflow?: Workflow;
    /** Charts renderer */
    charts?: Charts;
    /** From Maker */
    diagram?: DiagramEngine;
    /** Internal: keep-alive timer */
    private _keepAliveTimer?;
    /** Internal: waiting an ajax response (server lost) */
    private _waitingAjax?;
    /** Licensed platform */
    licensed?: boolean;
    /** Quota of objects of the license */
    objectsquota?: string;
    constructor(Viewer: UIViewer);
    /**
     * Waiting for the server (lost connection): the background calls are on hold
     */
    get waitingAjax(): boolean;
    /**
     * Set the waiting state when the server is lost or back
     * @param waiting true when the server is lost, false when it is back
     */
    setWaitingAjax(waiting: boolean): void;
    /**
     * Current ajax session
     * @returns Simplicite.Ajax instance
     * @example
     * const app: Session | undefined = $ui.getApp(); // same as $app
     * const list: KeyObject[] | undefined = await app?.getBusinessObject("MyObject").search({ myObjStatus: "OPEN" });
     */
    getApp(): Session | undefined;
    /**
     * Set ajax session
     */
    setApp(app: Session): void;
    /**
     * Set user rights
     */
    setGrant(g: Grant): void;
    /**
     * Get user rights
     * @example
     * const g: Grant = $ui.getGrant(); // same as $grant
     * if (g.hasResponsibility("MY_ADMIN")) $console.log("admin");
     */
    getGrant(): Grant;
    /**
     * Convert selector to jQuery container (default #work or #work0.content)
     */
    $ctn(c?: AnyContainer): JQuery;
    /**
     * Get container navigator, default returns the main navigation of #work area
     * @param c Component or selector
     * @returns Simplicite.UI.Navigator instance
     * @example
     * // Navigator of the main work area, or of the closest navigator of a component
     * $ui.getNav().navBack();
     * $ui.getNav(ctn).reload();
     */
    getNav(c?: AnyContainer): UINavigator;
    /**
     * Find the closest container with a navigator
     * @param c component
     * @example
     * const navCtn: Container = $ui.getNavContainer(ctn);
     */
    getNavContainer(c: AnyContainer): JQuery<HTMLElement>;
    /**
     * Change user's language on server side and reload the page
     * @param lang Language FRA, ENU...
     * @param pref true to update also the preferred language
     * @example
     * // Switch to english and keep it as the preferred language
     * $ui.changeLang("ENU", true);
     */
    changeLang(lang: string, pref?: boolean): Promise<void>;
    /**
     * Keep the session alive during data updates (used by form and edit list)
     * and refresh object usage by other people
     * @param enable true to start the timer, false to stop
     * @param obj optional object name to get usage
     * @param id optional rowId
     */
    keepAlive(enable: boolean, obj?: string, id?: string): void;
    /**
     * All logins from local storage
     * @example
     * const logins: KeyObject[] = $ui.getLocalLogins();
     */
    getLocalLogins(): any;
    /**
     * Add the connected login to local storage
     * @param g grant
     */
    addLocalLogin(g: Grant): void;
    /**
     * Remove a login from local storage
     * @param login remove all logins if null
     * @example
     * $ui.removeLocalLogin("jdoe");
     */
    removeLocalLogin(login: string): void;
    /**
     * Shortcut handler
     * @param shortcut definition <code>\{ name, url, target, label, width, height \}</code>
     * @example
     * // Open a URL as if the user clicked on a shortcut
     * $ui.clickShortcut({ name: "MyDoc", label: "Documentation", url: "https://docs.simplicite.io", target: "_blank" });
     */
    clickShortcut(shortcut?: Shortcut): void;
    /**
     * Main menu handler
     * @param data Menu data
     * @param data.item Original menu item
     * @param data.label Displayed label
     * @param data.object Optional object name
     * @param data.field Optional enum field
     * @param data.code Optional enum filter (or status)
     * @param data.workflow Optional screenflow name
     * @param data.process Optional process name
     * @param data.step Optional step filter
     * @param data.bam Optional object name for metrics view
     * @param data.tray Optional object name for trays view
     * @param data.domain Optional domain home
     * @param data.view Optional view name
     * @param data.href Optional external object URL
     * @param data.target Optional href target
     * @param data.newtab Optional to open a new navigation 'tab' or 'side'
     * @example
     * // Same as clicking on the menu entry of an object
     * $ui.clickMenu({ item: { type: "object", name: "MyObject", label: "My object", icon: "" }, object: "MyObject" });
     */
    clickMenu(data: MenuParam): void;
    private _bindedActions;
    /**
     * Bind one UI action with implementation
     * @param name action name
     * @param fn handler
     * @example
     * // Implement the front action MyObjPreview (declared without back-end method)
     * $ui.bind("MyObjPreview", (action: Action, obj: UIBusinessObject, rowId?: string | null) => {
     *   $ui.displayPrint(null, "MyObjPrint", obj, rowId);
     * });
     */
    bind(name: string, fn: ActionHandler): void;
    /**
     * Enable action binding
     * @param name Action name
     * @param enable True to activate / false to disable binding
     * @example
     * // Disable the binding temporarily
     * $ui.bindEnabled("MyObjPreview", false);
     */
    bindEnabled(name: string, enable: boolean): boolean;
    /**
     * Unbind one UI action
     * @param name Action name
     * @example
     * $ui.unbind("MyObjPreview");
     */
    unbind(name: string): void;
    /**
     * Is UI action binded and enabled ?
     * @param name Action name
     * @returns True if the action is enabled
     * @example
     * if (!$ui.isBinded("MyObjPreview")) $ui.bind("MyObjPreview", preview);
     */
    isBinded(name: string): boolean;
    /** Binding of an action: base name before the first '_' or '-' (ex: print_name, associate-parent...) */
    private bindedAction;
    /**
     * Is action binded ?
     * @param a Action metadata
     * @returns True if the action is binded
     * @example
     * const a: Action | undefined = obj.getAction("MyObjPreview");
     * if (a && $ui.isActionBinded(a)) $ui.doAction(a, obj, obj.getRowId());
     */
    isActionBinded(a: Action): boolean;
    /**
     * Execute one action
     * @param a Action metadata
     * @param obj Business object
     * @param rowId Optional object row ID on form/row
     * @example
     * // Execute an action as if the user clicked on its button
     * const a: Action | undefined = obj.getAction("MyObjSendOrder");
     * a && $ui.doAction(a, obj, obj.getRowId());
     */
    doAction(a: Action, obj: BusinessObject, rowId?: string | null): void;
    /**
     * Init and confirm one action
     * @param a Action metadata
     * @param obj Business object
     * @param rowId Optional object row ID on form/row
     * @param run Optional callback to execute the confirmed action
     * @param cancel Optional callback to cancel the action
     * @example
     * // Ask the confirmation (and confirm fields) before running the action
     * $ui.initConfirmAction(a, obj, rowId, (p?: ConfirmRun) => $ui.doActionCustom(a, obj, rowId, p?.values));
     */
    initConfirmAction(a: Action, obj: BusinessObject, rowId?: string | null, run?: (params?: ConfirmRun) => void, cancel?: (_: unknown) => void): void;
    /**
     * Execute a custom/backend action (object.action call) after saving the form
     * @param a Action metadata
     * @param obj Business object
     * @param rowId Optional object row ID on form/row
     * @param values Optional confirm field values
     * @param cbk Optional callback(msg)
     * @example
     * // Save the form, call the back-end method, then display the returned message
     * $ui.doActionCustom(a, obj, obj.getRowId(), { myConfirmField: "yes" }, (msg: MessageJSON) => $console.log(msg));
     */
    doActionCustom(a: Action, obj: BusinessObject, rowId?: string | null, values?: KeyObject, cbk?: (msg: MessageJSON) => void): Promise<void>;
    /**
     * Wrap a backend URL action to front
     * @param a Action metadata
     * @param obj Business object
     * @param rowId Optional object row ID on form/row
     * @example
     * $ui.doActionURL(a, obj, obj.getRowId());
     */
    doActionURL(a: Action, obj: BusinessObject, rowId?: string | null): void;
    /** Wrap "open model" actions */
    doActionModel(a: Action, obj: BusinessObject, rowId?: string): void;
    /**
     * Execute a generic/UI action (all binded implementations)
     * @param a Action metadata
     * @param obj Business object
     * @param rowId Optional object row ID on form/row
     * @example
     * // Run the generic implementation of the "copy" action
     * const copy: Action | undefined = obj.getAction("copy");
     * copy && $ui.doActionGeneric(copy, obj, obj.getRowId());
     */
    doActionGeneric(a: Action, obj: BusinessObject, rowId?: string | null): void;
    /**
     * Bind generic actions (create, copy, delete...)
     */
    bindGenericActions(): void;
    /**
     * Gets the field extended with the UIField interface
     * @param ctn Container
     * @param obj Object
     * @param field Object field or name
     * @param index Optional for multiple inputs of the same field (edit list)
     * @param silent No trace when field is unknown
     * @example
     * // In a CLASS form hook
     * const f: ObjectField = $ui.getUIField(ctn, obj, "myObjField1");
     * f.ui?.val("new value");
     * f.ui?.visible(false);
     * f.ui?.updatable(false);
     * // On a list row
     * const g: ObjectField = $ui.getUIField(ctn, obj, "myObjField1", rowId);
     */
    getUIField(ctn: AnyContainer, obj: BusinessObject | null, field: string | ObjectField, index?: string | null, silent?: boolean): ObjectField;
    /**
     * Gets the action with UIAction interface
     * @param ctn Container
     * @param obj Object
     * @param action Action metadata or name
     * @example
     * // In a form hook: hide or disable an action button
     * const a: Action | undefined = $ui.getUIAction(ctn, obj, "MyObjSendOrder");
     * a?.ui?.visible(false);
     * a?.ui?.enable(obj.getFieldValue("myObjStatus") == "OPEN");
     */
    getUIAction(ctn: AnyContainer, obj: UIBusinessObject, action: Action | string): Action | undefined;
    /**
     * Gets the area with UIArea interface
     * @param ctn Container
     * @param obj Object
     * @param area Area metadata or name or position
     * @example
     * // In a form hook: hide the area 2 of the form
     * $ui.getUIArea(ctn, obj, 2)?.ui?.visible(false);
     * // by name, with a slide effect
     * $ui.getUIArea(ctn, obj, "MyObjDelivery")?.ui?.visible(true, true);
     */
    getUIArea(ctn: AnyContainer, obj: UIBusinessObject, area: Area | string | number): Area | undefined;
    /**
     * Gets the view with UIView interface
     * @param ctn Container
     * @param obj Optional object
     * @param view View metadata or name
     * @example
     * const v: View | undefined = $ui.getUIView(ctn, obj, "MyObjView");
     */
    getUIView(ctn: AnyContainer, obj: BusinessObject | null, view: View | string): View | undefined;
    /**
     * Count rows with context and filters
     * @param ctn Container
     * @param obj Name or Business Object
     * @param options Options to override Globals
     * @param cbk Optional callback(obj) to read obj.count
     * @example
     * // Count the open records
     * $ui.countList(null, "MyObject", { filters: { myObjStatus: "OPEN" } }, (o: UIBusinessObject) => $console.log(o.count));
     */
    countList(ctn: AnyContainer, obj: string | BusinessObject, options?: ListParam, cbk?: (obj: UIBusinessObject) => void): Promise<void>;
    /**
     * Open handler (on a list row or summary): default switch to open object form, reference, doc or image
     * @param ctn Container
     * @param obj Target object or name
     * @param rowId Target row ID
     * @param params Optional parameters
     * @param params.object Source object
     * @param params.inst Instance name
     * @param params.rowId Source row ID
     * @param params.ref Reference object name
     * @param params.refId With the reference row ID
     * @param params.field Or the doc/image field name
     * @param params.docId With the document ID
     * @param params.imageId Or the image ID
     * @param params.preview Preview document?
     * @example
     * // Default open of a list row: form of the record
     * $ui.openObject(null, "MyObject", rowId);
     */
    openObject(ctn: AnyContainer, obj: string | BusinessObject, rowId: string, params?: {
        object?: BusinessObject;
        inst?: string;
        rowId?: string;
        ref?: string;
        refId?: string;
        field?: string;
        docId?: string;
        imageId?: string;
        imageAlt?: string;
        imageLongDesc?: string;
        preview?: boolean;
    }): void;
    /**
     * Count references of a parent object in PANELLIST context
     * @param obj Target object or name
     * @param parent Specify the parent object and the foreign-key <code>\{ name, inst, field, rowId \}</code>
     * @param cbk Callback(obj, count)
     * @example
     * // Count the children of the current record
     * $ui.countReference("MyChild", { name: obj.getName(), field: "myChildParentId", rowId: obj.getRowId() },
     * 	(o: BusinessObject, count: number) => $console.log(count + " children"));
     */
    countReference(obj: string | BusinessObject, parent: ParentObject, cbk: (obj: BusinessObject, count: number) => void): void;
    /**
     * Populate the referenced fields
     * @param ctn Container
     * @param obj Object
     * @param refField Foreign key field
     * @param refId Reference row ID, or null to reset referenced fields
     * @param index Optional row index (edit list)
     * @param cbk Optional callback
     * @param noChange Optional to bypass change events on each fields
     * @param userKey Optional to get foreign user-key
     * @example
     * // Set the customer of the order and its referenced fields (name, city...)
     * $ui.populateReference(ctn, obj, "myOrdCustomerId", customerId);
     * // Reset the referenced fields
     * $ui.populateReference(ctn, obj, "myOrdCustomerId", null);
     */
    populateReference(ctn: AnyContainer, obj: BusinessObject, refField: string | ObjectField, refId: string | null, index?: string | null, cbk?: Callback, noChange?: boolean, userKey?: boolean): void;
    /**
     * Populate the referenced fields of action or external object
     * @param ctn Container
     * @param obj Object
     * @param refField Foreign key field
     * @param refId Reference row ID, or null to reset referenced fields
     * @param def Action or External object with fields
     * @param cbk Optional callback
     * @example
     * // Populate the referenced fields of a confirm action
     * const act: Action | undefined = obj.getAction("MyObjSendOrder");
     * act && $ui.populateFields(ctn, obj, "myConfirmCustomerId", customerId, act);
     */
    populateFields(ctn: AnyContainer, obj: BusinessObject, refField: string | ObjectField, refId: string | null, def: Action | ExternalObject, cbk?: Callback): void;
    /**
     * Click on a document: open the document
     * @param doc Document data
     * @param doc.object Object name
     * @param doc.field Document field name
     * @param doc.rowId Row ID
     * @param doc.docId Document ID
     * @param doc.name Document name
     * @example
     * const doc = obj.getFieldValue("myObjContract") as DocumentDB | null;
     * doc && $ui.clickDocument(doc);
     */
    clickDocument(doc: DocumentDB): void;
    /**
     * Preview a document: default open a dialog with the preview
     * @param doc Document data
     * @param doc.object Object name
     * @param doc.field Document field name
     * @param doc.rowId Row ID
     * @param doc.docId Document ID
     * @param doc.name optional document name
     * @param options Options
     * @param options.container Optional container to fill
     * @param options.embedded Embedded or dialog
     * @param options.onload Optional callback when loaded
     * @example
     * // Preview in a dialog
     * $ui.previewDocument(doc);
     * // Embedded in a container
     * $ui.previewDocument(doc, { container: $("#preview", ctn), embedded: true });
     */
    previewDocument(doc: DocumentDB, options?: boolean | {
        container: Container;
        embedded?: boolean;
        onload?: Callback;
    }): any;
    /**
     * Click on image: default open a dialog with the image
     * @param doc Image data
     * @param doc.object Object name
     * @param doc.field Document field name
     * @param doc.rowId Row ID
     * @param doc.rowid (rowId alias)
     * @param doc.docId Image ID
     * @param doc.id (docId alias)
     * @param doc.name Optional image name
     * @param doc.alt Optional image alt
     * @param doc.longDesc Optional image long description
     * @param onload optional callback when loaded
     * @example
     * $ui.clickImage(obj.getFieldValue("myObjPhoto") as DocumentDB, (img: JQuery) => img.addClass("rounded"));
     */
    clickImage(doc: DocumentDB, onload?: (img: JQuery) => void): void;
    /**
     * Undo/Redo service
     * @param ctn Target container
     * @param action Undo|redo
     * @param num Number of iterations (default 1)
     * @param url Optional URL to reload after server call (else use response url)
     * @example
     * $ui.undoRedo(null, "undo");
     * $ui.undoRedo(null, "redo", 2);
     */
    undoRedo(ctn: AnyContainer, action: string, num?: number, url?: string): void;
    /**
     * Prepare content handlers
     * @param ctn Container
     * @param onload Optional load handler
     * @param onunload Optional unload handler
     * @example
     * // Custom content: call the onload handler when ready, and clean up on unload
     * const c: JQuery = $("<div/>").appendTo(ctn);
     * $ui.contentLoaded(c, () => $console.log("loaded"), () => $console.log("unloaded"));
     */
    contentLoaded(ctn: AnyContainer, onload?: Callback, onunload?: JQueryHandler): void;
    /**
     * Force to close a content and destroy components
     * @param ctn Container
     * @param cbk Callback when done
     * @example
     * $ui.contentClose(dlgCtn, () => $console.log("closed"));
     */
    contentClose(ctn: Container, cbk?: Callback): void;
    /**
     * Unload the container = destroy embedded components (editors...)
     * @param ctn Container
     * @param cbk Callback when done
     * @example
     * $ui.contentUnload(ctn, () => ctn.empty());
     */
    contentUnload(ctn: AnyContainer, cbk?: Callback): void;
    /**
     * Checks if the content can close
     * @param ctn Container
     * @param cbk Callback if the content can close
     * @example
     * // Ask to save the pending changes before leaving the content
     * $ui.canCloseContent(null, () => $ui.displayHome());
     */
    canCloseContent(ctn?: AnyContainer, cbk?: Callback): void;
    /**
     * Attach change event to fields
     * <ul>
     * <li>set the hasChanged on object</li>
     * <li>apply related constraints</li>
     * <li>exclude elements with class <code>js-ignore-haschanged</code></li>
     * </ul>
     * @param ctn Container of inputs, selects and textareas
     * @param obj Object or Process
     * @param selector Optional selector (default: input, select and textarea)
     * @example
     * // Track the changes of custom inputs added in a form
     * $ui.bindChange($("#myCustomZone", ctn), obj);
     */
    bindChange(ctn: Container, obj: BusinessObject | BusinessProcess | null, selector?: string | JQuery): void;
    /**
     * Apply constraints
     * @param ctn Container
     * @param obj Object
     * @param elt Optional DOM element (input, select, textarea) with data {field, index}
     * @param index Optional editlist line index (row Id or creation index 00 01...)
     * @param context Optional context (default Simplicite.CONTEXT_UPDATE)
     * @example
     * // Apply the front constraints after a value change by script
     * obj.setFieldValue("myObjType", "B");
     * await $ui.applyConstraints(ctn, obj);
     */
    applyConstraints(ctn: AnyContainer, obj: UIBusinessObject, elt?: Element | null, index?: string | null, context?: number): Promise<void>;
    /**
     * Manage the save and close when container has changed
     * @param ctn Container
     * @param p Options
     */
    bindEventClose(ctn: JQuery, p: EventCloseParam): void;
    /**
     * Manage the save and close when fields have changed
     * @param ctn Container
     * @param obj Object
     * @param save Save handler
     * @example
     * // Ask to save the changes on close
     * $ui.bindSaveAndQuit(ctn, obj, (saved: Callback) => obj.save().then(() => saved()));
     */
    bindSaveAndQuit(ctn: AnyContainer, obj: BusinessObject, save: (saved: Callback) => void): void;
    /**
     * Reload the linked lists of an enum field
     * @param ctn Container
     * @param obj Object
     * @param field Enum field
     * @param code Selected value(s)
     * @param index Edit list index
     * @param cbk Callback <code>function(target)</code> to rebuild each target field with the new listOfValues
     * @param all Get all values when code is empty (case of a search field)
     * @example
     * // Reload the lists linked to the country field
     * $ui.linkedLists(ctn, obj, obj.getField("myObjCountry")!, "FR");
     */
    linkedLists(ctn: AnyContainer, obj: BusinessObject, field: ObjectField, code?: string | string[], index?: string, cbk?: (f: ObjectField) => void, all?: boolean): void;
    /** Minimal input size to trigger the field completion */
    private _completionMinSize;
    /**
     * Completion minimum size to trigger the search (0 = disabled), see setCompletionMinSize
     */
    get completionMinSize(): number;
    /**
     * Completion minimum size to trigger the search
     * @param size Positive number (0 = disable)
     * @example
     * // Start the completion after 3 characters
     * $ui.setCompletionMinSize(3);
     */
    setCompletionMinSize(size: number): void;
    /**
     * Follow service wrapper
     * @param method Method name
     * @param param Method param
     * @param cbk Optional callback
     */
    onFollow(method: string | null, param: string | null, cbk: (r: KeyObject) => void): void;
    /**
     * Read all form fields into object fields (async/file reading)
     * @param ctn Container to find fields
     * @param obj Business object
     * @param index Optional index (list edit)
     * @returns Promise
     * @example
     * // Read the inputs of the form into the object fields
     * await $ui.readForm(ctn, obj);
     * $console.log(obj.getFieldValue("myObjAmount"));
     */
    readForm(ctn: AnyContainer, obj: BusinessObject, index?: string | null): Promise<void>;
    /**
     * Save the object form
     * @param ctn Container
     * @param obj Business object
     * @param params Optional parameters (parent)
     * @returns Promise with messages or catch errors
     * @example
     * const msgs: MessageAny[] | null = await $ui.saveForm(ctn, obj);
     * if (!msgs?.length) $ui.toast("Saved");
     */
    saveForm(ctn: Container, obj: UIBusinessObject, params?: {
        parent?: ParentObject;
    }): Promise<MessageAny[] | null>;
    /**
     * Save the object list
     * @param ctn List container
     * @param obj Business object
     * @param params Optional parameters (parent, edit)
     * @returns Promise with optional results <code>\{ messages, errors \}</code>
     * @example
     * // Save an edit list
     * const result: MessageSaveRows = await $ui.saveList(listCtn, obj);
     */
    saveList(ctn: Container, obj: UIBusinessObject, params?: {
        parent?: ParentObject;
        edit?: string;
    }): Promise<MessageSaveRows>;
    /**
     * Get changed values from UI to fields (with hook form.beforesave)
     * @param ctn Container
     * @param obj Business object
     * @param index Optional index/row ID in list or fk name of inlined 0,1 object
     * @returns promise resolved with updated values
     * @example
     * const values: KeyObject = await $ui.readValues(ctn, obj);
     * $console.log(values);
     */
    readValues(ctn: Container, obj: UIBusinessObject, index?: string | null): Promise<KeyObject>;
    /**
     * Save the object after reading UI values
     * @param ctn Container
     * @param obj Business object
     * @param index Optional index/row ID in list or fk name of inlined 0,1 object
     * @param params Optional parameters (parent, inline)
     * @returns Promise with messages or errors
     * @example
     * const errors: MessageJSON[] | undefined = await $ui.saveObject(ctn, obj);
     * errors?.length && $ui.backendMessage(errors);
     */
    saveObject(ctn: Container, obj: UIBusinessObject, index?: string | null, params?: {
        parent?: ParentObject;
        inline?: InlineObject;
        copy?: boolean;
    }): Promise<MessageJSON[] | undefined>;
    /**
     * Save one object field
     * @param ctn Container
     * @param obj Business object
     * @param rowId Record Id to update
     * @param field Field definition
     * @param index Row index on list
     * @returns Promise
     * @example
     * // Save one field of a record (ex: inline edition)
     * await $ui.saveField(ctn, obj, rowId, obj.getField("myObjComment")!);
     */
    saveField(ctn: Container, obj: BusinessObject, rowId: string, field: ObjectField, index?: string | null): Promise<KeyObject>;
    /**
     * Close the object form: default going back in navigation
     * @param ctn Container
     * @example
     * $ui.closeForm(ctn);
     */
    closeForm(ctn?: AnyContainer): void;
    /**
     * Reload the object form: default reload navigation
     * @param ctn Container
     * @example
     * $ui.reloadForm(ctn);
     */
    reloadForm(ctn?: AnyContainer): void;
    /**
     * Speech recognition
     * @param el Element input or textarea
     * @param options Options, with optional keys:
     * `lang` (language, ex: FRA, ENU or fr-FR, en-GB...),
     * `continuous` (continuous speaking, sentence?),
     * `autoRestart` (continuous speaking, no timeout after long silence?),
     * `interimResults` (get interim results?),
     * `maxAlternatives` (max alternatives search),
     * `firstCapital` (first character uppercase in a sentence?),
     * `newLine` (accept new line symbol?),
     * `onStart`/`onEnd`/`onError` (optional handlers),
     * `onChange` (optional handler to override change event),
     * `debug` (optional console info)
     * @example
     * // Dictate the content of a textarea in french
     * $ui.speechRecognition($("textarea[name='myObjComment']", ctn), { lang: "FRA", continuous: true });
     */
    speechRecognition(el: Container, options?: SpeechRecognitionParam): void;
    /**
     * Speech synthesis
     * @param el Text or input or textarea
     * @param options Options, with optional keys:
     * `lang` (preferred language FRA, ENU...),
     * `voice` (optional voice name to force if exists),
     * `uri` (service URI, default native),
     * `volume` (0 to 1, default 1),
     * `rate` (0.1 to 10, default 1),
     * `pitch` (0 to 2, default 1),
     * `onStart`/`onEnd` (optional handlers),
     * `debug` (optional console info)
     * @example
     * $ui.speechSynthesis($("<div/>").text("Hello world"), { lang: "ENU", rate: 1.2 });
     */
    speechSynthesis(el: Container, options?: SpeechSynthesisParam): void;
}

/**
 * Async function
 */
declare const AsyncFunction: Function;
/**
 * Simple callback function without parameter
 */
type Callback = () => void;
/**
 * Generic type to implement any JSON object based on pairs of <code>{ string:typed value }</code>
 */
interface KeyHash<Type1> {
    [__key: string]: Type1;
}
/**
 * Hash key to get any object (as a javascript object)
 */
type KeyObject = KeyHash<any>;
/**
 * Hash key to get a number
 */
type KeyNumber = KeyHash<number>;
/**
 * Hash key to get a string
 */
type KeyString = KeyHash<string>;
/**
 * Hash key to get a string array
 */
type KeyStrings = KeyHash<string[]>;
/**
 * Hash key to get a boolean
 */
type KeyBoolean = KeyHash<boolean>;
/**
 * Constraint implementation as function with contextual parameters
 */
type ConstraintFunction = (ctn: Container, obj: UIBusinessObject, field?: ObjectField, id?: string | null, context?: number, cbk?: Callback) => void;
/**
 * Hash of constraint implementation per object name
 */
type KeyConstraint = KeyHash<ConstraintFunction>;
/**
 * UI object hook implementation as a function
 */
type ObjectHookFunction = (obj: UIBusinessObject, cbk: Callback) => void;
/**
 * Hash of hook function per object name
 */
type KeyObjectHook = KeyHash<ObjectHookFunction>;
/**
 * Hash of hook class per object name
 */
type KeyBusinessObjectHook = KeyHash<typeof UIBusinessObject>;
/**
 * Hash of hook class per process name
 */
type KeyBusinessProcessHook = KeyHash<typeof UIBusinessProcess>;
/**
 * Hash of external object class per name
 */
type KeyExternalObject = KeyHash<typeof UIExternalObject>;
/**
 * Base theme names
 */
type ThemeBase = "light" | "dark";
/**
 * LOV_COLOR
 */
declare const SimpliciteColors: string[];
/**
 * Icons metadata
 */
interface IconsMetadata {
    /** All font-awesome solid icons */
    Solid: string[];
    /** All font-awesome regular icons */
    Regular: string[];
    /** Font awesome metadata per name */
    meta: KeyHash<{
        /** Label */
        l: string;
        /** Unicode */
        u: string;
        /** Search tags */
        t: string[];
    }>;
    /** Bootstrap icons */
    Bootstrap: {
        /** Icon name */
        i: string;
        /** Unicode */
        u: number;
        /** Search tags */
        t: string[];
    }[];
}
/**
 * Back-end constants set on ready
 */
interface BackendConstants {
    /** Application URL */
    URL: string;
    /** Application root path */
    ROOT: string;
    /** Application name */
    APPLICATION: string;
    /** API root URL */
    API_ROOT: string;
    /** UI root URL */
    UI_ROOT: string;
    /** UI path */
    UI_PATH: string;
    /** Web socket server is enabled */
    WEBSOCKET_SERVER: boolean;
    /** Platform full version */
    FULL_VERSION: string;
    /** Platform version */
    VERSION: string;
    /** Platform minor version */
    MINOR_VERSION: string;
    /** Encoding */
    ENCODING: string;
    /** Maintenance mode */
    MAINTENANCE: string;
    /** End date of the maintenance */
    MAINTENANCE_END_DATE: string;
    /** API path */
    API_PATH: string;
    /** Endpoint name */
    ENDPOINT?: string;
    /** OpenStreetMap geocoding service URL */
    OPENSTREETMAP_GEOCODING_URL?: string;
    /** User row ID */
    USERID: string;
    /** Ajax key */
    AJAX_KEY: string;
    /** User login */
    LOGIN: string;
    /** User language */
    LANG: string;
    /** Date format */
    DATE_FORMAT: string;
    /** Disposition name */
    DISPOSITION: string;
    /** Theme of the home page */
    HOME_THEME?: string;
}
/** Font definition */
interface Font {
    /** Font name */
    name: string;
    /** Font stylesheet URL */
    url: string;
}
/** Multi work-areas options */
interface SplitterOptions {
    /** Multi work-areas mode (default false = mono work area for compat 6.3) */
    enabled?: boolean;
    /** Allows user to switch to multi work-areas mode (default true) */
    switchable?: boolean;
    /**
     * Save the work areas layout + navigations (default `"auto"`):
     * - `"auto"`: auto-save on change
     * - `true`: save only on Logout
     * - `false`: no save
     */
    save?: boolean | "auto";
}
/** Accessibility options */
interface A11yOptions {
    /** Accessibility mode (restored from the user preference) */
    enabled?: boolean;
    /** Allow the user to toggle the accessibility mode */
    toggle?: boolean;
    /** True to save only on Logout */
    save?: boolean | "auto";
}
/** View addons options */
interface ViewAddonsOptions {
    /** Show the view addons (default true) */
    enabled?: boolean;
}
/**
 * UI globals options (shorthand $ui.options or Simplicite.UI.Globals).
 * Each UI object gets a copy in obj.locals.ui to override the default behaviors.
 */
declare const Globals: {
    /**
     * Backend global parameters (VERSION, URL...)
     */
    globals: BackendConstants;
    /**
     * UI container, default body if null
     */
    container: JQuery | null;
    /**
     * Window title from param WINDOW_TITLE
     */
    title: string;
    /**
     * Viewer engine name (Bootstap5)
     */
    engine: string;
    /**
     * Server in dev mode?
     */
    devmode: boolean;
    /**
     * Temporary deeplink to access a specific page
     */
    deeplink: string | undefined;
    /**
     * Use specified resources or generic ones if null (MAIN, HEADER, FOOTER, MENU, WORK)
     *
     * - `name`: Resource name like MAIN, HEADER, FOOTER, MENU, WORK
     * - `type`: Resource type HTML, CSS, JS
     * - `target`: Optional target for HTML type
     */
    resources: LoadPart[] | null;
    /**
     * Ajax default setup
     *
     * - `crossDomain`: True to use CORS request
     * - `xhrFields`: Optional xhr fields
     * - `xhrFields.withCredentials`: Credential to use the session cookie (default true)
     */
    ajaxSetup: {
        /** True to use CORS request */
        crossDomain: boolean;
        /** Optional xhr fields */
        xhrFields: {
            /** Use the session cookie (default true) */
            withCredentials: boolean;
        };
        /** Additional HTTP headers */
        headers: KeyString;
    };
    /**
     * Engine context: none, disposition or object
     *
     * - `object`: <code>'ObjectExternal'</code> or <code>'ObjectInternal'</code> (null means <code>'Disposition'</code>)
     * - `name`: Related (external) object name
     * - `rowId`: Related object row ID
     */
    context: {
        /** `'ObjectExternal'` or `'ObjectInternal'` (null means `'Disposition'`) */
        object: "ObjectExternal" | "ObjectInternal" | null;
        /** Related (external) object name */
        name: string | null;
        /** Related object row ID */
        rowId: string | null;
    };
    /**
     * Theme name from Home page
     */
    theme: string | null;
    /**
     * Theme base name <code>'dark'</code>, <code>'light'</code>
     */
    themeBase: ThemeBase | null;
    /**
     * Optional font to use (a string assume to be a google font)
     */
    font: Font | string | null;
    /**
     * Optional monospace font to use (a string assume to be a google font)
     */
    monospaceFont: Font | string | null;
    /**
     * Set the font-size zoom factor (100% = default size)
     */
    fontSize: string;
    /**
     * Compact the UI to limit padding sizes?
     */
    compact: boolean;
    /**
     * Use splitter to manage several work areas
     */
    splitter: SplitterOptions;
    /**
     * Use a11y to disable and adapt interfaces
     */
    a11y: A11yOptions;
    /**
     * Group the floating view controls in an addon bar
     */
    viewAddons: ViewAddonsOptions;
    /**
     * Optional handler when a content is loaded
     */
    defaultContentLoad: JQueryHandler | null;
    /**
     * Optional handler when a content is unloaded
     */
    defaultContentUnload: JQueryHandler | null;
    /**
     * Optional page loaded (called before the ready callback)
     */
    onload: CallableFunction | null;
    /**
     * Optional page beforeunload
     */
    onbeforeunload: CallableFunction | null;
    /**
     * Optional page unload
     */
    onunload: CallableFunction | null;
    /**
     * Optional logout handler, default call $ui.logout({ confirm: true })
     */
    onlogout: CallableFunction | null;
    /**
     * Use the standard main site with context parts (MAIN, MENU, WORK, HEADER, FOOTER) ? (default true)
     */
    useMainParts: boolean;
    /**
     * Use social posts (default true)
     */
    useSocial: boolean;
    /**
     * Based on <code>SOCIAL_SHARE</code> parameter if not set
     */
    socialShare: KeyObject | undefined;
    /**
     * Allows to copy deeplink to objects (default true)
     */
    useCopyLink: boolean;
    /**
     * True: see controls in header, false: disable feature or 'keys' to use CTRL-Z/Y only and hide controls
     */
    useUndoRedo: boolean;
    /**
     * Multi-apps configuration
     *
     * - `name`: Optional requested scope name
     * - `enabled`: Defaults to true
     *   <ul>
     *   <li>true : all granted scopes</li>
     *   <li>false : no multi-apps access</li>
     *   <li>or array of specific scopes <code>\{home, url, icon|logo, label, help\}</code></li>
     *   </ul>
     */
    scope: {
        /** Optional requested scope name */
        name: string | undefined;
        /** true = all granted scopes, false = no multi-apps access, or array of specific scopes */
        enabled: boolean;
    };
    /**
     * Display the shortcuts ?
     * <ul>
     * <li>true : all granted shortcuts</li>
     * <li>false : no shortcuts access</li>
     * <li>or array of specific shortcuts <code>\{name, label, url, target, icon\}</code></li>
     * </ul>
     */
    shortcuts: boolean;
    /**
     * Slide screen on push|pull navigation ? (default false)
     */
    slideNav: boolean;
    /**
     * Export configuration, all are <code>\{ enabled:true \}</code> by default
     *
     * - `CSV`: CVS export with default sep:';'
     * - `XLS`: Excel export
     * - `PDF`: PDF export
     * - `ARC`: Archive ZIP
     * - `XML`: XML Simplicite (reserved to ADMIN) with default inline:true, timestamp:false
     * - `JSON`: JSON Simplicite (reserved to ADMIN)
     * - `YAML`: YAML Simplicite (reserved to ADMIN)
     * - `ZIP`: ZIP Simplicite (reserved to ADMIN)
     */
    exports: {
        /** CSV export with default sep:';' */
        CSV: {
            /** Export enabled */
            enabled: boolean;
            /** Column separator */
            sep: string;
        };
        /** Excel export */
        XLS: {
            /** Export enabled */
            enabled: boolean;
        };
        /** PDF export */
        PDF: {
            /** Export enabled */
            enabled: boolean;
        };
        /** Archive ZIP */
        ARC: {
            /** Export enabled */
            enabled: boolean;
        };
        /** XML Simplicite (reserved to ADMIN) with default inline:true, timestamp:false */
        XML: {
            /** Export enabled */
            enabled: boolean;
            /** Inline documents and images in the export */
            inline: boolean;
            /** Export the timestamp fields (created/updated dates and users) */
            timestamp: boolean;
        };
        /** JSON Simplicite (reserved to ADMIN) */
        JSON: {
            /** Export enabled */
            enabled: boolean;
            /** Inline documents and images in the export */
            inline: boolean;
            /** Export the timestamp fields (created/updated dates and users) */
            timestamp: boolean;
        };
        /** YAML Simplicite (reserved to ADMIN) */
        YAML: {
            /** Export enabled */
            enabled: boolean;
            /** Inline documents and images in the export */
            inline: boolean;
            /** Export the timestamp fields (created/updated dates and users) */
            timestamp: boolean;
        };
        /** ZIP Simplicite (reserved to ADMIN) */
        ZIP: {
            /** Export enabled */
            enabled: boolean;
        };
    };
    /**
     * Default tinymce options
     * @deprecated
     */
    tinymceOptions: {
        /** Plugins */
        plugins: string[];
        /** Toolbar buttons */
        toolbar: string;
        /** Menu bar */
        menubar: string;
        /** Status bar */
        statusbar: boolean;
        /** Paste image as base64 */
        paste_data_images: boolean;
        /** Paste rich text content as plain text (e.g. from MS Word) */
        paste_as_text: boolean;
        /** Spell check */
        browser_spellcheck: boolean;
        /** No context menu (needed for spell check on right click, otherwise ctrl + right click is to be used) */
        contextmenu: boolean;
        /** Element selector */
        selector: string;
        /** Language */
        language: string;
        /** Editor height */
        height: number;
    };
    /**
     * Quill option for HTML editor (will be upscaled by code)
     */
    quillOptions: QuillOptions;
    /**
     * Global object list options
     */
    list: ListParam;
    /**
     * Global object form options
     */
    form: FormParam;
    /**
     * Global object search options
     */
    search: SearchParam;
    /**
     * Global object summary options
     */
    summary: SummaryParam;
    /**
     * Global agenda/calendar options
     */
    agenda: CalendarParam;
    /**
     * Global timesheet options
     */
    timesheet: TimesheetOptions;
    /**
     * Global News options
     */
    news: {
        /**
         * Default template to display a news
         */
        template: string;
    };
};

declare global {
    interface String {
        equals(v: string): boolean;
        equalsIgnoreCase(v: string): boolean;
        ltrim(): string;
        rtrim(): string;
        lpad(n: number, s: string): string;
        rpad(n: number, s: string): string;
        parseInt(): number;
        hashCode(): number;
        ligthenDarken(amt: number): string;
    }
}
/** String extensions of the UI (`equals`, `hashCode`, `ligthenDarken`...) */
declare class StringExtension {
    constructor();
}

/**
 * Pre-build the sitemap data and cache it.
 * Called once after main UI init from $view.initMain.
 */
declare function buildSitemap(): void;
/**
 * Public entry point: render the sitemap into the work area.
 */
declare function displaySitemap(ctn?: AnyContainer): void;

var Simplicite$1 = Simplicite;

export { $app, $console, $factory, $grant, $nav, $tools, $ui, $view, A11y, AddonBar, Ajax, AppConstants, AsyncFunction, Bam, Board, Bootstrap5, BusinessObject, BusinessProcess, CSSCOLORS, Charts, ColorPicker, Context, Crosstab, ErrorLevel, EventWebSocket, External, ExternalObject, Factory, Feedback, FieldType, FieldTypeLabels, Firebase, Form, Gateway, Globals, Grant, GridEditor, Guide, Import, IndexSearch, JQueryExtension, Legacy, List, MediaSize, Menu, Merge, MessageLevel, OCR, ObjectField, Prefs, Rendering, Search, SearchMode, Session, SimpliciteColors, Social, Speech, StatusMetrics, StringExtension, SyncQueue, Timesheet, Tray, Tree, TreeView, UI, UIAction, UIArea, UIBusinessObject, UIBusinessProcess, UICalendar, UIColor, UIComponent, UIEngine, UIExternalObject, UIField, UIFieldBigDecimal, UIFieldBoolean, UIFieldColor, UIFieldDate, UIFieldDateTime, UIFieldDocument, UIFieldEmail, UIFieldEnum, UIFieldEnumMulti, UIFieldFloat, UIFieldGeoCoords, UIFieldHtml, UIFieldId, UIFieldImage, UIFieldInt, UIFieldLongString, UIFieldNotepad, UIFieldObject, UIFieldPhoneNum, UIFieldRegexp, UIFieldTime, UIFieldUrl, UILoader, UIMap, UINavigator, UIRenderDialog, UIRenderForm, UIRenderList, UIRenderMaker, UIRenderReference, UIRenderUser, UIRenderView, UISplitter, UITray, UIUtil, UIView, UIViewer, UIWorkflow, Updatable, Update, View, ViewClasses, ViewType, Visibility, WebNews, WebPush, Widget, Workflow, ZIP, buildSitemap, Simplicite$1 as default, displaySitemap };
export type { A11yLevel, A11yOptions, Action, ActionGroup, ActionHandler, ActionHandlers, ActionLevel, ActionSize, ActionType, ActivityFile, ActivityMetadata, ActivityStatus, Addon, AddonBarItem, Agenda, AjaxNamespace, AlertCallback, AlertLevel, AlertParam, AlertType, AnyAddon, AnyContainer, AnyContent, AppConstantsType, Area, AreaParam, Associate, BackendConstants, BamParam, Bookmark, BookmarkParam, Bookmarks, Button, CSSColors, CalendarParam, CallResponse, Callback, ChartClickHandler, ChartParam, ColorPickerHandler, ColorSet, ConfirmRun, ConstraintFunction, Container, ContextMetrics, Contrast, CounterParam, CreateLink, CreateParam, CrosstabAxis, CrosstabAxisType, CrosstabData, CrosstabMetadata, CrosstabNavParam, CrosstabNode, CrosstabParam, Datamap, DevOptions, DialogAction, DialogParam, DocumentDB, DontAskAgainParam, DrawSearchOptions, DropdownItem, EnumItem, EventCloseParam, ExternalData, ExternalMetadata, ExternalParam, FeedbackData, FeedbackParam, FieldAddon, FieldCase, FieldDisplay, FieldFilter, FieldLinkMap, FieldMetrics, FieldNumFormat, FieldOrderNulls, FieldParam, FieldSearch, FieldSearchFixed, FieldValue, Filters, FirebaseMessage, FirebaseRecipients, FirebaseServiceData, FollowLink, Font, FormActions, FormParam, GetParam, GoogleParam, GridEditorJson, GridEditorOptions, GridEditorParam, GuideMetadata, HSV, IconsMetadata, ImportXMLParams, IndexMetadata, IndexParam, InlineObject, InlineParam, InputAddon, JQueryHandler, JSVG, Job, JobFunction, KeyBoolean, KeyBusinessObjectHook, KeyBusinessProcessHook, KeyConstraint, KeyExternalObject, KeyHash, KeyNumber, KeyObject, KeyObjectHook, KeyString, KeyStrings, Link, ListActions, ListEditMode, ListLayout, ListParam, ListRowsActions, ListSearchMode, ListSelection, LoadParam, LoadPart, LoadPartOnload, LoadTarget, LoadTargetArea, LogViewerParam, MainMenu, MapParam, MapSettings, MenuGridOptions, MenuItem, MenuParam, MenuSettings, MergeParam, MergeSaveParam, MessageAny, MessageFromBack, MessageJSON, MessageSaveRows, MessageText, MessagesPerRow, MetaObject, ModuleAjax, MousePos, NavAction, NavFocus, NavHistItem, NavItem, NavParam, NavType, NewTabPosition, News, NotifyObject, NotifyObjectType, OKLAB, ObjectHookFunction, ObjectMetadata, Palette, PaletteColors, PaletteName, ParentObject, PillboxItem, PillboxParam, Place, Placemap, PlotSerie, Point, Position, PredefSearch, PrefItem, PrefType, Prefixed, PrefsParam, PrintTemplate, ProcessAction, ProcessActionType, ProcessMetadata, ProcessParam, ProgressHandler, ProgressStatus, PromisesParam, RGB, RGBA, Rect, RenderFunction, Resource, RoadRender, RowActions, RowData, RowDataMeta, RowGroupBy, RowGroupByKey, RowItem, RowPartial, RowTree, SaveParam, Scope, ScratchPadParam, SearchAjax, SearchAjaxGroupBy, SearchAjaxList, SearchAjaxMetadata, SearchAjaxPartial, SearchAjaxTree, SearchParam, SearchPredefParam, Shortcut, ShortcutKey, ShortcutKeys, ShowViewsMode, SimpliciteInterface, Size, SliderParam, SocialParam, SocialPost, SocialShareConfig, SocialShareData, SocialShareProvider, SocialStatus, SocialUser, SpeechRecognitionParam, SpeechSynthesisParam, SplitPart, SplitterOptions, StatusCountData, StatusDurationData, StatusMetricsData, StatusMetricsDisplayParam, StatusMetricsInput, StatusMetricsParam, StatusMetricsShow, StatusPieData, StatusTerminalData, SubMenu, SummaryParam, Tab, Tabs, TargetObject, TempPillbox, TempPillboxes, TemplateEntity, TemplateTarget, Theme, ThemeBase, TimesheetData, TimesheetGanttData, TimesheetGanttParam, TimesheetLine, TimesheetMetadata, TimesheetOptions, TimesheetParam, TimesheetPeriod, TimesheetShift, TimesheetTotal, ToastParam, TrackerCallback, TrackerData, TrackerParam, TrackerTask, Transition, TrayActor, TrayCard, TrayColumn, TreeNode, TreeNodeList, TreeParam, UIRenders, UIViewNamespace, UIViewParam, UpdateFormParam, UpdateParam, UsageUser, UserFilterParam, ViewAddonsOptions, ViewFilter, ViewItem, ViewItemContent, ViewItemContentData, ViewItemType, ViewParam, WebPushData, WorkAreaOptions, WorkAreaSize, WorkTabContextMenu, WorkTabInfos, WorkTabOptions };
