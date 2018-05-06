$(document).ready(function(){
  // apply inview event handler to images for lazy load
  $("span[data-def],span[data-pinyin]").each(function(){
    $this = $(this);
    $this.addClass('defined');
    $this.append('<span class="def"></span>');
    if (typeof $this.attr('data-def') !== typeof undefined && $this.attr('data-def') !== false) {
      $this.find('.def').append('<span>'+$this.attr('data-def')+'</span>');
    }
    if (typeof $this.attr('data-pinyin') !== typeof undefined && $this.attr('data-pinyin') !== false) {
      $this.find('.def').append('<span class="pinyin">'+$this.attr('data-pinyin')+'</span>');
    }
  });
});