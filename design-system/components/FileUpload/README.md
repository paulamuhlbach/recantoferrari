# FileUpload

Campo para enviar uma foto ou um arquivo: área tracejada para escolher e, depois de escolhido, miniatura com "Trocar foto" e "Remover".

**Props:** `label`, `helper`, `status` = `"default"` | `"error"`, `disabled`, `accept` (padrão `image/*`), `capture` (`"environment"` abre a câmera traseira no celular), `multiple`, `icon` (padrão `photo_camera`), `buttonLabel` (padrão "Tirar ou escolher foto"), `hint` (tipos e tamanho aceitos), `fileName`, `fileInfo`, `preview` (URL ou elemento), `previewAlt`, `changeLabel`, `removeLabel`, `onChange`, `onRemove`.

- Primeiro uso: foto do hidrômetro na Leitura do hidrômetro (`capture="environment"`, `accept="image/*"`). Também serve para anexos da ouvidoria (`icon="add"`, `buttonLabel="Anexar fotos ou arquivos"`, `multiple`).
- A área inteira é clicável e é um `label` do `input type="file"`, então funciona com teclado e leitor de tela; o foco aparece em volta da área.
- Depois de escolher, mostre a miniatura e o nome do arquivo, com `fileInfo` curto ("2,4 MB · tirada agora"). "Trocar foto" abre a escolha de novo.
- `error` com `helper` dizendo como resolver: "A foto está sem foco. Tire outra, mais perto dos números".
- Tamanho máximo e tipos aceitos ficam nas configurações do portal e aparecem no `hint`; nunca fixos no código.

