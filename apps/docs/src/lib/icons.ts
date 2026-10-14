import * as Icons from '@imaimai17468/digital-agency-icons-react';
import { createElement, type FC, type ReactElement } from 'react';

// アイコン名とメタデータの定義
export interface IconInfo {
  name: string;
  componentName: string;
  fillComponent: string;
  lineComponent: string;
  category: string;
  tags: string[];
}

// アイコンのカテゴリー
export const categories = [
  'all',
  'navigation',
  'action',
  'document',
  'communication',
  'people',
  'finance',
  'government',
  'health',
  'system',
] as const;

export type Category = (typeof categories)[number];

// 全アイコンのメタデータ
export const iconMetadata: IconInfo[] = [
  {
    name: 'add',
    componentName: 'Add',
    fillComponent: 'AddFill',
    lineComponent: 'AddLine',
    category: 'action',
    tags: ['add', 'plus', 'create', 'new', '追加', '新規'],
  },
  {
    name: 'application',
    componentName: 'Application',
    fillComponent: 'ApplicationFill',
    lineComponent: 'ApplicationLine',
    category: 'document',
    tags: ['application', 'form', 'document', '申請', '書類'],
  },
  {
    name: 'arrival',
    componentName: 'Arrival',
    fillComponent: 'ArrivalFill',
    lineComponent: 'ArrivalLine',
    category: 'navigation',
    tags: ['arrival', 'destination', 'goal', '到着', '目的地'],
  },
  {
    name: 'arrow_down',
    componentName: 'ArrowDown',
    fillComponent: 'ArrowDownFill',
    lineComponent: 'ArrowDownLine',
    category: 'navigation',
    tags: ['arrow', 'down', 'download', '矢印', '下'],
  },
  {
    name: 'arrow_left',
    componentName: 'ArrowLeft',
    fillComponent: 'ArrowLeftFill',
    lineComponent: 'ArrowLeftLine',
    category: 'navigation',
    tags: ['arrow', 'left', 'back', '矢印', '左', '戻る'],
  },
  {
    name: 'arrow_right',
    componentName: 'ArrowRight',
    fillComponent: 'ArrowRightFill',
    lineComponent: 'ArrowRightLine',
    category: 'navigation',
    tags: ['arrow', 'right', 'next', '矢印', '右', '次へ'],
  },
  {
    name: 'arrow_up',
    componentName: 'ArrowUp',
    fillComponent: 'ArrowUpFill',
    lineComponent: 'ArrowUpLine',
    category: 'navigation',
    tags: ['arrow', 'up', 'upload', '矢印', '上'],
  },
  {
    name: 'attention',
    componentName: 'Attention',
    fillComponent: 'AttentionFill',
    lineComponent: 'AttentionLine',
    category: 'system',
    tags: ['attention', 'warning', 'alert', '注意', '警告'],
  },
  {
    name: 'authentication',
    componentName: 'Authentication',
    fillComponent: 'AuthenticationFill',
    lineComponent: 'AuthenticationLine',
    category: 'system',
    tags: ['authentication', 'security', 'login', '認証', 'ログイン'],
  },
  {
    name: 'bank_account',
    componentName: 'BankAccount',
    fillComponent: 'BankAccountFill',
    lineComponent: 'BankAccountLine',
    category: 'finance',
    tags: ['bank', 'account', 'finance', '銀行', '口座'],
  },
  {
    name: 'certification',
    componentName: 'Certification',
    fillComponent: 'CertificationFill',
    lineComponent: 'CertificationLine',
    category: 'document',
    tags: ['certification', 'certificate', 'document', '証明書', '認証'],
  },
  {
    name: 'certification_with_seal',
    componentName: 'CertificationWithSeal',
    fillComponent: 'CertificationWithSealFill',
    lineComponent: 'CertificationWithSealLine',
    category: 'document',
    tags: ['certification', 'seal', 'stamp', '証明書', '印鑑'],
  },
  {
    name: 'child',
    componentName: 'Child',
    fillComponent: 'ChildFill',
    lineComponent: 'ChildLine',
    category: 'people',
    tags: ['child', 'kid', 'person', '子供', '子育て'],
  },
  {
    name: 'code_reader',
    componentName: 'CodeReader',
    fillComponent: 'CodeReaderFill',
    lineComponent: 'CodeReaderLine',
    category: 'system',
    tags: ['qr', 'code', 'barcode', 'scan', 'QRコード', 'スキャン'],
  },
  {
    name: 'complete',
    componentName: 'Complete',
    fillComponent: 'CompleteFill',
    lineComponent: 'CompleteLine',
    category: 'action',
    tags: ['complete', 'done', 'check', 'success', '完了', 'チェック'],
  },
  {
    name: 'copy',
    componentName: 'Copy',
    fillComponent: 'CopyFill',
    lineComponent: 'CopyLine',
    category: 'action',
    tags: ['copy', 'duplicate', 'clone', 'コピー', '複製'],
  },
  {
    name: 'departure',
    componentName: 'Departure',
    fillComponent: 'DepartureFill',
    lineComponent: 'DepartureLine',
    category: 'navigation',
    tags: ['departure', 'start', 'origin', '出発'],
  },
  {
    name: 'documents',
    componentName: 'Documents',
    fillComponent: 'DocumentsFill',
    lineComponent: 'DocumentsLine',
    category: 'document',
    tags: ['documents', 'files', 'papers', '書類', 'ファイル'],
  },
  {
    name: 'download',
    componentName: 'Download',
    fillComponent: 'DownloadFill',
    lineComponent: 'DownloadLine',
    category: 'action',
    tags: ['download', 'save', 'export', 'ダウンロード', '保存'],
  },
  {
    name: 'e_application',
    componentName: 'EApplication',
    fillComponent: 'EApplicationFill',
    lineComponent: 'EApplicationLine',
    category: 'document',
    tags: ['e-application', 'online', 'digital', '電子申請', 'オンライン'],
  },
  {
    name: 'expenditure',
    componentName: 'Expenditure',
    fillComponent: 'ExpenditureFill',
    lineComponent: 'ExpenditureLine',
    category: 'finance',
    tags: ['expenditure', 'expense', 'payment', '支出', '支払い'],
  },
  {
    name: 'family',
    componentName: 'Family',
    fillComponent: 'FamilyFill',
    lineComponent: 'FamilyLine',
    category: 'people',
    tags: ['family', 'people', 'group', '家族', '世帯'],
  },
  {
    name: 'fast_track',
    componentName: 'FastTrack',
    fillComponent: 'FastTrackFill',
    lineComponent: 'FastTrackLine',
    category: 'navigation',
    tags: ['fast', 'quick', 'express', '速達', '急行'],
  },
  {
    name: 'fillable_card',
    componentName: 'FillableCard',
    fillComponent: 'FillableCardFill',
    lineComponent: 'FillableCardLine',
    category: 'document',
    tags: ['card', 'form', 'input', 'カード', '記入'],
  },
  {
    name: 'health',
    componentName: 'Health',
    fillComponent: 'HealthFill',
    lineComponent: 'HealthLine',
    category: 'health',
    tags: ['health', 'medical', 'hospital', '健康', '医療'],
  },
  {
    name: 'help',
    componentName: 'Help',
    fillComponent: 'HelpFill',
    lineComponent: 'HelpLine',
    category: 'system',
    tags: ['help', 'support', 'question', 'ヘルプ', '質問'],
  },
  {
    name: 'history',
    componentName: 'History',
    fillComponent: 'HistoryFill',
    lineComponent: 'HistoryLine',
    category: 'action',
    tags: ['history', 'time', 'clock', '履歴', '時間'],
  },
  {
    name: 'house',
    componentName: 'House',
    fillComponent: 'HouseFill',
    lineComponent: 'HouseLine',
    category: 'government',
    tags: ['house', 'home', 'building', '家', '住宅'],
  },
  {
    name: 'immunization',
    componentName: 'Immunization',
    fillComponent: 'ImmunizationFill',
    lineComponent: 'ImmunizationLine',
    category: 'health',
    tags: ['immunization', 'vaccine', 'injection', '予防接種', 'ワクチン'],
  },
  {
    name: 'inbox',
    componentName: 'Inbox',
    fillComponent: 'InboxFill',
    lineComponent: 'InboxLine',
    category: 'communication',
    tags: ['inbox', 'mail', 'message', '受信箱', 'メール'],
  },
  {
    name: 'income',
    componentName: 'Income',
    fillComponent: 'IncomeFill',
    lineComponent: 'IncomeLine',
    category: 'finance',
    tags: ['income', 'revenue', 'earning', '収入', '所得'],
  },
  {
    name: 'information',
    componentName: 'Information',
    fillComponent: 'InformationFill',
    lineComponent: 'InformationLine',
    category: 'system',
    tags: ['information', 'info', 'details', '情報', '詳細'],
  },
  {
    name: 'invoice',
    componentName: 'Invoice',
    fillComponent: 'InvoiceFill',
    lineComponent: 'InvoiceLine',
    category: 'finance',
    tags: ['invoice', 'bill', 'receipt', '請求書', '領収書'],
  },
  {
    name: 'itinerary',
    componentName: 'Itinerary',
    fillComponent: 'ItineraryFill',
    lineComponent: 'ItineraryLine',
    category: 'navigation',
    tags: ['itinerary', 'route', 'schedule', '旅程', 'スケジュール'],
  },
  {
    name: 'laws',
    componentName: 'Laws',
    fillComponent: 'LawsFill',
    lineComponent: 'LawsLine',
    category: 'government',
    tags: ['laws', 'legal', 'regulation', '法律', '規則'],
  },
  {
    name: 'luggage',
    componentName: 'Luggage',
    fillComponent: 'LuggageFill',
    lineComponent: 'LuggageLine',
    category: 'navigation',
    tags: ['luggage', 'bag', 'travel', '荷物', 'バッグ'],
  },
  {
    name: 'mailing',
    componentName: 'Mailing',
    fillComponent: 'MailingFill',
    lineComponent: 'MailingLine',
    category: 'communication',
    tags: ['mailing', 'mail', 'post', '郵送', 'メール'],
  },
  {
    name: 'me',
    componentName: 'Me',
    fillComponent: 'MeFill',
    lineComponent: 'MeLine',
    category: 'people',
    tags: ['me', 'person', 'user', 'profile', '自分', 'プロフィール'],
  },
  {
    name: 'medicine',
    componentName: 'Medicine',
    fillComponent: 'MedicineFill',
    lineComponent: 'MedicineLine',
    category: 'health',
    tags: ['medicine', 'drug', 'pill', '薬', '医薬品'],
  },
  {
    name: 'menu',
    componentName: 'Menu',
    fillComponent: 'MenuFill',
    lineComponent: 'MenuLine',
    category: 'navigation',
    tags: ['menu', 'hamburger', 'navigation', 'メニュー', 'ナビゲーション'],
  },
  {
    name: 'money',
    componentName: 'Money',
    fillComponent: 'MoneyFill',
    lineComponent: 'MoneyLine',
    category: 'finance',
    tags: ['money', 'cash', 'currency', 'お金', '現金'],
  },
  {
    name: 'mother_and_child',
    componentName: 'MotherAndChild',
    fillComponent: 'MotherAndChildFill',
    lineComponent: 'MotherAndChildLine',
    category: 'people',
    tags: ['mother', 'child', 'family', '母子', '親子'],
  },
  {
    name: 'municipality',
    componentName: 'Municipality',
    fillComponent: 'MunicipalityFill',
    lineComponent: 'MunicipalityLine',
    category: 'government',
    tags: ['municipality', 'city', 'government', '自治体', '市区町村'],
  },
  {
    name: 'new_window',
    componentName: 'NewWindow',
    fillComponent: 'NewWindowFill',
    lineComponent: 'NewWindowLine',
    category: 'action',
    tags: ['new window', 'external', 'open', '新しいウィンドウ', '外部リンク'],
  },
  {
    name: 'notification',
    componentName: 'Notification',
    fillComponent: 'NotificationFill',
    lineComponent: 'NotificationLine',
    category: 'communication',
    tags: ['notification', 'alert', 'bell', '通知', 'お知らせ'],
  },
  {
    name: 'password',
    componentName: 'Password',
    fillComponent: 'PasswordFill',
    lineComponent: 'PasswordLine',
    category: 'system',
    tags: ['password', 'security', 'lock', 'パスワード', 'セキュリティ'],
  },
  {
    name: 'pension',
    componentName: 'Pension',
    fillComponent: 'PensionFill',
    lineComponent: 'PensionLine',
    category: 'finance',
    tags: ['pension', 'retirement', 'elderly', '年金', '老後'],
  },
  {
    name: 'personal_computer',
    componentName: 'PersonalComputer',
    fillComponent: 'PersonalComputerFill',
    lineComponent: 'PersonalComputerLine',
    category: 'system',
    tags: ['computer', 'pc', 'desktop', 'パソコン', 'コンピューター'],
  },
  {
    name: 'printer',
    componentName: 'Printer',
    fillComponent: 'PrinterFill',
    lineComponent: 'PrinterLine',
    category: 'action',
    tags: ['printer', 'print', 'document', 'プリンター', '印刷'],
  },
  {
    name: 'privacy_protection',
    componentName: 'PrivacyProtection',
    fillComponent: 'PrivacyProtectionFill',
    lineComponent: 'PrivacyProtectionLine',
    category: 'system',
    tags: ['privacy', 'protection', 'security', 'プライバシー', '保護'],
  },
  {
    name: 'public_offering',
    componentName: 'PublicOffering',
    fillComponent: 'PublicOfferingFill',
    lineComponent: 'PublicOfferingLine',
    category: 'government',
    tags: ['public', 'offering', 'announcement', '公募', '募集'],
  },
  {
    name: 'seal_certificate',
    componentName: 'SealCertificate',
    fillComponent: 'SealCertificateFill',
    lineComponent: 'SealCertificateLine',
    category: 'document',
    tags: ['seal', 'certificate', 'stamp', '印鑑証明', '証明書'],
  },
  {
    name: 'search',
    componentName: 'Search',
    fillComponent: 'SearchFill',
    lineComponent: 'SearchLine',
    category: 'action',
    tags: ['search', 'find', 'magnifier', '検索', '探す'],
  },
  {
    name: 'smartphone',
    componentName: 'Smartphone',
    fillComponent: 'SmartphoneFill',
    lineComponent: 'SmartphoneLine',
    category: 'system',
    tags: ['smartphone', 'mobile', 'phone', 'スマートフォン', '携帯'],
  },
  {
    name: 'specialist',
    componentName: 'Specialist',
    fillComponent: 'SpecialistFill',
    lineComponent: 'SpecialistLine',
    category: 'people',
    tags: ['specialist', 'expert', 'professional', '専門家', 'プロ'],
  },
  {
    name: 'stamp',
    componentName: 'Stamp',
    fillComponent: 'StampFill',
    lineComponent: 'StampLine',
    category: 'document',
    tags: ['stamp', 'seal', 'approval', '印鑑', 'スタンプ'],
  },
  {
    name: 'tax',
    componentName: 'Tax',
    fillComponent: 'TaxFill',
    lineComponent: 'TaxLine',
    category: 'finance',
    tags: ['tax', 'revenue', 'finance', '税金', '納税'],
  },
  {
    name: 'transactions',
    componentName: 'Transactions',
    fillComponent: 'TransactionsFill',
    lineComponent: 'TransactionsLine',
    category: 'finance',
    tags: ['transactions', 'transfer', 'payment', '取引', '送金'],
  },
  {
    name: 'update',
    componentName: 'Update',
    fillComponent: 'UpdateFill',
    lineComponent: 'UpdateLine',
    category: 'action',
    tags: ['update', 'refresh', 'reload', '更新', 'リフレッシュ'],
  },
  {
    name: 'work',
    componentName: 'Work',
    fillComponent: 'WorkFill',
    lineComponent: 'WorkLine',
    category: 'people',
    tags: ['work', 'job', 'business', '仕事', '就労'],
  },
];

// カテゴリー名の日本語表示
export const categoryLabels: Record<Category, string> = {
  all: 'すべて',
  navigation: 'ナビゲーション',
  action: 'アクション',
  document: '書類',
  communication: '通信',
  people: '人物',
  finance: '金融',
  government: '行政',
  health: '健康',
  system: 'システム',
};

// アイコン検索関数
export function searchIcons(
  query: string,
  category: Category = 'all'
): IconInfo[] {
  const lowerQuery = query.toLowerCase();

  let results = iconMetadata;

  // カテゴリーフィルター
  if (category !== 'all') {
    results = results.filter((icon) => icon.category === category);
  }

  // 検索クエリフィルター
  if (query) {
    results = results.filter(
      (icon) =>
        icon.name.toLowerCase().includes(lowerQuery) ||
        icon.componentName.toLowerCase().includes(lowerQuery) ||
        icon.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  }

  return results;
}

// Every generated icon component takes the same props, so AddFill's stand for all of them.
const iconComponents: Readonly<Record<string, FC<Icons.AddFillProps>>> = Icons;

export const getIconComponent = (name: string) =>
  Object.hasOwn(iconComponents, name) ? iconComponents[name] : undefined;

export const renderIcon = (
  name: string,
  props: Icons.AddFillProps
): ReactElement | null => {
  const component = getIconComponent(name);
  return component ? createElement(component, props) : null;
};
