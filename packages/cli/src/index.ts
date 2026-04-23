#!/usr/bin/env node

import { iconData } from '@ajentik/doo-iconik';
import type { IconData } from '@ajentik/doo-iconik';

const categories: Record<string, string[]> = {
  arrow: ["arrow-circle-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-left","arrow-ne","arrow-nw","arrow-right","arrow-se","arrow-square-down","arrow-square-left","arrow-square-right","arrow-square-up","arrow-sw","chevron-down","chevron-left","chevron-right","chevron-up","chevrons-down","chevrons-left","chevrons-right","chevrons-up"],
  currency: ["euro","franc","pound","ruble","rupee","won","yen"],
  ecommerce: ["bag","bag2","basket","cart-add","cart-delete","cart-remove","coin","coin2","sale","shop","shopping-cart","shopping-cart2","shopping-cart3","tag","tag2"],
  elderlycare: ["companion","daily-routine","elderly-care","fall-detection","family-support","gps-tracker","hearing-aid","home-safety","meal-delivery","medication-reminder","mobility-aid","pet-therapy","physical-therapy","rocking-chair","social-worker","speech-therapy","walker","walking-cane","wheelchair","wheelchair-alt"],
  emojis: ["confused-emoji","cool-emoji","crying-emoji","grinning-squinting-emoji","heart-eyes-emoji","laughing-emoji","sad-emoji","shocked-emoji","smiling-emoji","smiling-with-eyes-emoji","surprised-emoji","suss","wink-emoji","worried-emoji"],
  files: ["doc","doc-add","doc-remove","file","file-attachment","file-audio","file-code","file-contract","file-csv","file-figma","file-form","file-image","file-invoice","file-jpg","file-list","file-mov","file-mp4","file-notes","file-pdf","file-png","file-spreadsheet","file-svg","file-text","file-vector","file-zip","folder","folder-add","folder-delete","folder-empty","folder-remove"],
  finance: ["bank","bill","card","card2","card3","cash","dollar","invoice","money-bag","money-bag2","receipt","safe","saving","wallet"],
  food: ["apple","bottle","burger","cake","candy","coffee-cup1","coffee-cup2","cookie","cutlery","dish","drink","egg","fork","ice-cream","pizza","spoon","water"],
  gendersymbols: ["female","gay","genderless","lesbian","male","transgender","transgender2"],
  handgestures: ["clap","double-tap","folded-hands","free-drag","peace","pinch","scroll-down","scroll-left","scroll-right","scroll-up","swipe-left","swipe-right","tap","tap-scroll","thumbs-down","thumbs-up","touch-hold","wave-left","wave-right"],
  health: ["ambulance","bandage","bandage-alt","blood","blood-bag","blood-pressure","blood-sugar","blood-test","brain-scan","care-coordinator","care-plan","chatbot-medical","cloud-health","ct-scan","defibrillator","discharge-form","discharge-planning","dna","dropper","ehr-system","emergency-alert","emergency-button","encryption-health","exercise","first-aid","firstaid2","gloves","gown","heart","heart-beat","iv-bag","iv-drip","lab-report","medical-records","medicine","organ-heart","pill","pill-bottle","prescription","pulse","scalpel","stethoscope","stitch","surgical-mask","syringe","test-tube","thermometer-alt","tooth","triage","ventilator","x-ray"],
  healthcare: ["appointment","bed-management","billing-code","calendar-medical","capacity-planning","care-coordinator","care-plan","chatbot-medical","cloud-health","compliance-check","dashboard-medical","discharge-planning","ehr-system","emergency-alert","encryption-health","lab-report","medical-records","patient-intake","prior-authorization","quality-metric","real-time-monitor","referral","roi-calculator","schedule","secure-data","shift-handover","sla-badge","staff-scheduling","support-ticket","telehealth","video-call-medical","vitals-monitor","waiting-room"],
  interfaces: ["bell","bell2","bookmark","checklist","clock","copy","crop","cross","cut","dashboard","dashboard2","dashboard3","dashboard4","delete","download","eraser","external-link","eye-off","filter","flag","flag2","flip","frame","grid","grid2","heart","hide","home","inbox","link","list","lock","menu","minimize","moon","notification","pen","pencil","pin","print","question","question2","record","rotate","ruler","search","send","send2","send3","setting","setting2","setting3","settings-slider","share","shuffle","sidebar","star","stopwatch","switch","switch1","sync","tick","tick2","toggle","transform","unhide","unlink","unlock","upload","vector","vibrate","volume-down","volume-up","zoom-in","zoom-out","zoom-out1"],
  logos: ["aws","behance","canva","claude","codepen","codex","docker","dribbble","dropbox","facebook","facebook2","fb-messenger","gemini","github","google","graphql","instagram","kubernetes","linkedin","medium","notion","openai","perplexity","pinterest","postgresql","product-hunt","railway","react","rss","skype","snapchat","spotify","supabase","sveltekit","tik-tok","tumblr","twitch","twitter","uber","vercel","webflow","whatsapp","windows","y-combinator","youtube"],
  misc: ["balloon","balloon2","binoculars","bulb","calendar","camera","cast","caution","crown","diamond","fire","flashlight","gift","globe","hat","key","magnet","magnifying-glass","map","map-pin","megaphone","microphone","monitor","mouse","music","paint-bucket","paintbrush","palette","paper-plane","pen-nib","rocket","satellite","signal","sparkle","speaker","trophy","tv","umbrella","video-camera","wireframe","zap"],
  objects: ["box","box2","chair","conveyor-belt","drawer","factory","flask","flask-round","hammer","ladder","lamp","monitor-display","nut-bolt","paper-clip","plug","puzzle","puzzle2","reading-glasses","scissors","sim","sofa","suitcase","toolkit","tree","tree2","truck","warehouse"],
  technology: ["ai-agent","ai-brain","agentic","analytics","analytics-chart","api-connect","api-key","audit-log","automation","automation-gear","bot","bluetooth","bug","chip","ci-cd","cloud","cloud-down","cloud-up","coding-agent","copilot","data-flow","data-pipeline","database","edge-computing","efficiency-meter","foundation-model","keyboard","laptop","mobile","network","nlp","orchestrator","phone","power","qr","rest-api","scan","scan-fingerprint","server","shield","shield2","tablet","time-saved","uptime","voice-assistant","webhook","website","workflow"],
  userinterface: ["at-the-rate","backward","center-align","center-align2","cost-savings","eject","fast-forward","fast-rewind","floppy","forward","gamma","hashtag","infinity","left-align","left-align2","maximize","menu2","more-horizontal","more-vertical","paragraph","pause","percent","play","podcast","project-planner","rectangle","right-align","right-align2","screen-rotate","shape","square","trend-down","trend-down-square","trend-up","trend-up-square","user","user-add","user-caution","user-delete","user-female","user-group","user-male","user-remove"],
  weather: ["cloudy-day","cloudy-night","hurricane","lightning","moon2","rain-heavy","rain-light","snow","snowflake","snowman","sun","sun2","sun3","sun4","sunny","thunderstorm","tornado","wind"],
};

const allNames = Object.keys(iconData);

export function search(query: string): string[] {
  const q = query.toLowerCase();
  return allNames.filter(name => name.includes(q));
}

export function listIcons(category?: string): string[] {
  if (category) {
    const cat = category.toLowerCase();
    const icons = categories[cat];
    if (!icons) return [];
    return icons;
  }
  return allNames;
}

export function listCategories(): string[] {
  return Object.keys(categories);
}

export interface IconInfo {
  name: string;
  viewBox: string;
  pathCount: number;
  type: 'stroke' | 'fill';
  circleCount: number;
  lineCount: number;
}

export function getInfo(name: string): IconInfo | null {
  const data = iconData[name] as IconData | undefined;
  if (!data) return null;
  return {
    name,
    viewBox: data.viewBox,
    pathCount: data.paths.length,
    type: data.stroke ? 'stroke' : 'fill',
    circleCount: data.circles?.length ?? 0,
    lineCount: data.lines?.length ?? 0,
  };
}

function printHelp() {
  console.log(`
doo-iconik — CLI tool for searching and listing doo-iconik icons

Usage:
  doo-iconik search <query>      Search icons by name (case-insensitive)
  doo-iconik list                List all icon names
  doo-iconik list <category>     List icons in a category
  doo-iconik categories          List all categories
  doo-iconik info <name>         Show metadata for a specific icon
  doo-iconik --help              Show this help text

Examples:
  doo-iconik search heart
  doo-iconik list health
  doo-iconik info arrow
`);
}

function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === '--help' || command === '-h') {
    printHelp();
    return;
  }

  switch (command) {
    case 'search': {
      const query = args[1];
      if (!query) {
        console.error('Usage: doo-iconik search <query>');
        process.exit(1);
      }
      const results = search(query);
      if (results.length === 0) {
        console.log(`No icons found matching "${query}".`);
      } else {
        console.log(`Found ${results.length} icon(s) matching "${query}":\n`);
        results.forEach(name => console.log(`  ${name}`));
      }
      break;
    }

    case 'list': {
      const category = args[1];
      const icons = listIcons(category);
      if (category && icons.length === 0) {
        console.error(`Unknown category "${category}". Run "doo-iconik categories" to see available categories.`);
        process.exit(1);
      }
      console.log(`${icons.length} icon(s)${category ? ` in "${category}"` : ''}:\n`);
      icons.forEach(name => console.log(`  ${name}`));
      break;
    }

    case 'categories': {
      const cats = listCategories();
      console.log(`${cats.length} categories:\n`);
      cats.forEach(cat => console.log(`  ${cat}`));
      break;
    }

    case 'info': {
      const name = args[1];
      if (!name) {
        console.error('Usage: doo-iconik info <name>');
        process.exit(1);
      }
      const info = getInfo(name);
      if (!info) {
        console.error(`Icon "${name}" not found.`);
        process.exit(1);
      }
      console.log(`Icon: ${info.name}`);
      console.log(`  viewBox:    ${info.viewBox}`);
      console.log(`  paths:      ${info.pathCount}`);
      console.log(`  circles:    ${info.circleCount}`);
      console.log(`  lines:      ${info.lineCount}`);
      console.log(`  type:       ${info.type}`);
      break;
    }

    default:
      console.error(`Unknown command: ${command}`);
      printHelp();
      process.exit(1);
  }
}

main();
