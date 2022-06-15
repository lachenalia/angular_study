# Component
 - Angular에서의 컨텐츠 단위
 - 템플릿(HTML, CSS) + 로직(TS, Method, ...) + Metadata(Decorator, ...)

## Component Decorator

### Component Decorator - selector
 - HTML 에서 해당 Component를 불러오기 위한 이름 설정
 1. 'component-name' -> \<component-name>\</component-name> : HTML Tag를 이용하여 호출
 2. '.component-name' -> \<div class="component-name">\</div> : ClassName을 이용하여 호출
 3. '[component-name] -> \<div component-name>\</div> : attribute를 이용하여 호출

### Component Decorator - template
 - templateUrl : HTML 파일의 경로를 지정
 - template : HTML 코드를 직접 작성