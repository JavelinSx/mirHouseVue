<template>
    <div class="input">
        <label :class="{'input-label-focus': isFocus }" class="input-label" :for="inputId">{{label}}</label>
        <input 
            class="input-value"
            :id="inputId"
            :type="type"
            v-model="internalValue"
            @input="handleInput"
            @focus="isFocus = true"
            @blur="handleBlur"
            required
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({
        props:{
            label:String,
            value:String,
            type:{
                type:String,
                default: 'text'
            },
            inputId: String
        },
        data() {
            return {
                internalValue: this.value || '',
                isFocus: false,
            };
        },
        watch: {
            value(newValue) {
                this.internalValue = newValue;
            }
        },
        methods: {
            handleBlur(){
                if(this.internalValue.length===0){
                    this.isFocus=false
                }
            },
            formatPhoneNumber(value:string) {
                let numbers = value.replace(/\D/g, '');
                if (numbers.startsWith('7')) {
                    numbers = numbers.substring(1); // Удаляем начальную "7", если она уже есть
                }
                numbers = numbers.substring(0, 10); // Ограничиваем длину номера до 10 цифр после "7"

                let formatted = '+7 ';
                if (numbers.length > 0) {
                    formatted += '(' + numbers.substring(0, 3);
                }
                if (numbers.length > 3) {
                    formatted += ') ' + numbers.substring(3, 6);
                }
                if (numbers.length > 6) {
                    formatted += '-' + numbers.substring(6, 8);
                }
                if (numbers.length > 8) {
                    formatted += '-' + numbers.substring(8, 10);
                }
                return formatted;
            },
            validateCyrillic(value: string) {
                const cyrillicPattern = /^[а-яА-ЯёЁ]{0,20}$/;
                if(cyrillicPattern.test(value)){
                    return value;
                }else{
                    return value.substring(0, value.length-1)
                }
            },
            handleInput($event: Event) {
                const target = $event.target as HTMLInputElement;
                if (target) {
                    let valueToEmit = target.value;
                    if (this.inputId === 'phoneInput') {
                        valueToEmit = this.formatPhoneNumber(valueToEmit);
                    } else if( this.inputId === 'nameInput') {
                        valueToEmit = this.validateCyrillic(valueToEmit)
                    }

                    // Отложенное обновление значения
                    this.$nextTick(() => {
                        this.internalValue = valueToEmit; // Обновление internalValue
                        this.$emit('update:value', valueToEmit);
                    });
                }
            }

        }
    });
</script>

<style lang="scss" scoped>
.input{
    width: 80%;
    height: 40px;
    border: 2px solid $common;
    border-radius: .5rem;
    margin-bottom: 20px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.input-label{
    position: absolute;
    top: 8px;
    left: 11px;
    transition: top 0.3s ease;
}
.input-label-focus{
    position: absolute;
    top: -14px;
    left: 6px;
    background-color: $white;
    padding-left: 5px;
    padding-right: 5px;
    transition: top 0.3s ease;
    color: $common;
}
.input-value{
    padding-left: 15px;
    width: 100%;
}


</style>