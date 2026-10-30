function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

function scanEmail() {
    const email = document.getElementById("emailInput").value;
    const result = document.getElementById("emailResult");

    if (!email || !email.includes("@") || !email.includes(".")) {
        result.innerHTML = "Please enter a valid email address.";
        return;
    }

    result.innerHTML = `
        <h3>Demo Scan Completed</h3>
        <p>Email: ${escapeHTML(email)}</p>
        <p>Sample exposure records: 2</p>
        <p>Risk level: Medium</p>
        <p>Recommendation: Enable two-factor authentication.</p>
        <strong>Note: Fictional results. No real breach database was checked.</strong>
    `;
}

function scanWebsite() {
    const url = document.getElementById("urlInput").value.trim();
    const result = document.getElementById("urlResult");

    try {
        const parsed = new URL(url);
        if (!["http:", "https:"].includes(parsed.protocol)) {
            throw new Error("Invalid protocol");
        }

        result.innerHTML = `
            <h3>Demo Website Report</h3>
            <p>Website: ${escapeHTML(parsed.hostname)}</p>
            <p>HTTPS: ${parsed.protocol === "https:" ? "Yes" : "No"}</p>
            <p>Demo risk level: Medium</p>
            <strong>This is a simulated result, not a real security scan.</strong>
        `;
    } catch {
        result.innerHTML = "Please enter a valid website address, such as https://example.com";
    }
}

function analyzePolicy() {
    document.getElementById("policyResult").innerHTML = `
        <h3>Sample Privacy Policy Analysis</h3>
        <p>Data collection: Review required</p>
        <p>Third-party sharing: Mentioned</p>
        <p>Data retention: Review required</p>
        <p>Demo privacy risk: Medium</p>
        <strong>Illustrative analysis only. No actual policy was analyzed.</strong>
    `;
}

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}