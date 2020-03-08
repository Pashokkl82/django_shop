from django import forms
from .models import *

# class SubscriberForm(forms.ModelForm):
class CheckoutContactForm(forms.Form):
    name = forms.CharField(required=True)
    phone = forms.CharField(required=True)
    # class Meta:
    #     model = Subscriber
    #     exclude = [""]