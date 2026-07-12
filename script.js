(function() {

    // FRST clean strings ported from python to javascript

    const CLEAN_STRINGS = new Set([
        "14EC5FE4-5B1E-42B9-9EDA-F281C1506E7A",
        "89B4C1CD-B018-4511-B0A1-5476DBF70820",
        "8203C095-FB62-4005-807D-7C9A3775D1EA",
        "Edge DefaultProfile: Default",
        "Edge Extension: (uBlock Origin)",
        "Edge Extension: (HTTPS Everywhere)",
        "Edge Extension: (Kaspersky Protection)",
        "Edge Extension: (Malwarebytes Browser Guard)",
        "Edge Extension: (Outlook)",
        "Edge Extension: (Word)",
        "Edge Extension: (Excel)",
        "Edge Extension: (PowerPoint)",
        "Edge Extension: (IDM Integration Module)",
        "Edge Extension: (Bitdefender Anti-tracker)",
        "FF Extension: (Avast Online Security)",
        "FF Extension: (Avast SafePrice | Comparison, deals, coupons)",
        "FF Extension: (Adblock Plus - free ad blocker)",
        "FF Extension: (uBlock Origin)",
        "FF Extension: (Adobe Acrobat)",
        "FF Extension: (Bitdefender Wallet)",
        "FF Extension: (Bitdefender Anti-tracker)",
        "FF Extension: (Bitdefender Antispam Toolbar)",
        "FF Extension: (IDM integration)",
        "FF Extension: (IDM CC)",
        "BRA Extension: (Malwarebytes Browser Guard)",
        "BRA Extension: (IDM Integration Module)",
        "BRA Extension: (Brave Local Data Files Updater)",
        "BRA Extension: (Brave Ad Block Updater (Default))",
        "BRA Extension: (Brave NTP sponsored images)",
        "BRA Extension: (Brave SpeedReader Updater)",
        "BRA Extension: (Brave HTTPS Everywhere Updater)",
        "OPR Extension: (Rich Hints Agent)",
        "OPR Extension: (Amazon Assistant Promotion)",
        "CHR Extension: (Google Drive)",
        "CHR Extension: (YouTube)",
        "CHR Extension: (uBlock Origin)",
        "CHR Extension: (HTTPS Everywhere)",
        "CHR Extension: (Chrome Web Store Payments)",
        "CHR Extension: (Gmail)",
        "CHR Extension: (Chrome Media Router)",
        "CHR Extension: (Slides)",
        "CHR Extension: (Docs)",
        "CHR Extension: (Sheets)",
        "CHR Extension: (Google Docs Offline)",
        "CHR Extension: (Kaspersky Protection)",
        "CHR Extension: (Grammarly for Chrome)",
        "CHR Extension: (Duolingo on the Web)",
        "CHR Extension: (Avast Online Security)",
        "CHR Extension: (Avast SafePrice | Comparison, deals, coupons)",
        "CHR Extension: (Adobe Acrobat)",
        "CHR Extension: (Malwarebytes Browser Guard)",
        "CHR Extension: (Emsisoft Browser Security)",
        "CHR Extension: (Decentraleyes)",
        "CHR Extension: (LocalCDN)",
        "CHR Extension: (User-Agent Switcher for Chrome)",
        "CHR Extension: (Quick source viewer)",
        "CHR Extension: (Decentraleyes)",
        "CHR Extension: (Tampermonkey)",
        "CHR Extension: (Dark Reader)",
        "CHR Extension: (IDM Integration Module)",
        "CHR Extension: (EditThisCookie)",
        "CHR Extension: (Cookie-Editor)",
        "CHR Extension: (BetterTTV)",
        "CHR Extension: (ColorPick Eyedropper)",
        "CHR Extension: (Proxy SwitchyOmega)",
        "CHR Extension: (Sci-Hub X Now!)",
        "CHR Extension: (Bypass Paywalls Clean)",
        "CHR Extension: (Untrusted Types for DevTools)",
        "CHR Extension: (Adblock Plus - free ad blocker)",
        "CHR Extension: (Privacy Badger)",
        "CHR Extension: (Google Translate)",
        "CHR Extension: (Adobe Acrobat: PDF edit, convert, sign tools)",
        "BRA Extension: (Wallet Data Files Updater)",
        "bojobppfploabceghnmlahpoonbcbacn",
        "jmjflgjpcpepeafmmgdpfkogkghcpiha",
        "aeblfdkhhhdcdjpifhhbdiojplfjncoa",
        "ihcjicgdanjaechkgeegckofjjedodee",
        "ghbmnnjooekpmoecnnnilnnbdlolhkhi",
        "gighmmpiobklfepjocnamgkkbiglidom",
        "mmioliijnhnoblpgimnlajmefafdfilb",
        "ponfpcnoihfmfllpaingbgckeeldkhle",
        "nkbihfbeogaeaoehlefnkodbefgpgknn",
        "amaaokahonnfjjemodnpmeenfpnnbkco",
        "bcjindcccaagfpapjjmafapmmgkkhgoa",
        "fbgcedjacmlbgleddnoacbnijgmiolem",
        "gngocbkfmikdgphklgmmehbjjlfgdemm",
        "pocpnlppkickgojjlmhdmidojbmbodfm",
        "R2 NVDisplay.ContainerLocalSystem;",
        "(2BrightSparks Pte Ltd )",
        "(Adobe Systems)",
        "(Audyssey Labs)",
        "(Broadcom)",
        "(Conexant Systems Inc.)",
        "(DTS)",
        "(DTS, Inc.)",
        "(Digimarc)",
        "(Discord Inc.)",
        "(Dolby Laboratories)",
        "(Dolby Laboratories, Inc.)",
        "(EldoS Corporation)",
        "(Farbar)",
        "(General Workings, Inc.)",
        "(Harman)",
        "(ICEpower a/s)",
        "(Igor Pavlov)",
        "(Initex)",
        "(Intel)",
        "(Khronos Group)",
        "(Mente Binária)",
        "(MicroWorld Technologies Inc.)",
        "(Mozilla Foundation)",
        "(Mozilla)",
        "(Oracle Corporation)",
        "(Other World Computing, Inc.)",
        "(Pango Inc)",
        "(Razer Inc)",
        "(Real Sound Lab SIA)",
        "(Realtek semiconductor)",
        "(SRS Labs, Inc.)",
        "(Seiko Epson Corporation)",
        "(Skype)",
        "(Sony Corporation)",
        "(Sound Research, Corp.)",
        "(Synopsys, Inc.)",
        "(Sysinternals - www.sysinternals.com)",
        "(TOSHIBA CORPORATION.)",
        "(TOSHIBA Corporation)",
        "(The ICU Project)",
        "(Tonec Inc.)",
        "(Toshiba Client Solutions Co., Ltd.)",
        "(VSO Software)",
        "(Virage Logic Corporation / Sonic Focus)",
        "(VoodooSoft, LLC)",
        "(Windows (R) Win 7 DDK provider)",
        "(Yamaha Corporation)",
        "(curl, hxxps://curl.se/)",
        "(Electronic Arts)",
        "(On2.com)",
        "(Logitech)",
        "(Tonec Inc.)",
        "2BrightSparks Pte. Ltd.",
        "A-Volute SAS",
        "A-Volute",
        "ARCAI",
        "ASROCK Incorporation",
        "ASUSTEK COMPUTER INC.",
        "ASUSTeK Computer Inc.",
        "AVB Disc Soft, SIA",
        "Acer Incorporated",
        "Acro Software Inc.",
        "Adobe Inc.",
        "Adobe Systems Incorporated",
        "Adobe Systems, Incorporated",
        "Advanced Micro Devices Inc.",
        "Advanced Micro Devices, Inc",
        "Advanced Micro Devices, Inc.",
        "Amazon.com Services LLC",
        "AnchorFree Inc",
        "Apple Inc.",
        "Autodesk, Inc.",
        "Avid Technology, Inc.",
        "BattlEye Innovations e.K.",
        "Beijing NormalSoft technology Co.,Ltd.",
        "Blizzard Entertainment, Inc.",
        "Bluestack Systems, Inc",
        "CPUID S.A.R.L.U.",
        "Canon Inc.",
        "Citrix Systems, Inc.",
        "Code Sector",
        "Conexant Systems, Inc.",
        "Corel Corporation",
        "Corsair Memory, Inc.",
        "Dell Inc",
        "Digiarty Software, Inc.",
        "Disc Soft Ltd",
        "Discord Inc.",
        "Dolby Laboratories, Inc.",
        "Dropbox, Inc",
        "ELAN Microelectronics Corp.",
        "EVGA Co., Ltd.",
        "EVGA Corp.",
        "EasyAntiCheat Oy",
        "EldoS Corporation",
        "Electronic Arts, Inc.",
        "Epic Games Inc.",
        "Even Balance, Inc.",
        "Figma, Inc.",
        "Flexera Software LLC",
        "Fortemedia Inc",
        "GIGA-BYTE TECHNOLOGY CO., LTD.",
        "Gaijin Network LTD",
        "Gemalto, Inc.",
        "Glarysoft LTD",
        "Global Media (Thailand) Co., Ltd",
        "GoTrustID Inc.",
        "Google Inc.",
        "Google LLC",
        "Guillaume Ryder (hxxp://utilfr42.free.fr)",
        "HP Inc.",
        "Hewlett Packard",
        "Hewlett-Packard Co.",
        "Hewlett-Packard Company",
        "Huawei Technologies Co., Ltd.",
        "INTEL CORP",
        "Initeks, OOO",
        "Initex",
        "Insecure.Com LLC",
        "Intel Corporation",
        "Intel(R) Corporation",
        "Intel(R) pGFX",
        "Ivaylo Beltchev",
        "Kilonova LLC",
        "Kristjan Skutta",
        "Lenovo (Beijing) Limited",
        "Lenovo",
        "Lenovo.",
        "LogMeIn, Inc.",
        "Logitech, Inc.",
        "MICRO-STAR INTERNATIONAL CO., LTD",
        "MICRO-STAR INTERNATIONAL CO., LTD.",
        "MICSYS Technology Co., Ltd.",
        "Mediafour Corporation",
        "Micro-Star International CO., LTD.",
        "Microsemi Corporation.",
        "Microsemi Storage Solutions Inc.",
        "Microsoft Corp.",
        "Microsoft Corporation",
        "Microsoft Windows",
        "MiniTool Solution Ltd",
        "Mozilla Corporation",
        "NVIDIA Corporation",
        "Node.js Foundation",
        "Notepad++",
        "Nuance Communications, Inc.",
        "OOO Lightshot",
        "Open Source Developer, Dominik Reichl",
        "OpenJS Foundation",
        "Oracle America, Inc.",
        "Other World Computing, Inc",
        "PACE Anti-Piracy, Inc.",
        "PC Micro Systems Inc.",
        "Pango Inc.",
        "Parsec Cloud, Inc.",
        "Piriform Software Ltd",
        "Primera Technology, Inc.",
        "QFX Software Corporation",
        "Qualcomm Atheros",
        "RealNetworks, Inc.",
        "Realtek Semiconductor Corp",
        "Realtek Semiconductor Corp.",
        "Red Giant Software LLC",
        "Riot Games, Inc.",
        "Riverbed Technology, Inc.",
        "Rivet Networks LLC",
        "Rockstar Games, Inc.",
        "SCREENOVATE TECHNOLOGIES LTD.",
        "SEIKO EPSON CORPORATION",
        "SEIKO EPSON Corporation",
        "Samsung Electronics CO., LTD.",
        "Samsung Electronics Co., Ltd.",
        "SanDisk Corporation",
        "Shaul Eizikovich",
        "Skype Software Sarl",
        "Smart Sound Technology",
        "SonicWall Inc.",
        "Sony Imaging Products & Solutions Inc.",
        "Sound Research Corporation",
        "Spotify AB",
        "SteelSeries ApS",
        "Sublime HQ Pty Ltd",
        "SurfRight B.V.",
        "Swift Media Entertainment, Inc.",
        "Symantec Corporation",
        "Synaptics Incorporated",
        "TEFINCOM S.A.",
        "TeamViewer Germany GmbH",
        "Threatstar B.V.",
        "Tonalio GmbH",
        "Tonec Inc.",
        "Travis Lee Robinson",
        "Valve Corp.",
        "Valve Corporation",
        "VideoLAN",
        "Wacom Co., Ltd.",
        "Wacom Technology Corp.",
        "Wacom Technology, Corp.",
        "Waves Inc",
        "Western Digital Technologies, Inc.",
        "Wondershare Technology Co.,Ltd",
        "X-Rite Incorporated",
        "magicJack, L.P.",
        "voidtools",
        "Mega Limited",
        "Shenzhen Evision Semiconductor Technology Co., Ltd",
        "Shenzhen Evision Semiconductor Technology Co.,Ltd.",
        "Shanghai Yitu Information Technology Co.,Ltd.",
        "e2eSoft",
        "PUBG CORPORATION",
        "Int3 Software AB",
        "Giga-Byte Technology",
        "Windows (R) Server 2003 DDK provider",
        "VMware, Inc.",
        "Firebit OU",
        "Rainmeter",
        "kernel-panik",
        "Razer USA Ltd.",
        "The CefSharp Authors",
        "Razer Inc.",
        "ASUSTeK COMPUTER INC.",
        "ASUSTek Computer Inc.",
        "Plex, Inc.",
        "DTS, Inc.",
        "Logitech Inc",
        "Logitech Inc.",
        "Gaijin Network Ltd",
        "Nefarius Software Solutions e.U.",
        "Riot Games, Inc",
        "Roblox Corporation",
        "Rockstar Games",
        "ROBLOX Corporation",
        "win.rar GmbH",
        "Microsoft Studios",
        "WHIRLWIND VIRTUAL REALITIES INC.",
        "Noriyuki MIYAZAKI",
        "Blizzard Entertainment",
        "BeamMP",
        "VoodooSoft, LLC",
        "(NVIDIA Corp.)",
        "Reincubate Ltd",
        "(Team Cherry)",
        "LunarG, Inc.",
        "Python Software Foundation",
        "Parsec Cloud Inc.",
        "Microsoft Corporation",
        "Oracle Corporation",
        "Epic Games, Inc.",
        "AutoHotkey Foundation LLC",
        "Igor Pavlov",
        "FOXIT SOFTWARE INC.",
        "philandro Software GmbH",
        "AnyDesk Software GmbH",
        "Foxit Software Inc.",
        "The Git Development Community",
        "Skutta, Kristjan",
        "Proton Technologies AG",
        "Jagex Limited",
        "Activision Publishing Inc",
        "Activision Blizzard, Inc.",
        "Micro-Star Int'l Co. Ltd.",
        "VS Revo Group Ltd.",
        "VS Revo Group",
        "Jagex Ltd",
        "Mozilla",
        "Nicholas H.Tollervey",
        "Newgrounds",
        "OBS Project",
        "Proton AG",
        "TeamViewer",
        "RuneLite",
        "Realtek",
        "PROXIMA BETA PTE. LIMITED",
        "KRAFTON, Inc.",
        "Advanced Micro Devices INC.",
        "Advanced Micro Devices",
        "LG Electronics Inc.",
        "Snap Inc.",
        "GOG  sp. z o.o",
        "GOG.com",
        "FACE IT LIMITED",
        "tinyBuild Games",
        "Wellbia.com Co., Ltd.",
        "Audacity Team",
        "CPUID, Inc.",
        "Bethesda Softworks",
        "BANDAI NAMCO Entertainment Inc.",
        "WhatsApp Inc.",
        "TechPowerUp LLC",
        "Ubisoft Entertainment Sweden AB",
        "Ring.com",
        "NZXT, Inc.",
        "Wondershare Technology Group Co.,Ltd",
        "Wondershare",
        "Voyetra Turtle Beach, Inc.",
        "ROCCAT",
        "Ferox Games B.V.",
        "Spotify Ltd",
        "Medal B.V.",
        "Logitech",
        "Lexikos",
        "Voicemod Sociedad Limitada",
        "Voicemod",
        "GoPro Inc.",
        "Twitch Interactive, Inc.",
        "Facebook, Inc.",
        "Chris Andriessen",
        "Moonsworth, LLC",
        "Now.gg, INC",
        "Vincent Burel",
        "Windows (R) Win 7 DDK provider",
        "(AMD)",
        "Disney",
        "Charles Milette",
        "Bandicam Company",
        "Conexant Systems LLC.",
        "The Qt Company Ltd.",
        "F.lux Software LLC",
        "f.lux Software LLC",
        ": %windir%\\system32\\compattelrunner.exe",
        "Synaptics Hong Kong Limited, Taiwan Branch (H.K.)",
        "TRACKER SOFTWARE PRODUCTS (CANADA) LIMITED",
        "Tracker Software Products (Canada) Ltd.",
        "Electronic Arts",
        "TranslucentTB Open Source Developers",
        "MSI Co., LTD",
        "Axiw Software",
        "Signify Netherlands B.V.",
        "rocksdanister",
        "Oculus VR, LLC",
        "Facebook Technologies, LLC",
        "Zoom Video Communications, Inc.",
        "Unity Technologies ApS",
        "Unity Technologies Inc.",
        "Ubisoft",
        "Chrome\\User Data\\System Profile [",
        "ManyCam (VISICOM MÉDIA INC.)",
        "Visicom Media Inc.",
        "WindowsLiveWallpaper",
        "Chan Software Solutions",
        "Instagram",
        "Amazon Development Centre (London) Ltd",
        "Rémi Mercier",
        "Whirlwind FX (Whirlwind Virtual Realities Inc.)",
        "(Microsoft)",
        "ppy Pty Ltd",
        "Crystal Dew World",
        "(Meta)",
        "TranslucentTB",
        "CyberLink Corp.",
        "CyberLink",
        "GoPro Media, Inc.",
        "Hewlett-Packard Development Company, L.P.",
        "Virtual Desktop, Inc.",
        "BUREL VINCENT",
        "VB-AUDIO Software",
        "Silicon Motion, Inc.",
        "(Facebook Inc.)",
        "VB-Audio Software",
        "Red Giant   LLC",
        "Red Giant LLC",
        "Focusrite Audio Engineering Ltd.",
        "Focusrite Audio Engineering Ltd",
        "Focusrite Audio Engineering, Ltd.",
        "Psyonix, LLC",
        "(BetterDiscord)",
        "Bytedance Pte. Ltd.",
        "Mojang AB",
        "Mojang",
        "DISPLAYLINK (UK) LIMITED",
        "DisplayLink Corp.",
        "ASUSTek COMPUTER INC.",
        "(AMD Inc.)",
        "Docker Inc",
        "(ELAN Microelectronic Corp.)",
        "LIAN LI INDUSTRIAL CO., LTD.",
        "Lian-Li",
        "MUSIC Tribe Brands DE GmbH",
        "TC-Helicon Vocal Technologies Inc.",
        "Alexey Nicolaychuk",
        "Florian Höch",
        "Duet, Inc.",
        "Hugh Bailey",
        "Shenzhen Huion Animation Technology Co.,LTD",
        "ICEpower a/s",
        "ICEpower A/S",
        "COGNOSPHERE PTE. LTD.",
        "HoYoverse",
        "Corsair Components, Inc.",
        "Dell Technologies",
        "Monect (Suzhou) Co., Ltd.",
        "Monect, Inc.",
        "KRAFTON, Inc",
        "Stardock Corporation",
        "Stardock Software, Inc",
        "STARDOCK SYSTEMS, INC.",
        "Micro-Star INT'L CO., LTD.",
        "Sony Corporation",
        "ASUS",
        "ASUSTeK Computer Inc.",
        "ASUSTeK COMPUTER INC.",
        "KINGSTON COMPONENTS INC.",
        "Adobe Inc.",
        "Adobe Systems",
        "Voicemod Sociedad Limitada",
        "Voicemod",
        "win.rar GmbH",
        "Alexander Roshal"
    ]);


    // important strings consists of cruicial lines containing these which are NEVER removed

    const IMPORTANT_STRINGS = new Set([
        "<==== ATTENTION",
        "No File",
        "File not signed",
        "[not found]",
        "[X]",
        "Hidden",
        "no ImagePath",
        "detected!",
        "powershell"
    ]);


    // DOM refs

    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    const cleanBtn = document.getElementById('cleanBtn');
    const results = document.getElementById('results');
    const stats = document.getElementById('stats');
    const downloads = document.getElementById('downloads');

    const files = {};


    // helpers

    function formatSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / 1048576).toFixed(1) + ' MB';
    }

    function getBaseName(filename) {
        return filename.replace(/\.txt$/i, '');
    }

    function shouldRemoveLine(line) {
        let cleaned = line.replace(/\u00AE/g, '(R)').replace(/Ã‚/g, '');

        for (const imp of IMPORTANT_STRINGS) {
            if (cleaned.includes(imp)) {
                return false;
            }
        }

        for (const clean of CLEAN_STRINGS) {
            if (cleaned.includes(clean)) {
                return true;
            }
        }

        return false;
    }

    function processFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const text = e.target.result;
                    const lines = text.split(/\r?\n/);
                    const cleaned = [];
                    const removed = [];

                    for (const raw of lines) {
                        if (shouldRemoveLine(raw)) {
                            removed.push(raw);
                        } else {
                            cleaned.push(raw);
                        }
                    }

                    resolve({
                        cleanedLines: cleaned,
                        removedLines: removed,
                        originalSize: text.length,
                        cleanedSize: cleaned.join('\n').length,
                        originalLines: lines.length,
                        cleanedLinesCount: cleaned.length,
                        removedLinesCount: removed.length
                    });
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }


    // UI add file handles file selection, validation, and adding to file list

    function addFile(file) {
        const name = file.name;

        if (!name.toLowerCase().endsWith('.txt')) {
            alert('Only .txt files are supported. Please select FRST.txt or Addition.txt');
            return;
        }

        if (files[name]) {
            delete files[name];
        }

        files[name] = { file, name, size: file.size };
        renderFileList();
        updateCleanButton();
        results.classList.remove('visible');
    }

    function removeFile(name) {
        delete files[name];
        renderFileList();
        updateCleanButton();
        results.classList.remove('visible');
    }

    function renderFileList() {
        const names = Object.keys(files);
        if (names.length === 0) {
            fileList.innerHTML = '';
            return;
        }

        let html = '';
        for (const name of names) {
            const f = files[name];
            html += `
                <div class="file-item">
                    <span>
                        <span class="name">${escapeHtml(name)}</span>
                        <span class="size">(${formatSize(f.size)})</span>
                    </span>
                    <button class="remove-btn" data-name="${escapeHtml(name)}" title="Remove file">&times;</button>
                </div>
            `;
        }
        fileList.innerHTML = html;

        fileList.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const name = this.getAttribute('data-name');
                removeFile(name);
            });
        });
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function updateCleanButton() {
        const count = Object.keys(files).length;
        cleanBtn.disabled = count === 0;
        cleanBtn.textContent = count === 0 ? 'Clean Logs' : `Clean Logs (${count} file${count > 1 ? 's' : ''})`;
    }


    // drag & drop

    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        const dropped = e.dataTransfer.files;
        for (const f of dropped) {
            addFile(f);
        }
    });

    fileInput.addEventListener('change', function() {
        if (this.files && this.files.length > 0) {
            for (const f of this.files) {
                addFile(f);
            }
        }
        this.value = '';
    });

    dropZone.addEventListener('click', function(e) {
        if (e.target.tagName !== 'INPUT') {
            fileInput.click();
        }
    });


    // clean button

    cleanBtn.addEventListener('click', async function() {
        const fileNames = Object.keys(files);
        if (fileNames.length === 0) return;

        this.disabled = true;
        this.textContent = 'Processing...';

        const resultsData = {};
        let totalRemoved = 0;
        let totalOriginalLines = 0;
        let totalCleanedLines = 0;
        let totalOriginalSize = 0;
        let totalCleanedSize = 0;

        try {
            for (const name of fileNames) {
                const f = files[name];
                const result = await processFile(f.file);
                resultsData[name] = result;
                totalRemoved += result.removedLinesCount;
                totalOriginalLines += result.originalLines;
                totalCleanedLines += result.cleanedLinesCount;
                totalOriginalSize += result.originalSize;
                totalCleanedSize += result.cleanedSize;
            }

            const reduction = totalOriginalSize > 0
                ? Math.round((totalOriginalSize - totalCleanedSize) / totalOriginalSize * 100)
                : 0;

            stats.innerHTML = `
                <div class="stat-item">
                    <div class="label">Files Processed</div>
                    <div class="value">${fileNames.length}</div>
                </div>
                <div class="stat-item">
                    <div class="label">Original Lines</div>
                    <div class="value">${totalOriginalLines.toLocaleString()}</div>
                </div>
                <div class="stat-item">
                    <div class="label">Cleaned Lines</div>
                    <div class="value green">${totalCleanedLines.toLocaleString()}</div>
                </div>
                <div class="stat-item">
                    <div class="label">Lines Removed</div>
                    <div class="value red">${totalRemoved.toLocaleString()}</div>
                </div>
                <div class="stat-item">
                    <div class="label">Size Reduction</div>
                    <div class="value orange">${reduction}%</div>
                </div>
                <div class="stat-item">
                    <div class="label">Original Size</div>
                    <div class="value">${formatSize(totalOriginalSize)}</div>
                </div>
                <div class="stat-item">
                    <div class="label">Cleaned Size</div>
                    <div class="value green">${formatSize(totalCleanedSize)}</div>
                </div>
            `;

            let downloadHtml = '';

            for (const name of fileNames) {
                const base = getBaseName(name);
                const cleanedName = base + '_Cleaned.txt';
                const data = resultsData[name];
                const cleanedText = data.cleanedLines.join('\n');
                const blob = new Blob([cleanedText], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);

                downloadHtml += `
                    <a href="${url}" download="${cleanedName}" class="download-btn">
                        <span class="icon">&#x1F4C4;</span> ${cleanedName}
                        <span class="meta">(${data.cleanedLinesCount} lines)</span>
                    </a>
                `;
            }

            let whitelistParts = [];
            for (const name of fileNames) {
                const base = getBaseName(name);
                const data = resultsData[name];
                whitelistParts.push(base + '.txt Removed Entries:');
                if (data.removedLines.length === 0) {
                    whitelistParts.push('(No entries removed)');
                } else {
                    whitelistParts.push(data.removedLines.join('\n'));
                }
                whitelistParts.push('');
            }
            if (whitelistParts.length > 0 && whitelistParts[whitelistParts.length - 1] === '') {
                whitelistParts.pop();
            }
            const whitelistText = whitelistParts.join('\n');
            const whitelistBlob = new Blob([whitelistText], { type: 'text/plain' });
            const whitelistUrl = URL.createObjectURL(whitelistBlob);

            downloadHtml += `
                <a href="${whitelistUrl}" download="Whitelisted_Strings.txt" class="download-btn whitelist">
                    <span class="icon">&#x2691;</span> Whitelisted_Strings.txt
                    <span class="meta">(${totalRemoved} entries)</span>
                </a>
            `;

            downloads.innerHTML = downloadHtml;
            results.classList.add('visible');

        } catch (err) {
            alert('Error processing files: ' + err.message);
            console.error(err);
        } finally {
            this.disabled = false;
            const count = Object.keys(files).length;
            this.textContent = count === 0 ? 'Clean Logs' : `Clean Logs (${count} file${count > 1 ? 's' : ''})`;
        }
    });


    // init/initialize runs on page load, this sets up initial state

    updateCleanButton();
})();