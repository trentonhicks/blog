<template>
    <div class="mt-10 max-w-2xl">
        <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
</template>