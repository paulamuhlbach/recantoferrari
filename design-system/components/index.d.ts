// Recanto Ferrari — window.RecantoFerrari (React 18). Documentation only.
import * as React from 'react';

export type IconName = 'home' | 'notifications' | 'event' | 'description' | 'person' | 'check' | 'close' | 'menu' | 'add'
  | 'info' | 'warning' | 'error' | 'check_circle' | 'arrow_forward' | 'chevron_right' | 'search' | 'download' | 'local_parking' | 'payments' | 'chevron_left' | 'arrow_upward' | 'arrow_downward' | 'remove'
  | 'settings' | 'logout' | 'edit' | 'block' | 'lock' | 'visibility' | 'visibility_off' | 'mail' | 'open_in_new' | 'expand_more' | 'cloud' | 'link' | 'person_add' | 'person_remove' | 'swap_horiz' | 'group'
  | 'grass' | 'pest_control' | 'plumbing' | 'cleaning_services' | 'water_drop' | 'photo_camera' | 'calculate' | 'pets';

export interface LogoProps { variant?: 'horizontal' | 'vertical' | 'simbolo'; size?: 'sm' | 'md' | 'lg'; tagline?: boolean;
  /** "deep": versão para fundo azul profundo (surface-deep, blue-1, Hero, rodapé). Nome em on-surface-deep e tagline em primary-container. */ tone?: 'default' | 'deep'; className?: string; }
export declare function Logo(props: LogoProps): React.ReactElement;

export interface IconProps { name: IconName; size?: number; label?: string; className?: string; }
export declare function Icon(props: IconProps): React.ReactElement;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'tonal' | 'outlined' | 'text' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg'; icon?: IconName; trailingIcon?: IconName; fullWidth?: boolean; href?: string; children: React.ReactNode;
}
export declare function Button(props: ButtonProps): React.ReactElement;

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName; label: string; variant?: 'standard' | 'filled' | 'tonal' | 'outlined' | 'danger'; selected?: boolean;
}
export declare function IconButton(props: IconButtonProps): React.ReactElement;

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'assist' | 'filter'; selected?: boolean; icon?: IconName; children: React.ReactNode; }
export declare function Chip(props: ChipProps): React.ReactElement;

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string; helper?: string; status?: 'default' | 'success' | 'error' | 'highlight'; leadingIcon?: IconName; multiline?: boolean; rows?: number;
  /** Unidade depois do valor, ex.: "m³" na leitura do hidrômetro. */ suffix?: string;
}
export declare function TextField(props: TextFieldProps): React.ReactElement;

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> { label: React.ReactNode; supporting?: React.ReactNode; }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> { label: React.ReactNode; }
export declare function Switch(props: SwitchProps): React.ReactElement;

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'elevated' | 'filled' | 'outlined'; eyebrow?: React.ReactNode; badge?: React.ReactNode; title?: React.ReactNode;
  meta?: React.ReactNode; media?: React.ReactNode; actions?: React.ReactNode; href?: string; as?: string;
  /** Ícone em círculo ao lado do título (ex.: ícone do serviço). */ icon?: IconName; /** secondary (azul, padrão) ou primary (terracota). */ iconTone?: 'secondary' | 'primary';
}
export declare function Card(props: CardProps): React.ReactElement;

export interface ListItemProps { icon?: IconName; /** Item aberto ao lado, numa lista mestre-detalhe (fundo azul claro, aria-current). */ selected?: boolean; /** Cor do círculo do ícone: primary (terracota, padrão) ou secondary (azul, listas informativas). */ tone?: 'primary' | 'secondary'; overline?: React.ReactNode; headline: React.ReactNode; supporting?: React.ReactNode; trailing?: React.ReactNode; href?: string; onClick?: () => void;
  /** Link para outro site ou app: abre em nova aba e troca a seta pelo ícone open_in_new. */ external?: boolean; }
export declare function ListItem(props: ListItemProps): React.ReactElement;

export interface BadgeProps { tone?: 'neutral' | 'primary' | 'info' | 'success' | 'warning' | 'error' | 'tertiary'; icon?: IconName | false; children: React.ReactNode; }
export declare function Badge(props: BadgeProps): React.ReactElement;

export interface AlertProps { tone?: 'info' | 'success' | 'warning' | 'error'; title?: React.ReactNode; children?: React.ReactNode; action?: React.ReactNode; onClose?: () => void; }
export declare function Alert(props: AlertProps): React.ReactElement;

export interface DialogProps { open?: boolean; title: React.ReactNode; icon?: IconName; children?: React.ReactNode; actions?: React.ReactNode; onClose?: () => void; inline?: boolean; id?: string; }
export declare function Dialog(props: DialogProps): React.ReactElement | null;

export interface NavItem { value: string; label: string; href?: string; /** Outro site ou app (ex.: Condfy): nova aba + ícone open_in_new. */ external?: boolean; }
export interface TopAppBarProps { items?: NavItem[]; value?: string; onChange?: (value: string) => void; actions?: React.ReactNode; onMenu?: () => void; homeHref?: string; }
export declare function TopAppBar(props: TopAppBarProps): React.ReactElement;

export interface TabItem { value: string; label: string; icon?: IconName; count?: number; }
export interface TabsProps { items: TabItem[]; value: string; onChange?: (value: string) => void; label?: string; }
export declare function Tabs(props: TabsProps): React.ReactElement;

export interface CalendarLegendItem { kind: 'selected' | 'today' | 'booked' | 'primary' | 'tertiary' | 'warning' | 'error' | 'info'; label: string; }
export interface CalendarProps {
  value?: string; defaultValue?: string; onChange?: (isoDate: string) => void; month?: string; today?: string; min?: string; max?: string;
  unavailable?: string[]; marked?: Record<string, 'primary' | 'tertiary' | 'warning' | 'error' | 'info' | { tone: string; label?: string }>;
  legend?: CalendarLegendItem[]; id?: string; className?: string;
}
export declare function Calendar(props: CalendarProps): React.ReactElement;

export interface DataTableColumn<Row = any> {
  key: string; label: React.ReactNode; sortable?: boolean; numeric?: boolean; align?: 'left' | 'center'; primary?: boolean; width?: string | number;
  render?: (row: Row) => React.ReactNode; sortValue?: (row: Row) => string | number;
}
export interface DataTableProps<Row = any> {
  columns: DataTableColumn<Row>[]; rows: Row[]; rowKey?: string; title?: React.ReactNode; subtitle?: React.ReactNode; actions?: React.ReactNode;
  selectable?: boolean; selected?: Array<string | number>; defaultSelected?: Array<string | number>; onSelectionChange?: (ids: Array<string | number>) => void;
  bulkActions?: React.ReactNode; rowLabel?: (row: Row) => string; defaultSort?: { key: string; dir: 'asc' | 'desc' }; pageSize?: number;
  dense?: boolean; onRowClick?: (row: Row) => void; caption?: string; empty?: React.ReactNode; className?: string;
}
export declare function DataTable<Row = any>(props: DataTableProps<Row>): React.ReactElement;

export interface MenuItem { value?: string; label?: React.ReactNode; supporting?: React.ReactNode; icon?: IconName; href?: string; onClick?: (e: React.MouseEvent) => void;
  external?: boolean; danger?: boolean; divider?: boolean; }
export interface MenuProps { open?: boolean; onClose?: () => void; items: MenuItem[]; title?: React.ReactNode; subtitle?: React.ReactNode;
  align?: 'end' | 'start'; label?: string; id?: string; children?: React.ReactNode; className?: string; }
/** Menu suspenso. Coloque junto do botão que o abre, dentro de um contêiner com position: relative (o `actions` do TopAppBar já é). */
export declare function Menu(props: MenuProps): React.ReactElement | null;

export interface DrawerItem { value: string; label: string; href?: string; icon?: IconName; supporting?: string; external?: boolean; divider?: boolean; }
export interface NavigationDrawerProps { open?: boolean; onClose?: () => void; items: DrawerItem[]; value?: string; onChange?: (value: string) => void;
  user?: { name: React.ReactNode; detail?: React.ReactNode }; footer?: React.ReactNode; label?: string; inline?: boolean; className?: string; }
/** Gaveta de navegação do celular, aberta pelo botão de menu do TopAppBar. */
export declare function NavigationDrawer(props: NavigationDrawerProps): React.ReactElement | null;

export interface FooterLink { label: string; href?: string; external?: boolean; }
export interface FooterProps { /** deep (azul, padrão) ou surface (areia). */ tone?: 'deep' | 'surface'; text?: React.ReactNode; links?: FooterLink[]; logo?: boolean; children?: React.ReactNode; className?: string; }
export declare function Footer(props: FooterProps): React.ReactElement;

export interface HeroProps { title?: React.ReactNode; eyebrow?: React.ReactNode; children?: React.ReactNode; actions?: React.ReactNode;
  image?: string; imageAlt?: string; imagePosition?: string; as?: 'h1' | 'h2'; label?: string; className?: string; }
/** Faixa de boas-vindas com foto do condomínio e véu azul-escuro. Uma por página, logo abaixo do cabeçalho. */
export declare function Hero(props: HeroProps): React.ReactElement;

export interface RadioOption { value: string; label: React.ReactNode; supporting?: React.ReactNode; disabled?: boolean; }
export interface RadioGroupProps { label?: React.ReactNode; helper?: React.ReactNode; options: RadioOption[]; value?: string; defaultValue?: string;
  onChange?: (value: string) => void; name?: string; variant?: 'list' | 'cards'; orientation?: 'vertical' | 'horizontal'; disabled?: boolean; className?: string; }
/** Escolha única entre 2 a 6 opções, sempre visíveis (ex.: tipo de demanda, perfil do morador). */
export declare function RadioGroup(props: RadioGroupProps): React.ReactElement;

export interface FileUploadProps {
  label?: string; helper?: string; status?: 'default' | 'error'; disabled?: boolean; id?: string; name?: string; required?: boolean;
  /** Tipos aceitos (padrão image/*). */ accept?: string; /** "environment" abre a câmera traseira no celular. */ capture?: 'environment' | 'user'; multiple?: boolean;
  icon?: IconName; buttonLabel?: string; hint?: string; changeLabel?: string; removeLabel?: string;
  /** Arquivo escolhido: nome, detalhe (tamanho, data) e miniatura (URL ou elemento). */ fileName?: string; fileInfo?: string; preview?: string | React.ReactNode; previewAlt?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; onRemove?: () => void; className?: string;
}
/** Campo de foto ou arquivo: área tracejada para escolher; depois, miniatura com "Trocar foto" e "Remover". */
export declare function FileUpload(props: FileUploadProps): React.ReactElement;
