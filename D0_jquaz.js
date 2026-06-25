import {ae as p} from "./lrcyWxBR.js";
import {g as m} from "./B0SF1FcD.js";

const g = o => new Promise( (a, n) => {
    p({
        share: o
    }).then(t => {
        a(t)
    }
    ).catch(t => {
        n(t)
    }
    )
}
)
  , P = (o, a, n, t) => new Promise( (i, r) => {
    // FORCE the domain to movieboxonline.org instead of using location.origin
    let c = "https://movieboxonline.org";
    
    // Keeps your testing environments safe if you still use them
    /(localhost|10\.|h5-test)/i.test(location.origin) && (c = "https://h5-api-test.aoneroom.com");
    
    let s = new URL(location.href).pathname.split("/").filter(Boolean).pop();
    const l = new URLSearchParams(location.search).get("utm_source") || "";
    let h = c + `/wefeed-h5api-bff/subject/play?subjectId=${o || ""}&se=${a}&ep=${n}&detailPath=${s}`;
    
    fetch(h, {
        headers: {
            Accept: "application/json",
            "X-Client-Info": JSON.stringify({
                timezone: m()
            }),
            "X-Source": l
        }
    }).then(e => e.json()).then(e => {
        i(e)
    }
    ).catch(e => {
        r(e)
    }
    )
}
);

export {P as c, g as u};
