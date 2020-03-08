from django.contrib import admin
from .models import *
# Register your models here.

class SubscriberAdmin (admin.ModelAdmin):
    list_display = [field.name for field in Subscriber._meta.fields]
    # exclude = ['email']
    # fields = ['email']
    search_fields = ['name', 'email']
    list_filter = ('name',)

    class Meta:
        model = Subscriber


admin.site.register(Subscriber, SubscriberAdmin)
