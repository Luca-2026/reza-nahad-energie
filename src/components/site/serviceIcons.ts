import { Building2, ClipboardCheck, House, Lightbulb, Network, PanelTop, PlugZap, ShieldCheck, Sun, Thermometer, Zap } from "lucide-react";
import type { Service } from "@/lib/site";

export const serviceIcons: Record<Service["icon"], typeof Zap> = { Zap, PanelTop, Sun, PlugZap, Thermometer, House, ClipboardCheck, ShieldCheck, Lightbulb, Network, Building2 };
